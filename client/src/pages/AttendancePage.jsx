import { useCallback, useEffect, useRef, useState } from 'react';
import {
  getAttendanceTable,
  getAttendanceLogs,
  getManualSheet,
  saveManualSheet,
  syncAttendanceLogs,
  syncAttendanceTable,
  syncEmployees,
  getEmployees,
} from '../utils/api';
import { getFortnightPeriods, getCurrentFortnight, parseFortnightValue } from '../utils/fortnight';
import { useSyncContext } from '../utils/SyncContext';

const COST_CENTERS = ['', 'Admin', 'FBP', 'FBS', 'Finance', 'FO', 'HK', 'POMEC', 'Security', 'Others'];
const STANDARD_DAILY_HOURS = 7.5;

/** Generate each day in a range as { iso, dayName, dayNum } */
function buildDateRange(startIso, endIso) {
  const dates = [];
  const cur = new Date(`${startIso}T12:00:00`);
  const end = new Date(`${endIso}T12:00:00`);
  while (cur <= end) {
    const iso = cur.toISOString().slice(0, 10);
    dates.push({
      iso,
      dayName: cur.toLocaleDateString('en-GB', { weekday: 'short' }),
      dayNum: cur.getDate(),
    });
    cur.setDate(cur.getDate() + 1);
  }
  return dates;
}

/** Build a map of "empId__YYYYMMDD" → worked hours from table rows */
function buildWorkMap(tableRows) {
  const map = new Map();
  (tableRows || []).forEach((row) => {
    const eid = String(row.userId || row.employeeId || '').trim();
    const iso = row.date || '';
    if (!eid || !iso) return;
    const dateKey = iso.replace(/-/g, '');
    const hours = Math.min(parseFloat(row.work) || 0, STANDARD_DAILY_HOURS);
    map.set(`${eid}__${dateKey}`, hours);
  });
  return map;
}

/** Build work map from raw punch logs */
function buildWorkMapFromLogs(logs) {
  const summaryMap = new Map();
  (logs || []).forEach((log) => {
    const key = `${log.employeeId}__${log.date}`;
    if (!summaryMap.has(key)) {
      summaryMap.set(key, { timeIn: log.time, timeOut: log.time, count: 1 });
    } else {
      const e = summaryMap.get(key);
      if (log.time < e.timeIn) e.timeIn = log.time;
      if (log.time > e.timeOut) e.timeOut = log.time;
      e.count += 1;
    }
  });
  const toSec = (t) => {
    const p = String(t || '').split(':').map(Number);
    return (p[0] || 0) * 3600 + (p[1] || 0) * 60 + (p[2] || 0);
  };
  const map = new Map();
  summaryMap.forEach((v, key) => {
    const spanSec = Math.max(0, toSec(v.timeOut) - toSec(v.timeIn));
    const hours = v.count <= 1 || spanSec === 0 ? STANDARD_DAILY_HOURS : spanSec / 3600;
    const capped = Math.min(hours, STANDARD_DAILY_HOURS);
    const [eid, dateIso] = key.split('__');
    map.set(`${eid}__${(dateIso || '').replace(/-/g, '')}`, capped);
  });
  return map;
}

export default function AttendancePage() {
  const { syncVersion, notifySync } = useSyncContext();
  const periods = getFortnightPeriods();
  const currentPeriod = getCurrentFortnight();

  const [fortnight, setFortnight] = useState(currentPeriod?.value || '');
  const [costCenter, setCostCenter] = useState('');
  const [employees, setEmployees] = useState([]);
  const [workMap, setWorkMap] = useState(new Map());
  const [manualOverrides, setManualOverrides] = useState({}); // { [empId__dateKey]: string }
  const [dates, setDates] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [busy, setBusy] = useState('');
  const [lastSynced, setLastSynced] = useState(null);
  const autoRefreshRef = useRef(null);

  const showMsg = (text, type = 'hint') => setMessage({ text, type });

  /** Load data for the selected fortnight */
  const loadData = useCallback(async (fv) => {
    if (!fv) return;
    const { startIso, endIso } = parseFortnightValue(fv);
    if (!startIso || !endIso) return;

    setBusy('load');
    showMsg('Loading attendance data…', 'info');
    try {
      const [empList, tableData, logsData, manualData] = await Promise.all([
        getEmployees(),
        getAttendanceTable({ from: startIso, to: endIso, pageSize: 5000 }).catch(() => ({ rows: [] })),
        getAttendanceLogs({ from: startIso, to: endIso, pageSize: 10000 }).catch(() => ({ logs: [] })),
        getManualSheet().catch(() => ({})),
      ]);

      setEmployees(empList);

      const tableRows = tableData.rows || [];
      const logs = logsData.logs || [];

      let map = buildWorkMap(tableRows);
      if (map.size === 0) {
        map = buildWorkMapFromLogs(logs);
      }
      setWorkMap(map);

      // Restore manual overrides for this fortnight
      const savedPeriod = manualData[fv] || {};
      const overrides = {};
      Object.entries(savedPeriod).forEach(([eid, d]) => {
        if (d?.dayValues && Array.isArray(d.dayValues)) {
          const periodDates = buildDateRange(startIso, endIso);
          d.dayValues.forEach((val, i) => {
            const dateKey = periodDates[i]?.iso?.replace(/-/g, '');
            if (dateKey && val !== '' && val !== undefined) {
              overrides[`${eid}__${dateKey}`] = String(val);
            }
          });
        }
      });
      setManualOverrides(overrides);
      setDates(buildDateRange(startIso, endIso));
      setLoaded(true);
      setLastSynced(new Date());
      const total = map.size;
      showMsg(
        total > 0
          ? `Loaded ${empList.length} employees · ${total} attendance records.`
          : `Loaded ${empList.length} employees. No attendance data – click Sync to pull from device.`,
        total > 0 ? 'success' : 'hint'
      );
    } catch (err) {
      showMsg(`Load failed: ${err.message}`, 'error');
    } finally {
      setBusy('');
    }
  }, []);

  // Auto-load on mount and when fortnight changes
  useEffect(() => {
    if (fortnight) loadData(fortnight);
  }, [fortnight, loadData]);

  // Reload whenever a sync completes elsewhere (e.g. BiometricPage sync adds new employees)
  useEffect(() => {
    if (syncVersion > 0 && fortnight) loadData(fortnight);
  }, [syncVersion]); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-refresh every 60 seconds when loaded
  useEffect(() => {
    if (!loaded) return;
    autoRefreshRef.current = setInterval(() => {
      loadData(fortnight);
    }, 60_000);
    return () => clearInterval(autoRefreshRef.current);
  }, [loaded, fortnight, loadData]);

  const handleSync = async () => {
    setBusy('sync');
    showMsg('Syncing employees & attendance from device…', 'info');
    try {
      const [empRes, logRes, tableRes] = await Promise.allSettled([
        syncEmployees(),
        syncAttendanceLogs(),
        syncAttendanceTable(),
      ]);
      const msgs = [];
      if (empRes.status === 'fulfilled') msgs.push(empRes.value.message || 'Employees synced.');
      if (logRes.status === 'fulfilled') msgs.push(logRes.value.message || 'Logs synced.');
      if (tableRes.status === 'fulfilled') msgs.push(tableRes.value.message || 'Table synced.');
      showMsg(msgs.join(' | ') || 'Sync complete.', 'success');
      notifySync();
      await loadData(fortnight);
    } catch (err) {
      showMsg(`Sync failed: ${err.message}`, 'error');
    } finally {
      setBusy('');
    }
  };

  const handleSave = async () => {
    if (!fortnight) return;
    const { startIso, endIso } = parseFortnightValue(fortnight);
    setBusy('save');
    showMsg('Saving attendance…', 'info');
    try {
      const manualAll = await getManualSheet().catch(() => ({}));
      const period = { ...(manualAll[fortnight] || {}) };
      const periodDates = buildDateRange(startIso, endIso);
      employees.forEach((emp) => {
        const eid = String(emp.employeeId || '');
        const prevEntry = period[eid] && typeof period[eid] === 'object' ? period[eid] : {};
        const dayValues = periodDates.map((d) => {
          const dateKey = d.iso.replace(/-/g, '');
          const manualKey = `${eid}__${dateKey}`;
          if (manualOverrides[manualKey] !== undefined) return manualOverrides[manualKey];
          const syncWork = workMap.get(`${eid}__${dateKey}`);
          return syncWork !== undefined ? syncWork.toFixed(2) : '';
        });
        period[eid] = { ...prevEntry, dayValues };
      });
      await saveManualSheet(fortnight, period);
      showMsg('Attendance saved.', 'success');
    } catch {
      showMsg('Save failed.', 'error');
    } finally {
      setBusy('');
    }
  };

  const handleCellChange = (eid, dateKey, value) => {
    setManualOverrides((prev) => ({ ...prev, [`${eid}__${dateKey}`]: value }));
  };

  const displayEmployees = costCenter
    ? employees.filter((e) => (e.costCenter || e.department || '').trim() === costCenter)
    : employees;

  const sortedEmployees = [...displayEmployees].sort((a, b) => {
    const na = Number(a.employeeId);
    const nb = Number(b.employeeId);
    if (Number.isFinite(na) && Number.isFinite(nb)) return na - nb;
    return String(a.employeeId).localeCompare(String(b.employeeId), undefined, { numeric: true });
  });

  const totalHoursForEmp = (eid) => {
    let total = 0;
    dates.forEach((d) => {
      const dateKey = d.iso.replace(/-/g, '');
      const manualKey = `${eid}__${dateKey}`;
      const val = manualOverrides[manualKey] !== undefined
        ? parseFloat(manualOverrides[manualKey]) || 0
        : workMap.get(`${eid}__${dateKey}`) || 0;
      total += val;
    });
    return total;
  };

  const msgClass =
    message.type === 'error' ? 'hint error-text'
    : message.type === 'success' ? 'hint success-text'
    : 'hint';

  return (
    <section className="card">
      <h2>Attendance</h2>
      <div className="grid two">
        <label>
          Fortnight Period
          <select
            value={fortnight}
            onChange={(e) => { setFortnight(e.target.value); setLoaded(false); }}
          >
            <option value="">Select fortnight period</option>
            {periods.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}{p.isCurrent ? ' (current)' : ''}
              </option>
            ))}
          </select>
        </label>
        <label>
          Cost Center
          <select value={costCenter} onChange={(e) => setCostCenter(e.target.value)}>
            {COST_CENTERS.map((cc) => (
              <option key={cc || 'all'} value={cc}>{cc || 'All'}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="button-row">
        <button
          type="button"
          className="primary"
          onClick={() => loadData(fortnight)}
          disabled={!!busy || !fortnight}
        >
          {busy === 'load' ? 'Loading…' : 'Load Attendance'}
        </button>
        <button type="button" onClick={handleSync} disabled={!!busy}>
          {busy === 'sync' ? 'Syncing…' : 'Sync Employees & Attendance'}
        </button>
        <button type="button" onClick={handleSave} disabled={!!busy || !loaded}>
          {busy === 'save' ? 'Saving…' : 'Save Attendance'}
        </button>
        {lastSynced && (
          <span className="hint" style={{ marginLeft: 8 }}>
            Updated {lastSynced.toLocaleTimeString()}
          </span>
        )}
      </div>
      <p className={msgClass}>{message.text}</p>

      <div className="table-wrap attendance-sheet-wrap">
        <table className="attendance-sheet-table">
          <thead>
            <tr>
              <th>Ee #</th>
              <th>Names</th>
              <th>Cost Center</th>
              {dates.map((d) => (
                <th
                  key={d.iso}
                  className={`attendance-date-col${d.dayName === 'Sun' ? ' attendance-sunday' : ''}`}
                  title={d.iso}
                >
                  <span className="header-day">{d.dayName}</span>
                  <span className="header-date">{d.dayNum}</span>
                </th>
              ))}
              {dates.length > 0 && (
                <>
                  <th className="attendance-total-col">
                    <span className="header-main">Total</span>
                    <span className="header-sub">Hours</span>
                  </th>
                  <th className="attendance-ot-col">
                    <span className="header-main">OT</span>
                    <span className="header-sub">Time ½</span>
                  </th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {!loaded ? (
              <tr>
                <td colSpan={dates.length + 5}>
                  {fortnight
                    ? 'Click Load Attendance to view data.'
                    : 'Select a fortnight period and click Load Attendance.'}
                </td>
              </tr>
            ) : sortedEmployees.length === 0 ? (
              <tr>
                <td colSpan={dates.length + 5}>
                  No employees found. Click Sync Employees &amp; Attendance to fetch from device.
                </td>
              </tr>
            ) : (
              sortedEmployees.map((emp) => {
                const eid = String(emp.employeeId || '');
                const totalHours = totalHoursForEmp(eid);
                const normalHours = Math.min(totalHours, STANDARD_DAILY_HOURS * dates.length);
                const otHours = Math.max(0, totalHours - normalHours);

                return (
                  <tr key={eid} data-employee-id={eid}>
                    <td>{eid}</td>
                    <td style={{ whiteSpace: 'nowrap' }}>{emp.names || '—'}</td>
                    <td>{emp.costCenter || emp.department || ''}</td>
                    {dates.map((d) => {
                      const dateKey = d.iso.replace(/-/g, '');
                      const manualKey = `${eid}__${dateKey}`;
                      const syncVal = workMap.get(`${eid}__${dateKey}`);
                      const cellVal = manualOverrides[manualKey] !== undefined
                        ? manualOverrides[manualKey]
                        : syncVal !== undefined ? syncVal.toFixed(2) : '';
                      const isManual = manualOverrides[manualKey] !== undefined;
                      const hasSyncData = syncVal !== undefined && syncVal > 0;
                      return (
                        <td
                          key={d.iso}
                          className={`attendance-date-col${d.dayName === 'Sun' ? ' attendance-sunday' : ''}`}
                        >
                          <input
                            type="text"
                            className={`attendance-day-input${isManual ? ' manual-entry' : hasSyncData ? ' synced-entry' : ''}`}
                            value={cellVal}
                            onChange={(e) => handleCellChange(eid, dateKey, e.target.value)}
                            placeholder="0"
                            style={{ width: 36, textAlign: 'center', fontSize: '0.75rem' }}
                          />
                        </td>
                      );
                    })}
                    {dates.length > 0 && (
                      <>
                        <td className="attendance-total-col" style={{ textAlign: 'right', fontWeight: 600 }}>
                          {totalHours.toFixed(2)}
                        </td>
                        <td className="attendance-ot-col" style={{ textAlign: 'right' }}>
                          {otHours > 0 ? otHours.toFixed(2) : ''}
                        </td>
                      </>
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
