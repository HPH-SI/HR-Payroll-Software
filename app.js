const navLinks = document.querySelector(".main-nav");
const employeeIdInput = document.getElementById("employeeIdInput");
const deviceIp = document.getElementById("deviceIp");
const devicePort = document.getElementById("devicePort");
const deviceModel = document.getElementById("deviceModel");
const deviceNo = document.getElementById("deviceNo");
const deviceCommKey = document.getElementById("deviceCommKey");
const bridgeUrl = document.getElementById("bridgeUrl");
const deviceId = document.getElementById("deviceId");
const syncInterval = document.getElementById("syncInterval");
const deviceUser = document.getElementById("deviceUser");
const devicePassword = document.getElementById("devicePassword");
const connectionStatus = document.getElementById("connectionStatus");
const enrollmentMode = document.getElementById("enrollmentMode");
const saveBiometric = document.getElementById("saveBiometric");
const testBiometric = document.getElementById("testBiometric");
const syncEmployees = document.getElementById("syncEmployees");
const syncAttendance = document.getElementById("syncAttendance");
const biometricMessage = document.getElementById("biometricMessage");
const employeeTable = document.getElementById("employeeTable");
const employeeForm = document.getElementById("employeeForm");
const employeeNameList = document.getElementById("employeeNameList");
const saveEmployeeButton = document.getElementById("saveEmployeeButton");
const employeeNameInput = document.getElementById("employeeNameInput");
const employeeCostCenterInput = document.getElementById(
  "employeeCostCenterInput"
);
const employeeStartDateInput = document.getElementById("employeeStartDateInput");
const employeeNPFInput = document.getElementById("employeeNPFInput");
const employeeBSPInput = document.getElementById("employeeBSPInput");
const employeeBasicWageInput = document.getElementById(
  "employeeBasicWageInput"
);
const employeeBasicSalaryInput = document.getElementById(
  "employeeBasicSalaryInput"
);
const editBasicSalary = document.getElementById("editBasicSalary");
const employeeStatusInput = document.getElementById("employeeStatusInput");
const employeeShiftInput = document.getElementById("employeeShiftInput");
const payrollEmployeeName = document.getElementById("payrollEmployeeName");
const payrollEmployeeList = document.getElementById("payrollEmployeeList");
const payrollEmployeeId = document.getElementById("payrollEmployeeId");
const payrollAttendanceDate = document.getElementById("payrollAttendanceDate");
const payrollFortnight = document.getElementById("payrollFortnight");
const payrollWorkedHours = document.getElementById("payrollWorkedHours");
const payrollWorkedMinutes = document.getElementById("payrollWorkedMinutes");
const payrollHourlyRate = document.getElementById("payrollHourlyRate");
const payrollHousingAllowanceRateInput = document.getElementById(
  "payrollHousingAllowanceRateInput"
);
const payrollBasePay = document.getElementById("payrollBasePay");
const payrollPublicHoliday = document.getElementById("payrollPublicHoliday");
const payrollOtHours = document.getElementById("payrollOtHours");
const payrollOtPay = document.getElementById("payrollOtPay");
const payrollPhPay = document.getElementById("payrollPhPay");
const payrollHousingAllowance = document.getElementById(
  "payrollHousingAllowance"
);
const payrollMetLeave = document.getElementById("payrollMetLeave");
const payrollHhsAllowance = document.getElementById("payrollHhsAllowance");
const payrollConveyanceAllowance = document.getElementById(
  "payrollConveyanceAllowance"
);
const payrollBasicSalaryInput = document.getElementById(
  "payrollBasicSalaryInput"
);
const payrollOtSalaryInput = document.getElementById("payrollOtSalaryInput");
const payrollPhPayInput = document.getElementById("payrollPhPayInput");
const payrollPhx2Input = document.getElementById("payrollPhx2Input");
const payrollArrearsInput = document.getElementById("payrollArrearsInput");
const payrollMetLeaveInput = document.getElementById("payrollMetLeaveInput");
const payrollCompassInput = document.getElementById("payrollCompassInput");
const payrollTaxableEarningInput = document.getElementById(
  "payrollTaxableEarningInput"
);
const payrollAnnualLeaveInput = document.getElementById(
  "payrollAnnualLeaveInput"
);
const payrollTotalEarningInput = document.getElementById(
  "payrollTotalEarningInput"
);
const payrollNpf5Input = document.getElementById("payrollNpf5Input");
const payrollNpf75Input = document.getElementById("payrollNpf75Input");
const payrollVoluntaryNpfInput = document.getElementById(
  "payrollVoluntaryNpfInput"
);
const payrollPayeAInput = document.getElementById("payrollPayeAInput");
const payrollBasicRate1Input = document.getElementById(
  "payrollBasicRate1Input"
);
const payrollOtherDeductionsInput = document.getElementById(
  "payrollOtherDeductionsInput"
);
const payrollSalaryPeriodInput = document.getElementById(
  "payrollSalaryPeriodInput"
);
const payrollDownloadSelectedExcel = document.getElementById(
  "payrollDownloadSelectedExcel"
);
const payrollDownloadSelectedPdf = document.getElementById(
  "payrollDownloadSelectedPdf"
);
const payrollDownloadAllExcel = document.getElementById(
  "payrollDownloadAllExcel"
);
const payrollDownloadAllPdf = document.getElementById("payrollDownloadAllPdf");
const payslipEmployeeName = document.getElementById("payslipEmployeeName");
const payslipEmployeeId = document.getElementById("payslipEmployeeId");
const payslipStartDate = document.getElementById("payslipStartDate");
const payslipFortnight = document.getElementById("payslipFortnight");
const payslipHoursWorked = document.getElementById("payslipHoursWorked");
const payslipMinutesWorked = document.getElementById("payslipMinutesWorked");
const payslipHourlyRate = document.getElementById("payslipHourlyRate");
const payslipHousingRate = document.getElementById("payslipHousingRate");
const payslipBasePay = document.getElementById("payslipBasePay");
const payslipOtHours = document.getElementById("payslipOtHours");
const payslipOtPay = document.getElementById("payslipOtPay");
const payslipPhPay = document.getElementById("payslipPhPay");
const payslipHousingAllowance = document.getElementById("payslipHousingAllowance");
const payslipRentAllowance = document.getElementById("payslipRentAllowance");
const payslipMetLeave = document.getElementById("payslipMetLeave");
const payslipHhs = document.getElementById("payslipHhs");
const payslipConveyance = document.getElementById("payslipConveyance");
const payslipArrears = document.getElementById("payslipArrears");
const payslipCompass = document.getElementById("payslipCompass");
const payslipTaxable = document.getElementById("payslipTaxable");
const payslipAnnualLeave = document.getElementById("payslipAnnualLeave");
const payslipTotalEarning = document.getElementById("payslipTotalEarning");
const payslipNpf5 = document.getElementById("payslipNpf5");
const payslipNpf75 = document.getElementById("payslipNpf75");
const payslipVoluntaryNpf = document.getElementById("payslipVoluntaryNpf");
const payslipPayeA = document.getElementById("payslipPayeA");
const payslipBasicRate1 = document.getElementById("payslipBasicRate1");
const payslipOtherDeductions = document.getElementById("payslipOtherDeductions");
const payslipSalaryPeriod = document.getElementById("payslipSalaryPeriod");
const payslipDownloadExcel = document.getElementById("payslipDownloadExcel");
const payslipDownloadPdf = document.getElementById("payslipDownloadPdf");
const attendanceTable = document.getElementById("attendanceTable");
const attendanceTableFoot = document.getElementById("attendanceTableFoot");
const bankAdviceFortnight = document.getElementById("bankAdviceFortnight");
const bankAdviceLoadLogs = document.getElementById("bankAdviceLoadLogs");
const bankAdvicePeriod = document.getElementById("bankAdvicePeriod");
const bankAdviceTable = document.getElementById("bankAdviceTable");
const bankAdviceDownloadExcel = document.getElementById("bankAdviceDownloadExcel");
const bankAdviceLoadLog = document.getElementById("bankAdviceLoadLog");
const bankAdviceLoadLogEmpty = document.getElementById("bankAdviceLoadLogEmpty");
const bankAdviceSection = document.getElementById("bank-advice");
const loadAttendanceLogs = document.getElementById("loadAttendanceLogs");
const downloadAllLogsExcel = document.getElementById("downloadAllLogsExcel");
const downloadAllPayslipsPdf = document.getElementById("downloadAllPayslipsPdf");
const attendanceSearch = document.getElementById("attendanceSearch");
const attendancePrev = document.getElementById("attendancePrev");
const attendanceNext = document.getElementById("attendanceNext");
const attendancePageInfo = document.getElementById("attendancePageInfo");
const attendanceScope = document.getElementById("attendanceScope");
const attendanceFortnight = document.getElementById("attendanceFortnight");
const attendanceFrom = document.getElementById("attendanceFrom");
const attendanceTo = document.getElementById("attendanceTo");
const rosterScope = document.getElementById("rosterScope");
const rosterEmployeeName = document.getElementById("rosterEmployeeName");
const rosterEmployeeList = document.getElementById("rosterEmployeeList");
const rosterFrom = document.getElementById("rosterFrom");
const rosterTo = document.getElementById("rosterTo");
const loadRoster = document.getElementById("loadRoster");
const rosterTable = document.getElementById("rosterTable");
const statEmployees = document.getElementById("statEmployees");
const nextPayrollDate = document.getElementById("nextPayrollDate");
const statTotalPayout = document.getElementById("statTotalPayout");
const statAverageWage = document.getElementById("statAverageWage");
const payrollSnapshotRegion = document.getElementById("payrollSnapshotRegion");
const payrollSnapshotStatus = document.getElementById("payrollSnapshotStatus");
const dashboardAccountingPivotTable = document.getElementById("dashboardAccountingPivotTable");
const dashboardAccountingPivotHead = document.getElementById("dashboardAccountingPivotHead");
const dashboardAccountingPivotBody = document.getElementById("dashboardAccountingPivotBody");
const contentSections = document.querySelectorAll("main.content > section");
const attendanceSheetFortnight = document.getElementById("attendanceSheetFortnight");
const attendanceSheetCostCenter = document.getElementById("attendanceSheetCostCenter");
const loadAttendanceSheet = document.getElementById("loadAttendanceSheet");
const syncAttendanceSheet = document.getElementById("syncAttendanceSheet");
const downloadAttendanceByCostCenter = document.getElementById("downloadAttendanceByCostCenter");
const attendanceSheetMessage = document.getElementById("attendanceSheetMessage");
const attendanceSheetHeaderRow = document.getElementById("attendanceSheetHeaderRow");
const attendanceSheetTable = document.getElementById("attendanceSheetTable");
const dashboardChartPeriod = document.getElementById("dashboardChartPeriod");
const dashboardDownloadExcel = document.getElementById("dashboardDownloadExcel");

if (employeeNPFInput) employeeNPFInput.readOnly = true;
if (employeeBSPInput) employeeBSPInput.readOnly = true;
if (employeeBasicWageInput) employeeBasicWageInput.readOnly = true;

let attendanceSyncInFlight = false;
let employeesCache = [];
const employeeProfileKey = "employee_profiles";
const attendanceSheetStorageKey = "hr_attendance_sheet_data";
const ATTENDANCE_PAGE_SIZE = 20;
let attendanceLogs = [];
let todayShiftByEmployee = new Map();
let attendanceSheetEntries = [];
let attendanceSheetFortnightValue = "";
let attendancePage = 1;
let attendanceTotalPages = 1;
let attendanceFilterEmployeeId = "";
let attendanceFilterFrom = "";
let attendanceFilterTo = "";
let attendanceSummaryRows = [];
let rosterFilterEmployeeId = "";
let attendanceSearchTerm = "";

const BANK_ADVICE_LOAD_LOG_MAX = 100;
let bankAdviceLoadLogEntries = [];

const API_BASE = "http://localhost:4000";
const MAX_DAILY_HOURS = 24;
const MAX_FORTNIGHT_HOURS = 999;

/** Per sick day, subtract this from formula HHS (H K, HK, POMEC only). */
const HHS_SICK_DAY_DEDUCTION = 7.5;

/**
 * Formula HHS when auto-calculated: (baseHours × 0.5) − (sickDays × {@link HHS_SICK_DAY_DEDUCTION}), floored at 0.
 * Attendance sheet uses Normal hours as baseHours; log-based preview uses total hours.
 */
const calculateFormulaHhs = (baseHours, sickDaysRaw, hhsEligible) => {
  if (!hhsEligible) return 0;
  const base = Number(baseHours) || 0;
  const sick = Number(sickDaysRaw) || 0;
  return Math.max(0, base * 0.5 - sick * HHS_SICK_DAY_DEDUCTION);
};

/**
 * Annual leave pay for payroll: 7.5h × (basic wage/hr + housing all/hr) × attendance Annual Leave (units, typically days).
 */
const ANNUAL_LEAVE_HOURS_PER_UNIT = 7.5;
const annualLeavePayFromAttendance = (basicWage, housingRate, annualLeaveUnits) => {
  const bw = Number(basicWage) || 0;
  const hr = Number(housingRate) || 0;
  const u = Number(annualLeaveUnits) || 0;
  return ANNUAL_LEAVE_HOURS_PER_UNIT * (bw + hr) * u;
};

/** Per-day conveyance tier: 0 = none, 1 = $7.50, 2 = $15 (only counts when hours > 0 that day). */
const CONVEYANCE_TIER_AMOUNTS = { 0: 0, 1: 7.5, 2: 15 };
const clampConveyanceTier = (v) => {
  const n = Number(v);
  if (n === 1 || n === 2) return n;
  return 0;
};
const conveyanceDollarsForTier = (tier) => CONVEYANCE_TIER_AMOUNTS[clampConveyanceTier(tier)] ?? 0;
const computeConveyanceFromDayTiersAndHours = (dayValues, tiers) => {
  const len = Math.min(dayValues?.length || 0, tiers?.length || 0);
  let sum = 0;
  for (let i = 0; i < len; i++) {
    const h = parseFloat(String(dayValues[i] ?? "").replace(/,/g, "")) || 0;
    if (h <= 0) continue;
    sum += conveyanceDollarsForTier(tiers[i]);
  }
  return sum;
};

/** Voluntary NPF: user enters a percentage (e.g. 5 = 5% of total earning). */
const voluntaryNpfAmountFromPercent = (totalEarning, percentRaw) => {
  const te = Number(totalEarning) || 0;
  const pct = Number(percentRaw) || 0;
  return (te * pct) / 100;
};

/**
 * Net salary: Total Earning − NPF 5% − Voluntary NPF − PAYE − Basic 1% − Other.
 * NPF 7.5% is not deducted from take-home pay (shown separately for reporting / employer levy).
 * NPF 5% is 5% of Total Earning; Basic 1% is 1% of basic salary.
 */
const computeSalaryForPeriod = ({
  totalEa,
  basicSalary,
  voluntaryNpfPct,
  payeA,
  otherDeductions,
}) => {
  const te = Number(totalEa) || 0;
  const bs = Number(basicSalary) || 0;
  const npf5 = te * 0.05;
  const voluntaryNpfAmount = voluntaryNpfAmountFromPercent(te, voluntaryNpfPct);
  const basic1 = bs * 0.01;
  const paye = Number(payeA) || 0;
  const other = Number(otherDeductions) || 0;
  return te - npf5 - voluntaryNpfAmount - paye - basic1 - other;
};

const getVoluntaryNpfPctForDisplay = (log) => {
  if (log == null) return 0;
  if (log.voluntaryNpfPct != null && log.voluntaryNpfPct !== "") {
    const p = Number(log.voluntaryNpfPct);
    return Number.isFinite(p) ? p : 0;
  }
  const te = parseFloat(log.totalEa) || 0;
  const vn = parseFloat(log.voluntaryN) || 0;
  if (te > 0 && vn >= 0) return (vn / te) * 100;
  return 0;
};

const updateDashboardStats = (employees) => {
  if (!employees || employees.length === 0) {
    if (statEmployees) statEmployees.textContent = "0";
    return;
  }
  const activeEmployees = employees.filter(
    (emp) => (emp.status || "Active") === "Active"
  );
  if (statEmployees) statEmployees.textContent = `${activeEmployees.length}`;
};

const clearDashboardSnapshotStatusLine = () => {
  if (payrollSnapshotStatus) {
    payrollSnapshotStatus.textContent = "";
    payrollSnapshotStatus.hidden = true;
    payrollSnapshotStatus.classList.remove("payroll-snapshot-error");
  }
};

const zeroDashboardPayrollSnapshotTotals = () => {
  if (statTotalPayout) statTotalPayout.textContent = "SB$ 0.00";
  if (statAverageWage) statAverageWage.textContent = "SB$ 0.00";
};

const setDashboardSnapshotLoading = (loading) => {
  if (dashboardChartPeriod) dashboardChartPeriod.disabled = loading;
  if (payrollSnapshotRegion) payrollSnapshotRegion.setAttribute("aria-busy", loading ? "true" : "false");
  if (loading) {
    if (statTotalPayout) statTotalPayout.textContent = "—";
    if (statAverageWage) statAverageWage.textContent = "—";
    if (payrollSnapshotStatus) {
      payrollSnapshotStatus.textContent = "Calculating…";
      payrollSnapshotStatus.hidden = false;
      payrollSnapshotStatus.classList.remove("payroll-snapshot-error");
    }
  }
};

const setDashboardSnapshotError = (message) => {
  if (!payrollSnapshotStatus) return;
  if (message) {
    payrollSnapshotStatus.textContent = message;
    payrollSnapshotStatus.hidden = false;
    payrollSnapshotStatus.classList.add("payroll-snapshot-error");
  } else {
    clearDashboardSnapshotStatusLine();
  }
};

/** Payroll Snapshot figures for the selected dashboard fortnight (same as charts / Payroll pipeline). */
const updateDashboardPayrollSnapshotFromPivot = (result) => {
  clearDashboardSnapshotStatusLine();
  if (!result) {
    if (statTotalPayout) statTotalPayout.textContent = "SB$ 0.00";
    if (statAverageWage) statAverageWage.textContent = "SB$ 0.00";
    return;
  }
  const total = result.grandTotal?.salaryForPeriod ?? 0;
  const n = result.rowCount || 0;
  const avg = n > 0 ? total / n : 0;
  if (statTotalPayout) statTotalPayout.textContent = `SB$ ${Number(total).toFixed(2)}`;
  if (statAverageWage) statAverageWage.textContent = `SB$ ${Number(avg).toFixed(2)}`;
};

/** Jan 5 anchor for the 26-fortnight schedule that contains today (rolls forward each year). */
const getFortnightAnchorStart = () => {
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

const updateNextPayrollDate = () => {
  if (!nextPayrollDate) return;
  const periods = getFortnightPeriods();
  const current = periods.find((p) => p.isCurrent);
  if (current) {
    const periodEnd = new Date(`${current.endIso}T12:00:00`);
    const payDate = new Date(periodEnd);
    payDate.setDate(payDate.getDate() + 1);
    nextPayrollDate.textContent = payDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return;
  }
  const today = new Date();
  const fallback = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  nextPayrollDate.textContent = fallback.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatFortnightLabel = (date) =>
  date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });

const toLocalIsoDate = (d) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

const getFortnightPeriods = () => {
  const periods = [];
  const start = getFortnightAnchorStart();
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  for (let i = 0; i < 26; i += 1) {
    const periodStart = new Date(start);
    periodStart.setDate(start.getDate() + i * 14);
    periodStart.setHours(12, 0, 0, 0);
    const periodEnd = new Date(periodStart);
    periodEnd.setDate(periodStart.getDate() + 13);
    periodEnd.setHours(12, 0, 0, 0);
    const startIso = toLocalIsoDate(periodStart);
    const endIso = toLocalIsoDate(periodEnd);
    const value = `${startIso}_${endIso}`;
    periods.push({
      value,
      startIso,
      endIso,
      label: `${formatFortnightLabel(periodStart)} - ${formatFortnightLabel(
        periodEnd
      )}`,
      isCurrent: today >= periodStart && today <= periodEnd,
    });
  }
  return periods;
};

const populateFortnights = () => {
  if (!payrollFortnight) return;
  payrollFortnight.innerHTML = "";
  let selectedValue = "";
  getFortnightPeriods().forEach((period) => {
    const option = document.createElement("option");
    option.value = period.value;
    option.textContent = period.label;
    payrollFortnight.appendChild(option);
    if (period.isCurrent) {
      selectedValue = period.value;
    }
  });
  if (selectedValue) {
    payrollFortnight.value = selectedValue;
  }
};

const populateCostCenterFilter = (selectEl, keepValue = "") => {
  if (!selectEl) return;
  const centers = new Set();
  (employeesCache || []).forEach((e) => {
    const cc = (e.costCenter || e.department || "").trim() || "(blank)";
    if (cc) centers.add(cc);
  });
  const sorted = [...centers].sort((a, b) => {
    if (a === "(blank)") return 1;
    if (b === "(blank)") return -1;
    return a.localeCompare(b);
  });
  const prev = selectEl.value || keepValue;
  selectEl.innerHTML = '<option value="">All</option>';
  sorted.forEach((cc) => {
    const opt = document.createElement("option");
    opt.value = cc;
    opt.textContent = cc;
    selectEl.appendChild(opt);
  });
  if (prev && sorted.includes(prev)) selectEl.value = prev;
};

const syncAttendanceFortnightSelection = () => {
  if (!attendanceFortnight) return;
  if (!attendanceFilterFrom || !attendanceFilterTo) {
    attendanceFortnight.value = "";
    return;
  }
  const value = `${attendanceFilterFrom}_${attendanceFilterTo}`;
  const hasValue = Array.from(attendanceFortnight.options).some(
    (option) => option.value === value
  );
  attendanceFortnight.value = hasValue ? value : "";
};

const populateAttendanceFortnights = () => {
  if (!attendanceFortnight) {
    populateBankAdviceFortnights("");
    return;
  }
  attendanceFortnight.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select fortnight period";
  attendanceFortnight.appendChild(defaultOption);

  let selectedValue = "";
  getFortnightPeriods().forEach((period) => {
    const option = document.createElement("option");
    option.value = period.value;
    option.textContent = period.label;
    attendanceFortnight.appendChild(option);
    if (period.isCurrent) {
      selectedValue = period.value;
    }
  });

  if (selectedValue) {
    attendanceFortnight.value = selectedValue;
    const [startIso, endIso] = selectedValue.split("_");
    attendanceFilterFrom = startIso;
    attendanceFilterTo = endIso;
    if (attendanceFrom) attendanceFrom.value = startIso;
    if (attendanceTo) attendanceTo.value = endIso;
  }
  populateBankAdviceFortnights(attendanceFortnight.value || "");
};

const populateBankAdviceFortnights = (matchValue) => {
  if (!bankAdviceFortnight) return;
  bankAdviceFortnight.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select fortnight period";
  bankAdviceFortnight.appendChild(defaultOption);
  getFortnightPeriods().forEach((period) => {
    const option = document.createElement("option");
    option.value = period.value;
    option.textContent = period.label;
    bankAdviceFortnight.appendChild(option);
  });
  const v =
    matchValue && Array.from(bankAdviceFortnight.options).some((o) => o.value === matchValue)
      ? matchValue
      : "";
  bankAdviceFortnight.value = v;
};

const syncBankAdviceFortnightFromAttendance = () => {
  if (!bankAdviceFortnight || !attendanceFortnight) return;
  const v = attendanceFortnight.value;
  if (v && Array.from(bankAdviceFortnight.options).some((o) => o.value === v)) {
    bankAdviceFortnight.value = v;
  } else if (!v) {
    bankAdviceFortnight.value = "";
  }
};

const getFortnightDateRange = (value) => {
  if (!value || !value.includes("_")) return null;
  const [startIso, endIso] = value.split("_");
  const start = new Date(startIso + "T12:00:00");
  const end = new Date(endIso + "T12:00:00");
  const dates = [];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const current = new Date(start);
  while (current <= end) {
    const iso = toLocalIsoDate(current);
    const month = current.toLocaleString("en-GB", { month: "short" });
    const day = current.getDate();
    const dayName = days[current.getDay()];
    dates.push({
      iso,
      dayName,
      dateLabel: `${month} ${day}`,
      label: `${month} ${day} ${dayName}`,
      dayNum: day,
    });
    current.setDate(current.getDate() + 1);
  }
  return { startIso, endIso, dates };
};

const populateAttendanceSheetFortnights = () => {
  if (!attendanceSheetFortnight) return;
  attendanceSheetFortnight.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select fortnight period";
  attendanceSheetFortnight.appendChild(defaultOption);
  let selectedValue = "";
  getFortnightPeriods().forEach((period) => {
    const option = document.createElement("option");
    option.value = period.value;
    option.textContent = period.label;
    attendanceSheetFortnight.appendChild(option);
    if (period.isCurrent) selectedValue = period.value;
  });
  if (selectedValue) attendanceSheetFortnight.value = selectedValue;
};

const payrollPivotNum = (v) => {
  const x = parseFloat(String(v ?? "").replace(/,/g, ""));
  return Number.isFinite(x) ? x : 0;
};

/** One object shape for accounting pivot rows / grand total (every column from the same payroll log). */
const createEmptyPivotAccountingAccumulator = () => ({
  taxableEarning: 0,
  arrears: 0,
  compass: 0,
  metLeave: 0,
  annualLeave: 0,
  totalEarning: 0,
  npfEE: 0,
  npfER: 0,
  voluntaryNpf: 0,
  payeA: 0,
  payeSplitA: 0,
  payeSplitAL: 0,
  basicRate: 0,
  otherDeductions: 0,
  salaryForPeriod: 0,
});

const PIVOT_ACCOUNTING_KEYS = Object.keys(createEmptyPivotAccountingAccumulator());

/** Maps one payroll row (from buildPayrollRowsForFortnight) into pivot totals — single mapping for all columns. */
const addPayrollLogToPivotAccountingAccumulator = (acc, log) => {
  acc.taxableEarning += payrollPivotNum(log.taxableE);
  acc.arrears += payrollPivotNum(log.arrears);
  acc.compass += payrollPivotNum(log.compassOf);
  acc.metLeave += payrollPivotNum(log.metLeave);
  acc.annualLeave += payrollPivotNum(log.annual);
  acc.totalEarning += payrollPivotNum(log.totalEa);
  acc.npfEE += payrollPivotNum(log.npf5);
  acc.npfER += payrollPivotNum(log.npf75);
  acc.voluntaryNpf += payrollPivotNum(log.voluntaryN);
  acc.payeA += payrollPivotNum(log.payeA);
  acc.payeSplitA += payrollPivotNum(log.payeSplitA);
  acc.payeSplitAL += payrollPivotNum(log.payeSplitAL);
  acc.basicRate += payrollPivotNum(log.basic1);
  acc.otherDeductions += payrollPivotNum(log.otherDedu);
  acc.salaryForPeriod += payrollPivotNum(log.salaryFor);
};

const reportPivotCache = new Map();
const reportPivotPending = new Map();

const invalidateReportPivotCache = () => {
  reportPivotCache.clear();
};

/**
 * When the Attendance sheet is loaded for the same fortnight as the dashboard report,
 * return fresh DOM-derived entries (same as Load Logs / payroll preview). Otherwise null.
 */
function getPayrollDomEntriesForFortnight(fortnightValue) {
  const useAttendanceSheet =
    fortnightValue &&
    fortnightValue.includes("_") &&
    attendanceSheetFortnightValue === fortnightValue &&
    attendanceSheetEntries.length > 0;
  if (!useAttendanceSheet || !attendanceSheetTable) return null;
  const freshEntries = [];
  attendanceSheetTable.querySelectorAll("tr[data-employee-id]").forEach((row) => {
    const entry = buildAttendanceEntryFromRow(row);
    if (entry.employeeId) freshEntries.push(entry);
  });
  if (freshEntries.length > 0) return freshEntries;
  return attendanceSheetEntries.length ? attendanceSheetEntries : null;
}

/** Aggregates payroll rows from buildPayrollRowsForFortnight (same as Payroll tab). */
const getReportPivotData = async (fortnightValue) => {
  if (!fortnightValue || !fortnightValue.includes("_")) {
    return { ok: true, result: null };
  }
  const domEntries = getPayrollDomEntriesForFortnight(fortnightValue);
  const cacheKey = `${fortnightValue}|${domEntries ? "dom" : "nodom"}`;
  const cached = reportPivotCache.get(cacheKey);
  if (cached) return cached;
  const inflight = reportPivotPending.get(cacheKey);
  if (inflight) return inflight;

  const promise = (async () => {
    try {
      const payrollRows = await buildPayrollRowsForFortnight(fortnightValue, domEntries);
      if (!payrollRows || payrollRows.length === 0) {
        const out = { ok: true, result: null };
        reportPivotCache.set(cacheKey, out);
        return out;
      }

      const pivotByCostCenter = new Map();

      payrollRows.forEach((log) => {
        const costCenter = (log.costCenter || "").trim() || "(blank)";
        if (!pivotByCostCenter.has(costCenter)) {
          pivotByCostCenter.set(costCenter, createEmptyPivotAccountingAccumulator());
        }
        addPayrollLogToPivotAccountingAccumulator(pivotByCostCenter.get(costCenter), log);
      });

      const sortedCenters = [...pivotByCostCenter.keys()].sort((a, b) => {
        if (a === "(blank)") return 1;
        if (b === "(blank)") return -1;
        return a.localeCompare(b);
      });

      const grandTotal = createEmptyPivotAccountingAccumulator();
      sortedCenters.forEach((label) => {
        const data = pivotByCostCenter.get(label);
        PIVOT_ACCOUNTING_KEYS.forEach((k) => {
          grandTotal[k] += data[k];
        });
      });

      const out = {
        ok: true,
        result: { pivotByCostCenter, sortedCenters, grandTotal, rowCount: payrollRows.length },
      };
      reportPivotCache.set(cacheKey, out);
      return out;
    } catch (error) {
      return {
        ok: false,
        result: null,
        error:
          "Could not load payroll data. Check that the server is running and try again.",
      };
    } finally {
      reportPivotPending.delete(cacheKey);
    }
  })();

  reportPivotPending.set(cacheKey, promise);
  return promise;
};

let dashboardCharts = {};

const destroyAllDashboardCharts = () => {
  Object.keys(dashboardCharts).forEach((key) => {
    if (dashboardCharts[key]) {
      dashboardCharts[key].destroy();
      dashboardCharts[key] = null;
    }
  });
};

const populateDashboardChartPeriod = () => {
  if (!dashboardChartPeriod) return;
  dashboardChartPeriod.innerHTML = "";
  let selectedValue = "";
  getFortnightPeriods().forEach((period) => {
    const option = document.createElement("option");
    option.value = period.value;
    option.textContent = period.label;
    dashboardChartPeriod.appendChild(option);
    if (period.isCurrent) selectedValue = period.value;
  });
  if (selectedValue) dashboardChartPeriod.value = selectedValue;
};

const CHART_COLORS = [
  "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6",
  "#ec4899", "#06b6d4", "#84cc16",
];

/** Dashboard bar charts (canvas ids must match index.html). */
const DASHBOARD_CHART_SPECS = [
  { id: "chartTaxableEarning", key: "taxableEarning", title: "Taxable Earning (A)", field: "taxableEarning" },
  { id: "chartAnnualLeave", key: "annualLeave", title: "Annual Leave", field: "annualLeave" },
  { id: "chartTotalEarning", key: "totalEarning", title: "Total Earning", field: "totalEarning" },
  { id: "chartNpf5", key: "npf5", title: "NPF 5%", field: "npfEE" },
  { id: "chartNpf75", key: "npf75", title: "NPF 7.5%", field: "npfER" },
  { id: "chartPayeA", key: "payeA", title: "Pay E (A)", field: "payeA" },
  { id: "chartBasic1", key: "basic1", title: "Basic 1%", field: "basicRate" },
  { id: "chartOtherDedu", key: "otherDedu", title: "Other deductions", field: "otherDeductions" },
  {
    id: "chartSalaryForPeriod",
    key: "salaryForPeriod",
    title: "Salary for Period",
    field: "salaryForPeriod",
  },
];

const DASHBOARD_BAR_CHART_OPTIONS = {
  responsive: true,
  maintainAspectRatio: true,
  animation: false,
  plugins: { legend: { display: false } },
  scales: { y: { beginAtZero: true } },
};

let dashboardChartsRenderGeneration = 0;
let dashboardChartPeriodDebounceTimer = null;

/** Accounting pivot: same measures as Payroll tab columns (sums by cost center). */
const DASHBOARD_ACCOUNTING_TABLE_COLUMNS = [
  { key: "taxableEarning", label: "Sum of Taxable Earning (A)" },
  { key: "annualLeave", label: "Sum of Annual Leave" },
  { key: "totalEarning", label: "Sum of Total Earning" },
  { key: "npfEE", label: "Sum of NPF 5%" },
  { key: "npfER", label: "Sum of NPF 7.5%" },
  { key: "payeA", label: "Sum of Pay E (A)" },
  { key: "basicRate", label: "Sum of Basic 1%" },
  { key: "otherDeductions", label: "Sum of Other Deductions" },
  { key: "salaryForPeriod", label: "Sum of Salary for Period" },
];

const escapeHtml = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const formatAccountingCurrency = (n) => {
  const x = Number(n);
  if (!Number.isFinite(x)) return "—";
  return x.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const renderDashboardAccountingPivot = (result, emptyHint = "no-period") => {
  const table = dashboardAccountingPivotTable;
  const thead = dashboardAccountingPivotHead;
  const tbody = dashboardAccountingPivotBody;
  if (!table || !tbody) return;
  const colCount = DASHBOARD_ACCOUNTING_TABLE_COLUMNS.length + 1;
  if (!result) {
    if (thead) thead.innerHTML = "";
    const msg =
      emptyHint === "no-rows"
        ? "No payroll data for this period."
        : "Select a report period to load the accounting pivot.";
    tbody.innerHTML = `<tr><td class="accounting-pivot-empty muted" colspan="${colCount}">${msg}</td></tr>`;
    table.hidden = false;
    return;
  }
  const { pivotByCostCenter, sortedCenters, grandTotal } = result;
  if (thead) {
    thead.innerHTML = `<tr><th scope="col" class="accounting-pivot-corner">Row Labels</th>${DASHBOARD_ACCOUNTING_TABLE_COLUMNS.map(
      (c) => `<th scope="col">${escapeHtml(c.label)}</th>`
    ).join("")}</tr>`;
  }
  if (!sortedCenters.length) {
    tbody.innerHTML = `<tr><td class="accounting-pivot-empty muted" colspan="${colCount}">No cost centers for this period.</td></tr>`;
    table.hidden = false;
    return;
  }
  const bodyRows = sortedCenters
    .map((labelKey) => {
      const row = pivotByCostCenter.get(labelKey);
      const displayLabel = labelKey === "(blank)" ? "(blank)" : labelKey;
      const cells = DASHBOARD_ACCOUNTING_TABLE_COLUMNS.map(
        (col) =>
          `<td class="accounting-num">${formatAccountingCurrency(row?.[col.key] ?? 0)}</td>`
      ).join("");
      return `<tr><th scope="row" class="accounting-pivot-row-label">${escapeHtml(displayLabel)}</th>${cells}</tr>`;
    })
    .join("");
  const totalCells = DASHBOARD_ACCOUNTING_TABLE_COLUMNS.map(
    (col) =>
      `<td class="accounting-num accounting-grand-total">${formatAccountingCurrency(
        grandTotal[col.key] ?? 0
      )}</td>`
  ).join("");
  tbody.innerHTML = `${bodyRows}<tr class="accounting-pivot-grand-row"><th scope="row">Grand Total</th>${totalCells}</tr>`;
  table.hidden = false;
};

const renderDashboardCharts = async () => {
  const gen = ++dashboardChartsRenderGeneration;
  const fortnightValue = dashboardChartPeriod?.value || "";
  if (!fortnightValue || !fortnightValue.includes("_")) {
    setDashboardSnapshotLoading(false);
    clearDashboardSnapshotStatusLine();
    updateDashboardPayrollSnapshotFromPivot(null);
    renderDashboardAccountingPivot(null, "no-period");
    return;
  }

  setDashboardSnapshotLoading(true);
  try {
    const payload = await getReportPivotData(fortnightValue);
    if (gen !== dashboardChartsRenderGeneration) return;
    if (!payload.ok) {
      setDashboardSnapshotError(
        payload.error ||
          "Could not load payroll data. Check that the server is running and try again."
      );
      zeroDashboardPayrollSnapshotTotals();
      renderDashboardAccountingPivot(null, "no-rows");
      return;
    }
    updateDashboardPayrollSnapshotFromPivot(payload.result);
    if (payload.result) {
      renderDashboardAccountingPivot(payload.result);
    } else {
      renderDashboardAccountingPivot(null, "no-rows");
    }
    if (typeof Chart === "undefined" || !payload.result) return;
    if (gen !== dashboardChartsRenderGeneration) return;

    const { pivotByCostCenter, sortedCenters } = payload.result;
    const labels = sortedCenters.map((l) => (l === "(blank)" ? "Unassigned" : l));
    const colors = labels.map((_, i) => CHART_COLORS[i % CHART_COLORS.length]);

    destroyAllDashboardCharts();
    if (gen !== dashboardChartsRenderGeneration) return;

    const getData = (field) =>
      sortedCenters.map((l) => pivotByCostCenter.get(l)?.[field] || 0);

    DASHBOARD_CHART_SPECS.forEach((spec) => {
      const el = document.getElementById(spec.id);
      const heading = el?.closest(".chart-container")?.querySelector("h3");
      if (heading) heading.textContent = `${spec.title} by Cost Center`;
      if (el) {
        dashboardCharts[spec.key] = new Chart(el, {
          type: "bar",
          data: {
            labels,
            datasets: [{ label: spec.title, data: getData(spec.field), backgroundColor: colors }],
          },
          options: DASHBOARD_BAR_CHART_OPTIONS,
        });
      }
    });
  } finally {
    if (gen === dashboardChartsRenderGeneration) {
      setDashboardSnapshotLoading(false);
    }
  }
};

const scheduleDashboardChartsFromPeriodSelect = () => {
  if (dashboardChartPeriodDebounceTimer) clearTimeout(dashboardChartPeriodDebounceTimer);
  dashboardChartPeriodDebounceTimer = setTimeout(() => {
    dashboardChartPeriodDebounceTimer = null;
    renderDashboardCharts();
  }, 150);
};

const refreshDashboardPayrollIfVisible = () => {
  const dash = document.getElementById("dashboard");
  if (dash && !dash.classList.contains("section-hidden")) {
    renderDashboardCharts();
  }
};

const downloadDashboardExcel = async () => {
  if (typeof XLSX === "undefined") {
    alert("Excel library not loaded. Please refresh the page.");
    return;
  }
  const fortnightValue = dashboardChartPeriod?.value || "";
  if (!fortnightValue || !fortnightValue.includes("_")) {
    alert("Select a report period first.");
    return;
  }
  const payload = await getReportPivotData(fortnightValue);
  if (!payload.ok) {
    alert(
      payload.error ||
        "Could not load payroll data. Check that the server is running and try again."
    );
    return;
  }
  if (!payload.result) {
    alert("No data available for the selected period.");
    return;
  }
  const { pivotByCostCenter, sortedCenters, grandTotal } = payload.result;
  const headerRow = ["Row Labels", ...DASHBOARD_ACCOUNTING_TABLE_COLUMNS.map((c) => c.label)];
  const dataRows = sortedCenters.map((labelKey) => {
    const row = pivotByCostCenter.get(labelKey);
    const displayLabel = labelKey === "(blank)" ? "(blank)" : labelKey;
    return [
      displayLabel,
      ...DASHBOARD_ACCOUNTING_TABLE_COLUMNS.map((c) => row?.[c.key] ?? 0),
    ];
  });
  const totalRow = [
    "Grand Total",
    ...DASHBOARD_ACCOUNTING_TABLE_COLUMNS.map((c) => grandTotal[c.key] ?? 0),
  ];
  const wsData = [headerRow, ...dataRows, totalRow];
  const ws = XLSX.utils.aoa_to_sheet(wsData);
  const wb = XLSX.utils.book_new();
  const periodLabel = (dashboardChartPeriod?.options[dashboardChartPeriod?.selectedIndex]?.text || "report").replace(/\s+/g, "_");
  XLSX.utils.book_append_sheet(wb, ws, "Dashboard");
  XLSX.writeFile(wb, `HR_Dashboard_${periodLabel}.xlsx`);
};

const getShiftFromLogsForPeriod = (logs) => {
  const shifts = [];
  const grouped = new Map();
  logs.forEach((log) => {
    const key = `${log.employeeId}__${log.date}`;
    if (!grouped.has(key)) {
      grouped.set(key, { timeIn: log.time });
    } else {
      const entry = grouped.get(key);
      if (log.time < entry.timeIn) entry.timeIn = log.time;
    }
  });
  grouped.forEach((entry) => {
    if (entry.timeIn) shifts.push(pickShiftFromTime(entry.timeIn));
  });
  if (shifts.length === 0) return "";
  const counts = new Map();
  shifts.forEach((s) => counts.set(s, (counts.get(s) || 0) + 1));
  let best = "";
  let bestCount = 0;
  counts.forEach((cnt, name) => {
    if (cnt > bestCount) {
      bestCount = cnt;
      best = name;
    }
  });
  return best;
};

const loadAttendanceSheetData = async () => {
  if (!attendanceSheetTable || !attendanceSheetHeaderRow) return;
  if (employeesCache.length === 0) {
    const loaded = await loadEmployeesFromApiOrFallback();
    if (!loaded && employeesCache.length === 0) {
      const thead = attendanceSheetHeaderRow?.parentElement;
      if (thead) thead.innerHTML = "<tr><th>Ee #</th><th>Names</th><th>Cost Center</th></tr>";
      attendanceSheetTable.innerHTML =
        "<tr><td colspan=\"30\">No employee data. Sync employees from Biometric Device Setup first, or ensure the server is running.</td></tr>";
      return;
    }
  }
  const value = attendanceSheetFortnight?.value || "";
  const range = getFortnightDateRange(value);
  if (!range) {
    const thead = attendanceSheetHeaderRow?.parentElement;
    if (thead) thead.innerHTML = "<tr><th>Ee #</th><th>Names</th><th>Cost Center</th></tr>";
    attendanceSheetTable.innerHTML = "<tr><td colspan=\"30\">Select a fortnight period and click Load Attendance.</td></tr>";
    return;
  }
  const rangeObj = {
    start: formatDateForStorage(range.startIso),
    end: formatDateForStorage(range.endIso),
  };

  let workByEmployeeDate;
  let logsByEmployee;
  let serverManual;

  const useCache = attendanceSheetDataCache && attendanceSheetDataCache.value === value;
  if (useCache) {
    workByEmployeeDate = attendanceSheetDataCache.workByEmployeeDate;
    logsByEmployee = attendanceSheetDataCache.logsByEmployee;
    serverManual = attendanceSheetDataCache.serverManual;
  } else {
    const [tableRows, allLogs, serverManualFetched] = await Promise.all([
      loadAttendanceTableForPeriod(rangeObj),
      loadAllAttendanceLogsForPeriod(rangeObj),
      loadAttendanceSheetManualFromServer(),
    ]);
    serverManual = serverManualFetched;

    workByEmployeeDate = new Map();
    const overtimeByEmployeeDate = new Map();
    const resolveEmployeeId = (tableUserId) => {
    const uid = String(tableUserId || "").trim();
    if (!uid) return null;
    const match = employeesCache.find(
      (e) =>
        String(e.employeeId || "") === uid ||
        (Number(e.employeeId) === Number(uid) && !Number.isNaN(Number(uid)))
    );
    if (match) return String(match.employeeId || "");
    const numPart = uid.replace(/^[A-Za-z_-]+/, "") || uid;
    const numMatch = employeesCache.find(
      (e) =>
        String(e.employeeId || "") === numPart ||
        Number(e.employeeId) === Number(numPart)
    );
    return numMatch ? String(numMatch.employeeId || "") : uid;
    };
    tableRows.forEach((row) => {
      const tableUserId = String(row.userId || row.employeeId || "").trim();
      const empId = resolveEmployeeId(tableUserId) || tableUserId;
      const dateKey = toDateKey(row.date);
      if (!empId || !dateKey) return;
      const rawWork = parseFloat(row.work) || 0;
      const work = Math.min(rawWork, MAX_DAILY_HOURS);
      const overtime = parseFloat(row.overtime) || 0;
      workByEmployeeDate.set(`${empId}__${dateKey}`, work);
      overtimeByEmployeeDate.set(`${empId}__${dateKey}`, overtime);
    });

    logsByEmployee = new Map();
    allLogs.forEach((log) => {
      if (!log?.employeeId) return;
      const empId = resolveEmployeeId(log.employeeId) || String(log.employeeId);
      if (!logsByEmployee.has(empId)) logsByEmployee.set(empId, []);
      logsByEmployee.get(empId).push(log);
    });
    const summariesFromLogs = [];
    logsByEmployee.forEach((entries, employeeId) => {
      summariesFromLogs.push(...calculateAttendanceSummary(entries));
    });
    summariesFromLogs.forEach((s) => {
      const dateKey = toDateKey(s.date);
      if (!dateKey) return;
      const empId = resolveEmployeeId(s.employeeId) || String(s.employeeId || "");
      const key = `${empId}__${dateKey}`;
      if (!workByEmployeeDate.has(key)) {
        const rawHours = s.totalHours || 0;
        const work = Math.min(rawHours, MAX_DAILY_HOURS);
        workByEmployeeDate.set(key, work);
        overtimeByEmployeeDate.set(key, 0);
      }
    });

    attendanceSheetDataCache = { value, workByEmployeeDate, logsByEmployee, serverManual };
  }

  const thead = attendanceSheetHeaderRow?.parentElement;
  if (!thead) return;
  thead.innerHTML = "";

  const row1 = document.createElement("tr");
  const thEe = document.createElement("th");
  thEe.textContent = "Ee #";
  row1.appendChild(thEe);
  const thNames = document.createElement("th");
  thNames.textContent = "Names";
  row1.appendChild(thNames);
  const thCc = document.createElement("th");
  thCc.textContent = "Cost Center";
  row1.appendChild(thCc);
  range.dates.forEach((d) => {
    const th = document.createElement("th");
    th.className = "attendance-date-col" + (d.dayName === "Sun" ? " attendance-sunday" : "");
    th.innerHTML = `<span class="header-day">${d.dayName}</span><span class="header-date">${d.dayNum}</span>`;
    th.title = `${d.dayName} ${d.dateLabel}`;
    row1.appendChild(th);
  });
  const thTotal = document.createElement("th");
  thTotal.className = "attendance-total-col";
  thTotal.innerHTML = `<span class="header-main">Total</span><span class="header-sub">Hours</span>`;
  row1.appendChild(thTotal);
  const thNormal = document.createElement("th");
  thNormal.className = "attendance-total-col";
  thNormal.innerHTML = `<span class="header-main">Normal</span><span class="header-sub">Hours</span>`;
  row1.appendChild(thNormal);
  const thOt = document.createElement("th");
  thOt.className = "attendance-ot-col";
  thOt.innerHTML = `<span class="header-main">OT</span><span class="header-sub">Time ½</span>`;
  row1.appendChild(thOt);
  const extraCols = [
    { label: "PH/ DO", cls: "attendance-extra-col" },
    { label: "PH Pay", cls: "attendance-extra-col" },
    { label: "Sick Day", cls: "attendance-extra-col" },
    { label: "MET Leave", cls: "attendance-extra-col" },
    { label: "Annual Leave", cls: "attendance-extra-col" },
    { label: "HHS", cls: "attendance-extra-col attendance-col-hhs" },
    { label: "Conveyance All.", cls: "attendance-extra-col attendance-col-conveyance" },
  ];
  extraCols.forEach(({ label, cls }) => {
    const th = document.createElement("th");
    th.className = cls;
    th.textContent = label;
    row1.appendChild(th);
  });
  thead.appendChild(row1);

  let sortedEmployees = [...employeesCache].sort((a, b) => {
    const aNum = Number(a.employeeId);
    const bNum = Number(b.employeeId);
    if (Number.isFinite(aNum) && Number.isFinite(bNum)) return aNum - bNum;
    return String(a.employeeId).localeCompare(String(b.employeeId), undefined, { numeric: true });
  });
  const costCenterFilter = attendanceSheetCostCenter?.value?.trim() || "";
  if (costCenterFilter) {
    sortedEmployees = sortedEmployees.filter((e) => {
      const cc = (e.costCenter || e.department || "").trim() || "(blank)";
      return cc === costCenterFilter;
    });
  }
  attendanceSheetCostCenterUpdating = true;
  populateCostCenterFilter(attendanceSheetCostCenter, costCenterFilter);
  attendanceSheetCostCenterUpdating = false;

  const preservedOt = new Map();
  const preservedPhDo = new Map();
  const preservedPhPay = new Map();
  const preservedSickDays = new Map();
  const preservedMetLeave = new Map();
  const preservedAnnualLeave = new Map();
  const preservedConveyanceTiers = new Map();
  const preservedHhs = new Map();
  const preservedDayValues = new Map();
  const localData = loadAttendanceSheetFromStorage(value);
  const serverDataForPeriod = serverManual && typeof serverManual === "object" ? (serverManual[value] || {}) : {};
  const savedData = { ...localData, ...serverDataForPeriod };
  if (Object.keys(serverDataForPeriod).length > 0) {
    saveAttendanceSheetToStorage(value, savedData);
  }
  Object.entries(savedData).forEach(([eid, d]) => {
    if (d.dayValues && Array.isArray(d.dayValues)) preservedDayValues.set(eid, d.dayValues.map(String));
    if (d.totalOvertime != null && Number.isFinite(d.totalOvertime)) preservedOt.set(eid, Number(d.totalOvertime));
    if (d.phDo != null) preservedPhDo.set(eid, String(d.phDo));
    if (d.phPay != null && Number.isFinite(d.phPay)) preservedPhPay.set(eid, String(d.phPay));
    if (d.sickDays != null) preservedSickDays.set(eid, String(d.sickDays));
    if (d.metLeave != null && Number.isFinite(d.metLeave)) preservedMetLeave.set(eid, String(d.metLeave));
    if (d.annualLeave != null && Number.isFinite(d.annualLeave)) preservedAnnualLeave.set(eid, String(d.annualLeave));
    if (d.conveyanceDayTiers && Array.isArray(d.conveyanceDayTiers)) {
      preservedConveyanceTiers.set(eid, d.conveyanceDayTiers.map((t) => clampConveyanceTier(t)));
    }
    if (d.hhs != null) preservedHhs.set(eid, String(d.hhs));
  });
  const expectedDayCount = range?.dates?.length || 0;
  attendanceSheetTable.querySelectorAll("tr")?.forEach((tr) => {
    const eid = tr.dataset.employeeId || "";
    const dayInputs = tr.querySelectorAll(".attendance-day-input");
    if (eid && dayInputs.length === expectedDayCount && expectedDayCount > 0) {
      const vals = Array.from(dayInputs).map((inp) => inp.value.trim());
      preservedDayValues.set(eid, vals);
    }
    if (!eid || dayInputs.length !== expectedDayCount) return;
    const otInput = tr.querySelector(".attendance-ot-input");
    if (otInput) {
      const val = parseFloat(otInput.value) || 0;
      if (Number.isFinite(val)) preservedOt.set(eid, val);
    }
    const phDoInput = tr.querySelector(".attendance-phdo-input");
    if (phDoInput) preservedPhDo.set(eid, phDoInput.value.trim());
    const phPayInput = tr.querySelector(".attendance-phpay-input");
    if (phPayInput) preservedPhPay.set(eid, phPayInput.value.trim());
    const sickInput = tr.querySelector(".attendance-sick-input");
    if (sickInput) preservedSickDays.set(eid, sickInput.value.trim());
    const metInput = tr.querySelector(".attendance-metleave-input");
    if (metInput) preservedMetLeave.set(eid, metInput.value.trim());
    const annInput = tr.querySelector(".attendance-annualleave-input");
    if (annInput) preservedAnnualLeave.set(eid, annInput.value.trim());
    const tierSelects = tr.querySelectorAll(".attendance-conveyance-tier-select");
    if (eid && tierSelects.length === expectedDayCount && expectedDayCount > 0) {
      preservedConveyanceTiers.set(
        eid,
        Array.from(tierSelects).map((s) => clampConveyanceTier(s.value))
      );
    }
    const hhsInput = tr.querySelector(".attendance-hhs-input");
    if (hhsInput) preservedHhs.set(eid, hhsInput.value.trim());
  });

  attendanceSheetTable.innerHTML = "";
  attendanceSheetEntries = [];
  const asMoney = (v) => (Number(v) || 0).toFixed(2);
  sortedEmployees.forEach((employee) => {
    const employeeId = String(employee.employeeId || "");
    const costCenter = employee.costCenter || employee.department || "";
    const logs = logsByEmployee.get(employeeId) || [];
    const arrears = Number(employee.arrears || 0);
    const compass = Number(employee.compass || 0);
    const voluntaryNpfPct = Number(employee.voluntaryNpf || 0);
    const rentAllowance = Number(employee.rentAllowance || 0);
    const otherDeductions = Number(employee.otherDeductions || 0);
    const metrics = buildPayrollMetrics(employee, logs, {
      publicHoliday: false,
      housingRate: employee.hAllow,
      arrears,
      compass,
      voluntaryNpf: voluntaryNpfPct,
      rentAllowance,
      otherDeductions,
    });
    const shift =
      getShiftFromLogsForPeriod(logs) || todayShiftByEmployee.get(employeeId) || "";

    const row = document.createElement("tr");
    row.dataset.employeeId = employeeId;
    row.dataset.datesJson = JSON.stringify(range.dates.map((d) => ({ dayName: d.dayName, dateLabel: d.dateLabel })));
    const dayValues = [];
    const preservedDays = preservedDayValues.get(employeeId);
    range.dates.forEach((d, i) => {
      if (preservedDays && preservedDays[i] !== undefined && preservedDays[i] !== "") {
        dayValues.push(preservedDays[i]);
      } else {
        const dateKey = toDateKey(d.iso);
        const rawWork = dateKey ? (workByEmployeeDate.get(`${employeeId}__${dateKey}`) || 0) : 0;
        const work = Math.min(rawWork, MAX_DAILY_HOURS);
        dayValues.push(work > 0 ? work.toFixed(2) : "");
      }
    });
    let totalWork = 0;
    dayValues.forEach((v) => {
      const h = parseFloat(v) || 0;
      totalWork += Math.min(h, MAX_DAILY_HOURS);
    });
    const totalWorkCapped = Math.min(totalWork, MAX_FORTNIGHT_HOURS);
    row.dataset.totalWork = String(totalWorkCapped);

    const manualOt = preservedOt.has(employeeId) ? preservedOt.get(employeeId) : 0;
    const phDoVal = preservedPhDo.get(employeeId) ?? "";
    const phDoNum = parseFloat(phDoVal) || 0;
    const sickVal = preservedSickDays.get(employeeId) ?? "";
    const phPayVal = preservedPhPay.get(employeeId) ?? "";
    const metLeaveVal = preservedMetLeave.get(employeeId) ?? "";
    const annualLeaveVal = preservedAnnualLeave.get(employeeId) ?? "";

    const normalHours = Math.max(0, totalWorkCapped - manualOt - phDoNum);
    const cc = (costCenter || "").trim().toUpperCase();
    const hhsEligible = cc === "H K" || cc === "HK" || cc === "POMEC";
    const calculatedHhs = calculateFormulaHhs(normalHours, sickVal, hhsEligible);
    const hhsPreserved = preservedHhs.get(employeeId);
    const hhsDisplay =
      hhsPreserved !== undefined ? hhsPreserved : calculatedHhs.toFixed(2);
    const savedEntry = savedData[employeeId] || {};
    const savedTiersFromFile = savedEntry.conveyanceDayTiers;
    const hasSavedTiers =
      Array.isArray(savedTiersFromFile) && savedTiersFromFile.length === range.dates.length;
    let tiersForRow = range.dates.map(() => 0);
    const fromDomPres = preservedConveyanceTiers.get(employeeId);
    if (fromDomPres && fromDomPres.length === range.dates.length) {
      tiersForRow = fromDomPres.map((t) => clampConveyanceTier(t));
    } else if (hasSavedTiers) {
      tiersForRow = savedTiersFromFile.map((t) => clampConveyanceTier(t));
    }

    const conveyanceComputed = computeConveyanceFromDayTiersAndHours(dayValues, tiersForRow);
    const savedConv = savedEntry.conveyanceAll;
    const useConveyanceFixed =
      savedEntry.conveyanceFixed === true &&
      savedConv != null &&
      savedConv !== "" &&
      !Number.isNaN(Number(savedConv));
    const conveyanceDisplay = useConveyanceFixed
      ? (Number(savedConv) || 0).toFixed(2)
      : conveyanceComputed > 0
        ? conveyanceComputed.toFixed(2)
        : "";

    let html = `<td>${employeeId}</td>`;
    html += `<td>${employee.names || ""}</td><td>${costCenter}</td>`;
    range.dates.forEach((d, i) => {
      const isSunday = d.dayName === "Sun";
      const cellClass = isSunday ? "attendance-day-sunday" : "";
      const val = dayValues[i] || "";
      const tierVal = tiersForRow[i] ?? 0;
      const t0 = tierVal === 0 ? " selected" : "";
      const t1 = tierVal === 1 ? " selected" : "";
      const t2 = tierVal === 2 ? " selected" : "";
      html += `<td class="${cellClass} attendance-day-cell"><div class="attendance-day-stack">
<input type="number" class="attendance-day-input" data-employee-id="${employeeId}" data-day-index="${i}" value="${val}" placeholder="0" min="0" max="24" step="0.01" size="4" title="Hours worked" />
<select class="attendance-conveyance-tier-select" data-employee-id="${employeeId}" data-day-index="${i}" title="Conveyance: 0 = none; 1 = $7.50; 2 = $15 (counts only when hours &gt; 0)">
<option value="0"${t0}>0</option>
<option value="1"${t1}>1</option>
<option value="2"${t2}>2</option>
</select>
</div></td>`;
    });
    html += `<td class="attendance-total-cell" title="Auto-calculated from daily hours">${asMoney(totalWorkCapped)}</td>`;
    html += `<td class="attendance-normal-cell">${asMoney(normalHours)}</td>`;
    html += `<td><input type="number" class="attendance-ot-input" data-employee-id="${employeeId}" value="${manualOt > 0 ? manualOt.toFixed(2) : ""}" placeholder="0" min="0" step="0.01" size="5" /></td>`;
    html += `<td><input type="number" class="attendance-phdo-input" data-employee-id="${employeeId}" value="${phDoVal || ""}" placeholder="0" min="0" step="0.01" size="3" /></td>`;
    html += `<td><input type="number" class="attendance-phpay-input" data-employee-id="${employeeId}" value="${phPayVal || ""}" placeholder="0" min="0" step="0.01" size="5" /></td>`;
    html += `<td><input type="number" class="attendance-sick-input" data-employee-id="${employeeId}" value="${sickVal || ""}" placeholder="0" min="0" step="0.01" size="3" /></td>`;
    html += `<td><input type="number" class="attendance-metleave-input" data-employee-id="${employeeId}" value="${metLeaveVal || ""}" placeholder="0" min="0" step="0.01" size="5" /></td>`;
    html += `<td><input type="number" class="attendance-annualleave-input" data-employee-id="${employeeId}" value="${annualLeaveVal || ""}" placeholder="0" min="0" step="0.01" size="5" title="Annual leave units (e.g. days). Pay = 7.5 × (Basic wage/hr + Housing all/hr) × this value" /></td>`;
    html += `<td class="attendance-cell-hhs"><div class="attendance-money-box attendance-money-box--hhs"><input type="number" class="attendance-hhs-input" data-employee-id="${employeeId}" value="${hhsDisplay}" placeholder="0" min="0" step="0.01" inputmode="decimal" title="HHS: (Normal × 0.5) − (Sick days × ${HHS_SICK_DAY_DEDUCTION}) for H K, HK, POMEC. Editable to override." /></div></td>`;
    const convTitle = useConveyanceFixed
      ? "Conveyance total for payroll (saved). Tier 0/1/2 is best fit; change a tier or day to recalc from tiers only."
      : "Total from daily tiers (0 / $7.50 / $15) — only counts on days with hours &gt; 0; not editable";
    html += `<td class="attendance-cell-conveyance"><div class="attendance-money-box attendance-money-box--conveyance"><input type="number" class="attendance-conveyance-input" data-employee-id="${employeeId}" value="${conveyanceDisplay}" placeholder="0" min="0" step="0.01" inputmode="decimal" readonly aria-readonly="true" tabindex="-1" title="${convTitle}" /></div></td>`;
    row.innerHTML = html;
    if (useConveyanceFixed) row.dataset.conveyanceFixed = "1";
    attendanceSheetTable.appendChild(row);

    attendanceSheetEntries.push({
      employeeId,
      names: employee.names || "",
      costCenter,
      shift,
      dayValues,
      totalWork: totalWorkCapped,
      totalOvertime: manualOt,
      phDo: phDoVal,
      phPay: phPayVal,
      sickDays: sickVal,
      metLeave: metLeaveVal,
      annualLeave: annualLeaveVal,
      conveyanceAll: useConveyanceFixed ? Number(savedConv) || 0 : conveyanceComputed,
      conveyanceFixed: useConveyanceFixed,
      conveyanceDayTiers: tiersForRow,
      voluntaryNpf: metrics.voluntaryNpf,
      housingRate: metrics.housingRate,
      basePay: metrics.basePay,
      otPay: metrics.otPay,
      housingAllowance: metrics.housingAllowance,
      hhs: parseFloat(hhsDisplay) || 0,
      arrears: metrics.arrears,
      compass: metrics.compass,
      taxableEarning: metrics.taxableEarning,
      totalEarning: metrics.totalEarning,
      npf5: metrics.npf5,
      npf75: metrics.npf75,
      payeA: metrics.payeA,
      basicRate1: metrics.basicRate1,
      otherDeductions: metrics.otherDeductions,
      salaryForPeriod: metrics.salaryForPeriod,
      dates: range.dates,
    });
  });
  attendanceSheetFortnightValue = value;
  invalidateReportPivotCache();
  refreshDashboardPayrollIfVisible();
};

/** PH x 2: basic wage × PH/DO hours × 2 */
const phPayFromPhDoHours = (basicWage, phDoRaw) => {
  const phDo = Number(phDoRaw) || 0;
  const bw = Number(basicWage) || 0;
  if (phDo <= 0) return 0;
  return bw * phDo * 2;
};

const buildPayrollFromAttendanceEntry = (employee, attEntry) => {
  const asM = (v) => (Number(v) || 0).toFixed(2);
  const basicWage = Number(employee.basicWage || 0);
  const housingRate = Number(employee.hAllow || 0);
  const normal = Number(attEntry?.totalWork || 0) - Number(attEntry?.totalOvertime || 0) - Number(attEntry?.phDo || 0);
  const normalHours = Math.max(0, normal);
  const otHours = Number(attEntry?.totalOvertime || 0);
  const phDo = Number(attEntry?.phDo || 0);
  const phPay = phPayFromPhDoHours(basicWage, attEntry?.phDo);
  const arrears = Number(attEntry?.arrears ?? employee.arrears ?? 0);
  const compass = Number(attEntry?.compass ?? employee.compass ?? 0);
  const metLeave = Number(attEntry?.metLeave ?? 0);
  const annualLeaveUnits = Number(attEntry?.annualLeave ?? 0);
  const annualLeaveAmount = annualLeavePayFromAttendance(
    basicWage,
    housingRate,
    annualLeaveUnits
  );
  const sickDaysDed = Number(attEntry?.sickDays ?? 0);
  const compassionateDed = 0;
  const hhs = Number(attEntry?.hhs ?? 0);
  const conveyance = Number(attEntry?.conveyanceAll ?? 0);
  const rentAllowance = Number(attEntry?.rentAllowance ?? employee.rentAllowance ?? 0);
  const voluntaryNpfPct = Number(attEntry?.voluntaryNpf ?? employee.voluntaryNpf ?? 0);
  let otherDeductions = Number(employee.otherDeductions || 0);
  if (attEntry != null) {
    const rawOd = attEntry.otherDeductions;
    if (rawOd != null && rawOd !== "" && Number.isFinite(Number(rawOd))) {
      otherDeductions = Number(rawOd);
    }
  }

  const basicSalary = basicWage * normalHours;
  const otSalary = basicWage * 1.5 * otHours;
  const housingAllowance = housingRate * (normalHours + otHours + phDo);
  const taxableEarning =
    basicSalary + otSalary + phPay + housingAllowance + rentAllowance + arrears + compass +
    metLeave + hhs + conveyance;
  const totalEarning = taxableEarning + annualLeaveAmount;
  const voluntaryNpfAmount = voluntaryNpfAmountFromPercent(totalEarning, voluntaryNpfPct);
  const npf5 = totalEarning * 0.05;
  const npf75 = totalEarning * 0.075;
  const basicRate1 = basicSalary * 0.01;
  const annualized = totalEarning * 26;
  let payeA = 0;
  if (totalEarning < 1156.92) payeA = 0;
  else if (totalEarning < 1733.86) payeA = (annualized - 30080) * 0.11 / 26;
  else if (totalEarning < 2310.78) payeA = (annualized - 30080 - 15000) * 0.23 / 26 + 63.46;
  else if (totalEarning < 3464.63) payeA = (annualized - 30080 - 30000) * 0.35 / 26 + 63.46 + 132.69;
  else payeA = (annualized - 30080 - 60000) * 0.4 / 26 + 63.46 + 132.69 + 403.85;
  /** Split PAYE for accounting pivot; use raw numbers so splits sum to payeA (remainder on AL). */
  const payeSplitA = totalEarning > 0 ? payeA * (taxableEarning / totalEarning) : 0;
  const payeSplitAL = payeA - payeSplitA;
  const salaryForPeriod = computeSalaryForPeriod({
    totalEa: totalEarning,
    basicSalary,
    voluntaryNpfPct,
    payeA,
    otherDeductions,
  });

  const costCenterFromSheet = attEntry && String(attEntry.costCenter || "").trim();
  return {
    employeeId: String(employee.employeeId || ""),
    employeeName: employee.names || "",
    costCenter: costCenterFromSheet || employee.costCenter || employee.department || "",
    employee: employee.startDate || "",
    npfNumber: employee.npf || "",
    bspAccount: employee.bsp || "",
    basicWage: asM(basicWage),
    housingAll: asM(housingRate),
    basicSalary: asM(basicSalary),
    overTimeS: asM(otSalary),
    public: asM(phPay),
    housingA: asM(housingAllowance),
    rentA: asM(rentAllowance),
    hhs: asM(hhs),
    conveyance: asM(conveyance),
    arrears: asM(arrears),
    compassOf: asM(compass),
    metLeave: asM(metLeave),
    taxableE: asM(taxableEarning),
    annual: asM(annualLeaveAmount),
    totalEa: asM(totalEarning),
    npf5: asM(npf5),
    npf75: asM(npf75),
    voluntaryN: asM(voluntaryNpfAmount),
    voluntaryNpfPct: voluntaryNpfPct === 0 ? "" : voluntaryNpfPct,
    payeA: asM(payeA),
    payeSplitA: asM(payeSplitA),
    payeSplitAL: asM(payeSplitAL),
    basic1: asM(basicRate1),
    otherDedu: asM(otherDeductions),
    sickDaysDed: asM(sickDaysDed),
    compassionateDed: asM(compassionateDed),
    metLeaveDed: asM(metLeave),
    annualLeaveDed: asM(annualLeaveAmount),
    salaryFor: asM(salaryForPeriod),
  };
};

const formatDateForDisplay = (value) => {
  if (!value) return "";
  const isoMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    return `${day}-${month}-${year}`;
  }
  const ddmmyyyy = /^\d{2}-\d{2}-\d{4}$/.test(value);
  return ddmmyyyy ? value : value;
};

const formatDateForInput = (value) => {
  if (!value) return "";
  const ddmmyyyy = /^(\d{2})-(\d{2})-(\d{4})$/.exec(value);
  if (ddmmyyyy) {
    const [, day, month, year] = ddmmyyyy;
    return `${year}-${month}-${day}`;
  }
  return value;
};

const formatDateForStorage = (value) => {
  if (!value) return "";
  const isoMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    return `${day}-${month}-${year}`;
  }
  return value;
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

const state = {
  role: "admin",
  loggedIn: true,
  email: "",
  isAdmin: true,
};

const setEmployeeIdEditable = (role) => {
  if (!employeeIdInput) return;
  const canEdit = role === "hr_admin" || role === "admin";
  employeeIdInput.disabled = !canEdit;
};

const biometricStorageKey = "biometric_config";

const defaultBiometricConfig = {
  deviceIp: "192.168.1.111",
  devicePort: "4370",
  deviceModel: "Face ID 4",
  deviceNo: "1",
  deviceCommKey: "0",
  bridgeUrl: "",
  deviceId: "FT-FACEID-4-001",
  syncInterval: "15",
  deviceUser: "admin",
  devicePassword: "123",
  connectionStatus: "Offline",
  enrollmentMode: "Face ID",
};

const loadBiometricConfig = () => {
  const stored = localStorage.getItem(biometricStorageKey);
  if (!stored) {
    return { ...defaultBiometricConfig };
  }
  try {
    return { ...defaultBiometricConfig, ...JSON.parse(stored) };
  } catch (error) {
    return { ...defaultBiometricConfig };
  }
};

const populateBiometricForm = (config) => {
  deviceIp.value = config.deviceIp;
  devicePort.value = config.devicePort;
  deviceModel.value = config.deviceModel;
  deviceNo.value = config.deviceNo;
  deviceCommKey.value = config.deviceCommKey;
  bridgeUrl.value = config.bridgeUrl || "";
  deviceId.value = config.deviceId;
  syncInterval.value = config.syncInterval;
  deviceUser.value = config.deviceUser;
  devicePassword.value = config.devicePassword;
  connectionStatus.value = config.connectionStatus;
  enrollmentMode.value = config.enrollmentMode;
  biometricMessage.textContent = "Loaded device configuration.";
};

const saveBiometricConfig = async () => {
  const config = {
    deviceIp: deviceIp.value.trim(),
    devicePort: devicePort.value.trim(),
    deviceModel: deviceModel.value.trim(),
    deviceNo: deviceNo.value.trim(),
    deviceCommKey: deviceCommKey.value.trim(),
    bridgeUrl: bridgeUrl.value.trim(),
    deviceId: deviceId.value.trim(),
    syncInterval: syncInterval.value.trim(),
    deviceUser: deviceUser.value.trim(),
    devicePassword: devicePassword.value.trim(),
    connectionStatus: connectionStatus.value,
    enrollmentMode: enrollmentMode.value,
  };
  localStorage.setItem(biometricStorageKey, JSON.stringify(config));
  biometricMessage.textContent = `Saved locally for ${config.deviceIp}:${config.devicePort}.`;
  try {
    const response = await fetch(`${API_BASE}/api/biometric/config`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });
    if (response.ok) {
      biometricMessage.textContent = `Saved to backend for ${config.deviceIp}:${config.devicePort}.`;
    } else {
      biometricMessage.textContent =
        "Saved locally. Backend rejected the configuration.";
    }
  } catch (error) {
    biometricMessage.textContent =
      "Saved locally. Backend is not reachable.";
  }
};

const renderEmployeeTable = (employees) => {
  if (!employeeTable) return;
  if (!employees || employees.length === 0) {
    biometricMessage.textContent =
      "No employee records returned from device.";
    return;
  }
  employeeTable.innerHTML = "";
  employees.forEach((employee) => {
    const todayShift = todayShiftByEmployee.get(employee.employeeId) || "";
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${employee.employeeId}</td>
      <td class="employee-name" data-employee="${employee.employeeId}">
        ${employee.names}
      </td>
      <td>${employee.costCenter || employee.department || ""}</td>
      <td>${formatDateForDisplay(employee.startDate)}</td>
      <td>${todayShift}</td>
      <td>${employee.status}</td>
    `;
    employeeTable.appendChild(row);
  });
};

const loadEmployeeProfiles = () => {
  try {
    const stored = localStorage.getItem(employeeProfileKey);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    return {};
  }
};

const saveEmployeeProfiles = (profiles) => {
  localStorage.setItem(employeeProfileKey, JSON.stringify(profiles));
};

const loadAttendanceSheetFromStorage = (fortnightValue) => {
  if (!fortnightValue) return {};
  try {
    const raw = localStorage.getItem(attendanceSheetStorageKey);
    const all = raw ? JSON.parse(raw) : {};
    return all[fortnightValue] || {};
  } catch (error) {
    return {};
  }
};

const loadAttendanceSheetManualFromServer = async () => {
  try {
    const response = await fetch(`${API_BASE}/api/attendance-sheet-manual`);
    if (response.ok) {
      const json = await response.json();
      return json?.data || {};
    }
  } catch (error) {
    // server offline or not running
  }
  return null;
};

/** Merged manual rows for one fortnight (server + localStorage; local wins). */
const getAttendanceManualFortnightMerged = async (fortnightValue) => {
  if (!fortnightValue) return {};
  const serverAll = (await loadAttendanceSheetManualFromServer()) || {};
  const serverPeriod =
    serverAll && typeof serverAll === "object" ? serverAll[fortnightValue] || {} : {};
  const localPeriod = loadAttendanceSheetFromStorage(fortnightValue) || {};
  return { ...serverPeriod, ...localPeriod };
};

const resolveRentAllowanceForFortnight = async (employee, fallbackOverride) => {
  const fortnight = payrollFortnight?.value || attendanceFortnight?.value || "";
  if (fortnight && fortnight.includes("_")) {
    const manual = await getAttendanceManualFortnightMerged(fortnight);
    const eid = String(employee.employeeId || "");
    const m = manual[eid]?.rentAllowance;
    if (m != null && m !== "" && Number.isFinite(Number(m))) return Number(m);
  }
  if (fallbackOverride != null && fallbackOverride !== "" && Number.isFinite(Number(fallbackOverride))) {
    return Number(fallbackOverride);
  }
  return Number(employee.rentAllowance) || 0;
};

/** DOM attendance sheet rows override saved manual JSON for the same fortnight. */
const resolveAttendanceSheetEntry = (employeeId, manualFortnight, domEntries) => {
  const eid = String(employeeId || "");
  if (domEntries && domEntries.length) {
    const fromDom = domEntries.find((e) => String(e.employeeId || "") === eid);
    if (fromDom) return fromDom;
  }
  const fromManual = manualFortnight[eid] ?? manualFortnight[employeeId];
  if (fromManual && typeof fromManual === "object") return fromManual;
  return null;
};

/**
 * Same payroll rows as Payroll tab (Load Logs): biometric table + logs for the fortnight,
 * merged with attendance-sheet-manual (and optional in-memory sheet rows).
 */
const buildPayrollRowsForFortnight = async (fortnightValue, domEntries = null) => {
  if (!fortnightValue || !fortnightValue.includes("_") || !employeesCache.length) return [];
  const range = getFortnightDateRange(fortnightValue);
  if (!range) return [];
  const rangeObj = {
    start: formatDateForStorage(range.startIso),
    end: formatDateForStorage(range.endIso),
  };
  const [tableRows, allLogs] = await Promise.all([
    loadAttendanceTableForPeriod(rangeObj),
    loadAllAttendanceLogsForPeriod(rangeObj),
  ]);
  const manualFortnight = await getAttendanceManualFortnightMerged(fortnightValue);

  const workByEmployeeDate = new Map();
  const overtimeByEmployeeDate = new Map();
  const resolveEmployeeId = (tableUserId) => {
    const uid = String(tableUserId || "").trim();
    if (!uid) return null;
    const match = employeesCache.find(
      (e) =>
        String(e.employeeId || "") === uid ||
        (Number(e.employeeId) === Number(uid) && !Number.isNaN(Number(uid)))
    );
    if (match) return String(match.employeeId || "");
    const numPart = uid.replace(/^[A-Za-z_-]+/, "") || uid;
    const numMatch = employeesCache.find(
      (e) =>
        String(e.employeeId || "") === numPart ||
        Number(e.employeeId) === Number(numPart)
    );
    return numMatch ? String(numMatch.employeeId || "") : uid;
  };
  tableRows.forEach((row) => {
    const tableUserId = String(row.userId || row.employeeId || "").trim();
    const empId = resolveEmployeeId(tableUserId) || tableUserId;
    const dateKey = toDateKey(row.date);
    if (!empId || !dateKey) return;
    const rawWork = parseFloat(row.work) || 0;
    const work = Math.min(rawWork, MAX_DAILY_HOURS);
    const overtime = parseFloat(row.overtime) || 0;
    workByEmployeeDate.set(`${empId}__${dateKey}`, work);
    overtimeByEmployeeDate.set(`${empId}__${dateKey}`, overtime);
  });

  const logsByEmployee = new Map();
  allLogs.forEach((log) => {
    if (!log?.employeeId) return;
    const empId = resolveEmployeeId(log.employeeId) || String(log.employeeId);
    if (!logsByEmployee.has(empId)) logsByEmployee.set(empId, []);
    logsByEmployee.get(empId).push(log);
  });
  const summariesFromLogs = [];
  logsByEmployee.forEach((entries, employeeId) => {
    summariesFromLogs.push(...calculateAttendanceSummary(entries));
  });
  summariesFromLogs.forEach((s) => {
    const dateKey = toDateKey(s.date);
    if (!dateKey) return;
    const empId = resolveEmployeeId(s.employeeId) || String(s.employeeId || "");
    const key = `${empId}__${dateKey}`;
    if (!workByEmployeeDate.has(key)) {
      const rawHours = s.totalHours || 0;
      const work = Math.min(rawHours, MAX_DAILY_HOURS);
      workByEmployeeDate.set(key, work);
      overtimeByEmployeeDate.set(key, 0);
    }
  });

  const dateKeys = range.dates?.map((d) => toDateKey(d.iso)).filter(Boolean) || [];
  const rows = [];
  employeesCache.forEach((employee) => {
    const employeeId = String(employee.employeeId || "");
    let totalWork = 0;
    let totalOvertime = 0;
    dateKeys.forEach((dk) => {
      totalWork += Number(workByEmployeeDate.get(`${employeeId}__${dk}`) || 0);
      totalOvertime += Number(overtimeByEmployeeDate.get(`${employeeId}__${dk}`) || 0);
    });
    const attEntryFromSheet = resolveAttendanceSheetEntry(employeeId, manualFortnight, domEntries);
    if (attEntryFromSheet && totalWork === 0) {
      totalWork = Number(attEntryFromSheet.totalWork || 0);
      totalOvertime = Number(attEntryFromSheet.totalOvertime || 0);
    }
    totalWork = Math.min(totalWork, MAX_FORTNIGHT_HOURS);

    const logs = logsByEmployee.get(employeeId) || [];
    const shift =
      attEntryFromSheet?.shift ||
      getShiftFromLogsForPeriod(logs) ||
      todayShiftByEmployee.get(employeeId) ||
      "";
    let dayValues = range.dates.map((d) => {
      const dk = toDateKey(d.iso);
      const v = dk ? (workByEmployeeDate.get(`${employeeId}__${dk}`) || 0) : 0;
      return v > 0 ? v.toFixed(2) : "";
    });
    if (
      attEntryFromSheet?.dayValues &&
      dayValues.every((v) => !v) &&
      attEntryFromSheet.dayValues.length > 0
    ) {
      dayValues = attEntryFromSheet.dayValues.map((v) =>
        v && parseFloat(v) > 0 ? String(parseFloat(v).toFixed(2)) : ""
      );
    }

    const manualOt = attEntryFromSheet ? Number(attEntryFromSheet.totalOvertime || 0) : totalOvertime;
    const manualPhDo = attEntryFromSheet ? Number(attEntryFromSheet.phDo || 0) : 0;
    const normalHours = Math.max(0, totalWork - manualOt - manualPhDo);
    const ccPay = (employee.costCenter || "").trim().toUpperCase();
    const hhsEligiblePay = ccPay === "H K" || ccPay === "HK" || ccPay === "POMEC";
    const sickDaysForHhs = attEntryFromSheet
      ? Number(attEntryFromSheet.sickDays ?? 0) || 0
      : 0;
    const hhsFormulaPay = calculateFormulaHhs(normalHours, sickDaysForHhs, hhsEligiblePay);
    let hhs;
    if (attEntryFromSheet != null) {
      const raw = attEntryFromSheet.hhs;
      if (raw != null && raw !== "" && Number.isFinite(Number(raw))) {
        hhs = Number(raw);
      } else {
        hhs = hhsFormulaPay;
      }
    } else {
      hhs = hhsFormulaPay;
    }
    const basicWage = Number(employee.basicWage || 0);
    const housingRate = Number(employee.hAllow || 0);
    const standardMetLeave = (basicWage + housingRate) * 0.25;
    const standardAnnualLeaveDays = 15;
    const calculatedConveyance = calculateConveyanceAllowanceForSpec(
      logs,
      dayValues,
      shift,
      basicWage,
      normalHours
    );

    const syntheticEntry = {
      costCenter:
        attEntryFromSheet && String(attEntryFromSheet.costCenter || "").trim().length > 0
          ? String(attEntryFromSheet.costCenter).trim()
          : employee.costCenter || employee.department || "",
      totalWork,
      totalOvertime: manualOt,
      phDo: manualPhDo,
      phPay: 0,
      arrears: attEntryFromSheet?.arrears ?? employee.arrears ?? 0,
      compass: attEntryFromSheet?.compass ?? employee.compass ?? 0,
      metLeave: attEntryFromSheet ? Number(attEntryFromSheet.metLeave || 0) : standardMetLeave,
      annualLeave: attEntryFromSheet
        ? Number(attEntryFromSheet.annualLeave || 0)
        : standardAnnualLeaveDays,
      sickDays: attEntryFromSheet ? Number(attEntryFromSheet.sickDays || 0) : 0,
      hhs,
      conveyanceAll: attEntryFromSheet
        ? Number(attEntryFromSheet.conveyanceAll || 0)
        : calculatedConveyance,
      voluntaryNpf: attEntryFromSheet?.voluntaryNpf ?? employee.voluntaryNpf ?? 0,
      rentAllowance: (() => {
        const m = manualFortnight[employeeId]?.rentAllowance;
        if (m != null && m !== "" && Number.isFinite(Number(m))) return Number(m);
        return Number(attEntryFromSheet?.rentAllowance ?? employee.rentAllowance ?? 0);
      })(),
      otherDeductions: (() => {
        const m = manualFortnight[employeeId]?.otherDeductions;
        if (m != null && m !== "" && Number.isFinite(Number(m))) return Number(m);
        return Number(employee.otherDeductions || 0);
      })(),
    };
    rows.push(buildPayrollFromAttendanceEntry(employee, syntheticEntry));
  });
  return rows;
};

const saveAttendanceSheetToStorage = (fortnightValue, data) => {
  if (!fortnightValue || !data) return;
  try {
    const raw = localStorage.getItem(attendanceSheetStorageKey);
    const all = raw ? JSON.parse(raw) : {};
    all[fortnightValue] = data;
    localStorage.setItem(attendanceSheetStorageKey, JSON.stringify(all));
    invalidateReportPivotCache();
    refreshDashboardPayrollIfVisible();
  } catch (error) {
    // ignore quota or parse errors
  }
};

const saveAttendanceSheetManualToServer = async (fortnightValue, data) => {
  if (!fortnightValue || !data) return;
  try {
    await fetch(`${API_BASE}/api/attendance-sheet-manual`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fortnightValue, data }),
    });
  } catch (error) {
    // server offline; localStorage still has the data
  }
};

let attendanceSheetSaveTimeout = null;
let payrollOtherDeductionSaveTimeout = null;
let payrollRentReloadTimeout = null;
let attendanceSheetCostCenterUpdating = false;
let attendanceSheetDataCache = null;
const debouncedSaveAttendanceSheet = () => {
  if (attendanceSheetSaveTimeout) clearTimeout(attendanceSheetSaveTimeout);
  attendanceSheetSaveTimeout = setTimeout(() => {
    attendanceSheetSaveTimeout = null;
    const value = attendanceSheetFortnight?.value || "";
    if (!value || !attendanceSheetTable) return;
    const prevPeriod = loadAttendanceSheetFromStorage(value) || {};
    const data = {};
    attendanceSheetTable.querySelectorAll("tr[data-employee-id]")?.forEach((tr) => {
      const eid = tr.dataset.employeeId || "";
      if (!eid) return;
      const prev = prevPeriod[eid] || {};
      const dayInputs = tr.querySelectorAll(".attendance-day-input");
      const dayValues = dayInputs ? Array.from(dayInputs).map((inp) => inp.value.trim() || "") : [];
      const otInput = tr.querySelector(".attendance-ot-input");
      const phDoInput = tr.querySelector(".attendance-phdo-input");
      const phPayInput = tr.querySelector(".attendance-phpay-input");
      const sickInput = tr.querySelector(".attendance-sick-input");
      const metInput = tr.querySelector(".attendance-metleave-input");
      const annInput = tr.querySelector(".attendance-annualleave-input");
      data[eid] = {
        ...prev,
        dayValues,
        totalOvertime: otInput ? (parseFloat(otInput.value) || 0) : 0,
        phDo: phDoInput ? phDoInput.value.trim() : "",
        phPay: phPayInput ? (parseFloat(phPayInput.value) || 0) : 0,
        sickDays: sickInput ? sickInput.value.trim() : "",
      metLeave: metInput ? (parseFloat(metInput.value) || 0) : 0,
      annualLeave: annInput ? (parseFloat(annInput.value) || 0) : 0,
    };
    const tierSelects = tr.querySelectorAll(".attendance-conveyance-tier-select");
    if (tierSelects.length === dayValues.length && dayValues.length > 0) {
      const conveyanceDayTiers = Array.from(tierSelects).map((s) => clampConveyanceTier(s.value));
      data[eid].conveyanceDayTiers = conveyanceDayTiers;
      const convInput = tr.querySelector(".attendance-conveyance-input");
      if (tr.dataset.conveyanceFixed === "1" && convInput) {
        data[eid].conveyanceAll = parseFloat(convInput.value) || 0;
        data[eid].conveyanceFixed = true;
      } else {
        data[eid].conveyanceAll = computeConveyanceFromDayTiersAndHours(
          dayValues,
          conveyanceDayTiers
        );
        delete data[eid].conveyanceFixed;
      }
    }
    const hhsInput = tr.querySelector(".attendance-hhs-input");
    if (hhsInput) data[eid].hhs = parseFloat(hhsInput.value) || 0;
    });
    if (Object.keys(data).length > 0) {
      saveAttendanceSheetToStorage(value, data);
      saveAttendanceSheetManualToServer(value, data);
    }
  }, 400);
};

const mergeProfiles = (employees, profiles) => {
  const merged = [];
  const seen = new Set();
  employees.forEach((employee) => {
    const profile = profiles[employee.employeeId] || {};
    merged.push({ ...employee, ...profile });
    seen.add(employee.employeeId);
  });
  Object.keys(profiles).forEach((id) => {
    if (!seen.has(id)) {
      merged.push({ employeeId: id, ...profiles[id] });
    }
  });
  return merged;
};

const isNonEmptyField = (v) => v != null && String(v).trim() !== "";

/**
 * After device sync, only fill profile gaps from the server payload — never overwrite
 * values already saved manually or merged from scripts/imports (localStorage wins).
 */
const saveProfilesFromDevice = (employees) => {
  const profiles = loadEmployeeProfiles();
  let changed = false;
  employees.forEach((employee) => {
    if (!employee?.employeeId) return;
    const id = String(employee.employeeId);
    const existing = profiles[employee.employeeId] || {};
    const cached =
      employeesCache.find((entry) => String(entry.employeeId) === id) || {};
    const next = { ...existing };
    const fillIfMissing = (key) => {
      if (isNonEmptyField(next[key])) return;
      if (isNonEmptyField(employee[key])) {
        next[key] = employee[key];
        changed = true;
        return;
      }
      if (isNonEmptyField(cached[key])) {
        next[key] = cached[key];
        changed = true;
      }
    };
    [
      "names",
      "costCenter",
      "startDate",
      "npf",
      "bsp",
      "basicWage",
      "hAllow",
      "basicSalary",
      "shift",
      "status",
      "arrears",
      "compass",
      "voluntaryNpf",
      "rentAllowance",
      "otherDeductions",
    ].forEach(fillIfMissing);
    profiles[employee.employeeId] = next;
  });
  if (changed) {
    saveEmployeeProfiles(profiles);
  }
  return profiles;
};

const updateEmployeeNameList = (employees) => {
  if (!employeeNameList) return;
  employeeNameList.innerHTML = "";
  employees.forEach((employee) => {
    if (!employee.names) return;
    const option = document.createElement("option");
    option.value = employee.names;
    option.dataset.employeeId = employee.employeeId;
    employeeNameList.appendChild(option);
  });
};

const updatePayrollEmployeeList = (employees) => {
  if (!payrollEmployeeList) return;
  payrollEmployeeList.innerHTML = "";
  employees.forEach((employee) => {
    if (!employee.names) return;
    const option = document.createElement("option");
    option.value = employee.names;
    option.dataset.employeeId = employee.employeeId;
    payrollEmployeeList.appendChild(option);
  });
};

const updateRosterEmployeeList = (employees) => {
  if (!rosterEmployeeList) return;
  rosterEmployeeList.innerHTML = "";
  employees.forEach((employee) => {
    if (!employee.names) return;
    const option = document.createElement("option");
    option.value = employee.names;
    option.dataset.employeeId = employee.employeeId;
    rosterEmployeeList.appendChild(option);
  });
};

const getEmployeeByName = (name) => {
  const normalized = name.trim().toLowerCase();
  if (!normalized) return null;
  return employeesCache.find((employee) =>
    employee.names?.toLowerCase().includes(normalized)
  );
};

const getEmployeeNameById = (employeeId) => {
  const match = employeesCache.find(
    (emp) => String(emp.employeeId ?? "") === String(employeeId ?? "")
  );
  return match ? match.names : "";
};

const showEmployeeForm = (employeeId) => {
  if (!employeeForm) return;
  employeeForm.classList.remove("section-hidden");
  const selected = employeesCache.find(
    (emp) => String(emp.employeeId ?? "") === String(employeeId ?? "")
  );
  if (selected) {
    populateEmployeeForm(selected);
  }
  const nameCells = document.querySelectorAll(".employee-name");
  nameCells.forEach((cell) => {
    if (cell.getAttribute("data-employee") === employeeId) {
      cell.classList.add("active");
    } else {
      cell.classList.remove("active");
    }
  });
};

const hideEmployeeForm = () => {
  if (!employeeForm) return;
  employeeForm.classList.add("section-hidden");
  const nameCells = document.querySelectorAll(".employee-name");
  nameCells.forEach((cell) => {
    cell.classList.remove("active");
  });
};

const updateAttendancePageInfo = (totalPages) => {
  if (!attendancePageInfo) return;
  attendancePageInfo.textContent = `Page ${attendancePage} of ${totalPages}`;
};

const parsePayrollCellNum = (v) => {
  const n = parseFloat(String(v ?? "").replace(/,/g, ""));
  return Number.isFinite(n) ? n : 0;
};

const buildPayrollTotalsFooterRow = (logs) => {
  const fmt = (n) => (Number(n) || 0).toFixed(2);
  const rowsByEid = new Map();
  attendanceTable?.querySelectorAll("tr[data-employee-id]").forEach((tr) => {
    rowsByEid.set(String(tr.dataset.employeeId || "").trim(), tr);
  });
  const numFromRowInput = (log, selector, fallback) => {
    const tr = rowsByEid.get(String(log.employeeId || "").trim());
    if (tr) {
      const inp = tr.querySelector(selector);
      if (inp) return parsePayrollCellNum(inp.value);
    }
    return parsePayrollCellNum(fallback);
  };
  const salaryForPeriodForLog = (log) => {
    const tr = rowsByEid.get(String(log.employeeId || "").trim());
    const totalEa = parsePayrollCellNum(log.totalEa);
    const vnPct = tr
      ? parsePayrollCellNum(tr.querySelector(".payroll-voluntarynpf-input")?.value)
      : parsePayrollCellNum(log.voluntaryNpfPct);
    const basicSalary = parsePayrollCellNum(log.basicSalary);
    const otherDedu = numFromRowInput(log, ".payroll-otherdedu-input", log.otherDedu);
    return computeSalaryForPeriod({
      totalEa,
      basicSalary,
      voluntaryNpfPct: vnPct,
      payeA: parsePayrollCellNum(log.payeA),
      otherDeductions: otherDedu,
    });
  };
  const sum = (getter) => logs.reduce((s, log) => s + parsePayrollCellNum(getter(log)), 0);
  const sumRent = () =>
    logs.reduce((s, log) => s + numFromRowInput(log, ".payroll-rent-input", log.rentA), 0);
  const sumOtherDedu = () =>
    logs.reduce((s, log) => s + numFromRowInput(log, ".payroll-otherdedu-input", log.otherDedu), 0);
  const sumVoluntaryN = () =>
    logs.reduce((s, log) => {
      const tr = rowsByEid.get(String(log.employeeId || "").trim());
      if (tr) {
        const vnInp = tr.querySelector(".payroll-voluntarynpf-input");
        if (vnInp) {
          const pct = parsePayrollCellNum(vnInp.value);
          const totalEa = parsePayrollCellNum(log.totalEa);
          return s + voluntaryNpfAmountFromPercent(totalEa, pct);
        }
      }
      return s + parsePayrollCellNum(log.voluntaryN);
    }, 0);
  const sumSalaryFor = () => logs.reduce((s, log) => s + salaryForPeriodForLog(log), 0);
  return `
    <tr class="payroll-totals-row">
      <td colspan="5" class="payroll-totals-label">Total</td>
      <td>${fmt(sum((log) => log.basicWage))}</td>
      <td>${fmt(sum((log) => log.housingAll))}</td>
      <td>${fmt(sum((log) => log.basicSalary))}</td>
      <td>${fmt(sum((log) => log.overTimeS))}</td>
      <td>${fmt(sum((log) => log.public))}</td>
      <td>${fmt(sum((log) => log.housingA))}</td>
      <td>${fmt(sumRent())}</td>
      <td>${fmt(sum((log) => log.taxableE))}</td>
      <td>${fmt(sum((log) => log.arrears))}</td>
      <td>${fmt(sum((log) => log.metLeave))}</td>
      <td>${fmt(sum((log) => log.annual))}</td>
      <td>${fmt(sum((log) => log.totalEa))}</td>
      <td>${fmt(sum((log) => log.npf5))}</td>
      <td>${fmt(sum((log) => log.npf75))}</td>
      <td title="Sum of voluntary NPF amounts (not percentages)">${fmt(sumVoluntaryN())}</td>
      <td>${fmt(sum((log) => log.payeA))}</td>
      <td>${fmt(sum((log) => log.basic1))}</td>
      <td>${fmt(sumOtherDedu())}</td>
      <td>${fmt(sumSalaryFor())}</td>
    </tr>
  `;
};

const refreshPayrollTotalsFooter = () => {
  if (!attendanceTableFoot || !attendanceLogs?.length) return;
  attendanceTableFoot.innerHTML = buildPayrollTotalsFooterRow(attendanceLogs);
  attendanceTableFoot.hidden = false;
};

const sortPayrollLogsForDisplay = (logs) =>
  [...logs].sort((a, b) => {
    const aId = String(a.employeeId || "").trim();
    const bId = String(b.employeeId || "").trim();
    const aNum = Number(aId);
    const bNum = Number(bId);
    const aNumeric = Number.isFinite(aNum) && aId !== "";
    const bNumeric = Number.isFinite(bNum) && bId !== "";
    if (aNumeric && bNumeric && aNum !== bNum) {
      return aNum - bNum;
    }
    return aId.localeCompare(bId, undefined, { numeric: true, sensitivity: "base" });
  });

const renderBankAdviceLoadLog = () => {
  if (!bankAdviceLoadLog || !bankAdviceLoadLogEmpty) return;
  if (bankAdviceSection?.classList.contains("section-hidden")) return;
  if (bankAdviceLoadLogEntries.length === 0) {
    bankAdviceLoadLog.innerHTML = "";
    bankAdviceLoadLogEmpty.hidden = false;
    return;
  }
  bankAdviceLoadLogEmpty.hidden = true;
  bankAdviceLoadLog.innerHTML = bankAdviceLoadLogEntries
    .map(
      (e) =>
        `<li>${escapeHtml(e.time)} — ${escapeHtml(e.label)} — ${e.rowCount} employee(s)</li>`
    )
    .join("");
};

const appendBankAdviceLoadLog = (periodLabel, rowCount) => {
  const time = new Date().toLocaleString();
  const entry = { time, label: periodLabel, rowCount };
  bankAdviceLoadLogEntries.unshift(entry);
  if (bankAdviceLoadLogEntries.length > BANK_ADVICE_LOAD_LOG_MAX) {
    bankAdviceLoadLogEntries.length = BANK_ADVICE_LOAD_LOG_MAX;
  }
  renderBankAdviceLoadLog();
};

const renderBankAdviceTable = () => {
  if (!bankAdviceTable) return;
  if (bankAdviceSection?.classList.contains("section-hidden")) return;
  const label = getBankAdviceFortnightLabelText();
  if (bankAdvicePeriod) {
    bankAdvicePeriod.textContent = label
      ? `Fortnight period: ${label}`
      : "Select a fortnight and click Load Logs.";
  }
  if (!attendanceLogs?.length) {
    bankAdviceTable.innerHTML = "";
    return;
  }
  const sorted = sortPayrollLogsForDisplay(attendanceLogs);
  const toValue = (value) => (value === 0 || value ? String(value) : "");
  bankAdviceTable.innerHTML = sorted
    .map(
      (log) => `
      <tr>
        <td>${toValue(log.employeeId)}</td>
        <td>${toValue(log.employeeName)}</td>
        <td>${toValue(log.bspAccount)}</td>
        <td>${toValue(log.salaryFor)}</td>
      </tr>`
    )
    .join("");
};

const downloadBankAdviceExcel = () => {
  if (typeof XLSX === "undefined") {
    alert("Excel library not loaded. Please refresh the page.");
    return;
  }
  if (!attendanceLogs?.length) {
    alert("No payroll data. Select a fortnight and click Load Logs.");
    return;
  }
  const period = getBankAdviceFortnightLabelText() || "fortnight";
  const sorted = sortPayrollLogsForDisplay(attendanceLogs);
  const wsData = [
    [`Fortnight period: ${period}`],
    [],
    ["Employee Id", "Employee Name", "BSP Account", "Salary for Period"],
    ...sorted.map((log) => [
      log.employeeId ?? "",
      log.employeeName ?? "",
      log.bspAccount ?? "",
      log.salaryFor ?? "",
    ]),
  ];
  const ws = XLSX.utils.aoa_to_sheet(wsData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Bank Advice");
  const safe = period.replace(/\s+/g, "_").replace(/[/\\?%*:|"<>]/g, "-");
  XLSX.writeFile(wb, `Bank_Advice_${safe}.xlsx`);
};

const renderAttendanceTable = () => {
  if (!attendanceTable) return;
  if (!attendanceLogs || attendanceLogs.length === 0) {
    if (biometricMessage) biometricMessage.textContent = "No payroll data. Sync employees and Load Logs.";
    attendanceTable.innerHTML = "";
    if (attendanceTableFoot) {
      attendanceTableFoot.innerHTML = "";
      attendanceTableFoot.hidden = true;
    }
    renderBankAdviceTable();
    return;
  }
  const totalPages = Math.max(1, attendanceTotalPages);
  attendancePage = Math.min(attendancePage, totalPages);
  const visibleLogs = sortPayrollLogsForDisplay(attendanceLogs);
  attendanceTable.innerHTML = "";
  visibleLogs.forEach((log) => {
    const toValue = (value) => (value === 0 || value ? String(value) : "");
    const vnPctDisplay = getVoluntaryNpfPctForDisplay(log);
    const row = document.createElement("tr");
    row.dataset.employeeId = toValue(log.employeeId);
    row.innerHTML = `
      <td>${toValue(log.employeeId)}</td>
      <td>${toValue(log.employeeName)}</td>
      <td>${toValue(log.costCenter)}</td>
      <td>${toValue(log.npfNumber)}</td>
      <td>${toValue(log.bspAccount)}</td>
      <td>${toValue(log.basicWage)}</td>
      <td>${toValue(log.housingAll)}</td>
      <td>${toValue(log.basicSalary)}</td>
      <td>${toValue(log.overTimeS)}</td>
      <td>${toValue(log.public)}</td>
      <td>${toValue(log.housingA)}</td>
      <td><input type="number" class="payroll-rent-input" data-employee-id="${toValue(log.employeeId)}" value="${toValue(log.rentA)}" placeholder="0" min="0" step="0.01" size="6" title="Rent allowance (manual; included in taxable earning; saved per fortnight)" /></td>
      <td>${toValue(log.taxableE)}</td>
      <td>${toValue(log.arrears)}</td>
      <td>${toValue(log.metLeave)}</td>
      <td>${toValue(log.annual)}</td>
      <td>${toValue(log.totalEa)}</td>
      <td>${toValue(log.npf5)}</td>
      <td>${toValue(log.npf75)}</td>
      <td><input type="number" class="payroll-voluntarynpf-input" data-employee-id="${toValue(log.employeeId)}" value="${vnPctDisplay === 0 ? "" : vnPctDisplay}" placeholder="0" min="0" max="100" step="0.01" size="6" title="Voluntary NPF: enter % of total earning (e.g. 5 = 5%). Amount = total earning × % ÷ 100." /></td>
      <td>${toValue(log.payeA)}</td>
      <td>${toValue(log.basic1)}</td>
      <td><input type="number" class="payroll-otherdedu-input" data-employee-id="${toValue(log.employeeId)}" value="${toValue(log.otherDedu)}" placeholder="0" min="0" step="0.01" size="6" title="Other deductions (manual; saved per fortnight)" /></td>
      <td class="payroll-salaryfor-cell">${toValue(log.salaryFor)}</td>
    `;
    attendanceTable.appendChild(row);
  });
  refreshPayrollTotalsFooter();
  updateAttendancePageInfo(totalPages);
  renderBankAdviceTable();
};

const parseLogTimestamp = (log) => {
  if (!log?.date || !log?.time) return null;
  let year;
  let month;
  let day;
  const isoMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(log.date);
  const dmyMatch = /^(\d{2})-(\d{2})-(\d{4})$/.exec(log.date);
  if (isoMatch) {
    [, year, month, day] = isoMatch;
  } else if (dmyMatch) {
    [, day, month, year] = dmyMatch;
  } else {
    return null;
  }
  const timeParts = log.time.split(":").map(Number);
  if (timeParts.length < 2) return null;
  const [hour, minute, second = 0] = timeParts;
  return new Date(Number(year), Number(month) - 1, Number(day), hour, minute, second);
};

const calculateAttendanceSummary = (logs) => {
  const grouped = new Map();
  logs.forEach((log) => {
    const key = `${log.employeeId}__${log.date}`;
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key).push(log);
  });

  const summaries = [];
  grouped.forEach((entries, key) => {
    const [employeeId, date] = key.split("__");
    const sorted = entries
      .map((log) => ({ ...log, ts: parseLogTimestamp(log) }))
      .filter((log) => log.ts)
      .sort((a, b) => a.ts - b.ts);

    let totalMinutes = 0;
    let openIn = null;

    sorted.forEach((log) => {
      const state = (log.inOut || "").toLowerCase();
      if (state.includes("in") && !state.includes("out")) {
        openIn = log;
        return;
      }
      if (state.includes("out") && openIn) {
        const diff = Math.max(0, (log.ts - openIn.ts) / 60000);
        totalMinutes += diff;
        openIn = null;
      }
    });

    const totalHours = totalMinutes / 60;
    summaries.push({
      employeeId,
      date,
      totalHours,
      totalMinutes,
    });
  });

  return summaries;
};

const loadAttendanceSummaryTimes = async () => {
  try {
    const params = new URLSearchParams();
    if (attendanceFilterEmployeeId) {
      params.set("employeeId", attendanceFilterEmployeeId);
    }
    if (attendanceFilterFrom) {
      params.set("from", attendanceFilterFrom);
    }
    if (attendanceFilterTo) {
      params.set("to", attendanceFilterTo);
    }
    const response = await fetch(
      `${API_BASE}/api/biometric/attendance/summary?${params.toString()}`
    );
    const result = await response.json();
    if (response.ok && result.status === "success") {
      attendanceSummaryRows = result.summaries || [];
    } else {
      attendanceSummaryRows = [];
    }
  } catch (error) {
    attendanceSummaryRows = [];
  }
};

const populateEmployeeForm = (employee) => {
  if (!employeeForm || !employee) return;
  employeeIdInput.value = employee.employeeId || "";
  employeeNameInput.value = employee.names || "";
  employeeCostCenterInput.value =
    employee.costCenter || employee.department || "";
  employeeStartDateInput.value = formatDateForInput(employee.startDate || "");
  employeeNPFInput.value = employee.npf || "";
  employeeBSPInput.value = employee.bsp || "";
  employeeBasicWageInput.value = employee.basicWage || "";
  employeeBasicSalaryInput.value = employee.basicSalary || "";
  employeeStatusInput.value = employee.status || "Active";
  employeeShiftInput.value = employee.shift || "";
};

const saveEmployeeProfile = () => {
  const employeeId = employeeIdInput.value.trim();
  const profiles = loadEmployeeProfiles();
  const existingProfile = profiles[employeeId] || {};
  const existingEmployee =
    employeesCache.find((emp) => String(emp.employeeId) === String(employeeId)) || {};
  const lockedNpf = existingProfile.npf || existingEmployee.npf || "";
  const lockedBsp = existingProfile.bsp || existingEmployee.bsp || "";
  const lockedBasicWage =
    existingProfile.basicWage || existingEmployee.basicWage || "";
  const lockedHousingRate =
    existingProfile.hAllow || existingEmployee.hAllow || "";

  const profile = {
    employeeId,
    names: employeeNameInput.value.trim(),
    costCenter: employeeCostCenterInput.value.trim(),
    startDate: formatDateForStorage(employeeStartDateInput.value),
    npf: lockedNpf,
    bsp: lockedBsp,
    basicWage: lockedBasicWage,
    hAllow: lockedHousingRate,
    basicSalary: employeeBasicSalaryInput.value.trim(),
    status: employeeStatusInput.value,
    shift: employeeShiftInput.value.trim(),
  };
  if (!profile.employeeId) {
    biometricMessage.textContent = "Employee ID is required.";
    return;
  }
  profiles[profile.employeeId] = profile;
  saveEmployeeProfiles(profiles);
  employeesCache = mergeProfiles(employeesCache, profiles);
  updateEmployeeNameList(employeesCache);
  updatePayrollEmployeeList(employeesCache);
  updateRosterEmployeeList(employeesCache);
  renderEmployeeTable(employeesCache);
  updateDashboardStats(employeesCache);
  invalidateReportPivotCache();
  refreshDashboardPayrollIfVisible();
  biometricMessage.textContent = "Employee saved.";
};

const getSelectedFortnightRange = () => {
  if (!payrollFortnight || !payrollFortnight.value) return null;
  const [startIso, endIso] = payrollFortnight.value.split("_");
  if (!startIso || !endIso) return null;
  return {
    start: formatDateForStorage(startIso),
    end: formatDateForStorage(endIso),
  };
};

const filterLogsByRange = (logs, employeeId, range) => {
  const fromKey = range?.start ? toDateKey(range.start) : null;
  const toKey = range?.end ? toDateKey(range.end) : null;
  return (logs || []).filter((log) => {
    if (employeeId && log.employeeId !== employeeId) return false;
    const logKey = toDateKey(log.date);
    if (fromKey && logKey && logKey < fromKey) return false;
    if (toKey && logKey && logKey > toKey) return false;
    return true;
  });
};

const loadPayrollAttendanceForPeriod = async (employeeId, range) => {
  const params = new URLSearchParams({
    employeeId,
    page: "1",
    pageSize: "10000",
  });
  if (range?.start) params.set("from", range.start);
  if (range?.end) params.set("to", range.end);
  try {
    const response = await fetch(
      `${API_BASE}/api/biometric/attendance?${params.toString()}`
    );
    const result = await response.json();
    if (response.ok && result.status === "success") {
      return result.logs || [];
    }
  } catch (error) {
    // fall through to local fallback
  }
  try {
    const response = await fetch("server/attendance-data.json");
    const logs = await response.json();
    return filterLogsByRange(logs, employeeId, range);
  } catch (error) {
    return [];
  }
};

const loadAllAttendanceLogsForPeriod = async (range) => {
  const params = new URLSearchParams({
    page: "1",
    pageSize: "100000",
  });
  if (range?.start) params.set("from", range.start);
  if (range?.end) params.set("to", range.end);
  try {
    const response = await fetch(
      `${API_BASE}/api/biometric/attendance?${params.toString()}`
    );
    const result = await response.json();
    if (response.ok && result.status === "success") {
      return result.logs || [];
    }
  } catch (error) {
    // fall through to local fallback
  }
  try {
    const response = await fetch("server/attendance-data.json");
    const logs = await response.json();
    return filterLogsByRange(logs, "", range);
  } catch (error) {
    return [];
  }
};

const loadAttendanceTableForPeriod = async (range) => {
  const params = new URLSearchParams({
    page: "1",
    pageSize: "100000",
  });
  if (range?.start) params.set("from", range.start);
  if (range?.end) params.set("to", range.end);
  try {
    const response = await fetch(
      `${API_BASE}/api/biometric/attendance/table?${params.toString()}`
    );
    const result = await response.json();
    if (response.ok && result.status === "success") {
      return result.rows || [];
    }
  } catch (error) {
    // fall through to local fallback
  }
  return [];
};

const toMinutes = (time) => {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
};

const pickShiftFromTime = (timeIn) => {
  const shifts = [
    { name: "Dawn", start: "04:30", end: "13:00" },
    { name: "Morning", start: "06:03", end: "15:00" },
    { name: "GS 1", start: "08:30", end: "17:00" },
    { name: "GS 2", start: "11:00", end: "19:30" },
    { name: "Afternoon", start: "14:30", end: "23:00" },
    { name: "Night", start: "22:00", end: "06:30" },
  ];
  const minutes = toMinutes(timeIn);
  let best = shifts[0];
  let bestDiff = Math.abs(minutes - toMinutes(best.start));
  shifts.forEach((shift) => {
    const diff = Math.abs(minutes - toMinutes(shift.start));
    if (diff < bestDiff) {
      best = shift;
      bestDiff = diff;
    }
  });
  return best.name;
};

const loadTodayShifts = async () => {
  const todayIso = new Date().toISOString().slice(0, 10);
  const todayKey = formatDateForStorage(todayIso);
  const params = new URLSearchParams({
    from: todayKey,
    to: todayKey,
    page: "1",
    pageSize: "10000",
  });
  let logs = [];
  try {
    const response = await fetch(
      `${API_BASE}/api/biometric/attendance?${params.toString()}`
    );
    const result = await response.json();
    if (response.ok && result.status === "success") {
      logs = result.logs || [];
    }
  } catch (error) {
    // fall back to local file
    try {
      const response = await fetch("server/attendance-data.json");
      const allLogs = await response.json();
      logs = filterLogsByRange(allLogs, "", { start: todayKey, end: todayKey });
    } catch (fallbackError) {
      logs = [];
    }
  }
  const grouped = new Map();
  logs.forEach((log) => {
    const key = log.employeeId;
    if (!grouped.has(key)) {
      grouped.set(key, log.time);
    } else {
      const existing = grouped.get(key);
      if (log.time < existing) {
        grouped.set(key, log.time);
      }
    }
  });
  const nextMap = new Map();
  grouped.forEach((timeIn, employeeId) => {
    nextMap.set(employeeId, pickShiftFromTime(timeIn));
  });
  todayShiftByEmployee = nextMap;
};

const calculateConveyanceAllowance = (logs, summaries, basicWage) => {
  if (!basicWage || basicWage <= 0) return 0;
  const byDay = new Map();
  logs.forEach((log) => {
    const key = `${log.employeeId}__${log.date}`;
    if (!byDay.has(key)) {
      byDay.set(key, { date: log.date, timeIn: log.time });
    } else {
      const entry = byDay.get(key);
      if (log.time < entry.timeIn) entry.timeIn = log.time;
    }
  });
  const summaryByDay = new Map();
  (summaries || []).forEach((s) => {
    summaryByDay.set(`${s.employeeId}__${s.date}`, s);
  });
  let allowance = 0;
  const standardHours = 8.5;
  byDay.forEach((entry, key) => {
    const summary = summaryByDay.get(key);
    if (!summary) return;
    const totalHours = summary.totalHours || 0;
    const otDay = Math.max(0, totalHours - standardHours);
    const normalDay = Math.max(0, totalHours - otDay);
    const shift = pickShiftFromTime(entry.timeIn);
    const rate = (shift === "GS 1" || shift === "GS 2") ? 0.3 : 0.15;
    allowance += basicWage * normalDay * rate;
  });
  return allowance;
};

const calculateConveyanceAllowanceForSpec = (logs, dayValues, shift, basicWage, normalHoursOverride) => {
  const wage = Number(basicWage || 0);
  const rate = (shift === "GS 1" || shift === "GS 2") ? 0.3 : 0.15;
  if (logs && logs.length > 0 && wage > 0) {
    const summaries = calculateAttendanceSummary(logs);
    return calculateConveyanceAllowance(logs, summaries, wage);
  }
  const normalHours = Number.isFinite(normalHoursOverride) ? normalHoursOverride : (() => {
    let sum = 0;
    (dayValues || []).forEach((v) => {
      const h = parseFloat(v) || 0;
      sum += Math.min(h, MAX_DAILY_HOURS);
    });
    return Math.min(sum, MAX_FORTNIGHT_HOURS);
  })();
  return wage > 0 ? wage * normalHours * rate : 0;
};

const buildPayrollMetrics = (employee, logs, overrides) => {
  const summaries = calculateAttendanceSummary(logs);
  const sortedSummaries = [...summaries].sort((a, b) =>
    a.date < b.date ? 1 : -1
  );
  const latest = sortedSummaries[0];
  const standardHours = 8.5;
  const totalMinutes = summaries.reduce(
    (sum, item) => sum + (item.totalMinutes || 0),
    0
  );
  const totalHours = totalMinutes / 60;
  const rate = Number(employee.basicWage || 0);
  const otHours = summaries.reduce(
    (sum, item) => sum + Math.max(0, (item.totalHours || 0) - standardHours),
    0
  );
  const isHoliday = overrides.publicHoliday === true;
  const otRate = rate * 1.5;
  const basePay = totalHours * rate;
  const otPay = isHoliday ? 0 : otHours * otRate;
  const phPay = isHoliday ? otHours * rate * 2 : 0;
  const housingRate = Number(overrides.housingRate || employee.hAllow || 0);
  const normalHours = Math.max(0, totalHours - otHours);
  const phHours = isHoliday ? otHours : 0;
  const housingAllowance = housingRate * (normalHours + otHours + phHours);
  const metLeave = (rate + housingRate) * 0.25;
  const costCenter = (employee.costCenter || "").toUpperCase();
  const hhsEligible =
    costCenter === "H K" || costCenter === "HK" || costCenter === "POMEC";
  const sickDaysForHhs = Number(overrides.sickDays ?? 0) || 0;
  const hhsAllowance = calculateFormulaHhs(totalHours, sickDaysForHhs, hhsEligible);
  const conveyanceAllowance = calculateConveyanceAllowance(logs, summaries, rate);
  const arrears = Number(overrides.arrears || 0);
  const compass = Number(overrides.compass || 0);
  const rentAllowance = Number(overrides.rentAllowance ?? employee.rentAllowance ?? 0) || 0;
  const taxableEarning =
    basePay +
    otPay +
    phPay +
    housingAllowance +
    rentAllowance +
    arrears +
    compass +
    metLeave +
    hhsAllowance +
    conveyanceAllowance;
  const annualLeaveDays = Number(overrides?.annualLeaveDays ?? 15) || 0;
  const annualLeaveAmount =
    ANNUAL_LEAVE_HOURS_PER_UNIT * (rate + housingRate) * annualLeaveDays;
  const totalEarning = taxableEarning + annualLeaveAmount;
  const npf5 = totalEarning * 0.05;
  const npf75 = totalEarning * 0.075;
  const basicRate1 = basePay * 0.01;
  const voluntaryNpfPct = Number(overrides.voluntaryNpf ?? employee.voluntaryNpf ?? 0) || 0;
  const voluntaryNpf = voluntaryNpfAmountFromPercent(totalEarning, voluntaryNpfPct);
  const otherDeductions = Number(overrides.otherDeductions || 0);
  const annualized = totalEarning * 26;
  let payeA = 0;
  if (totalEarning < 1156.92) {
    payeA = 0;
  } else if (totalEarning < 1733.86) {
    payeA = (annualized - 30080) * 0.11 / 26;
  } else if (totalEarning < 2310.78) {
    payeA = (annualized - 30080 - 15000) * 0.23 / 26 + 63.46;
  } else if (totalEarning < 3464.63) {
    payeA = (annualized - 30080 - 30000) * 0.35 / 26 + 63.46 + 132.69;
  } else {
    payeA =
      (annualized - 30080 - 60000) * 0.4 / 26 + 63.46 + 132.69 + 403.85;
  }
  const salaryForPeriod = computeSalaryForPeriod({
    totalEa: totalEarning,
    basicSalary: basePay,
    voluntaryNpfPct,
    payeA,
    otherDeductions,
  });

  return {
    latestDate: latest ? latest.date : "",
    totalHours,
    totalMinutes,
    rate,
    otHours,
    basePay,
    otPay,
    phPay,
    housingRate,
    housingAllowance,
    rentAllowance,
    metLeave,
    hhsAllowance,
    conveyanceAllowance,
    arrears,
    compass,
    taxableEarning,
    annualLeaveAmount,
    totalEarning,
    npf5,
    npf75,
    basicRate1,
    voluntaryNpf,
    voluntaryNpfPct,
    otherDeductions,
    payeA,
    salaryForPeriod,
  };
};

const getSelectedFortnightLabel = () => {
  const sel = payrollFortnight || attendanceFortnight;
  if (!sel) return "";
  const selected = sel.options[sel.selectedIndex];
  return selected ? selected.textContent.trim() : "";
};

const getBankAdviceFortnightLabelText = () => {
  if (bankAdviceFortnight?.value) {
    const opt = bankAdviceFortnight.options[bankAdviceFortnight.selectedIndex];
    return opt ? opt.textContent.trim() : "";
  }
  return getSelectedFortnightLabel();
};

const setPayslipValue = (element, value) => {
  if (!element) return;
  element.textContent = value;
};

/** Payslip PDF/CSV: rent allowance is rolled into housing (no separate rent line). */
const payslipHousingWithRent = (metrics) =>
  (Number(metrics?.housingAllowance) || 0) + (Number(metrics?.rentAllowance) || 0);

const buildPayslipLines = (employee, metrics) => [
  ["Heritage Park Hotel Limited", ""],
  ["P.O. Box 1598, Mendana Avenue, Honiara, Solomon Islands", ""],
  ["PAY SLIP ADVICE", ""],
  ["Employee Name", employee.names || ""],
  ["Employee ID", employee.employeeId || ""],
  ["Employment Start Date", formatDateForDisplay(employee.startDate || "")],
  ["Fortnight Period", getSelectedFortnightLabel()],
  ["Hours Worked", metrics.totalHours ? metrics.totalHours.toFixed(2) : "0.00"],
  ["Minutes Worked", Number.isFinite(metrics.totalMinutes) ? Math.round(metrics.totalMinutes).toString() : "0"],
  ["Basic Wage per Hour", metrics.rate ? metrics.rate.toFixed(2) : "0.00"],
  ["Housing Allowance per Hour", metrics.housingRate ? Number(metrics.housingRate).toFixed(2) : "0.00"],
  ["Basic Salary", metrics.basePay ? metrics.basePay.toFixed(2) : "0.00"],
  ["OT Hours", metrics.otHours ? metrics.otHours.toFixed(2) : "0.00"],
  ["OT Salary", metrics.otPay ? metrics.otPay.toFixed(2) : "0.00"],
  ["PH x 2", metrics.phPay ? metrics.phPay.toFixed(2) : "0.00"],
  ["Housing Allowance", payslipHousingWithRent(metrics).toFixed(2)],
  ["MET (Maternity Leave)", metrics.metLeave ? metrics.metLeave.toFixed(2) : "0.00"],
  ["HHS", metrics.hhsAllowance ? metrics.hhsAllowance.toFixed(2) : "0.00"],
  ["Conveyance Allowance", metrics.conveyanceAllowance ? metrics.conveyanceAllowance.toFixed(2) : "0.00"],
  ["Arrears", metrics.arrears ? Number(metrics.arrears).toFixed(2) : "0.00"],
  ["Taxable Earning", metrics.taxableEarning ? metrics.taxableEarning.toFixed(2) : "0.00"],
  ["Annual Leave", metrics.annualLeaveAmount ? metrics.annualLeaveAmount.toFixed(2) : "0.00"],
  ["Total Earning", metrics.totalEarning ? metrics.totalEarning.toFixed(2) : "0.00"],
  ["NPF 5%", metrics.npf5 ? metrics.npf5.toFixed(2) : "0.00"],
  ["NPF 7.5%", metrics.npf75 ? metrics.npf75.toFixed(2) : "0.00"],
  [
    "Voluntary NPF",
    metrics.voluntaryNpf
      ? Number(metrics.voluntaryNpf).toFixed(2) +
        (metrics.voluntaryNpfPct != null && Number(metrics.voluntaryNpfPct) > 0
          ? ` (${Number(metrics.voluntaryNpfPct).toFixed(2)}% of total earning)`
          : "")
      : "0.00",
  ],
  ["PAYE $ (A)", metrics.payeA ? metrics.payeA.toFixed(2) : "0.00"],
  ["Basic Rate 1%", metrics.basicRate1 ? metrics.basicRate1.toFixed(2) : "0.00"],
  ["Other Deductions", metrics.otherDeductions ? Number(metrics.otherDeductions).toFixed(2) : "0.00"],
  ["Salary for the Period", Number.isFinite(metrics.salaryForPeriod) ? metrics.salaryForPeriod.toFixed(2) : "0.00"],
];

const updatePayrollPreview = async () => {
  if (!payrollEmployeeName) return;
  const selected = getEmployeeByName(payrollEmployeeName.value);
  if (!selected) return;
  const range = getSelectedFortnightRange();
  const logs = await loadPayrollAttendanceForPeriod(selected.employeeId, range);
  if (payrollHousingAllowanceRateInput) {
    const existing = payrollHousingAllowanceRateInput.value.trim();
    if (!existing && selected.hAllow) {
      payrollHousingAllowanceRateInput.value = selected.hAllow;
    }
  }
  const voluntaryNpfOverride =
    payrollVoluntaryNpfInput?.value?.trim() !== ""
      ? payrollVoluntaryNpfInput.value
      : selected.voluntaryNpf ?? "";
  const rentAllowance = await resolveRentAllowanceForFortnight(selected, selected.rentAllowance);
  const metrics = buildPayrollMetrics(selected, logs, {
    publicHoliday: payrollPublicHoliday?.value === "yes",
    housingRate: payrollHousingAllowanceRateInput?.value,
    arrears: payrollArrearsInput?.value,
    compass: payrollCompassInput?.value,
    voluntaryNpf: voluntaryNpfOverride,
    rentAllowance,
    otherDeductions: payrollOtherDeductionsInput?.value,
  });
  if (payrollVoluntaryNpfInput) {
    payrollVoluntaryNpfInput.value =
      voluntaryNpfOverride !== "" && voluntaryNpfOverride != null
        ? String(voluntaryNpfOverride)
        : "";
  }
  payrollEmployeeId.value = selected.employeeId || "";
  payrollAttendanceDate.value = metrics.latestDate || "";
  payrollWorkedHours.value = Number.isFinite(metrics.totalHours)
    ? metrics.totalHours.toFixed(2)
    : "0.00";
  payrollWorkedMinutes.value = metrics.totalMinutes
    ? Math.round(metrics.totalMinutes).toString()
    : "0";
  payrollHourlyRate.value = selected.basicWage || "";
  payrollBasePay.value = metrics.basePay ? metrics.basePay.toFixed(2) : "";
  payrollOtHours.value = metrics.otHours ? metrics.otHours.toFixed(2) : "0.00";
  payrollOtPay.value = metrics.otPay ? metrics.otPay.toFixed(2) : "0.00";
  if (payrollPhPay) {
    payrollPhPay.value = metrics.phPay ? metrics.phPay.toFixed(2) : "0.00";
  }
  if (payrollHousingAllowance) {
    payrollHousingAllowance.value = metrics.housingAllowance
      ? metrics.housingAllowance.toFixed(2)
      : "0.00";
  }
  if (payrollMetLeave) {
    payrollMetLeave.value = metrics.metLeave ? metrics.metLeave.toFixed(2) : "0.00";
  }
  if (payrollHhsAllowance) {
    payrollHhsAllowance.value = metrics.hhsAllowance
      ? metrics.hhsAllowance.toFixed(2)
      : "0.00";
  }
  if (payrollConveyanceAllowance) {
    payrollConveyanceAllowance.value = metrics.conveyanceAllowance
      ? metrics.conveyanceAllowance.toFixed(2)
      : "0.00";
  }
  if (payrollBasicSalaryInput) {
    payrollBasicSalaryInput.value = metrics.basePay
      ? metrics.basePay.toFixed(2)
      : "0.00";
  }
  if (payrollOtSalaryInput) {
    payrollOtSalaryInput.value = metrics.otPay ? metrics.otPay.toFixed(2) : "0.00";
  }
  if (payrollPhPayInput) {
    payrollPhPayInput.value = metrics.phPay ? metrics.phPay.toFixed(2) : "0.00";
  }
  if (payrollPhx2Input) {
    payrollPhx2Input.value = metrics.phPay ? metrics.phPay.toFixed(2) : "0.00";
  }
  if (payrollMetLeaveInput) {
    payrollMetLeaveInput.value = metrics.metLeave
      ? metrics.metLeave.toFixed(2)
      : "0.00";
  }
  if (payrollTaxableEarningInput) {
    payrollTaxableEarningInput.value = metrics.taxableEarning
      ? metrics.taxableEarning.toFixed(2)
      : "0.00";
  }
  if (payrollAnnualLeaveInput) {
    payrollAnnualLeaveInput.value = metrics.annualLeaveAmount
      ? metrics.annualLeaveAmount.toFixed(2)
      : "0.00";
  }
  if (payrollTotalEarningInput) {
    payrollTotalEarningInput.value = metrics.totalEarning
      ? metrics.totalEarning.toFixed(2)
      : "0.00";
  }
  if (payrollNpf5Input) {
    payrollNpf5Input.value = metrics.npf5 ? metrics.npf5.toFixed(2) : "0.00";
  }
  if (payrollNpf75Input) {
    payrollNpf75Input.value = metrics.npf75 ? metrics.npf75.toFixed(2) : "0.00";
  }
  if (payrollPayeAInput) {
    payrollPayeAInput.value = metrics.payeA ? metrics.payeA.toFixed(2) : "0.00";
  }
  if (payrollBasicRate1Input) {
    payrollBasicRate1Input.value = metrics.basicRate1
      ? metrics.basicRate1.toFixed(2)
      : "0.00";
  }
  if (payrollSalaryPeriodInput) {
    payrollSalaryPeriodInput.value = Number.isFinite(metrics.salaryForPeriod)
      ? metrics.salaryForPeriod.toFixed(2)
      : "0.00";
  }

  setPayslipValue(payslipEmployeeName, selected.names || "");
  setPayslipValue(payslipEmployeeId, selected.employeeId || "");
  setPayslipValue(payslipStartDate, formatDateForDisplay(selected.startDate || ""));
  setPayslipValue(payslipFortnight, getSelectedFortnightLabel());
  setPayslipValue(
    payslipHoursWorked,
    Number.isFinite(metrics.totalHours) ? metrics.totalHours.toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipMinutesWorked,
    Number.isFinite(metrics.totalMinutes) ? Math.round(metrics.totalMinutes).toString() : "0"
  );
  setPayslipValue(
    payslipHourlyRate,
    metrics.rate ? metrics.rate.toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipHousingRate,
    metrics.housingRate ? Number(metrics.housingRate).toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipBasePay,
    metrics.basePay ? metrics.basePay.toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipOtHours,
    metrics.otHours ? metrics.otHours.toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipOtPay,
    metrics.otPay ? metrics.otPay.toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipPhPay,
    metrics.phPay ? metrics.phPay.toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipHousingAllowance,
    payslipHousingWithRent(metrics).toFixed(2)
  );
  setPayslipValue(payslipRentAllowance, "");
  setPayslipValue(
    payslipMetLeave,
    metrics.metLeave ? metrics.metLeave.toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipHhs,
    metrics.hhsAllowance ? metrics.hhsAllowance.toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipConveyance,
    metrics.conveyanceAllowance ? metrics.conveyanceAllowance.toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipArrears,
    metrics.arrears ? Number(metrics.arrears).toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipCompass,
    metrics.compass ? Number(metrics.compass).toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipTaxable,
    metrics.taxableEarning ? metrics.taxableEarning.toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipAnnualLeave,
    metrics.annualLeaveAmount ? metrics.annualLeaveAmount.toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipTotalEarning,
    metrics.totalEarning ? metrics.totalEarning.toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipNpf5,
    metrics.npf5 ? metrics.npf5.toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipNpf75,
    metrics.npf75 ? metrics.npf75.toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipVoluntaryNpf,
    metrics.voluntaryNpf ? Number(metrics.voluntaryNpf).toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipPayeA,
    metrics.payeA ? metrics.payeA.toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipBasicRate1,
    metrics.basicRate1 ? metrics.basicRate1.toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipOtherDeductions,
    metrics.otherDeductions ? Number(metrics.otherDeductions).toFixed(2) : "0.00"
  );
  setPayslipValue(
    payslipSalaryPeriod,
    Number.isFinite(metrics.salaryForPeriod)
      ? metrics.salaryForPeriod.toFixed(2)
      : "0.00"
  );
};

const loadRosterFromBackend = async () => {
  if (!rosterTable) return;
  const params = new URLSearchParams();
  if (rosterFilterEmployeeId) {
    params.set("employeeId", rosterFilterEmployeeId);
  }
  const fromValue = rosterFrom?.value || "";
  const toValue = rosterTo?.value || "";
  if (fromValue) params.set("from", fromValue);
  if (toValue) params.set("to", toValue);
  const response = await fetch(
    `${API_BASE}/api/biometric/roster?${params.toString()}`
  );
  const result = await response.json();
  if (response.ok && result.status === "success") {
    rosterTable.innerHTML = "";
    (result.roster || []).forEach((entry) => {
      const employeeName = getEmployeeNameById(entry.employeeId);
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${entry.employeeId}</td>
        <td>${employeeName || ""}</td>
        <td>${entry.date}</td>
        <td>${entry.timeIn}</td>
        <td>${entry.timeOut}</td>
        <td>${entry.shift}</td>
      `;
      rosterTable.appendChild(row);
    });
  }
};

const downloadBlob = (blob, filename) => {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(link.href);
  link.remove();
};

const PDF_LOGO_URL = "assets/Heritage_Park_Hotel_Logo__blue_-a340a593-ae1b-4c65-8813-4f78b79b6671.png";
let logoDataUrlCache = null;
let logoAspectRatioCache = null;

const loadLogoForPdf = () =>
  new Promise((resolve) => {
    if (logoDataUrlCache) {
      resolve({ data: logoDataUrlCache, aspectRatio: logoAspectRatioCache });
      return;
    }
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        logoDataUrlCache = canvas.toDataURL("image/png");
        logoAspectRatioCache = img.naturalWidth / img.naturalHeight;
      } catch (e) {
        logoDataUrlCache = null;
        logoAspectRatioCache = null;
      }
      resolve({ data: logoDataUrlCache, aspectRatio: logoAspectRatioCache });
    };
    img.onerror = () => {
      resolve({ data: null, aspectRatio: null });
    };
    img.src = PDF_LOGO_URL;
  });

const formatPdfLine = (line) => {
  const colonIdx = line.indexOf(": ");
  if (colonIdx === -1) return { label: line, value: "", isPair: false };
  const label = line.slice(0, colonIdx + 1);
  let value = line.slice(colonIdx + 2).trim();
  const num = parseFloat(String(value).replace(/,/g, ""));
  if (!Number.isNaN(num)) {
    value = num.toFixed(2);
  }
  return { label, value, isPair: true };
};

const buildPdfWithLogo = async (lines) => {
  if (typeof window === "undefined" || !window.jspdf) {
    const raw = buildMinimalPdfLegacy(lines);
    return new Blob([raw], { type: "application/pdf" });
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ format: "a4", unit: "pt" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginLeft = 40;
  const lineHeight = 12;
  const logoMaxWidth = 100;
  const logoTopMargin = 20;

  const { data: logoData, aspectRatio: logoAspect } = await loadLogoForPdf();
  let logoHeight = 0;
  if (logoData && logoAspect && logoAspect > 0) {
    const logoW = logoMaxWidth;
    logoHeight = logoW / logoAspect;
    const logoX = (pageWidth - logoW) / 2;
    doc.addImage(logoData, "PNG", logoX, logoTopMargin, logoW, logoHeight);
  }

  let y = logoTopMargin + logoHeight + 24;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const tabWidth = 12;
  const labelColumnWidth = 15 * tabWidth;

  for (let i = 0; i < lines.length; i++) {
    if (y > pageHeight - 40) {
      doc.addPage();
      if (logoData && logoAspect && logoAspect > 0) {
        const logoW = logoMaxWidth;
        const logoH = logoW / logoAspect;
        const logoX = (pageWidth - logoW) / 2;
        doc.addImage(logoData, "PNG", logoX, logoTopMargin, logoW, logoH);
        y = logoTopMargin + logoH + 24;
      } else {
        y = logoTopMargin + 24;
      }
    }
    const parsed = formatPdfLine(lines[i]);
    if (parsed.isPair && parsed.value !== "") {
      doc.text(parsed.label, marginLeft, y);
      doc.text(parsed.value, marginLeft + labelColumnWidth, y);
    } else {
      doc.text(parsed.label + parsed.value, marginLeft, y);
    }
    y += lineHeight;
  }

  return doc.output("blob");
};

const metricsFromPayrollLog = (log, employee) => {
  const n = (v) => parseFloat(String(v).replace(/,/g, "")) || 0;
  const rate = n(log.basicWage) || Number(employee.basicWage || 0);
  const basePay = n(log.basicSalary);
  const otPay = n(log.overTimeS);
  const phPay = n(log.public);
  const housingAllowance = n(log.housingA);
  const rentAllowance = n(log.rentA);
  const housingRate = n(log.housingAll) || Number(employee.hAllow || 0);
  const arrears = n(log.arrears);
  const compass = n(log.compassOf);
  const metLeave = n(log.metLeave);
  const hhsAllowance = n(log.hhs);
  const annualLeaveAmount = n(log.annual);
  const conveyanceAllowance = n(log.conveyance);
  const totalEarning = n(log.totalEa);
  const taxableEarning = n(log.taxableE);
  const normalHours = rate > 0 ? basePay / rate : 0;
  const otHours = rate > 0 ? otPay / (rate * 1.5) : 0;
  const totalHours = normalHours + otHours;
  const npf5 = totalEarning * 0.05;
  const npf75 = totalEarning * 0.075;
  const basicRate1 = basePay * 0.01;
  const voluntaryNpfPct = n(log.voluntaryNpfPct);
  const voluntaryNpf = voluntaryNpfAmountFromPercent(totalEarning, voluntaryNpfPct);
  const salaryForPeriod = computeSalaryForPeriod({
    totalEa: totalEarning,
    basicSalary: basePay,
    voluntaryNpfPct,
    payeA: n(log.payeA),
    otherDeductions: n(log.otherDedu),
  });
  return {
    rate,
    basePay,
    otHours,
    otPay,
    phPay,
    totalHours,
    housingRate,
    housingAllowance,
    rentAllowance,
    arrears,
    compass,
    metLeave,
    hhsAllowance,
    annualLeaveAmount,
    conveyanceAllowance,
    taxableEarning,
    totalEarning,
    npf5,
    npf75,
    voluntaryNpf,
    payeA: n(log.payeA),
    basicRate1,
    otherDeductions: n(log.otherDedu),
    sickDaysDed: n(log.sickDaysDed),
    compassionateDed: n(log.compassionateDed),
    metLeaveDed: n(log.metLeaveDed),
    annualLeaveDed: n(log.annualLeaveDed),
    salaryForPeriod,
  };
};

const addPayslipPageToDoc = (doc, employee, metrics, logoData, logoAspect, opts = {}) => {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const offsetX = opts.offsetX ?? 0;
  const columnWidth = opts.columnWidth ?? (pageWidth - 90);
  const isTwoPerPage = opts.columnWidth != null;

  const marginLeft = isTwoPerPage ? 12 : 45;
  const marginRight = isTwoPerPage ? 12 : 45;
  const contentWidth = columnWidth - marginLeft - marginRight;
  const lineHeight = isTwoPerPage ? 8 : 11;
  const logoMaxWidth = isTwoPerPage ? 45 : 70;
  const logoTopMargin = isTwoPerPage ? 10 : 18;
  const sectionGap = isTwoPerPage ? 8 : 14;
  const rowH = isTwoPerPage ? 9 : 13;

  const DARK_BLUE = [30, 58, 95];
  const LIGHT_BLUE = [179, 217, 242];

  if (!isTwoPerPage) {
    doc.setFillColor(...DARK_BLUE);
    doc.rect(0, 0, 28, 40, "F");
    doc.setFillColor(...LIGHT_BLUE);
    doc.rect(6, 6, 24, 34, "F");
    doc.setFillColor(...DARK_BLUE);
    doc.rect(pageWidth - 32, pageHeight - 45, 32, 45, "F");
    doc.setFillColor(...LIGHT_BLUE);
    doc.rect(pageWidth - 26, pageHeight - 38, 26, 38, "F");
  }

  const centerX = offsetX + columnWidth / 2;
  const baseX = offsetX + marginLeft;

  let logoHeight = 0;
  if (logoData && logoAspect && logoAspect > 0) {
    const logoW = logoMaxWidth;
    logoHeight = logoW / logoAspect;
    const logoX = centerX - logoW / 2;
    doc.addImage(logoData, "PNG", logoX, logoTopMargin, logoW, logoHeight);
  }

  let y = logoTopMargin + logoHeight + (isTwoPerPage ? 14 : 22);
  doc.setFontSize(isTwoPerPage ? 7 : 9);
  doc.setTextColor(...DARK_BLUE);
  doc.setFont("helvetica", "bold");
  doc.text("HERITAGE PARK", centerX, y, { align: "center" });
  y += isTwoPerPage ? 6 : 10;
  doc.setFontSize(isTwoPerPage ? 7 : 9);
  doc.text("HOTEL", centerX, y, { align: "center" });
  y += isTwoPerPage ? 6 : 10;
  doc.setFontSize(6);
  doc.setFont("helvetica", "normal");
  doc.text("HONIARA", centerX, y, { align: "center" });
  y += isTwoPerPage ? 12 : 18;
  doc.setFontSize(6);
  doc.setTextColor(80, 80, 80);
  doc.text("P.O. BOX 1598, MENDANA AVENUE, HONIARA, SOLOMON ISLANDS", centerX, y, { align: "center" });
  y += sectionGap + (isTwoPerPage ? 8 : 12);

  doc.setFontSize(isTwoPerPage ? 10 : 12);
  doc.setTextColor(...DARK_BLUE);
  doc.setFont("helvetica", "bold");
  doc.text("PAYSLIP", centerX, y, { align: "center" });
  y += isTwoPerPage ? 10 : 14;
  const fortnightPeriod = opts.fortnightPeriod || "";
  if (fortnightPeriod) {
    doc.setFontSize(isTwoPerPage ? 7 : 9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    doc.text(fortnightPeriod, centerX, y, { align: "center" });
    y += isTwoPerPage ? 8 : 10;
  }
  doc.setDrawColor(...DARK_BLUE);
  doc.setLineWidth(0.5);
  doc.line(baseX, y, baseX + contentWidth, y);
  y += sectionGap;

  doc.setFontSize(isTwoPerPage ? 6 : 8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  const empDetails = [
    ["EMPLOYEE NAME", (employee.names || "").toUpperCase()],
    ["EMPLOYEE ID", String(employee.employeeId || "")],
    ["COMMENCEMENT DATE", formatDateForDisplay(employee.startDate || "").toUpperCase()],
    ["COST CENTER", (employee.costCenter || employee.department || "").toUpperCase()],
    ["NPF NUMBER", (employee.npf || "").toUpperCase()],
    ["BSP ACCOUNT", String(employee.bsp || "")],
  ];
  doc.setFont("helvetica", "bold");
  const labelValueGap = 12 * doc.getTextWidth(" ");
  const maxLabelW = Math.max(...empDetails.map(([l]) => doc.getTextWidth(l + ": ")));
  const valueStartX = baseX + maxLabelW + labelValueGap;
  for (const [label, value] of empDetails) {
    doc.setFont("helvetica", "bold");
    doc.text(label + ":", baseX, y);
    doc.setFont("helvetica", "normal");
    doc.text(value, valueStartX, y);
    y += lineHeight;
  }
  y += sectionGap;

  const col1W = contentWidth * 0.72;
  const col2W = contentWidth * 0.28;
  const fmt = (v) => (v != null && Number.isFinite(v) ? Number(v).toFixed(2) : "0.00");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(isTwoPerPage ? 7 : 9);
  doc.setTextColor(...DARK_BLUE);
  doc.text("Earnings", baseX, y);
  y += isTwoPerPage ? 6 : 8;

  const earningsRows = [
    ["Basic wage per hour", fmt(metrics.rate)],
    ["Basic Salary", fmt(metrics.basePay)],
    ["OT Hours", fmt(metrics.otHours)],
    ["OT Salary", fmt(metrics.otPay)],
    ["Public Holiday Salary", fmt(metrics.phPay)],
    ["Total hours", fmt(metrics.totalHours)],
    ["Housing Allowance per hour", fmt(metrics.housingRate)],
    ["Housing Allowance", fmt(payslipHousingWithRent(metrics))],
    ["Arrears", fmt(metrics.arrears)],
    ["MET (Maternity Leave)", fmt(metrics.metLeave)],
    ["HHS", fmt(metrics.hhsAllowance)],
    ["Conveyance Allowance", fmt(metrics.conveyanceAllowance)],
    ["Annual Leave", fmt(metrics.annualLeaveAmount)],
    ["Taxable Earning", fmt(metrics.taxableEarning)],
    ["Total Earnings", fmt(metrics.totalEarning)],
  ];

  doc.setFillColor(...LIGHT_BLUE);
  doc.rect(baseX, y, col1W, rowH, "F");
  doc.rect(baseX + col1W, y, col2W, rowH, "F");
  doc.setTextColor(...DARK_BLUE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(isTwoPerPage ? 6 : 8);
  doc.text("Description", baseX + 4, y + (isTwoPerPage ? 6 : 9));
  doc.text("Amount", baseX + col1W + 4, y + (isTwoPerPage ? 6 : 9));
  y += rowH;

  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(isTwoPerPage ? 6 : 8);
  for (const [desc, amt] of earningsRows) {
    doc.text(desc, baseX + 4, y + (isTwoPerPage ? 6 : 9));
    doc.text(amt, baseX + col1W + 4, y + (isTwoPerPage ? 6 : 9));
    doc.setDrawColor(220, 220, 220);
    doc.line(baseX, y + rowH, baseX + contentWidth, y + rowH);
    y += rowH;
  }
  y += sectionGap;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(isTwoPerPage ? 7 : 9);
  doc.setTextColor(...DARK_BLUE);
  doc.text("Deductions", baseX, y);
  y += isTwoPerPage ? 6 : 8;

  const deductionsRows = [
    ["NPF 5%", fmt(metrics.npf5)],
    ["NPF 7.5%", fmt(metrics.npf75)],
    ["Voluntary NPF", fmt(metrics.voluntaryNpf)],
    ["PAYE $ (A)", fmt(metrics.payeA)],
    ["Basic Rate 1%", fmt(metrics.basicRate1)],
    ["Sick Days", fmt(metrics.sickDaysDed)],
    ["MET Leave", fmt(metrics.metLeaveDed)],
    ["Annual Leave", fmt(metrics.annualLeaveDed)],
    ["Other Deductions", fmt(metrics.otherDeductions)],
  ];

  doc.setFillColor(...LIGHT_BLUE);
  doc.rect(baseX, y, col1W, rowH, "F");
  doc.rect(baseX + col1W, y, col2W, rowH, "F");
  doc.setFontSize(isTwoPerPage ? 6 : 8);
  doc.text("Description", baseX + 4, y + (isTwoPerPage ? 6 : 9));
  doc.text("Amount", baseX + col1W + 4, y + (isTwoPerPage ? 6 : 9));
  y += rowH;

  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  for (const [desc, amt] of deductionsRows) {
    doc.text(desc, baseX + 4, y + (isTwoPerPage ? 6 : 9));
    doc.text(amt, baseX + col1W + 4, y + (isTwoPerPage ? 6 : 9));
    doc.setDrawColor(220, 220, 220);
    doc.line(baseX, y + rowH, baseX + contentWidth, y + rowH);
    y += rowH;
  }
  y += sectionGap;

  /** Employee deductions only (matches Salary for the Period; NPF 7.5% is not net pay deduction). */
  const totalDeductions =
    (metrics.npf5 || 0) +
    Number(metrics.voluntaryNpf || 0) +
    (metrics.payeA || 0) +
    (metrics.basicRate1 || 0) +
    Number(metrics.otherDeductions || 0);

  doc.setDrawColor(...DARK_BLUE);
  doc.setLineWidth(0.3);
  const summaryItems = [
    ["Total Earnings", fmt(metrics.totalEarning)],
    ["Total Deductions", totalDeductions.toFixed(2)],
    ["Salary for the Period", fmt(metrics.salaryForPeriod)],
  ];
  for (const [label, value] of summaryItems) {
    doc.line(baseX, y, baseX + contentWidth, y);
    y += isTwoPerPage ? 3 : 4;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(isTwoPerPage ? 7 : 9);
    doc.text(label, baseX, y + (isTwoPerPage ? 6 : 8));
    doc.text(value, baseX + col1W, y + (isTwoPerPage ? 6 : 8));
    y += isTwoPerPage ? 10 : 14;
  }
  doc.line(baseX, y, baseX + contentWidth, y);
};

const buildPayslipPdf = async (employee, metrics) => {
  if (typeof window === "undefined" || !window.jspdf) {
    const lines = buildPayslipLines(employee, metrics).map(
      ([label, value]) => (value ? `${label}: ${value}` : label)
    );
    const raw = buildMinimalPdfLegacy(lines);
    return new Blob([raw], { type: "application/pdf" });
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ format: "a4", unit: "pt" });
  const { data: logoData, aspectRatio: logoAspect } = await loadLogoForPdf();
  addPayslipPageToDoc(doc, employee, metrics, logoData, logoAspect, {
    fortnightPeriod: getSelectedFortnightLabel(),
  });
  return doc.output("blob");
};

const buildPayslipPdfAll = async (entries) => {
  if (typeof window === "undefined" || !window.jspdf || !entries.length) {
    return new Blob([], { type: "application/pdf" });
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ format: "a4", unit: "pt", orientation: "l" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const colGap = 20;
  const columnWidth = (pageWidth - colGap * 3) / 2;

  const { data: logoData, aspectRatio: logoAspect } = await loadLogoForPdf();
  const fortnightPeriod = getSelectedFortnightLabel();

  entries.forEach(({ employee, metrics }, i) => {
    const colIndex = i % 2;
    if (colIndex === 0 && i > 0) {
      doc.addPage("a4", "l");
    }
    const offsetX = colGap + colIndex * (columnWidth + colGap);
    addPayslipPageToDoc(doc, employee, metrics, logoData, logoAspect, {
      offsetX,
      columnWidth,
      fortnightPeriod,
    });
  });
  return doc.output("blob");
};

const buildMinimalPdfLegacy = (lines) => {
  const pageWidth = 612;
  const pageHeight = 792;
  const marginLeft = 32;
  const startY = 770;
  const lineHeight = 11;
  const linesPerPage = Math.floor((startY - 40) / lineHeight);
  const pages = [];
  for (let i = 0; i < lines.length; i += linesPerPage) {
    pages.push(lines.slice(i, i + linesPerPage));
  }
  const objects = [];
  const offsets = [];
  const addObject = (content) => {
    offsets.push(objects.join("").length);
    objects.push(content);
  };
  const escapePdf = (text) =>
    text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  addObject("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
  addObject(
    `2 0 obj\n<< /Type /Pages /Kids [${pages.map((_, i) => `${3 + i * 2} 0 R`).join(" ")}] /Count ${pages.length} >>\nendobj\n`
  );
  pages.forEach((pageLines, index) => {
    const pageObj = 3 + index * 2;
    const contentObj = pageObj + 1;
    addObject(
      `${pageObj} 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Contents ${contentObj} 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n`
    );
    const escaped = pageLines.map((line) => `(${escapePdf(line)}) Tj T*`);
    const stream = `BT\n/F1 9 Tf\n${lineHeight} TL\n1 0 0 1 ${marginLeft} ${startY} Tm\n${escaped.join("\n")}\nET`;
    addObject(`${contentObj} 0 obj\n<< /Length ${stream.length} >>\nstream\n${stream}\nendstream\nendobj\n`);
  });
  addObject("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n");
  const xrefStart = objects.join("").length;
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.forEach((offset) => {
    xref += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
  return `%PDF-1.3\n${objects.join("")}${xref}${trailer}`;
};

const buildPayrollMetricsList = async (employees, overrides) => {
  const range = getSelectedFortnightRange();
  const results = [];
  for (const employee of employees) {
    const logs = await loadPayrollAttendanceForPeriod(employee.employeeId, range);
    const rentAllowance = await resolveRentAllowanceForFortnight(
      employee,
      overrides?.rentAllowance ?? employee.rentAllowance
    );
    const metrics = buildPayrollMetrics(employee, logs, { ...overrides, rentAllowance });
    results.push({ employee, metrics });
  }
  return results;
};

const buildPayrollReportRows = async (employees, overrides) => {
  const rows = [];
  const entries = await buildPayrollMetricsList(employees, overrides);
  entries.forEach(({ employee, metrics }) => {
    rows.push([
      employee.employeeId || "",
      employee.names || "",
      metrics.latestDate || "",
      metrics.totalHours ? metrics.totalHours.toFixed(2) : "0.00",
      metrics.basePay ? metrics.basePay.toFixed(2) : "0.00",
      metrics.otPay ? metrics.otPay.toFixed(2) : "0.00",
      metrics.phPay ? metrics.phPay.toFixed(2) : "0.00",
      metrics.housingAllowance ? metrics.housingAllowance.toFixed(2) : "0.00",
      metrics.rentAllowance ? Number(metrics.rentAllowance).toFixed(2) : "0.00",
      metrics.arrears ? Number(metrics.arrears).toFixed(2) : "0.00",
      metrics.metLeave ? metrics.metLeave.toFixed(2) : "0.00",
      metrics.hhsAllowance ? metrics.hhsAllowance.toFixed(2) : "0.00",
      metrics.conveyanceAllowance
        ? metrics.conveyanceAllowance.toFixed(2)
        : "0.00",
      metrics.taxableEarning ? metrics.taxableEarning.toFixed(2) : "0.00",
      metrics.annualLeaveAmount ? metrics.annualLeaveAmount.toFixed(2) : "0.00",
      metrics.totalEarning ? metrics.totalEarning.toFixed(2) : "0.00",
      metrics.npf5 ? metrics.npf5.toFixed(2) : "0.00",
      metrics.npf75 ? metrics.npf75.toFixed(2) : "0.00",
      metrics.voluntaryNpf ? Number(metrics.voluntaryNpf).toFixed(2) : "0.00",
      metrics.payeA ? metrics.payeA.toFixed(2) : "0.00",
      metrics.basicRate1 ? metrics.basicRate1.toFixed(2) : "0.00",
      metrics.otherDeductions
        ? Number(metrics.otherDeductions).toFixed(2)
        : "0.00",
      Number.isFinite(metrics.salaryForPeriod)
        ? metrics.salaryForPeriod.toFixed(2)
        : "0.00",
    ]);
  });
  return rows;
};

const getPayrollHeaders = () => [
  "Employee ID",
  "Employee Name",
  "Latest Attendance Date",
  "Hours Worked",
  "Basic Salary",
  "OT Salary",
  "PH x 2",
  "Housing Allowance",
  "Rent Allowance",
  "Arrears",
  "MET Leave",
  "HHS",
  "Conveyance Allowance",
  "Taxable Earning",
  "Annual Leave",
  "Total Earning",
  "NPF 5%",
  "NPF 7.5%",
  "Voluntary NPF",
  "PAYE $ (A)",
  "Basic Rate 1%",
  "Other Deductions",
  "Salary for the Period",
];

const getPayrollPageHeaders = () => [
  "Employee Id",
  "Employee Name",
  "Cost Center",
  "NPF Number",
  "BSP Account",
  "Basic Wage/hr",
  "Housing all/hr",
  "Basic Salary",
  "OT Salary",
  "PH x 2",
  "Housing Allowance",
  "Rent Allowance",
  "Taxable Earning (A)",
  "Arrears",
  "MET Leave",
  "Annual Leave",
  "Total Earning",
  "NPF 5%",
  "NPF 7.5%",
  "Voluntary NPF",
  "Pay E (A)",
  "Basic 1%",
  "Other Dedu",
  "Salary for Period",
];

const buildPayrollPageRow = (entry) => [
  entry.employeeId || "",
  entry.employeeName || "",
  entry.costCenter || "",
  entry.npfNumber || "",
  entry.bspAccount || "",
  entry.basicWage || "",
  entry.housingAll || "",
  entry.basicSalary || "",
  entry.overTimeS || "",
  entry.public || "",
  entry.housingA || "",
  entry.rentA || "",
  entry.taxableE || "",
  entry.arrears || "",
  entry.metLeave || "",
  entry.annual || "",
  entry.totalEa || "",
  entry.npf5 || "",
  entry.npf75 || "",
  entry.voluntaryN || "",
  entry.payeA || "",
  entry.basic1 || "",
  entry.otherDedu || "",
  entry.salaryFor || "",
];

const getAttendanceSheetHeaders = () => getPayrollPageHeaders();
const buildAttendanceSheetRow = (entry) => buildPayrollPageRow(entry);

const downloadAttendanceSheetCsv = (entry) => {
  const headers = getAttendanceSheetHeaders();
  const row = buildAttendanceSheetRow(entry);
  const escape = (value) => `"${String(value).replace(/"/g, '""')}"`;
  const lines = [headers.map(escape).join(","), row.map(escape).join(",")];
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
  const id = entry.employeeId || "employee";
  downloadBlob(blob, `attendance-sheet-${id}.csv`);
};

const downloadAllAttendanceLogsExcel = () => {
  if (!attendanceLogs || attendanceLogs.length === 0) {
    alert("No logs loaded. Click 'Load Logs' first.");
    return;
  }
  const headers = getAttendanceSheetHeaders();
  const escape = (value) => `"${String(value).replace(/"/g, '""')}"`;
  const lines = [headers.map(escape).join(",")];
  attendanceLogs.forEach((entry) => {
    const row = buildAttendanceSheetRow(entry);
    lines.push(row.map(escape).join(","));
  });
  const csv = lines.join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const period = attendanceFortnight?.value || "logs";
  downloadBlob(blob, `attendance-logs-all-${period}.csv`);
};

const downloadAttendanceSheetPdf = async (entry) => {
  const headers = getAttendanceSheetHeaders();
  const row = buildAttendanceSheetRow(entry);
  const lines = [
    "Attendance Sheet",
    `Generated: ${new Date().toLocaleString()}`,
    "",
  ];
  headers.forEach((header, idx) => {
    lines.push(`${header}: ${row[idx]}`);
  });
  const blob = await buildPdfWithLogo(lines);
  const id = entry.employeeId || "employee";
  downloadBlob(blob, `attendance-sheet-${id}.pdf`);
};

const buildAttendanceSheetEntryRow = (entry) => {
  const asM = (v) => (Number(v) || 0).toFixed(2);
  return [
    entry.employeeId || "",
    entry.names || "",
    entry.costCenter || "",
    ...(entry.dayValues || []),
    asM(entry.totalWork),
    asM(entry.totalOvertime),
    asM(entry.housingRate),
    asM(entry.basePay),
    asM(entry.otPay),
    asM(entry.phPay),
    asM(entry.housingAllowance),
    asM(entry.hhs),
    asM(entry.conveyanceAll),
    asM(entry.arrears),
    asM(entry.metLeave),
    asM(entry.taxableEarning),
    asM(entry.annualLeave),
    asM(entry.totalEarning),
    asM(entry.npf5),
    asM(entry.npf75),
    asM(entry.voluntaryNpf),
    asM(entry.payeA),
    asM(entry.basicRate1),
    asM(entry.otherDeductions),
    asM(entry.salaryForPeriod),
  ];
};

const getAttendanceSheetEntryHeaders = (entry) => [
  "Employee ID",
  "Employee Names",
  "Cost Center",
  ...(entry.dates || []).map((d) => `${d.dayName} ${d.dateLabel}`),
  "Total",
  "OT",
  "Housing all/hr",
  "Basic Salary",
  "OT Salary",
  "PH x2",
  "Housing A",
  "HHS",
  "Conveyance",
  "Arrears",
  "MET Leave",
  "Taxable E",
  "Annual Leave",
  "Total Earning",
  "NPF 5%",
  "NPF 7.5%",
  "Voluntary NPF",
  "PAYE (A)",
  "Basic 1%",
  "Other Dedu",
  "Salary for Period",
];

const downloadAttendanceSheetByCostCenterExcel = () => {
  if (!attendanceSheetTable) return;
  const rows = attendanceSheetTable.querySelectorAll("tr[data-employee-id]");
  if (!rows || rows.length === 0) {
    alert("No attendance data loaded. Select a fortnight and click Load Attendance first.");
    return;
  }
  const entries = Array.from(rows).map((row) => buildAttendanceEntryFromRow(row));
  if (entries.length === 0) return;
  const firstEntry = entries[0];
  const headers = getAttendanceSheetEntryHeaders(firstEntry);
  const escape = (value) => `"${String(value).replace(/"/g, '""')}"`;
  const lines = [headers.map(escape).join(",")];
  entries.forEach((entry) => {
    const row = buildAttendanceSheetEntryRow(entry);
    lines.push(row.map(escape).join(","));
  });
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
  const costCenter = attendanceSheetCostCenter?.value?.trim() || "all";
  const period = attendanceSheetFortnight?.value || "logs";
  const safeCc = costCenter.replace(/[^a-zA-Z0-9_-]/g, "_");
  downloadBlob(blob, `attendance-${safeCc}-${period}.csv`);
};

const downloadAttendanceSheetEntryPdf = async (entry) => {
  const asM = (v) => (Number(v) || 0).toFixed(2);
  const lines = [
    "Attendance Sheet",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    `Employee ID: ${entry.employeeId || ""}`,
    `Employee Names: ${entry.names || ""}`,
    `Cost Center: ${entry.costCenter || ""}`,
    "",
    `Total: ${asM(entry.totalWork)}`,
    `OT: ${asM(entry.totalOvertime)}`,
    `Housing all/hr: ${asM(entry.housingRate)}`,
    `Basic Salary: ${asM(entry.basePay)}`,
    `OT Salary: ${asM(entry.otPay)}`,
    `PH x2: ${asM(entry.phPay)}`,
    `Housing A: ${asM(entry.housingAllowance)}`,
    `HHS: ${asM(entry.hhs)}`,
    `Conveyance: ${asM(entry.conveyanceAll)}`,
    `Arrears: ${asM(entry.arrears)}`,
    `MET Leave: ${asM(entry.metLeave)}`,
    `Taxable E: ${asM(entry.taxableEarning)}`,
    `Annual Leave: ${asM(entry.annualLeave)}`,
    `Total Earning: ${asM(entry.totalEarning)}`,
    `NPF 5%: ${asM(entry.npf5)}`,
    `NPF 7.5%: ${asM(entry.npf75)}`,
    `Voluntary NPF: ${asM(entry.voluntaryNpf)}`,
    `PAYE (A): ${asM(entry.payeA)}`,
    `Basic 1%: ${asM(entry.basicRate1)}`,
    `Other Dedu: ${asM(entry.otherDeductions)}`,
    `Salary for Period: ${asM(entry.salaryForPeriod)}`,
    "",
  ];
  (entry.dates || []).forEach((d, i) => {
    const val = (entry.dayValues || [])[i];
    lines.push(`${d.dayName} ${d.dateLabel}: ${val !== undefined && val !== "" ? parseFloat(val || 0).toFixed(2) : ""}`);
  });
  const blob = await buildPdfWithLogo(lines);
  const id = entry.employeeId || "employee";
  downloadBlob(blob, `attendance-${id}.pdf`);
};

const downloadPayrollCsv = async (employees, filename, overrides) => {
  const headers = getPayrollHeaders();
  const rows = await buildPayrollReportRows(employees, overrides);
  const escape = (value) => `"${String(value).replace(/"/g, '""')}"`;
  const lines = [headers.map(escape).join(",")];
  rows.forEach((row) => {
    lines.push(row.map(escape).join(","));
  });
  const csv = lines.join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  downloadBlob(blob, filename);
};

const downloadPayrollPdf = async (employees, filename, overrides) => {
  const entries = await buildPayrollMetricsList(employees, overrides);
  const lines = [];
  lines.push("Payroll Processing");
  lines.push(new Date().toLocaleString());
  lines.push("");
  if (entries.length === 0) {
    lines.push("No employee selected.");
  }
  entries.forEach(({ employee, metrics }) => {
    lines.push(`Employee: ${employee.employeeId || ""} - ${employee.names || ""}`);
    lines.push(
      `Basic Salary: ${metrics.basePay.toFixed(2)} | OT Salary: ${metrics.otPay.toFixed(2)} | PH x2: ${metrics.phPay.toFixed(2)}`
    );
    lines.push(
      `Housing Allowance (incl. rent): ${payslipHousingWithRent(metrics).toFixed(2)} | Arrears: ${Number(metrics.arrears).toFixed(2)}`
    );
    lines.push(
      `MET: ${metrics.metLeave.toFixed(2)} | HHS: ${metrics.hhsAllowance.toFixed(2)} | Conveyance: ${metrics.conveyanceAllowance.toFixed(2)}`
    );
    lines.push(
      `Taxable: ${metrics.taxableEarning.toFixed(2)} | Annual Leave: ${metrics.annualLeaveAmount.toFixed(2)} | Total: ${metrics.totalEarning.toFixed(2)}`
    );
    lines.push(
      `NPF 5%: ${metrics.npf5.toFixed(2)} | NPF 7.5%: ${metrics.npf75.toFixed(2)} | Voluntary: ${Number(metrics.voluntaryNpf).toFixed(2)}`
    );
    lines.push(
      `PAYE A: ${metrics.payeA.toFixed(2)} | Basic Rate 1%: ${metrics.basicRate1.toFixed(2)} | Other: ${Number(metrics.otherDeductions).toFixed(2)}`
    );
    lines.push(`Salary for Period: ${metrics.salaryForPeriod.toFixed(2)}`);
    lines.push("-".repeat(80));
  });
  const blob = await buildPdfWithLogo(lines);
  downloadBlob(blob, filename);
};

const getSelectedEmployeeForPayroll = () => {
  const byName = getEmployeeByName(payrollEmployeeName?.value || "");
  if (byName) return byName;
  const idValue = payrollEmployeeId?.value || "";
  if (!idValue) return null;
  return employeesCache.find(
    (employee) => String(employee.employeeId) === String(idValue)
  );
};

const testBiometricConnection = async () => {
  const ip = deviceIp.value.trim();
  const port = devicePort.value.trim();
  if (!ip || !port) {
    biometricMessage.textContent =
      "Add device IP and port before testing connection.";
    return;
  }
  biometricMessage.textContent = `Testing connection to ${ip}:${port}...`;
  try {
    const response = await fetch(`${API_BASE}/api/biometric/test`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ deviceIp: ip, devicePort: port }),
    });
    const result = await response.json();
    if (response.ok && result.status === "online") {
      connectionStatus.value = "Online";
      biometricMessage.textContent = `Device is online (${result.latencyMs} ms).`;
    } else {
      connectionStatus.value = "Offline";
      biometricMessage.textContent =
        result.message || "Device is offline.";
    }
  } catch (error) {
    connectionStatus.value = "Offline";
    biometricMessage.textContent = "Backend is not reachable.";
  }
};

const syncEmployeeData = async () => {
  biometricMessage.textContent = "Syncing employees from device...";
  try {
    const response = await fetch(`${API_BASE}/api/biometric/sync`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    const result = await response.json();
    if (response.ok && result.status === "success") {
      biometricMessage.textContent = `Synced ${result.employees.length} employees.`;
      const profiles = saveProfilesFromDevice(result.employees || []);
      employeesCache = mergeProfiles(result.employees || [], profiles);
      invalidateReportPivotCache();
      updateEmployeeNameList(employeesCache);
      updatePayrollEmployeeList(employeesCache);
      updateRosterEmployeeList(employeesCache);
      renderEmployeeTable(employeesCache);
      updateDashboardStats(employeesCache);
      refreshDashboardPayrollIfVisible();
    } else {
      biometricMessage.textContent =
        result.message || "Employee sync failed.";
    }
  } catch (error) {
    biometricMessage.textContent = "Backend is not reachable.";
  }
};

const syncAttendanceData = async () => {
  if (attendanceSyncInFlight) return;
  attendanceSyncInFlight = true;
  biometricMessage.textContent = "Syncing attendance logs from device...";
  try {
    const response = await fetch(`${API_BASE}/api/biometric/attendance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    const result = await response.json();
    if (!response.ok || result.status !== "success") {
      biometricMessage.textContent =
        result.message || "Attendance sync failed.";
      return;
    }

    // Optional sync for attendance summary table. Some bridge builds don't expose this endpoint.
    try {
      await fetch(`${API_BASE}/api/biometric/attendance/table`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
    } catch (error) {
      // ignore; we can still render from synced device logs
    }

    const syncedCount =
      Number(result.totalCount) || (Array.isArray(result.logs) ? result.logs.length : 0);
    const storedRows = Number(result.storedLogs);
    await loadAttendanceFromBackend();
    invalidateReportPivotCache();
    refreshDashboardPayrollIfVisible();
    biometricMessage.textContent = Number.isFinite(storedRows)
      ? `Attendance merged: ${syncedCount} log(s) from device, ${storedRows} total rows stored (history before this fortnight kept).`
      : `Synced ${syncedCount} attendance log(s) from device.`;
  } catch (error) {
    biometricMessage.textContent = "Backend is not reachable.";
  } finally {
    attendanceSyncInFlight = false;
  }
};

const loadAttendanceFromBackend = async () => {
  if (biometricMessage) biometricMessage.textContent = "Loading attendance logs...";

  const payrollFortnightValue =
    attendanceFortnight?.value ||
    payrollFortnight?.value ||
    (attendanceFilterFrom && attendanceFilterTo ? `${attendanceFilterFrom}_${attendanceFilterTo}` : "");

  const useAttendanceSheet =
    payrollFortnightValue &&
    attendanceSheetFortnightValue === payrollFortnightValue &&
    attendanceSheetEntries.length > 0;

  if (useAttendanceSheet && attendanceSheetTable) {
    const freshEntries = [];
    attendanceSheetTable.querySelectorAll("tr[data-employee-id]").forEach((row) => {
      const entry = buildAttendanceEntryFromRow(row);
      if (entry.employeeId) freshEntries.push(entry);
    });
    if (freshEntries.length > 0) attendanceSheetEntries = freshEntries;
  }

  const domEntries = useAttendanceSheet && attendanceSheetEntries.length > 0 ? attendanceSheetEntries : null;
  const rows =
    payrollFortnightValue && payrollFortnightValue.includes("_")
      ? await buildPayrollRowsForFortnight(payrollFortnightValue, domEntries)
      : [];

  attendanceLogs = rows;
  attendanceTotalPages = 1;
  attendancePage = 1;
  syncBankAdviceFortnightFromAttendance();
  renderAttendanceTable();
  if (biometricMessage) biometricMessage.textContent =
    rows.length > 0
      ? useAttendanceSheet
        ? `Payroll loaded for ${rows.length} employees (from Attendance sheet).`
        : `Payroll loaded for ${rows.length} employees. Open Attendance for the same fortnight to edit days, OT, HHS, conveyance, other deductions.`
      : "No employees found to load payroll.";
};

const loadBankAdviceLogs = async () => {
  if (!bankAdviceFortnight?.value) {
    alert("Select a fortnight period first.");
    return;
  }
  const value = bankAdviceFortnight.value;
  if (attendanceFortnight) attendanceFortnight.value = value;
  const [startIso, endIso] = value.split("_");
  attendanceFilterFrom = startIso;
  attendanceFilterTo = endIso;
  if (attendanceFrom) attendanceFrom.value = startIso;
  if (attendanceTo) attendanceTo.value = endIso;
  await loadAttendanceFromBackend();
  const label =
    bankAdviceFortnight.options[bankAdviceFortnight.selectedIndex]?.textContent?.trim() || value;
  appendBankAdviceLoadLog(label, attendanceLogs.length);
};

const initBiometric = async () => {
  const localConfig = loadBiometricConfig();
  populateBiometricForm(localConfig);
  try {
    const response = await fetch(`${API_BASE}/api/biometric/config`);
    if (response.ok) {
      const serverConfig = await response.json();
      populateBiometricForm({ ...localConfig, ...serverConfig });
      if (biometricMessage) biometricMessage.textContent = "Loaded device configuration from backend.";
    }
  } catch (error) {
    if (biometricMessage) biometricMessage.textContent =
      "Loaded local configuration. Backend is not reachable.";
  }
};

const loadEmployeesFromApiOrFallback = async () => {
  try {
    const response = await fetch(`${API_BASE}/api/biometric/employees`);
    const result = await response.json();
    if (response.ok && result.status === "success" && (result.employees || []).length > 0) {
      await loadTodayShifts();
      const profiles = saveProfilesFromDevice(result.employees || []);
      employeesCache = mergeProfiles(result.employees || [], profiles);
      invalidateReportPivotCache();
      updateEmployeeNameList(employeesCache);
      updatePayrollEmployeeList(employeesCache);
      updateRosterEmployeeList(employeesCache);
      renderEmployeeTable(employeesCache);
      updateDashboardStats(employeesCache);
      renderDashboardCharts();
      populateCostCenterFilter(attendanceSheetCostCenter);
      return true;
    }
  } catch (error) {
    // ignore API errors
  }
  try {
    const response = await fetch("server/device-data.json");
    const employees = await response.json();
    if (employees && employees.length > 0) {
      await loadTodayShifts();
      const profiles = loadEmployeeProfiles();
      employeesCache = mergeProfiles(employees || [], profiles);
      invalidateReportPivotCache();
      updateEmployeeNameList(employeesCache);
      updatePayrollEmployeeList(employeesCache);
      updateRosterEmployeeList(employeesCache);
      renderEmployeeTable(employeesCache);
      updateDashboardStats(employeesCache);
      renderDashboardCharts();
      populateCostCenterFilter(attendanceSheetCostCenter);
      return true;
    }
  } catch (error) {
    // ignore fallback errors
  }
  return false;
};

const preloadEmployees = async () => {
  await loadEmployeesFromApiOrFallback();
};

setEmployeeIdEditable(state.role);
initBiometric();
preloadEmployees();
updateNextPayrollDate();
populateFortnights();
populateAttendanceFortnights();
populateAttendanceSheetFortnights();
populateDashboardChartPeriod();

const showSection = (sectionId) => {
  contentSections.forEach((section) => {
    if (section.id === sectionId) {
      section.classList.remove("section-hidden");
      if (sectionId === "employees") {
        hideEmployeeForm();
      }
      if (sectionId === "dashboard") {
        renderDashboardCharts();
      }
      if (sectionId === "bank-advice") {
        renderBankAdviceTable();
      }
    } else {
      section.classList.add("section-hidden");
    }
  });
};

if (navLinks) {
  navLinks.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const sectionId = target.getAttribute("data-section");
    if (sectionId) {
      showSection(sectionId);
    }
  });
}

showSection("dashboard");

if (dashboardChartPeriod) {
  dashboardChartPeriod.addEventListener("change", scheduleDashboardChartsFromPeriodSelect);
}

if (dashboardDownloadExcel) {
  dashboardDownloadExcel.addEventListener("click", downloadDashboardExcel);
}

if (employeeTable) {
  employeeTable.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.classList.contains("employee-name")) {
      const employeeId = target.getAttribute("data-employee");
      if (employeeId) {
        showEmployeeForm(employeeId);
      }
    }
  });
}

if (saveEmployeeButton) {
  saveEmployeeButton.addEventListener("click", saveEmployeeProfile);
}

if (editBasicSalary && employeeBasicSalaryInput) {
  editBasicSalary.addEventListener("click", () => {
    employeeBasicSalaryInput.readOnly = !employeeBasicSalaryInput.readOnly;
    if (!employeeBasicSalaryInput.readOnly) {
      employeeBasicSalaryInput.focus();
      editBasicSalary.textContent = "Lock Basic Salary";
    } else {
      editBasicSalary.textContent = "Edit Basic Salary";
    }
  });
}

if (payrollEmployeeName) {
  payrollEmployeeName.addEventListener("change", updatePayrollPreview);
  payrollEmployeeName.addEventListener("input", updatePayrollPreview);
}

if (rosterScope) {
  rosterScope.addEventListener("change", () => {
    if (rosterScope.value === "all") {
      rosterFilterEmployeeId = "";
    } else {
      rosterFilterEmployeeId = "__none__";
    }
  });
}

if (rosterEmployeeName) {
  rosterEmployeeName.addEventListener("input", () => {
    const term = rosterEmployeeName.value.trim().toLowerCase();
    if (rosterScope?.value === "individual") {
      if (!term) {
        rosterFilterEmployeeId = "__none__";
      } else {
        const match = employeesCache.find((emp) =>
          emp.names?.toLowerCase().includes(term)
        );
        rosterFilterEmployeeId = match ? match.employeeId : "__none__";
      }
    } else {
      rosterFilterEmployeeId = "";
    }
  });
}

if (loadRoster) {
  loadRoster.addEventListener("click", loadRosterFromBackend);
}

if (payrollFortnight) {
  payrollFortnight.addEventListener("change", updatePayrollPreview);
}

if (payrollPublicHoliday) {
  payrollPublicHoliday.addEventListener("change", updatePayrollPreview);
}

if (payrollArrearsInput) {
  payrollArrearsInput.addEventListener("input", updatePayrollPreview);
}

if (payrollCompassInput) {
  payrollCompassInput.addEventListener("input", updatePayrollPreview);
}

if (payrollVoluntaryNpfInput) {
  payrollVoluntaryNpfInput.addEventListener("input", updatePayrollPreview);
}

if (payrollOtherDeductionsInput) {
  payrollOtherDeductionsInput.addEventListener("input", updatePayrollPreview);
}

if (payrollHousingAllowanceRateInput) {
  payrollHousingAllowanceRateInput.addEventListener("input", updatePayrollPreview);
}

if (payrollDownloadSelectedExcel) {
  payrollDownloadSelectedExcel.addEventListener("click", async () => {
    const selected = getSelectedEmployeeForPayroll();
    if (!selected) return;
    await downloadPayrollCsv(
      [selected],
      "payroll-selected.csv",
      {
        publicHoliday: payrollPublicHoliday?.value === "yes",
        housingRate: payrollHousingAllowanceRateInput?.value,
        arrears: payrollArrearsInput?.value,
        compass: payrollCompassInput?.value,
        voluntaryNpf: payrollVoluntaryNpfInput?.value,
        otherDeductions: payrollOtherDeductionsInput?.value,
      }
    );
  });
}

if (payrollDownloadSelectedPdf) {
  payrollDownloadSelectedPdf.addEventListener("click", async () => {
    const selected = getSelectedEmployeeForPayroll();
    if (!selected) return;
    await downloadPayrollPdf(
      [selected],
      "payroll-selected.pdf",
      {
        publicHoliday: payrollPublicHoliday?.value === "yes",
        housingRate: payrollHousingAllowanceRateInput?.value,
        arrears: payrollArrearsInput?.value,
        compass: payrollCompassInput?.value,
        voluntaryNpf: payrollVoluntaryNpfInput?.value,
        otherDeductions: payrollOtherDeductionsInput?.value,
      }
    );
  });
}

if (payrollDownloadAllExcel) {
  payrollDownloadAllExcel.addEventListener("click", async () => {
    await downloadPayrollCsv(
      employeesCache,
      "payroll-all.csv",
      {
        publicHoliday: payrollPublicHoliday?.value === "yes",
      }
    );
  });
}

if (payrollDownloadAllPdf) {
  payrollDownloadAllPdf.addEventListener("click", async () => {
    await downloadPayrollPdf(
      employeesCache,
      "payroll-all.pdf",
      {
        publicHoliday: payrollPublicHoliday?.value === "yes",
      }
    );
  });
}

if (payslipDownloadExcel) {
  payslipDownloadExcel.addEventListener("click", async () => {
    const selected = getSelectedEmployeeForPayroll();
    if (!selected) return;
    const range = getSelectedFortnightRange();
    const logs = await loadPayrollAttendanceForPeriod(selected.employeeId, range);
    const rentAllowance = await resolveRentAllowanceForFortnight(selected, selected.rentAllowance);
    const metrics = buildPayrollMetrics(selected, logs, {
      publicHoliday: payrollPublicHoliday?.value === "yes",
      housingRate: payrollHousingAllowanceRateInput?.value,
      arrears: payrollArrearsInput?.value,
      compass: payrollCompassInput?.value,
      voluntaryNpf: payrollVoluntaryNpfInput?.value,
      rentAllowance,
      otherDeductions: payrollOtherDeductionsInput?.value,
    });
    const lines = buildPayslipLines(selected, metrics);
    const csvLines = lines.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","));
    const csv = csvLines.join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    downloadBlob(blob, "payslip-selected.csv");
  });
}

if (payslipDownloadPdf) {
  payslipDownloadPdf.addEventListener("click", async () => {
    const selected = getSelectedEmployeeForPayroll();
    if (!selected) return;
    const range = getSelectedFortnightRange();
    const logs = await loadPayrollAttendanceForPeriod(selected.employeeId, range);
    const rentAllowance = await resolveRentAllowanceForFortnight(selected, selected.rentAllowance);
    const metrics = buildPayrollMetrics(selected, logs, {
      publicHoliday: payrollPublicHoliday?.value === "yes",
      housingRate: payrollHousingAllowanceRateInput?.value,
      arrears: payrollArrearsInput?.value,
      compass: payrollCompassInput?.value,
      voluntaryNpf: payrollVoluntaryNpfInput?.value,
      rentAllowance,
      otherDeductions: payrollOtherDeductionsInput?.value,
    });
    const blob = await buildPayslipPdf(selected, metrics);
    downloadBlob(blob, "payslip-selected.pdf");
  });
}

if (saveBiometric) saveBiometric.addEventListener("click", saveBiometricConfig);
if (testBiometric) testBiometric.addEventListener("click", testBiometricConnection);
if (syncEmployees) syncEmployees.addEventListener("click", syncEmployeeData);
if (syncAttendance) syncAttendance.addEventListener("click", syncAttendanceData);
if (loadAttendanceLogs) loadAttendanceLogs.addEventListener("click", loadAttendanceFromBackend);
if (downloadAllLogsExcel) {
  downloadAllLogsExcel.addEventListener("click", downloadAllAttendanceLogsExcel);
}

if (bankAdviceDownloadExcel) {
  bankAdviceDownloadExcel.addEventListener("click", downloadBankAdviceExcel);
}

if (bankAdviceLoadLogs) {
  bankAdviceLoadLogs.addEventListener("click", loadBankAdviceLogs);
}

if (bankAdviceFortnight) {
  bankAdviceFortnight.addEventListener("change", () => {
    renderBankAdviceTable();
  });
}

if (downloadAllPayslipsPdf) {
  downloadAllPayslipsPdf.addEventListener("click", async () => {
    if (!attendanceLogs || attendanceLogs.length === 0) {
      alert("No payroll data loaded. Click 'Load Logs' first.");
      return;
    }
    const entries = [];
    for (const log of attendanceLogs) {
      const employeeId = String(log.employeeId || "");
      const employee = employeesCache.find(
        (e) => String(e.employeeId || "") === employeeId
      ) || {
        employeeId,
        names: log.employeeName || "",
        startDate: "",
        costCenter: log.costCenter || "",
        department: log.costCenter || "",
        npf: log.npfNumber || "",
        bsp: log.bspAccount || "",
      };
      const metrics = metricsFromPayrollLog(log, employee);
      entries.push({ employee, metrics });
    }
    if (entries.length === 0) {
      alert("No payroll rows to export.");
      return;
    }
    downloadAllPayslipsPdf.disabled = true;
    try {
      const blob = await buildPayslipPdfAll(entries);
      const periodLabel = getSelectedFortnightLabel().replace(/\s+/g, "-") || "payslips";
      downloadBlob(blob, `payslips-all-${periodLabel}.pdf`);
    } finally {
      downloadAllPayslipsPdf.disabled = false;
    }
  });
}

if (loadAttendanceSheet) {
  loadAttendanceSheet.addEventListener("click", loadAttendanceSheetData);
}
if (downloadAttendanceByCostCenter) {
  downloadAttendanceByCostCenter.addEventListener("click", downloadAttendanceSheetByCostCenterExcel);
}

if (attendanceSheetCostCenter) {
  attendanceSheetCostCenter.addEventListener("change", () => {
    if (attendanceSheetCostCenterUpdating) return;
    loadAttendanceSheetData();
  });
}

const setAttendanceSheetMessage = (msg) => {
  if (attendanceSheetMessage) attendanceSheetMessage.textContent = msg || "";
};

if (syncAttendanceSheet) {
  syncAttendanceSheet.addEventListener("click", async () => {
    attendanceSheetDataCache = null;
    setAttendanceSheetMessage("Syncing employees...");
    await syncEmployeeData();
    if (employeesCache.length === 0) {
      setAttendanceSheetMessage("Loading employees from server...");
      await loadEmployeesFromApiOrFallback();
    }
    setAttendanceSheetMessage("Syncing attendance logs...");
    await syncAttendanceData();
    setAttendanceSheetMessage("");
    loadAttendanceSheetData();
  });
}

const updatePayrollRowFromVoluntaryNpfChange = (inputEl) => {
  const row = inputEl?.closest("tr");
  if (!row) return;
  const employeeId = inputEl.dataset.employeeId || "";
  const log = attendanceLogs?.find((item) => String(item.employeeId || "") === String(employeeId));
  if (!log) return;
  const voluntaryNpfPct = parseFloat(inputEl.value) || 0;
  const totalEa = parseFloat(log.totalEa) || 0;
  const basicSalary = parseFloat(log.basicSalary) || 0;
  const otherDedu = parseFloat(row.querySelector(".payroll-otherdedu-input")?.value ?? log.otherDedu) || 0;
  const payeA = parseFloat(log.payeA) || 0;
  const voluntaryNpfAmount = voluntaryNpfAmountFromPercent(totalEa, voluntaryNpfPct);
  const salaryForPeriod = computeSalaryForPeriod({
    totalEa,
    basicSalary,
    voluntaryNpfPct,
    payeA,
    otherDeductions: otherDedu,
  });
  log.voluntaryNpfPct = voluntaryNpfPct;
  log.voluntaryN = voluntaryNpfAmount.toFixed(2);
  log.otherDedu = otherDedu.toFixed(2);
  log.npf5 = (totalEa * 0.05).toFixed(2);
  log.npf75 = (totalEa * 0.075).toFixed(2);
  log.basic1 = (basicSalary * 0.01).toFixed(2);
  log.salaryFor = salaryForPeriod.toFixed(2);
  const asM = (v) => (Number(v) || 0).toFixed(2);
  const salaryForCell = row.querySelector(".payroll-salaryfor-cell");
  if (salaryForCell) salaryForCell.textContent = asM(salaryForPeriod);
  const tds = row.querySelectorAll("td");
  if (tds[17]) tds[17].textContent = log.npf5;
  if (tds[18]) tds[18].textContent = log.npf75;
  if (tds[21]) tds[21].textContent = log.basic1;
  renderBankAdviceTable();
};

const mergePayrollManualFromTableRows = async () => {
  const fortnight = payrollFortnight?.value || attendanceFortnight?.value || "";
  if (!fortnight || !attendanceTable) return null;
  const serverAll = (await loadAttendanceSheetManualFromServer()) || {};
  const serverPeriod =
    serverAll && typeof serverAll === "object" ? serverAll[fortnight] || {} : {};
  const localPeriod = loadAttendanceSheetFromStorage(fortnight) || {};
  const merged = { ...serverPeriod, ...localPeriod };
  attendanceTable.querySelectorAll("tr[data-employee-id]").forEach((tr) => {
    const eid = tr.dataset.employeeId || "";
    if (!eid) return;
    const otherInp = tr.querySelector(".payroll-otherdedu-input");
    const vnInp = tr.querySelector(".payroll-voluntarynpf-input");
    const rentInp = tr.querySelector(".payroll-rent-input");
    if (!merged[eid]) merged[eid] = {};
    if (otherInp) merged[eid].otherDeductions = parseFloat(otherInp.value) || 0;
    if (vnInp) merged[eid].voluntaryNpf = parseFloat(vnInp.value) || 0;
    if (rentInp) merged[eid].rentAllowance = parseFloat(rentInp.value) || 0;
  });
  return { fortnight, merged };
};

const debouncedSavePayrollOtherDeductions = () => {
  if (payrollOtherDeductionSaveTimeout) clearTimeout(payrollOtherDeductionSaveTimeout);
  payrollOtherDeductionSaveTimeout = setTimeout(async () => {
    payrollOtherDeductionSaveTimeout = null;
    const result = await mergePayrollManualFromTableRows();
    if (!result) return;
    saveAttendanceSheetToStorage(result.fortnight, result.merged);
    await saveAttendanceSheetManualToServer(result.fortnight, result.merged);
  }, 400);
};

const debouncedReloadPayrollAfterRentChange = () => {
  if (payrollRentReloadTimeout) clearTimeout(payrollRentReloadTimeout);
  payrollRentReloadTimeout = setTimeout(async () => {
    payrollRentReloadTimeout = null;
    const result = await mergePayrollManualFromTableRows();
    if (!result) return;
    saveAttendanceSheetToStorage(result.fortnight, result.merged);
    await saveAttendanceSheetManualToServer(result.fortnight, result.merged);
    await loadAttendanceFromBackend();
  }, 400);
};

const updatePayrollRowFromOtherDeduChange = (inputEl) => {
  const row = inputEl?.closest("tr");
  if (!row) return;
  const employeeId = inputEl.dataset.employeeId || "";
  const log = attendanceLogs?.find((item) => String(item.employeeId || "") === String(employeeId));
  if (!log) return;
  const otherDedu = parseFloat(inputEl.value) || 0;
  const voluntaryNpfPct =
    parseFloat(row.querySelector(".payroll-voluntarynpf-input")?.value ?? "") || 0;
  const totalEa = parseFloat(log.totalEa) || 0;
  const basicSalary = parseFloat(log.basicSalary) || 0;
  const payeA = parseFloat(log.payeA) || 0;
  const voluntaryNpfAmount = voluntaryNpfAmountFromPercent(totalEa, voluntaryNpfPct);
  const salaryForPeriod = computeSalaryForPeriod({
    totalEa,
    basicSalary,
    voluntaryNpfPct,
    payeA,
    otherDeductions: otherDedu,
  });
  log.otherDedu = otherDedu.toFixed(2);
  log.voluntaryNpfPct = voluntaryNpfPct;
  log.voluntaryN = voluntaryNpfAmount.toFixed(2);
  log.npf5 = (totalEa * 0.05).toFixed(2);
  log.npf75 = (totalEa * 0.075).toFixed(2);
  log.basic1 = (basicSalary * 0.01).toFixed(2);
  log.salaryFor = salaryForPeriod.toFixed(2);
  const asM = (v) => (Number(v) || 0).toFixed(2);
  const salaryForCell = row.querySelector(".payroll-salaryfor-cell");
  if (salaryForCell) salaryForCell.textContent = asM(salaryForPeriod);
  const tds = row.querySelectorAll("td");
  if (tds[17]) tds[17].textContent = log.npf5;
  if (tds[18]) tds[18].textContent = log.npf75;
  if (tds[21]) tds[21].textContent = log.basic1;
  debouncedSavePayrollOtherDeductions();
  renderBankAdviceTable();
};

if (attendanceTable) {
  attendanceTable.addEventListener("input", (event) => {
    const target = event.target;
    if (target?.classList?.contains("payroll-rent-input")) {
      refreshPayrollTotalsFooter();
      debouncedReloadPayrollAfterRentChange();
      return;
    }
    if (target?.classList?.contains("payroll-voluntarynpf-input")) {
      updatePayrollRowFromVoluntaryNpfChange(target);
      debouncedSavePayrollOtherDeductions();
      refreshPayrollTotalsFooter();
      return;
    }
    if (target?.classList?.contains("payroll-otherdedu-input")) {
      updatePayrollRowFromOtherDeduChange(target);
      refreshPayrollTotalsFooter();
    }
  });
}

const updateConveyanceFromTiers = (row) => {
  if (!row) return;
  if (row.dataset.conveyanceFixed === "1") return;
  const dayInputs = row.querySelectorAll(".attendance-day-input");
  const tierSelects = row.querySelectorAll(".attendance-conveyance-tier-select");
  const dayValues = Array.from(dayInputs).map((inp) => inp.value.trim());
  const tiers = Array.from(tierSelects).map((s) => clampConveyanceTier(s.value));
  const total = computeConveyanceFromDayTiersAndHours(dayValues, tiers);
  const conv = row.querySelector(".attendance-conveyance-input");
  if (conv) conv.value = total > 0 ? total.toFixed(2) : "";
};

const updateAttendanceRowCalculations = (row, opts = {}) => {
  if (!row) return;
  let totalWork = 0;
  const dayInputs = row.querySelectorAll(".attendance-day-input");
  dayInputs.forEach((inp) => {
    const h = parseFloat(inp.value) || 0;
    totalWork += Math.min(h, MAX_DAILY_HOURS);
  });
  totalWork = Math.min(totalWork, MAX_FORTNIGHT_HOURS);
  row.dataset.totalWork = String(totalWork);

  const otInput = row.querySelector(".attendance-ot-input");
  const phDoInput = row.querySelector(".attendance-phdo-input");
  const manualOt = otInput ? (parseFloat(otInput.value) || 0) : 0;
  const phDo = phDoInput ? (parseFloat(phDoInput.value) || 0) : 0;
  const normalHours = Math.max(0, totalWork - manualOt - phDo);

  const totalCell = row.querySelector(".attendance-total-cell");
  const normalCell = row.querySelector(".attendance-normal-cell");
  if (totalCell) totalCell.textContent = totalWork.toFixed(2);
  if (normalCell) normalCell.textContent = normalHours.toFixed(2);

  if (!opts.skipHhsRecalc) {
    const costCenter = (row.querySelector("td:nth-child(3)")?.textContent?.trim() || "").toUpperCase();
    const eligible = costCenter === "H K" || costCenter === "HK" || costCenter === "POMEC";
    const sickInput = row.querySelector(".attendance-sick-input");
    const sickDays = sickInput ? parseFloat(sickInput.value) || 0 : 0;
    const hhsVal = calculateFormulaHhs(normalHours, sickDays, eligible);
    const hhsInput = row.querySelector(".attendance-hhs-input");
    if (hhsInput) hhsInput.value = hhsVal.toFixed(2);
  }
  updateConveyanceFromTiers(row);
};

const buildAttendanceEntryFromRow = (row) => {
  const employeeId = row.dataset.employeeId || "";
  const baseEntry = attendanceSheetEntries.find(
    (e) => String(e.employeeId || "") === String(employeeId)
  ) || {};
  const cells = row.querySelectorAll("td");
  const getCellText = (selector) => {
    const el = row.querySelector(selector);
    return el ? (el.tagName === "INPUT" ? el.value : el.textContent) : "";
  };
  const dayValues = Array.from(row.querySelectorAll(".attendance-day-input")).map(
    (inp) => inp.value.trim()
  );
  const conveyanceDayTiers = Array.from(row.querySelectorAll(".attendance-conveyance-tier-select")).map(
    (sel) => clampConveyanceTier(sel.value)
  );
  return {
    ...baseEntry,
    employeeId,
    names: row.querySelector("td:nth-child(2)")?.textContent?.trim() || baseEntry.names,
    costCenter: row.querySelector("td:nth-child(3)")?.textContent?.trim() || baseEntry.costCenter,
    shift: baseEntry.shift || "",
    dayValues,
    conveyanceDayTiers,
    totalWork: parseFloat(row.dataset.totalWork || "0") || 0,
    totalOvertime: parseFloat(getCellText(".attendance-ot-input")) || 0,
    phDo: getCellText(".attendance-phdo-input"),
    phPay: parseFloat(getCellText(".attendance-phpay-input")) || 0,
    sickDays: getCellText(".attendance-sick-input"),
    metLeave: parseFloat(getCellText(".attendance-metleave-input")) || 0,
    annualLeave: parseFloat(getCellText(".attendance-annualleave-input")) || 0,
    hhs: parseFloat(getCellText(".attendance-hhs-input")) || 0,
    conveyanceAll: (() => {
      const computed = computeConveyanceFromDayTiersAndHours(
        dayValues,
        conveyanceDayTiers.length ? conveyanceDayTiers : dayValues.map(() => 0)
      );
      const fixed =
        row.dataset.conveyanceFixed === "1" || baseEntry.conveyanceFixed === true;
      if (fixed) {
        const conv = row.querySelector(".attendance-conveyance-input");
        const v = conv ? parseFloat(conv.value) : NaN;
        return Number.isFinite(v) ? v : computed;
      }
      return computed;
    })(),
  };
};

const handleAttendanceSheetInput = (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (target.classList.contains("attendance-conveyance-tier-select")) {
    const row = target.closest("tr");
    if (!row) return;
    delete row.dataset.conveyanceFixed;
    updateConveyanceFromTiers(row);
    debouncedSaveAttendanceSheet();
    return;
  }
  const isRelevant =
    target.classList.contains("attendance-ot-input") ||
    target.classList.contains("attendance-phdo-input") ||
    target.classList.contains("attendance-day-input") ||
    target.classList.contains("attendance-phpay-input") ||
    target.classList.contains("attendance-sick-input") ||
    target.classList.contains("attendance-metleave-input") ||
    target.classList.contains("attendance-annualleave-input") ||
    target.classList.contains("attendance-hhs-input");
  if (!isRelevant) return;
  const row = target.closest("tr");
  if (!row) return;
  if (target.classList.contains("attendance-day-input")) {
    delete row.dataset.conveyanceFixed;
  }
  const skipHhsRecalc = target.classList.contains("attendance-hhs-input");
  updateAttendanceRowCalculations(row, { skipHhsRecalc });
  debouncedSaveAttendanceSheet();
};

if (attendanceSheetTable) {
  attendanceSheetTable.addEventListener("input", handleAttendanceSheetInput);
  attendanceSheetTable.addEventListener("change", handleAttendanceSheetInput);

}

if (attendanceHourlyRate) {
  attendanceHourlyRate.addEventListener("input", () => {
    if (attendanceTable && attendanceTable.children.length > 0) {
      const rows = Array.from(attendanceTable.querySelectorAll("tr")).map(
        (row) => {
          const cells = row.querySelectorAll("td");
          if (cells.length < 6) return null;
          return {
            employeeId: cells[0].textContent.trim(),
            date: cells[1].textContent.trim(),
            time: cells[2].textContent.trim(),
            verify: cells[3].textContent.trim(),
            inOut: cells[4].textContent.trim(),
            workCode: cells[5].textContent.trim(),
          };
        }
      );
      updatePayrollPreview();
    }
  });
}

if (attendanceSearch) {
  attendanceSearch.addEventListener("input", () => {
    attendancePage = 1;
    const term = attendanceSearch.value.trim().toLowerCase();
    attendanceSearchTerm = term;
    if (attendanceScope?.value === "individual") {
      if (!term) {
        attendanceFilterEmployeeId = "__none__";
      } else {
        const match = employeesCache.find((emp) =>
          emp.names?.toLowerCase().includes(term)
        );
        if (match) {
          attendanceFilterEmployeeId = match.employeeId;
        } else {
          const exactId = employeesCache.find(
            (emp) => String(emp.employeeId).toLowerCase() === term
          );
          attendanceFilterEmployeeId = exactId ? exactId.employeeId : "__none__";
        }
      }
    } else {
      attendanceFilterEmployeeId = "";
    }
    loadAttendanceFromBackend();
  });
}

if (attendanceScope) {
  attendanceScope.addEventListener("change", () => {
    attendancePage = 1;
    if (attendanceScope.value === "all") {
      attendanceFilterEmployeeId = "";
    } else {
      attendanceFilterEmployeeId = "__none__";
    }
    loadAttendanceFromBackend();
  });
}

const updateAttendanceDateFilters = () => {
  attendancePage = 1;
  attendanceFilterFrom = attendanceFrom?.value || "";
  attendanceFilterTo = attendanceTo?.value || "";
  syncAttendanceFortnightSelection();
  loadAttendanceFromBackend();
};

if (attendanceFortnight) {
  attendanceFortnight.addEventListener("change", () => {
    attendancePage = 1;
    syncBankAdviceFortnightFromAttendance();
    if (!attendanceFortnight.value) {
      attendanceFilterFrom = "";
      attendanceFilterTo = "";
      if (attendanceFrom) attendanceFrom.value = "";
      if (attendanceTo) attendanceTo.value = "";
      loadAttendanceFromBackend();
      return;
    }
    const [startIso, endIso] = attendanceFortnight.value.split("_");
    attendanceFilterFrom = startIso;
    attendanceFilterTo = endIso;
    if (attendanceFrom) attendanceFrom.value = startIso;
    if (attendanceTo) attendanceTo.value = endIso;
    loadAttendanceFromBackend();
  });
}

if (attendanceFrom) {
  attendanceFrom.addEventListener("change", updateAttendanceDateFilters);
}

if (attendanceTo) {
  attendanceTo.addEventListener("change", updateAttendanceDateFilters);
}

if (attendancePrev) {
  attendancePrev.addEventListener("click", () => {
    if (attendancePage > 1) {
      attendancePage -= 1;
      loadAttendanceFromBackend();
    }
  });
}

if (attendanceNext) {
  attendanceNext.addEventListener("click", () => {
    if (attendancePage < attendanceTotalPages) {
      attendancePage += 1;
      loadAttendanceFromBackend();
    }
  });
}
