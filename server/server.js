const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const net = require("net");

const HOST = "0.0.0.0";
const PORT = 4000;
const DEFAULT_BRIDGE_URL = "http://localhost:5001";
const CONFIG_PATH = path.join(__dirname, "config.json");
const DEVICE_DATA_PATH = path.join(__dirname, "device-data.json");
const ATTENDANCE_DATA_PATH = path.join(__dirname, "attendance-data.json");
const ATTENDANCE_TABLE_PATH = path.join(__dirname, "attendance-table.json");
const ATTENDANCE_SHEET_MANUAL_PATH = path.join(__dirname, "attendance-sheet-manual.json");

const defaultConfig = {
  deviceIp: "192.168.1.111",
  devicePort: "4370",
  deviceModel: "Face ID 4",
  deviceNo: "1",
  deviceCommKey: "0",
  deviceId: "FT-FACEID-4-001",
  syncInterval: "15",
  deviceUser: "admin",
  devicePassword: "123",
  connectionStatus: "Offline",
  enrollmentMode: "Face ID",
  lastSyncAt: null,
};

const readConfig = () => {
  try {
    const raw = fs.readFileSync(CONFIG_PATH, "utf-8");
    return { ...defaultConfig, ...JSON.parse(raw) };
  } catch (error) {
    return { ...defaultConfig };
  }
};

const writeConfig = (config) => {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
};

const readDeviceData = () => {
  try {
    const raw = fs.readFileSync(DEVICE_DATA_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (error) {
    return [];
  }
};

/** Normalize IDs so "01053" and "1053" map to the same employee for merge/upsert. */
const normalizeEmployeeIdKey = (raw) => {
  const id = String(raw ?? "").trim();
  if (!id) return "";
  const stripped = id.replace(/^0+(?=\d)/, "") || id;
  return stripped;
};

/** Prefer existing HR data (manual edits, scripts, imports); device only fills gaps. */
const preferLocalString = (incoming, existing) => {
  const ex = existing != null ? String(existing).trim() : "";
  if (ex !== "") return ex;
  if (incoming == null) return "";
  return String(incoming).trim();
};

/**
 * Upsert incoming sync rows into existing device-data. Previously we only stored
 * `mergedIncoming`, which dropped any employee not returned by the bridge (e.g. caps
 * at ~1052), breaking payroll for higher employee numbers.
 */
const mergeEmployeeLists = (existingList, incomingMerged) => {
  const byKey = new Map();
  (existingList || []).forEach((emp) => {
    const k = normalizeEmployeeIdKey(emp.employeeId);
    if (!k) return;
    byKey.set(k, { ...emp });
  });
  (incomingMerged || []).forEach((emp) => {
    const k = normalizeEmployeeIdKey(emp.employeeId);
    if (!k) return;
    const prev = byKey.get(k) || {};
    byKey.set(k, { ...prev, ...emp });
  });
  const merged = [...byKey.values()];
  merged.sort((a, b) => {
    const sa = String(a.employeeId ?? "").trim();
    const sb = String(b.employeeId ?? "").trim();
    const na = Number(normalizeEmployeeIdKey(sa));
    const nb = Number(normalizeEmployeeIdKey(sb));
    if (Number.isFinite(na) && Number.isFinite(nb) && na !== nb) return na - nb;
    return sa.localeCompare(sb, undefined, { numeric: true });
  });
  return merged;
};

const readAttendanceData = () => {
  try {
    const raw = fs.readFileSync(ATTENDANCE_DATA_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (error) {
    return [];
  }
};

const toLocalIsoDate = (d) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

/** Same Jan 5 anchor as the payroll UI (26 fortnights per year). */
const getFortnightAnchorStartDate = () => {
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  let y = today.getFullYear();
  let start = new Date(y, 0, 5);
  if (today < start) y -= 1;
  start = new Date(y, 0, 5);
  const endOfSchedule = new Date(start);
  endOfSchedule.setDate(start.getDate() + 26 * 14 - 1);
  if (today > endOfSchedule) {
    y += 1;
    start = new Date(y, 0, 5);
  }
  return start;
};

/** Start date (YYYY-MM-DD) of the fortnight that contains today. */
const getCurrentFortnightStartIso = () => {
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  const anchor = getFortnightAnchorStartDate();
  for (let i = 0; i < 26; i += 1) {
    const periodStart = new Date(anchor);
    periodStart.setDate(anchor.getDate() + i * 14);
    periodStart.setHours(12, 0, 0, 0);
    const periodEnd = new Date(periodStart);
    periodEnd.setDate(periodStart.getDate() + 13);
    periodEnd.setHours(12, 0, 0, 0);
    if (today >= periodStart && today <= periodEnd) {
      return toLocalIsoDate(periodStart);
    }
  }
  return toLocalIsoDate(anchor);
};

const normalizeLogDateString = (raw) => {
  const s = String(raw ?? "").trim();
  const iso = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;
  const dmy = /^(\d{2})-(\d{2})-(\d{4})$/.exec(s);
  if (dmy) return `${dmy[3]}-${dmy[2]}-${dmy[1]}`;
  return "";
};

/**
 * Keep device logs for dates before the current fortnight; merge incoming
 * from the current fortnight start onward so sync does not wipe history.
 */
const mergeAttendanceLogsForSync = (existing, incoming, cutoffIso) => {
  const incomingList = Array.isArray(incoming) ? incoming : [];
  const existingList = Array.isArray(existing) ? existing : [];
  const preserved = existingList.filter((log) => {
    const d = normalizeLogDateString(log?.date);
    if (!d) return true;
    return d < cutoffIso;
  });
  const fromIncoming = incomingList.filter((log) => {
    const d = normalizeLogDateString(log?.date);
    if (!d) return false;
    return d >= cutoffIso;
  });
  return [...preserved, ...fromIncoming];
};

const mergeAttendanceTableRowsForSync = (existing, incoming, cutoffIso) => {
  const incomingList = Array.isArray(incoming) ? incoming : [];
  const existingList = Array.isArray(existing) ? existing : [];
  const preserved = existingList.filter((row) => {
    const d = normalizeLogDateString(row?.date);
    if (!d) return true;
    return d < cutoffIso;
  });
  const fromIncoming = incomingList.filter((row) => {
    const d = normalizeLogDateString(row?.date);
    if (!d) return false;
    return d >= cutoffIso;
  });
  return [...preserved, ...fromIncoming];
};

const readAttendanceTableData = () => {
  try {
    const raw = fs.readFileSync(ATTENDANCE_TABLE_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (error) {
    return [];
  }
};

const readAttendanceSheetManual = () => {
  try {
    const raw = fs.readFileSync(ATTENDANCE_SHEET_MANUAL_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (error) {
    return {};
  }
};

const writeAttendanceSheetManual = (data) => {
  fs.writeFileSync(ATTENDANCE_SHEET_MANUAL_PATH, JSON.stringify(data || {}, null, 2));
};

const sendJson = (res, statusCode, payload) => {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  });
  res.end(JSON.stringify(payload));
};

const toDateKey = (value) => {
  if (!value || typeof value !== "string") return null;
  const isoMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    return Number(`${year}${month}${day}`);
  }
  const dmyMatch = /^(\d{2})-(\d{2})-(\d{4})$/.exec(value);
  if (dmyMatch) {
    const [, day, month, year] = dmyMatch;
    return Number(`${year}${month}${day}`);
  }
  return null;
};

const resolveBridgeUrl = (config) => {
  return (
    config.bridgeUrl ||
    process.env.BIOBRIDGE_BRIDGE_URL ||
    DEFAULT_BRIDGE_URL
  );
};

const callBridge = async (bridgeUrl, endpoint, payload) => {
  const response = await fetch(`${bridgeUrl}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload || {}),
  });
  const data = await response.json().catch(() => ({}));
  return { ok: response.ok, data };
};

const storeEmployeesData = async (employees) => {
  fs.writeFileSync(DEVICE_DATA_PATH, JSON.stringify(employees || [], null, 2));
  return employees ? employees.length : 0;
};

const storeAttendanceData = async (logs) => {
  const cutoff = getCurrentFortnightStartIso();
  const merged = mergeAttendanceLogsForSync(readAttendanceData(), logs, cutoff);
  fs.writeFileSync(ATTENDANCE_DATA_PATH, JSON.stringify(merged, null, 2));
  return merged.length;
};

const storeAttendanceTableData = async (rows) => {
  const cutoff = getCurrentFortnightStartIso();
  const merged = mergeAttendanceTableRowsForSync(readAttendanceTableData(), rows, cutoff);
  fs.writeFileSync(ATTENDANCE_TABLE_PATH, JSON.stringify(merged, null, 2));
  return merged.length;
};

const collectJson = (req) =>
  new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
      if (body.length > 1_000_000) {
        reject(new Error("Payload too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
  });

const testTcpConnection = (ip, port, timeoutMs = 2500) =>
  new Promise((resolve) => {
    const socket = new net.Socket();
    let resolved = false;
    const start = Date.now();

    const finalize = (status, message) => {
      if (resolved) return;
      resolved = true;
      socket.destroy();
      resolve({ status, message, latencyMs: Date.now() - start });
    };

    socket.setTimeout(timeoutMs);
    socket.once("connect", () => finalize("online", "Connection successful."));
    socket.once("timeout", () => finalize("offline", "Connection timed out."));
    socket.once("error", (err) =>
      finalize("offline", `Connection failed: ${err.message}`)
    );
    socket.connect(Number(port), ip);
  });

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".svg": "image/svg+xml",
  ".json": "application/json",
};

const serveStatic = (req, res, parsed) => {
  if (req.method !== "GET") return false;
  if (parsed.pathname.startsWith("/api/")) return false;
  const baseDir = path.join(__dirname, "..");
  const safePath = parsed.pathname === "/" ? "/index.html" : parsed.pathname;
  const filePath = path.join(baseDir, decodeURIComponent(safePath));
  if (!filePath.startsWith(baseDir)) {
    sendJson(res, 403, { status: "error", message: "Forbidden." });
    return true;
  }
  if (!fs.existsSync(filePath)) {
    sendJson(res, 404, { status: "error", message: "Not found." });
    return true;
  }
  const ext = path.extname(filePath);
  const type = mimeTypes[ext] || "application/octet-stream";
  res.writeHead(200, { "Content-Type": type });
  fs.createReadStream(filePath).pipe(res);
  return true;
};

const server = http.createServer(async (req, res) => {
  const parsed = url.parse(req.url, true);
  if (serveStatic(req, res, parsed)) {
    return;
  }

  if (req.method === "OPTIONS") {
    sendJson(res, 204, {});
    return;
  }

  if (parsed.pathname === "/api/attendance-sheet-manual" && req.method === "GET") {
    const data = readAttendanceSheetManual();
    sendJson(res, 200, { status: "success", data });
    return;
  }

  if (parsed.pathname === "/api/attendance-sheet-manual" && req.method === "POST") {
    try {
      const body = await collectJson(req);
      const { fortnightValue, data } = body || {};
      if (fortnightValue && data && typeof data === "object") {
        const existing = readAttendanceSheetManual();
        existing[fortnightValue] = data;
        writeAttendanceSheetManual(existing);
        sendJson(res, 200, { status: "success", message: "Manual data saved." });
      } else {
        sendJson(res, 400, { status: "error", message: "Invalid payload." });
      }
    } catch (error) {
      sendJson(res, 500, { status: "error", message: String(error?.message || error) });
    }
    return;
  }

  if (parsed.pathname === "/api/health" && req.method === "GET") {
    sendJson(res, 200, { status: "ok" });
    return;
  }

  if (parsed.pathname === "/api/biometric/config" && req.method === "GET") {
    sendJson(res, 200, readConfig());
    return;
  }

  if (parsed.pathname === "/api/biometric/employees" && req.method === "GET") {
    sendJson(res, 200, { status: "success", employees: readDeviceData() });
    return;
  }

  if (parsed.pathname === "/api/biometric/config" && req.method === "POST") {
    try {
      const payload = await collectJson(req);
      const nextConfig = { ...defaultConfig, ...payload };
      writeConfig(nextConfig);
      sendJson(res, 200, { status: "saved", config: nextConfig });
    } catch (error) {
      sendJson(res, 400, { status: "error", message: error.message });
    }
    return;
  }

  if (parsed.pathname === "/api/biometric/test" && req.method === "POST") {
    try {
      const payload = await collectJson(req);
      const ip = payload.deviceIp;
      const port = payload.devicePort;
      if (!ip || !port) {
        sendJson(res, 400, {
          status: "error",
          message: "deviceIp and devicePort are required.",
        });
        return;
      }
      const result = await testTcpConnection(ip, port);
      sendJson(res, 200, result);
    } catch (error) {
      sendJson(res, 400, { status: "error", message: error.message });
    }
    return;
  }

  if (parsed.pathname === "/api/biometric/sync" && req.method === "POST") {
    const config = readConfig();
    try {
      const bridgeUrl = resolveBridgeUrl(config);
      const bridgePayload = {
        deviceIp: config.deviceIp,
        devicePort: config.devicePort,
        deviceModel: config.deviceModel,
        deviceNo: config.deviceNo,
        deviceCommKey: config.deviceCommKey,
        mdbPath: config.mdbPath,
        mdbPassword: config.mdbPassword,
      };
      const bridge = await callBridge(bridgeUrl, "/sync/users", bridgePayload);
      if (bridge.ok && bridge.data && bridge.data.status === "success") {
        const incomingEmployees = bridge.data.employees || [];
        const existingEmployees = readDeviceData();
        const existingById = new Map();
        (existingEmployees || []).forEach((employee) => {
          const id = String(employee.employeeId || "").trim();
          if (id) existingById.set(id, employee);
          const numId = id.replace(/^0+/, "") || id;
          if (numId && !existingById.has(numId)) existingById.set(numId, employee);
        });
        const findExisting = (emp) => {
          const id = String(emp.employeeId || "").trim();
          return existingById.get(id) || existingById.get(id.replace(/^0+/, "") || id) || {};
        };
        const mergedIncoming = incomingEmployees.map((employee) => {
          const existing = findExisting(employee);
          return {
            ...existing,
            ...employee,
            employeeId: employee.employeeId ?? existing.employeeId,
            names: preferLocalString(employee.names, existing.names),
            costCenter: preferLocalString(employee.costCenter, existing.costCenter),
            department: preferLocalString(
              employee.department,
              existing.department || existing.costCenter
            ),
            basicWage: preferLocalString(employee.basicWage, existing.basicWage),
            hAllow: preferLocalString(employee.hAllow, existing.hAllow),
            npf: preferLocalString(employee.npf, existing.npf),
            bsp: preferLocalString(employee.bsp, existing.bsp),
            startDate: preferLocalString(employee.startDate, existing.startDate),
            shift: preferLocalString(employee.shift, existing.shift),
            status: preferLocalString(employee.status, existing.status) || "Active",
            arrears: preferLocalString(employee.arrears, existing.arrears),
            compass: preferLocalString(employee.compass, existing.compass),
            voluntaryNpf: preferLocalString(employee.voluntaryNpf, existing.voluntaryNpf),
            rentAllowance: preferLocalString(employee.rentAllowance, existing.rentAllowance),
            otherDeductions: preferLocalString(
              employee.otherDeductions,
              existing.otherDeductions
            ),
          };
        });
        const updatedConfig = {
          ...config,
          lastSyncAt:
            bridge.data.lastSyncAt || new Date().toISOString(),
        };
        writeConfig(updatedConfig);
        let employeesToUse = existingEmployees;
        let storedCount = 0;
        if (mergedIncoming.length > 0) {
          employeesToUse = mergeEmployeeLists(existingEmployees, mergedIncoming);
          storedCount = await storeEmployeesData(employeesToUse);
        }
        sendJson(res, 200, {
          status: "success",
          message:
            mergedIncoming.length > 0
              ? `Employees synced from BioBridge (${mergedIncoming.length} incoming; ${employeesToUse.length} total stored).`
              : "No employees from DB. Using existing local data. Check mdbPath and table in ingress.mdb.",
          employees: employeesToUse,
          lastSyncAt: updatedConfig.lastSyncAt,
          storedEmployees: storedCount,
        });
        return;
      }
      const existingEmployees = readDeviceData();
      if (existingEmployees && existingEmployees.length > 0) {
        sendJson(res, 200, {
          status: "success",
          message:
            `Sync failed: ${bridge.data?.message || "No employee data"}. Using existing local data (${existingEmployees.length} employees).`,
          employees: existingEmployees,
          storedEmployees: existingEmployees.length,
        });
      } else {
        sendJson(res, 200, {
          status: "error",
          message:
            bridge.data?.message ||
            "BioBridge SDK service did not return employee data.",
          employees: [],
        });
      }
      return;
    } catch (error) {
      sendJson(res, 200, {
        status: "error",
        message:
          "BioBridge SDK service not reachable. Start the Windows bridge.",
        employees: [],
      });
      return;
    }
  }

  if (parsed.pathname === "/api/biometric/attendance" && req.method === "GET") {
    const page = Number(parsed.query.page || 1);
    const pageSize = Number(parsed.query.pageSize || 50);
    const employeeId = parsed.query.employeeId || "";
    const fromDate = parsed.query.from || "";
    const toDate = parsed.query.to || "";
    const fromKey = toDateKey(fromDate);
    const toKey = toDateKey(toDate);
    const logs = readAttendanceData();
    const filtered = logs.filter((log) => {
      if (employeeId && log.employeeId !== employeeId) return false;
      const logKey = toDateKey(log.date);
      if (fromKey && logKey && logKey < fromKey) return false;
      if (toKey && logKey && logKey > toKey) return false;
      return true;
    });
    const sorted = [...filtered].sort((a, b) => {
      const aDateKey = toDateKey(a.date) || 0;
      const bDateKey = toDateKey(b.date) || 0;
      if (aDateKey !== bDateKey) return bDateKey - aDateKey;
      return `${b.time}`.localeCompare(`${a.time}`);
    });
    const totalCount = sorted.length;
    const start = (page - 1) * pageSize;
    const pageLogs = sorted.slice(start, start + pageSize);
    sendJson(res, 200, {
      status: "success",
      page,
      pageSize,
      totalCount,
      logs: pageLogs,
    });
    return;
  }

  if (parsed.pathname === "/api/biometric/attendance/table" && req.method === "GET") {
    const page = Number(parsed.query.page || 1);
    const pageSize = Number(parsed.query.pageSize || 50);
    const employeeId = parsed.query.employeeId || "";
    const fromDate = parsed.query.from || "";
    const toDate = parsed.query.to || "";
    const fromKey = toDateKey(fromDate);
    const toKey = toDateKey(toDate);
    let rows = readAttendanceTableData();

    if (!rows || rows.length === 0) {
      const logs = readAttendanceData();
      const employees = readDeviceData();
      const nameById = new Map();
      (employees || []).forEach((e) => {
        if (e.employeeId) nameById.set(String(e.employeeId), e.names || "");
      });

      const summaryMap = new Map();
      (logs || []).forEach((log) => {
        const key = `${log.employeeId}__${log.date}`;
        if (!summaryMap.has(key)) {
          summaryMap.set(key, {
            employeeId: log.employeeId,
            date: log.date,
            timeIn: log.time,
            timeOut: log.time,
          });
        } else {
          const entry = summaryMap.get(key);
          if (log.time < entry.timeIn) entry.timeIn = log.time;
          if (log.time > entry.timeOut) entry.timeOut = log.time;
        }
      });

      const toHours = (timeStr) => {
        if (!timeStr) return 0;
        const parts = String(timeStr).split(/[:\s]/).map(Number);
        return (parts[0] || 0) * 3600 + (parts[1] || 0) * 60 + (parts[2] || 0);
      };
      rows = Array.from(summaryMap.values()).map((entry) => {
        const inSec = toHours(entry.timeIn);
        const outSec = toHours(entry.timeOut);
        const totalSec = Math.max(0, outSec - inSec);
        const totalHours = totalSec / 3600;
        const otHours = Math.max(0, totalHours - 8.5);
        const shortHours = Math.max(0, 8.5 - totalHours);
        return {
          date: entry.date,
          userId: entry.employeeId,
          name: nameById.get(entry.employeeId) || "",
          inOut: `${entry.timeIn || ""} - ${entry.timeOut || ""}`.trim(),
          work: totalHours.toFixed(2),
          overtime: otHours.toFixed(2),
          short: shortHours.toFixed(2),
        };
      });
    }

    const filtered = rows.filter((row) => {
      if (employeeId && String(row.userId || row.employeeId || "") !== employeeId) return false;
      const logKey = toDateKey(row.date);
      if (fromKey && logKey && logKey < fromKey) return false;
      if (toKey && logKey && logKey > toKey) return false;
      return true;
    });
    const sorted = [...filtered].sort((a, b) => {
      const aDateKey = toDateKey(a.date) || 0;
      const bDateKey = toDateKey(b.date) || 0;
      if (aDateKey !== bDateKey) return bDateKey - aDateKey;
      return `${b.userId || ""}`.localeCompare(`${a.userId || ""}`);
    });
    const totalCount = sorted.length;
    const start = (page - 1) * pageSize;
    const pageRows = sorted.slice(start, start + pageSize);
    sendJson(res, 200, {
      status: "success",
      page,
      pageSize,
      totalCount,
      rows: pageRows,
    });
    return;
  }

  if (
    parsed.pathname === "/api/biometric/attendance/summary" &&
    req.method === "GET"
  ) {
    const employeeId = parsed.query.employeeId || "";
    const fromDate = parsed.query.from || "";
    const toDate = parsed.query.to || "";
    const fromKey = toDateKey(fromDate);
    const toKey = toDateKey(toDate);
    const logs = readAttendanceData();
    const filtered = logs.filter((log) => {
      if (employeeId && log.employeeId !== employeeId) return false;
      const logKey = toDateKey(log.date);
      if (fromKey && logKey && logKey < fromKey) return false;
      if (toKey && logKey && logKey > toKey) return false;
      return true;
    });

    const summaryMap = new Map();
    filtered.forEach((log) => {
      const key = `${log.employeeId}__${log.date}`;
      if (!summaryMap.has(key)) {
        summaryMap.set(key, {
          employeeId: log.employeeId,
          date: log.date,
          timeIn: log.time,
          timeOut: log.time,
        });
      } else {
        const entry = summaryMap.get(key);
        if (log.time < entry.timeIn) entry.timeIn = log.time;
        if (log.time > entry.timeOut) entry.timeOut = log.time;
      }
    });

    const summaries = Array.from(summaryMap.values()).sort((a, b) => {
      const aDateKey = toDateKey(a.date) || 0;
      const bDateKey = toDateKey(b.date) || 0;
      if (aDateKey !== bDateKey) return bDateKey - aDateKey;
      return a.employeeId.localeCompare(b.employeeId);
    });

    sendJson(res, 200, {
      status: "success",
      summaries,
    });
    return;
  }

  if (parsed.pathname === "/api/biometric/roster" && req.method === "GET") {
    const employeeId = parsed.query.employeeId || "";
    const fromDate = parsed.query.from || "";
    const toDate = parsed.query.to || "";
    const fromKey = toDateKey(fromDate);
    const toKey = toDateKey(toDate);
    const logs = readAttendanceData();
    const filtered = logs.filter((log) => {
      if (employeeId && log.employeeId !== employeeId) return false;
      const logKey = toDateKey(log.date);
      if (fromKey && logKey && logKey < fromKey) return false;
      if (toKey && logKey && logKey > toKey) return false;
      return true;
    });

    const summaryMap = new Map();
    filtered.forEach((log) => {
      const key = `${log.employeeId}__${log.date}`;
      if (!summaryMap.has(key)) {
        summaryMap.set(key, {
          employeeId: log.employeeId,
          date: log.date,
          timeIn: log.time,
          timeOut: log.time,
        });
      } else {
        const entry = summaryMap.get(key);
        if (log.time < entry.timeIn) entry.timeIn = log.time;
        if (log.time > entry.timeOut) entry.timeOut = log.time;
      }
    });

    const shifts = [
      { name: "Dawn", start: "04:30", end: "13:00" },
      { name: "Morning", start: "06:03", end: "15:00" },
      { name: "GS 1", start: "08:30", end: "17:00" },
      { name: "GS 2", start: "11:00", end: "19:30" },
      { name: "Afternoon", start: "14:30", end: "23:00" },
      { name: "Night", start: "22:00", end: "06:30" },
    ];

    const toMinutes = (time) => {
      const [h, m] = time.split(":").map(Number);
      return h * 60 + m;
    };

    const shiftStartMinutes = shifts.map((shift) => ({
      ...shift,
      startMinutes: toMinutes(shift.start),
    }));

    const pickShift = (timeIn) => {
      const minutes = toMinutes(timeIn);
      let best = shiftStartMinutes[0];
      let bestDiff = Math.abs(minutes - best.startMinutes);
      shiftStartMinutes.forEach((shift) => {
        const diff = Math.abs(minutes - shift.startMinutes);
        if (diff < bestDiff) {
          best = shift;
          bestDiff = diff;
        }
      });
      return `${best.name} (${best.start} - ${best.end})`;
    };

    const roster = Array.from(summaryMap.values())
      .map((entry) => ({
        ...entry,
        shift: pickShift(entry.timeIn),
      }))
      .sort((a, b) => {
        const aDateKey = toDateKey(a.date) || 0;
        const bDateKey = toDateKey(b.date) || 0;
        if (aDateKey !== bDateKey) return bDateKey - aDateKey;
        return a.employeeId.localeCompare(b.employeeId);
      });

    sendJson(res, 200, { status: "success", roster });
    return;
  }

  if (parsed.pathname === "/api/biometric/attendance" && req.method === "POST") {
    const config = readConfig();
    try {
      const bridgeUrl = resolveBridgeUrl(config);
      const bridgePayload = {
        deviceIp: config.deviceIp,
        devicePort: config.devicePort,
        deviceModel: config.deviceModel,
        deviceNo: config.deviceNo,
        deviceCommKey: config.deviceCommKey,
        mdbPath: config.mdbPath,
        mdbPassword: config.mdbPassword,
      };
      const bridge = await callBridge(
        bridgeUrl,
        "/sync/attendance",
        bridgePayload
      );
      if (bridge.ok && bridge.data && bridge.data.status === "success") {
        const allLogs = bridge.data.logs || [];
        const storedLogs = await storeAttendanceData(allLogs);
        const pageSize = Number(parsed.query?.pageSize || 50);
        const pageLogs = allLogs.slice(0, pageSize);
        sendJson(res, 200, {
          status: "success",
          message:
            "Attendance logs synced from BioBridge. Merged from the current fortnight onward; older dates on the server are kept.",
          logs: pageLogs,
          totalCount: allLogs.length,
          page: 1,
          pageSize,
          storedLogs,
        });
        return;
      }
      sendJson(res, 200, {
        status: "error",
        message:
          bridge.data?.message ||
          "BioBridge SDK service did not return attendance logs.",
        logs: [],
      });
      return;
    } catch (error) {
      sendJson(res, 200, {
        status: "error",
        message:
          "BioBridge SDK service not reachable. Start the Windows bridge.",
        logs: [],
      });
      return;
    }
  }

  if (parsed.pathname === "/api/biometric/attendance/table" && req.method === "POST") {
    const config = readConfig();
    try {
      const bridgeUrl = resolveBridgeUrl(config);
      const bridgePayload = {
        deviceIp: config.deviceIp,
        devicePort: config.devicePort,
        deviceModel: config.deviceModel,
        deviceNo: config.deviceNo,
        deviceCommKey: config.deviceCommKey,
        mdbPath: config.mdbPath,
        mdbPassword: config.mdbPassword,
      };
      const bridge = await callBridge(bridgeUrl, "/sync/attendance-table", bridgePayload);
      if (bridge.ok && bridge.data && bridge.data.status === "success") {
        let rows = bridge.data.rows || [];
        if (rows.length === 0) {
          const logs = readAttendanceData();
          const employees = readDeviceData();
          const nameById = new Map();
          (employees || []).forEach((e) => {
            if (e.employeeId) nameById.set(String(e.employeeId), e.names || "");
          });
          const summaryMap = new Map();
          (logs || []).forEach((log) => {
            const key = `${log.employeeId}__${log.date}`;
            if (!summaryMap.has(key)) {
              summaryMap.set(key, {
                employeeId: log.employeeId,
                date: log.date,
                timeIn: log.time,
                timeOut: log.time,
              });
            } else {
              const entry = summaryMap.get(key);
              if (log.time < entry.timeIn) entry.timeIn = log.time;
              if (log.time > entry.timeOut) entry.timeOut = log.time;
            }
          });
          const toHours = (timeStr) => {
            if (!timeStr) return 0;
            const parts = String(timeStr).split(/[:\s]/).map(Number);
            return (parts[0] || 0) * 3600 + (parts[1] || 0) * 60 + (parts[2] || 0);
          };
          rows = Array.from(summaryMap.values()).map((entry) => {
            const inSec = toHours(entry.timeIn);
            const outSec = toHours(entry.timeOut);
            const totalSec = Math.max(0, outSec - inSec);
            const totalHours = totalSec / 3600;
            const otHours = Math.max(0, totalHours - 8.5);
            const shortHours = Math.max(0, 8.5 - totalHours);
            return {
              date: entry.date,
              userId: entry.employeeId,
              name: nameById.get(entry.employeeId) || "",
              inOut: `${entry.timeIn || ""} - ${entry.timeOut || ""}`.trim(),
              work: totalHours.toFixed(2),
              overtime: otHours.toFixed(2),
              short: shortHours.toFixed(2),
            };
          });
        }
        const storedRows = await storeAttendanceTableData(rows);
        sendJson(res, 200, {
          status: "success",
          message:
            rows.length > 0
              ? "Attendance table synced from ingress.mdb."
              : "No attendance table data. Use device sync first, then sync again.",
          rows,
          storedRows,
        });
        return;
      }
      const logs = readAttendanceData();
      const employees = readDeviceData();
      const nameById = new Map();
      (employees || []).forEach((e) => {
        if (e.employeeId) nameById.set(String(e.employeeId), e.names || "");
      });
      const summaryMap = new Map();
      (logs || []).forEach((log) => {
        const key = `${log.employeeId}__${log.date}`;
        if (!summaryMap.has(key)) {
          summaryMap.set(key, {
            employeeId: log.employeeId,
            date: log.date,
            timeIn: log.time,
            timeOut: log.time,
          });
        } else {
          const entry = summaryMap.get(key);
          if (log.time < entry.timeIn) entry.timeIn = log.time;
          if (log.time > entry.timeOut) entry.timeOut = log.time;
        }
      });
      const toHours = (timeStr) => {
        if (!timeStr) return 0;
        const parts = String(timeStr).split(/[:\s]/).map(Number);
        return (parts[0] || 0) * 3600 + (parts[1] || 0) * 60 + (parts[2] || 0);
      };
      const fallbackRows = Array.from(summaryMap.values()).map((entry) => {
        const inSec = toHours(entry.timeIn);
        const outSec = toHours(entry.timeOut);
        const totalSec = Math.max(0, outSec - inSec);
        const totalHours = totalSec / 3600;
        const otHours = Math.max(0, totalHours - 8.5);
        const shortHours = Math.max(0, 8.5 - totalHours);
        return {
          date: entry.date,
          userId: entry.employeeId,
          name: nameById.get(entry.employeeId) || "",
          inOut: `${entry.timeIn || ""} - ${entry.timeOut || ""}`.trim(),
          work: totalHours.toFixed(2),
          overtime: otHours.toFixed(2),
          short: shortHours.toFixed(2),
        };
      });
      if (fallbackRows.length > 0) {
        const storedRows = await storeAttendanceTableData(fallbackRows);
        sendJson(res, 200, {
          status: "success",
          message:
            "Attendance table not found in DB. Using device logs as fallback.",
          rows: fallbackRows,
          storedRows,
        });
      } else {
        sendJson(res, 200, {
          status: "error",
          message:
            bridge.data?.message ||
            "Attendance table not found. Sync device logs first.",
          rows: [],
        });
      }
      return;
    } catch (error) {
      sendJson(res, 200, {
        status: "error",
        message:
          "BioBridge SDK service not reachable. Start the Windows bridge.",
        rows: [],
      });
      return;
    }
  }

  sendJson(res, 404, { status: "error", message: "Not found." });
});

server.listen(PORT, HOST, () => {
  console.log(`Biometric service running on http://localhost:${PORT}`);
});
