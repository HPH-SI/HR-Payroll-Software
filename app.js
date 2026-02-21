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
const payrollSalaryPeriodRoInput = document.getElementById(
  "payrollSalaryPeriodRoInput"
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
const payslipSalaryPeriodRo = document.getElementById("payslipSalaryPeriodRo");
const payslipDownloadExcel = document.getElementById("payslipDownloadExcel");
const payslipDownloadPdf = document.getElementById("payslipDownloadPdf");
const attendanceTable = document.getElementById("attendanceTable");
const loadAttendanceLogs = document.getElementById("loadAttendanceLogs");
const downloadAllLogsExcel = document.getElementById("downloadAllLogsExcel");
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
const contentSections = document.querySelectorAll("main.content > section");
const attendanceSheetFortnight = document.getElementById("attendanceSheetFortnight");
const attendanceSheetCostCenter = document.getElementById("attendanceSheetCostCenter");
const payrollCostCenter = document.getElementById("payrollCostCenter");
const loadAttendanceSheet = document.getElementById("loadAttendanceSheet");
const syncAttendanceSheet = document.getElementById("syncAttendanceSheet");
const attendanceSheetMessage = document.getElementById("attendanceSheetMessage");
const attendanceSheetHeaderRow = document.getElementById("attendanceSheetHeaderRow");
const attendanceSheetTable = document.getElementById("attendanceSheetTable");
const dashboardChartPeriod = document.getElementById("dashboardChartPeriod");

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

const API_BASE = "http://localhost:4000";
const MAX_DAILY_HOURS = 7.5;
const MAX_FORTNIGHT_HOURS = 90;

const updateDashboardStats = (employees) => {
  if (!employees || employees.length === 0) {
    if (statEmployees) statEmployees.textContent = "0";
    if (statAverageWage) statAverageWage.textContent = "SB$ 0.00";
    if (statTotalPayout) statTotalPayout.textContent = "SB$ 0.00";
    return;
  }
  const activeEmployees = employees.filter(
    (emp) => (emp.status || "Active") === "Active"
  );
  if (statEmployees) statEmployees.textContent = `${activeEmployees.length}`;

  const wages = employees
    .map((emp) => Number(emp.basicWage || 0))
    .filter((value) => Number.isFinite(value) && value > 0);
  const averageWage =
    wages.length > 0
      ? wages.reduce((sum, value) => sum + value, 0) / wages.length
      : 0;
  if (statAverageWage) {
    statAverageWage.textContent = `SB$ ${averageWage.toFixed(2)}`;
  }

  const standardHours = 8.5;
  const estimatedDays = 10;
  const totalPayout =
    wages.length > 0
      ? wages.reduce((sum, value) => sum + value, 0) *
        standardHours *
        estimatedDays
      : 0;
  if (statTotalPayout) {
    statTotalPayout.textContent = `SB$ ${totalPayout.toFixed(2)}`;
  }
};

const updateNextPayrollDate = () => {
  if (!nextPayrollDate) return;
  const today = new Date();
  const year = 2026;
  const start = new Date(year, 0, 5);
  let payrollDate = null;
  for (let i = 0; i < 26; i += 1) {
    const periodStart = new Date(start);
    periodStart.setDate(start.getDate() + i * 14);
    const periodEnd = new Date(periodStart);
    periodEnd.setDate(periodStart.getDate() + 13);
    if (today >= periodStart && today <= periodEnd) {
      payrollDate = new Date(periodEnd);
      payrollDate.setDate(periodEnd.getDate() + 1);
      break;
    }
  }
  const display = payrollDate || new Date(today.getTime() + 24 * 60 * 60 * 1000);
  nextPayrollDate.textContent = display.toLocaleDateString("en-GB", {
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
  const start = new Date(2026, 0, 5);
  const today = new Date();
  for (let i = 0; i < 26; i += 1) {
    const periodStart = new Date(start);
    periodStart.setDate(start.getDate() + i * 14);
    const periodEnd = new Date(periodStart);
    periodEnd.setDate(periodStart.getDate() + 13);
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
  if (!attendanceFortnight) return;
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

const getReportPivotData = async (range) => {
  if (!range?.start || !range?.end) return null;
  const allLogs = await loadAllAttendanceLogsForPeriod(range);
  const logsByEmployee = new Map();
  allLogs.forEach((log) => {
    if (!log?.employeeId) return;
    const key = String(log.employeeId);
    if (!logsByEmployee.has(key)) logsByEmployee.set(key, []);
    logsByEmployee.get(key).push(log);
  });

  const pivotByCostCenter = new Map();

  employeesCache.forEach((employee) => {
    const employeeId = String(employee.employeeId || "");
    const costCenter = (employee.costCenter || employee.department || "").trim() || "(blank)";
    const logs = logsByEmployee.get(employeeId) || [];
    const arrears = Number(employee.arrears || 0);
    const compass = Number(employee.compass || 0);
    const voluntaryNpf = Number(employee.voluntaryNpf || 0);
    const otherDeductions = Number(employee.otherDeductions || 0);
    const metrics = buildPayrollMetrics(employee, logs, {
      publicHoliday: false,
      housingRate: employee.hAllow,
      arrears,
      compass,
      voluntaryNpf,
      otherDeductions,
    });

    const payeAL = metrics.taxableEarning > 0 && metrics.annualLeaveAmount > 0
      ? (metrics.annualLeaveAmount / (metrics.taxableEarning + metrics.annualLeaveAmount)) * (metrics.payeA || 0)
      : 0;

    if (!pivotByCostCenter.has(costCenter)) {
      pivotByCostCenter.set(costCenter, {
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
        basicRate: 0,
        otherDeductions: 0,
        salaryForPeriod: 0,
        amountRO: 0,
      });
    }
    const row = pivotByCostCenter.get(costCenter);
    row.taxableEarning += metrics.taxableEarning || 0;
    row.arrears += metrics.arrears || 0;
    row.compass += metrics.compass || 0;
    row.metLeave += metrics.metLeave || 0;
    row.annualLeave += metrics.annualLeaveAmount || 0;
    row.totalEarning += metrics.totalEarning || 0;
    row.npfEE += metrics.npf5 || 0;
    row.npfER += metrics.npf75 || 0;
    row.voluntaryNpf += metrics.voluntaryNpf || 0;
    row.payeA += metrics.payeA || 0;
    row.basicRate += metrics.basicRate1 || 0;
    row.otherDeductions += metrics.otherDeductions || 0;
    row.salaryForPeriod += metrics.salaryForPeriod || 0;
    row.amountRO += Math.round(metrics.salaryForPeriod || 0);
  });

  const sortedCenters = [...pivotByCostCenter.keys()].sort((a, b) => {
    if (a === "(blank)") return 1;
    if (b === "(blank)") return -1;
    return a.localeCompare(b);
  });

  let grandTotal = {
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
    basicRate: 0,
    otherDeductions: 0,
    salaryForPeriod: 0,
    amountRO: 0,
  };
  sortedCenters.forEach((label) => {
    const data = pivotByCostCenter.get(label);
    grandTotal.taxableEarning += data.taxableEarning;
    grandTotal.arrears += data.arrears;
    grandTotal.compass += data.compass;
    grandTotal.metLeave += data.metLeave;
    grandTotal.annualLeave += data.annualLeave;
    grandTotal.totalEarning += data.totalEarning;
    grandTotal.npfEE += data.npfEE;
    grandTotal.npfER += data.npfER;
    grandTotal.voluntaryNpf += data.voluntaryNpf;
    grandTotal.payeA += data.payeA;
    grandTotal.basicRate += data.basicRate;
    grandTotal.otherDeductions += data.otherDeductions;
    grandTotal.salaryForPeriod += data.salaryForPeriod;
    grandTotal.amountRO += data.amountRO;
  });

  return { pivotByCostCenter, sortedCenters, grandTotal };
};

let dashboardCharts = {};

const getDashboardReportRange = () => {
  const val = dashboardChartPeriod?.value || "";
  if (!val || !val.includes("_")) return null;
  const [startIso, endIso] = val.split("_");
  return {
    start: formatDateForStorage(startIso),
    end: formatDateForStorage(endIso),
  };
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

const renderDashboardCharts = async () => {
  if (typeof Chart === "undefined") return;
  const range = getDashboardReportRange();
  if (!range) return;

  const result = await getReportPivotData(range);
  if (!result) return;

  const { pivotByCostCenter, sortedCenters } = result;
  const labels = sortedCenters.filter((l) => l !== "(blank)");
  const colors = labels.map((_, i) => CHART_COLORS[i % CHART_COLORS.length]);

  const DASHBOARD_CHART_SPECS = [
    { id: "chartTaxableEarning", key: "taxableEarning", field: "taxableEarning" },
    { id: "chartArrears", key: "arrears", field: "arrears" },
    { id: "chartCompass", key: "compass", field: "compass" },
    { id: "chartMetLeave", key: "metLeave", field: "metLeave" },
    { id: "chartAnnualLeave", key: "annualLeave", field: "annualLeave" },
    { id: "chartTotalEarning", key: "totalEarning", field: "totalEarning" },
    { id: "chartNpf5", key: "npf5", field: "npfEE" },
    { id: "chartNpf75", key: "npf75", field: "npfER" },
    { id: "chartVoluntaryNpf", key: "voluntaryNpf", field: "voluntaryNpf" },
    { id: "chartPayeA", key: "payeA", field: "payeA" },
    { id: "chartBasic1", key: "basic1", field: "basicRate" },
    { id: "chartOtherDedu", key: "otherDedu", field: "otherDeductions" },
    { id: "chartSalaryForPeriod", key: "salaryForPeriod", field: "salaryForPeriod" },
    { id: "chartAmountRO", key: "amountRO", field: "amountRO" },
  ];

  const destroyChart = (key) => {
    if (dashboardCharts[key]) {
      dashboardCharts[key].destroy();
      dashboardCharts[key] = null;
    }
  };

  DASHBOARD_CHART_SPECS.forEach((spec) => destroyChart(spec.key));

  const getData = (field) => labels.map((l) => pivotByCostCenter.get(l)?.[field] || 0);

  const barOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  DASHBOARD_CHART_SPECS.forEach((spec) => {
    const el = document.getElementById(spec.id);
    if (el) {
      dashboardCharts[spec.key] = new Chart(el, {
        type: "bar",
        data: {
          labels,
          datasets: [{ label: spec.field, data: getData(spec.field), backgroundColor: colors }],
        },
        options: barOptions,
      });
    }
  });
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
  const thDownload = document.createElement("th");
  thDownload.textContent = "Download";
  thDownload.title = "Download PDF or Excel for this employee";
  row1.appendChild(thDownload);
  const thNames = document.createElement("th");
  thNames.textContent = "Names";
  row1.appendChild(thNames);
  const thCc = document.createElement("th");
  thCc.textContent = "Cost Center";
  row1.appendChild(thCc);
  const thShift = document.createElement("th");
  thShift.textContent = "Shift";
  row1.appendChild(thShift);
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
  ["PH/ DO", "PH Pay", "Sick Day", "Compassionate", "MET Leave", "Annual Leave", "HHS", "Conveyance All."].forEach((label) => {
    const th = document.createElement("th");
    th.className = "attendance-extra-col";
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
  const preservedCompassionate = new Map();
  const preservedMetLeave = new Map();
  const preservedAnnualLeave = new Map();
  const preservedConveyance = new Map();
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
    if (d.compassionate != null) preservedCompassionate.set(eid, String(d.compassionate));
    if (d.metLeave != null && Number.isFinite(d.metLeave)) preservedMetLeave.set(eid, String(d.metLeave));
    if (d.annualLeave != null && Number.isFinite(d.annualLeave)) preservedAnnualLeave.set(eid, String(d.annualLeave));
    if (d.conveyanceAll != null && Number.isFinite(d.conveyanceAll)) preservedConveyance.set(eid, String(d.conveyanceAll));
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
    const compInput = tr.querySelector(".attendance-compassionate-input");
    if (compInput) preservedCompassionate.set(eid, compInput.value.trim());
    const metInput = tr.querySelector(".attendance-metleave-input");
    if (metInput) preservedMetLeave.set(eid, metInput.value.trim());
    const annInput = tr.querySelector(".attendance-annualleave-input");
    if (annInput) preservedAnnualLeave.set(eid, annInput.value.trim());
    const convInput = tr.querySelector(".attendance-conveyance-input");
    if (convInput) preservedConveyance.set(eid, convInput.value.trim());
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
    const voluntaryNpf = Number(employee.voluntaryNpf || 0);
    const otherDeductions = Number(employee.otherDeductions || 0);
    const metrics = buildPayrollMetrics(employee, logs, {
      publicHoliday: false,
      housingRate: employee.hAllow,
      arrears,
      compass,
      voluntaryNpf,
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
    const compVal = preservedCompassionate.get(employeeId) ?? "";
    const phPayVal = preservedPhPay.get(employeeId) ?? "";
    const metLeaveVal = preservedMetLeave.get(employeeId) ?? "";
    const annualLeaveVal = preservedAnnualLeave.get(employeeId) ?? "";

    const normalHours = Math.max(0, totalWorkCapped - manualOt - phDoNum);
    const hhsVal = normalHours * 0.5;
    const conveyanceVal = calculateConveyanceAllowanceForSpec(logs, dayValues, shift, employee.basicWage, normalHours);
    const conveyanceValPreserved = preservedConveyance.get(employeeId);
    const conveyanceDisplay = conveyanceValPreserved !== undefined && conveyanceValPreserved !== ""
      ? conveyanceValPreserved
      : (conveyanceVal > 0 ? conveyanceVal.toFixed(2) : "");

    let html = `<td>${employeeId}</td>`;
    html += `<td class="attendance-download-cell"><button type="button" class="attendance-sheet-download-excel" title="Download Excel">Excel</button><button type="button" class="attendance-sheet-download-pdf" title="Download PDF">PDF</button></td>`;
    html += `<td>${employee.names || ""}</td><td>${costCenter}</td>`;
    html += `<td>${shift || ""}</td>`;
    range.dates.forEach((d, i) => {
      const isSunday = d.dayName === "Sun";
      const cellClass = isSunday ? "attendance-day-sunday" : "";
      const val = dayValues[i] || "";
      html += `<td class="${cellClass}"><input type="number" class="attendance-day-input" data-employee-id="${employeeId}" data-day-index="${i}" value="${val}" placeholder="0" min="0" max="7.5" step="0.01" size="4" /></td>`;
    });
    html += `<td class="attendance-total-cell">${asMoney(totalWorkCapped)}</td>`;
    html += `<td class="attendance-normal-cell">${asMoney(normalHours)}</td>`;
    html += `<td><input type="number" class="attendance-ot-input" data-employee-id="${employeeId}" value="${manualOt > 0 ? manualOt.toFixed(2) : ""}" placeholder="0" min="0" step="0.01" size="5" /></td>`;
    html += `<td><input type="number" class="attendance-phdo-input" data-employee-id="${employeeId}" value="${phDoVal || ""}" placeholder="0" min="0" step="0.01" size="3" /></td>`;
    html += `<td><input type="number" class="attendance-phpay-input" data-employee-id="${employeeId}" value="${phPayVal || ""}" placeholder="0" min="0" step="0.01" size="5" /></td>`;
    html += `<td><input type="number" class="attendance-sick-input" data-employee-id="${employeeId}" value="${sickVal || ""}" placeholder="0" min="0" step="0.01" size="3" /></td>`;
    html += `<td><input type="number" class="attendance-compassionate-input" data-employee-id="${employeeId}" value="${compVal || ""}" placeholder="0" min="0" step="0.01" size="3" /></td>`;
    html += `<td><input type="number" class="attendance-metleave-input" data-employee-id="${employeeId}" value="${metLeaveVal || ""}" placeholder="0" min="0" step="0.01" size="5" /></td>`;
    html += `<td><input type="number" class="attendance-annualleave-input" data-employee-id="${employeeId}" value="${annualLeaveVal || ""}" placeholder="0" min="0" step="0.01" size="5" /></td>`;
    html += `<td class="attendance-hhs-cell">${asMoney(hhsVal)}</td>`;
    html += `<td><input type="number" class="attendance-conveyance-input" data-employee-id="${employeeId}" value="${conveyanceDisplay}" placeholder="0" min="0" step="0.01" size="5" title="Conveyance Allowance" /></td>`;
    row.innerHTML = html;
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
      compassionate: compVal,
      metLeave: metLeaveVal,
      annualLeave: annualLeaveVal,
      conveyanceAll: parseFloat(conveyanceDisplay) || conveyanceVal,
      voluntaryNpf: metrics.voluntaryNpf,
      housingRate: metrics.housingRate,
      basePay: metrics.basePay,
      otPay: metrics.otPay,
      housingAllowance: metrics.housingAllowance,
      hhs: hhsVal,
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
};

const buildPayrollFromAttendanceEntry = (employee, attEntry) => {
  const asM = (v) => (Number(v) || 0).toFixed(2);
  const basicWage = Number(employee.basicWage || 0);
  const housingRate = Number(employee.hAllow || 0);
  const normal = Number(attEntry?.totalWork || 0) - Number(attEntry?.totalOvertime || 0) - Number(attEntry?.phDo || 0);
  const normalHours = Math.max(0, normal);
  const otHours = Number(attEntry?.totalOvertime || 0);
  const phDo = Number(attEntry?.phDo || 0);
  const phPay = Number(attEntry?.phPay || 0);
  const arrears = Number(attEntry?.arrears ?? employee.arrears ?? 0);
  const compass = Number(attEntry?.compass ?? employee.compass ?? 0);
  const metLeave = Number(attEntry?.metLeave ?? 0);
  const annualLeave = Number(attEntry?.annualLeave ?? 0);
  const hhs = Number(attEntry?.hhs ?? 0);
  const conveyance = Number(attEntry?.conveyanceAll ?? 0);
  const voluntaryNpf = Number(employee.voluntaryNpf || 0);
  const otherDeductions = Number(employee.otherDeductions || 0);

  const basicSalary = basicWage * normalHours;
  const otSalary = basicWage * 1.5 * otHours;
  const housingAllowance = housingRate * (normalHours + otHours + phDo);
  const taxableEarning =
    basicSalary + otSalary + phPay + housingAllowance + arrears + compass +
    metLeave + hhs + conveyance;
  const totalEarning = taxableEarning + annualLeave;
  const npf5 = totalEarning * 0.05;
  const npf75 = totalEarning * 0.075;
  const basic1 = basicSalary * 0.01;
  const annualized = totalEarning * 26;
  let payeA = 0;
  if (totalEarning < 1156.92) payeA = 0;
  else if (totalEarning < 1733.86) payeA = (annualized - 30080) * 0.11 / 26;
  else if (totalEarning < 2310.78) payeA = (annualized - 30080 - 15000) * 0.23 / 26 + 63.46;
  else if (totalEarning < 3464.63) payeA = (annualized - 30080 - 30000) * 0.35 / 26 + 63.46 + 132.69;
  else payeA = (annualized - 30080 - 60000) * 0.4 / 26 + 63.46 + 132.69 + 403.85;
  const salaryForPeriod =
    totalEarning - npf5 - npf75 - voluntaryNpf - payeA - basic1 - otherDeductions;

  return {
    employeeId: String(employee.employeeId || ""),
    employeeName: employee.names || "",
    costCenter: employee.costCenter || employee.department || "",
    employee: employee.startDate || "",
    npfNumber: employee.npf || "",
    bspAccount: employee.bsp || "",
    basicWage: asM(basicWage),
    housingAll: asM(housingRate),
    basicSalary: asM(basicSalary),
    overTimeS: asM(otSalary),
    public: asM(phPay),
    housingA: asM(housingAllowance),
    hhs: asM(hhs),
    conveyance: asM(conveyance),
    arrears: asM(arrears),
    compassOf: asM(compass),
    metLeave: asM(metLeave),
    taxableE: asM(taxableEarning),
    annual: asM(annualLeave),
    totalEa: asM(totalEarning),
    npf5: asM(npf5),
    npf75: asM(npf75),
    voluntaryN: asM(voluntaryNpf),
    payeA: asM(payeA),
    basic1: asM(basic1),
    otherDedu: asM(otherDeductions),
    salaryFor: asM(salaryForPeriod),
    salaryForRo: asM(Math.round(salaryForPeriod)),
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

const saveAttendanceSheetToStorage = (fortnightValue, data) => {
  if (!fortnightValue || !data) return;
  try {
    const raw = localStorage.getItem(attendanceSheetStorageKey);
    const all = raw ? JSON.parse(raw) : {};
    all[fortnightValue] = data;
    localStorage.setItem(attendanceSheetStorageKey, JSON.stringify(all));
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
let attendanceSheetCostCenterUpdating = false;
let attendanceSheetDataCache = null;
const debouncedSaveAttendanceSheet = () => {
  if (attendanceSheetSaveTimeout) clearTimeout(attendanceSheetSaveTimeout);
  attendanceSheetSaveTimeout = setTimeout(() => {
    attendanceSheetSaveTimeout = null;
    const value = attendanceSheetFortnight?.value || "";
    if (!value || !attendanceSheetTable) return;
    const data = {};
    attendanceSheetTable.querySelectorAll("tr[data-employee-id]")?.forEach((tr) => {
      const eid = tr.dataset.employeeId || "";
      if (!eid) return;
      const dayInputs = tr.querySelectorAll(".attendance-day-input");
      const dayValues = dayInputs ? Array.from(dayInputs).map((inp) => inp.value.trim() || "") : [];
      const otInput = tr.querySelector(".attendance-ot-input");
      const phDoInput = tr.querySelector(".attendance-phdo-input");
      const phPayInput = tr.querySelector(".attendance-phpay-input");
      const sickInput = tr.querySelector(".attendance-sick-input");
      const compInput = tr.querySelector(".attendance-compassionate-input");
      const metInput = tr.querySelector(".attendance-metleave-input");
      const annInput = tr.querySelector(".attendance-annualleave-input");
      data[eid] = {
        dayValues,
        totalOvertime: otInput ? (parseFloat(otInput.value) || 0) : 0,
        phDo: phDoInput ? phDoInput.value.trim() : "",
        phPay: phPayInput ? (parseFloat(phPayInput.value) || 0) : 0,
        sickDays: sickInput ? sickInput.value.trim() : "",
        compassionate: compInput ? compInput.value.trim() : "",
      metLeave: metInput ? (parseFloat(metInput.value) || 0) : 0,
      annualLeave: annInput ? (parseFloat(annInput.value) || 0) : 0,
    };
    const convInput = tr.querySelector(".attendance-conveyance-input");
    if (convInput) data[eid].conveyanceAll = parseFloat(convInput.value) || 0;
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

const saveProfilesFromDevice = (employees) => {
  const profiles = loadEmployeeProfiles();
  let changed = false;
  employees.forEach((employee) => {
    if (!employee?.employeeId) return;
    const existing = profiles[employee.employeeId] || {};
    const cached =
      employeesCache.find(
        (entry) => String(entry.employeeId) === String(employee.employeeId)
      ) || {};
    const next = { ...existing };
    if (employee.costCenter && !existing.costCenter) {
      next.costCenter = employee.costCenter;
      changed = true;
    }
    if (employee.startDate && !existing.startDate) {
      next.startDate = employee.startDate;
      changed = true;
    }
    const constantNpf = employee.npf || existing.npf || cached.npf || "";
    const constantBsp = employee.bsp || existing.bsp || cached.bsp || "";
    const constantBasicWage =
      employee.basicWage || existing.basicWage || cached.basicWage || "";
    const constantHousingRate =
      employee.hAllow || existing.hAllow || cached.hAllow || "";
    if (constantNpf && next.npf !== constantNpf) {
      next.npf = constantNpf;
      changed = true;
    }
    if (constantBsp && next.bsp !== constantBsp) {
      next.bsp = constantBsp;
      changed = true;
    }
    if (constantBasicWage && next.basicWage !== constantBasicWage) {
      next.basicWage = constantBasicWage;
      changed = true;
    }
    if (constantHousingRate && next.hAllow !== constantHousingRate) {
      next.hAllow = constantHousingRate;
      changed = true;
    }
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
  const match = employeesCache.find((emp) => emp.employeeId === employeeId);
  return match ? match.names : "";
};

const showEmployeeForm = (employeeId) => {
  if (!employeeForm) return;
  employeeForm.classList.remove("section-hidden");
  const selected = employeesCache.find((emp) => emp.employeeId === employeeId);
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

const getPayrollColumnFilters = () => {
  const sel = (id) => (document.getElementById(id)?.value || "").trim();
  return {
    costCenter: payrollCostCenter?.value?.trim() || "",
    taxable: sel("filterTaxable"),
    arrears: sel("filterArrears"),
    compass: sel("filterCompass"),
    metLeave: sel("filterMetLeave"),
    annualLeave: sel("filterAnnualLeave"),
    totalEarning: sel("filterTotalEarning"),
    npf5: sel("filterNpf5"),
    npf75: sel("filterNpf75"),
    voluntaryNpf: sel("filterVoluntaryNpf"),
    paye: sel("filterPaye"),
    basic1: sel("filterBasic1"),
    otherDedu: sel("filterOtherDedu"),
    salaryForRo: sel("filterSalaryForRo"),
  };
};

const applyPayrollFilters = (logs, filters) => {
  if (!logs || logs.length === 0) return logs;
  const matchValue = (val, filter) => {
    if (!filter || filter === "") return true;
    const n = parseFloat(val);
    const num = Number.isNaN(n) ? 0 : n;
    if (filter === "nonzero") return num > 0;
    if (filter === "zero") return num === 0;
    return true;
  };
  return logs.filter((log) => {
    if (filters.costCenter) {
      const cc = (log.costCenter || "").trim() || "(blank)";
      if (cc !== filters.costCenter) return false;
    }
    if (!matchValue(log.taxableE, filters.taxable)) return false;
    if (!matchValue(log.arrears, filters.arrears)) return false;
    if (!matchValue(log.compassOf, filters.compass)) return false;
    if (!matchValue(log.metLeave, filters.metLeave)) return false;
    if (!matchValue(log.annual, filters.annualLeave)) return false;
    if (!matchValue(log.totalEa, filters.totalEarning)) return false;
    if (!matchValue(log.npf5, filters.npf5)) return false;
    if (!matchValue(log.npf75, filters.npf75)) return false;
    if (!matchValue(log.voluntaryN, filters.voluntaryNpf)) return false;
    if (!matchValue(log.payeA, filters.paye)) return false;
    if (!matchValue(log.basic1, filters.basic1)) return false;
    if (!matchValue(log.otherDedu, filters.otherDedu)) return false;
    if (!matchValue(log.salaryForRo, filters.salaryForRo)) return false;
    return true;
  });
};

const renderAttendanceTable = () => {
  if (!attendanceTable) return;
  if (!attendanceLogs || attendanceLogs.length === 0) {
    biometricMessage.textContent = "No attendance logs returned from device.";
    attendanceTable.innerHTML = "";
    return;
  }
  const filters = getPayrollColumnFilters();
  const filteredLogs = applyPayrollFilters(attendanceLogs, filters);
  populateCostCenterFilter(payrollCostCenter, filters.costCenter);
  const totalPages = Math.max(1, attendanceTotalPages);
  attendancePage = Math.min(attendancePage, totalPages);
  const visibleLogs = [...filteredLogs].sort((a, b) => {
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
  attendanceTable.innerHTML = "";
  visibleLogs.forEach((log) => {
    const toValue = (value) => (value === 0 || value ? String(value) : "");
    const row = document.createElement("tr");
    row.dataset.employeeId = toValue(log.employeeId);
    row.innerHTML = `
      <td>${toValue(log.employeeId)}</td>
      <td>
        <button type="button" class="attendance-download-excel">Excel</button>
        <button type="button" class="attendance-download-pdf">PDF</button>
      </td>
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
      <td>${toValue(log.taxableE)}</td>
      <td>${toValue(log.arrears)}</td>
      <td>${toValue(log.compassOf)}</td>
      <td>${toValue(log.metLeave)}</td>
      <td>${toValue(log.annual)}</td>
      <td>${toValue(log.totalEa)}</td>
      <td>${toValue(log.npf5)}</td>
      <td>${toValue(log.npf75)}</td>
      <td><input type="number" class="payroll-voluntarynpf-input" data-employee-id="${toValue(log.employeeId)}" value="${toValue(log.voluntaryN)}" placeholder="0" min="0" step="0.01" size="6" title="Voluntary NPF" /></td>
      <td>${toValue(log.payeA)}</td>
      <td>${toValue(log.basic1)}</td>
      <td>${toValue(log.otherDedu)}</td>
      <td class="payroll-salaryfor-cell">${toValue(log.salaryFor)}</td>
      <td class="payroll-salaryforro-cell">${toValue(log.salaryForRo)}</td>
    `;
    attendanceTable.appendChild(row);
  });
  updateAttendancePageInfo(totalPages);
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
  const hhsAllowance = hhsEligible ? 0.5 * totalHours : 0;
  const conveyanceAllowance = calculateConveyanceAllowance(logs, summaries, rate);
  const arrears = Number(overrides.arrears || 0);
  const compass = Number(overrides.compass || 0);
  const taxableEarning =
    basePay +
    otPay +
    phPay +
    housingAllowance +
    arrears +
    compass +
    metLeave +
    hhsAllowance +
    conveyanceAllowance;
  const annualLeaveAmount = (rate + housingRate) * 15;
  const totalEarning = taxableEarning + annualLeaveAmount;
  const npf5 = totalEarning * 0.05;
  const npf75 = totalEarning * 0.075;
  const basicRate1 = basePay * 0.01;
  const voluntaryNpf = Number(overrides.voluntaryNpf || 0);
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
  const salaryForPeriod =
    totalEarning -
    npf5 -
    npf75 -
    voluntaryNpf -
    payeA -
    basicRate1 -
    otherDeductions;

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
    otherDeductions,
    payeA,
    salaryForPeriod,
  };
};

const getSelectedFortnightLabel = () => {
  if (!payrollFortnight) return "";
  const selected = payrollFortnight.options[payrollFortnight.selectedIndex];
  return selected ? selected.textContent.trim() : "";
};

const setPayslipValue = (element, value) => {
  if (!element) return;
  element.textContent = value;
};

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
  ["Housing Allowance", metrics.housingAllowance ? metrics.housingAllowance.toFixed(2) : "0.00"],
  ["MET (Maternity Leave)", metrics.metLeave ? metrics.metLeave.toFixed(2) : "0.00"],
  ["HHS", metrics.hhsAllowance ? metrics.hhsAllowance.toFixed(2) : "0.00"],
  ["Conveyance Allowance", metrics.conveyanceAllowance ? metrics.conveyanceAllowance.toFixed(2) : "0.00"],
  ["Arrears", metrics.arrears ? Number(metrics.arrears).toFixed(2) : "0.00"],
  ["Compass / Officiate", metrics.compass ? Number(metrics.compass).toFixed(2) : "0.00"],
  ["Taxable Earning", metrics.taxableEarning ? metrics.taxableEarning.toFixed(2) : "0.00"],
  ["Annual Leave", metrics.annualLeaveAmount ? metrics.annualLeaveAmount.toFixed(2) : "0.00"],
  ["Total Earning", metrics.totalEarning ? metrics.totalEarning.toFixed(2) : "0.00"],
  ["NPF 5%", metrics.npf5 ? metrics.npf5.toFixed(2) : "0.00"],
  ["NPF 7.5%", metrics.npf75 ? metrics.npf75.toFixed(2) : "0.00"],
  ["Voluntary NPF", metrics.voluntaryNpf ? Number(metrics.voluntaryNpf).toFixed(2) : "0.00"],
  ["PAYE $ (A)", metrics.payeA ? metrics.payeA.toFixed(2) : "0.00"],
  ["Basic Rate 1%", metrics.basicRate1 ? metrics.basicRate1.toFixed(2) : "0.00"],
  ["Other Deductions", metrics.otherDeductions ? Number(metrics.otherDeductions).toFixed(2) : "0.00"],
  ["Salary for the Period", Number.isFinite(metrics.salaryForPeriod) ? metrics.salaryForPeriod.toFixed(2) : "0.00"],
  ["Salary for the Period RO", Number.isFinite(metrics.salaryForPeriod) ? Math.round(metrics.salaryForPeriod).toFixed(2) : "0.00"],
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
  const metrics = buildPayrollMetrics(selected, logs, {
    publicHoliday: payrollPublicHoliday?.value === "yes",
    housingRate: payrollHousingAllowanceRateInput?.value,
    arrears: payrollArrearsInput?.value,
    compass: payrollCompassInput?.value,
    voluntaryNpf: payrollVoluntaryNpfInput?.value,
    otherDeductions: payrollOtherDeductionsInput?.value,
  });
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
    if (payrollSalaryPeriodRoInput) {
      payrollSalaryPeriodRoInput.value = Number.isFinite(metrics.salaryForPeriod)
        ? Math.round(metrics.salaryForPeriod).toFixed(2)
        : "0.00";
    }
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
    metrics.housingAllowance ? metrics.housingAllowance.toFixed(2) : "0.00"
  );
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
  setPayslipValue(
    payslipSalaryPeriodRo,
    Number.isFinite(metrics.salaryForPeriod)
      ? Math.round(metrics.salaryForPeriod).toFixed(2)
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
    const metrics = buildPayrollMetrics(employee, logs, overrides);
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
      metrics.arrears ? Number(metrics.arrears).toFixed(2) : "0.00",
      metrics.compass ? Number(metrics.compass).toFixed(2) : "0.00",
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
      Number.isFinite(metrics.salaryForPeriod)
        ? Math.round(metrics.salaryForPeriod).toFixed(2)
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
  "Arrears",
  "Compass/Officiate",
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
  "Salary for the Period RO",
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
  "Taxable Earning (A)",
  "Arrears",
  "Compass/Officiate",
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
  "Salary for Period RO",
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
  entry.taxableE || "",
  entry.arrears || "",
  entry.compassOf || "",
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
  entry.salaryForRo || "",
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

const downloadAttendanceSheetEntryExcel = (entry) => {
  const asM = (v) => (Number(v) || 0).toFixed(2);
  const headers = [
    "Employee ID",
    "Employee Names",
    "Cost Center",
    ...(entry.dates || []).map((d) => `${d.dayName} ${d.dateLabel}`),
    "Total",
    "OT",
    "Shift",
    "Housing all/hr",
    "Basic Salary",
    "OT Salary",
    "PH x2",
    "Housing A",
    "HHS",
    "Conveyance",
    "Arrears",
    "Compass/Of",
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
    "Salary for Period RO",
  ];
  const row = [
    entry.employeeId || "",
    entry.names || "",
    entry.costCenter || "",
    ...(entry.dayValues || []),
    asM(entry.totalWork),
    asM(entry.totalOvertime),
    entry.shift || "",
    asM(entry.housingRate),
    asM(entry.basePay),
    asM(entry.otPay),
    asM(entry.phPay),
    asM(entry.housingAllowance),
    asM(entry.hhs),
    asM(entry.conveyanceAll),
    asM(entry.arrears),
    asM(entry.compass),
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
    asM(Math.round(entry.salaryForPeriod || 0)),
  ];
  const escape = (value) => `"${String(value).replace(/"/g, '""')}"`;
  const lines = [headers.map(escape).join(","), row.map(escape).join(",")];
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
  const id = entry.employeeId || "employee";
  downloadBlob(blob, `attendance-${id}.csv`);
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
    `Shift: ${entry.shift || ""}`,
    `Housing all/hr: ${asM(entry.housingRate)}`,
    `Basic Salary: ${asM(entry.basePay)}`,
    `OT Salary: ${asM(entry.otPay)}`,
    `PH x2: ${asM(entry.phPay)}`,
    `Housing A: ${asM(entry.housingAllowance)}`,
    `HHS: ${asM(entry.hhs)}`,
    `Conveyance: ${asM(entry.conveyanceAll)}`,
    `Arrears: ${asM(entry.arrears)}`,
    `Compass/Of: ${asM(entry.compass)}`,
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
    `Salary for Period RO: ${asM(Math.round(entry.salaryForPeriod || 0))}`,
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
      `Housing Allowance: ${metrics.housingAllowance.toFixed(2)} | Arrears: ${Number(metrics.arrears).toFixed(2)} | Compass: ${Number(metrics.compass).toFixed(2)}`
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
    lines.push(
      `Salary for Period: ${metrics.salaryForPeriod.toFixed(2)} | Salary for Period RO: ${Math.round(metrics.salaryForPeriod).toFixed(2)}`
    );
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
      updateEmployeeNameList(employeesCache);
      updatePayrollEmployeeList(employeesCache);
      updateRosterEmployeeList(employeesCache);
      renderEmployeeTable(employeesCache);
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
    await loadAttendanceFromBackend();
    biometricMessage.textContent = `Synced ${syncedCount} attendance logs.`;
  } catch (error) {
    biometricMessage.textContent = "Backend is not reachable.";
  } finally {
    attendanceSyncInFlight = false;
  }
};

const loadAttendanceFromBackend = async () => {
  biometricMessage.textContent = "Loading attendance logs...";
  const defaultRange = () => {
    const today = new Date();
    const from = new Date(today);
    from.setDate(today.getDate() - 14);
    return {
      start: formatDateForStorage(from.toISOString().slice(0, 10)),
      end: formatDateForStorage(today.toISOString().slice(0, 10)),
    };
  };
  const selectedRange =
    attendanceFilterFrom && attendanceFilterTo
      ? {
          start: formatDateForStorage(attendanceFilterFrom),
          end: formatDateForStorage(attendanceFilterTo),
        }
      : defaultRange();

  const rangeObj = { start: selectedRange.start, end: selectedRange.end };
  const [tableRows, allLogs] = await Promise.all([
    loadAttendanceTableForPeriod(rangeObj),
    loadAllAttendanceLogsForPeriod(selectedRange),
  ]);

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

  const range = getFortnightDateRange(
    attendanceFortnight?.value ||
    (attendanceFilterFrom && attendanceFilterTo ? `${attendanceFilterFrom}_${attendanceFilterTo}` : "")
  );
  let dateKeys = range?.dates?.map((d) => toDateKey(d.iso)).filter(Boolean) || [];
  if (dateKeys.length === 0 && selectedRange.start && selectedRange.end) {
    const parseDate = (s) => {
      const m = /^(\d{2})-(\d{2})-(\d{4})$/.exec(s);
      if (m) return new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]));
      const im = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
      if (im) return new Date(Number(im[1]), Number(im[2]) - 1, Number(im[3]));
      return null;
    };
    const startDate = parseDate(selectedRange.start);
    const endDate = parseDate(selectedRange.end);
    if (startDate && endDate) {
      const current = new Date(startDate);
      while (current <= endDate) {
        const iso = current.getFullYear() + "-" + String(current.getMonth() + 1).padStart(2, "0") + "-" + String(current.getDate()).padStart(2, "0");
        dateKeys.push(toDateKey(iso));
        current.setDate(current.getDate() + 1);
      }
    }
    dateKeys = dateKeys.filter(Boolean);
  }

  const payrollFortnightValue =
    attendanceFortnight?.value ||
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

  const rows = [];
  employeesCache.forEach((employee) => {
    const employeeId = String(employee.employeeId || "");
    let totalWork = 0;
    let totalOvertime = 0;
    dateKeys.forEach((dk) => {
      totalWork += Number(workByEmployeeDate.get(`${employeeId}__${dk}`) || 0);
      totalOvertime += Number(overtimeByEmployeeDate.get(`${employeeId}__${dk}`) || 0);
    });
    const attEntryFromSheet = useAttendanceSheet
      ? attendanceSheetEntries.find((e) => String(e.employeeId || "") === employeeId)
      : null;
    if (attEntryFromSheet && totalWork === 0) {
      totalWork = Number(attEntryFromSheet.totalWork || 0);
      totalOvertime = Number(attEntryFromSheet.totalOvertime || 0);
    }
    totalWork = Math.min(totalWork, MAX_FORTNIGHT_HOURS);

    const logs = logsByEmployee.get(employeeId) || [];
    const shift = attEntryFromSheet?.shift || getShiftFromLogsForPeriod(logs) || todayShiftByEmployee.get(employeeId) || "";
    let dayValues = (range?.dates || []).map((d) => {
      const dk = toDateKey(d.iso);
      const v = dk ? (workByEmployeeDate.get(`${employeeId}__${dk}`) || 0) : 0;
      return v > 0 ? v.toFixed(2) : "";
    });
    if (attEntryFromSheet?.dayValues && dayValues.every((v) => !v) && attEntryFromSheet.dayValues.length > 0) {
      dayValues = attEntryFromSheet.dayValues.map((v) => (v && parseFloat(v) > 0 ? String(parseFloat(v).toFixed(2)) : ""));
    }

    const manualOt = attEntryFromSheet ? Number(attEntryFromSheet.totalOvertime || 0) : totalOvertime;
    const manualPhDo = attEntryFromSheet ? Number(attEntryFromSheet.phDo || 0) : 0;
    const normalHours = Math.max(0, totalWork - manualOt - manualPhDo);
    const hhs = normalHours * 0.5;
    const basicWage = Number(employee.basicWage || 0);
    const housingRate = Number(employee.hAllow || 0);
    const standardMetLeave = (basicWage + housingRate) * 0.25;
    const standardAnnualLeave = (basicWage + housingRate) * 15;
    const calculatedConveyance = calculateConveyanceAllowanceForSpec(logs, dayValues, shift, basicWage, normalHours);

    const syntheticEntry = {
      totalWork,
      totalOvertime: manualOt,
      phDo: manualPhDo,
      phPay: attEntryFromSheet ? Number(attEntryFromSheet.phPay || 0) : 0,
      arrears: attEntryFromSheet?.arrears ?? employee.arrears ?? 0,
      compass: attEntryFromSheet?.compass ?? employee.compass ?? 0,
      metLeave: attEntryFromSheet ? Number(attEntryFromSheet.metLeave || 0) : standardMetLeave,
      annualLeave: attEntryFromSheet ? Number(attEntryFromSheet.annualLeave || 0) : standardAnnualLeave,
      hhs,
      conveyanceAll: attEntryFromSheet ? Number(attEntryFromSheet.conveyanceAll || 0) : calculatedConveyance,
      voluntaryNpf: employee.voluntaryNpf ?? 0,
    };
    rows.push(buildPayrollFromAttendanceEntry(employee, syntheticEntry));
  });

  attendanceLogs = rows;
  attendanceTotalPages = 1;
  attendancePage = 1;
  renderAttendanceTable();
  biometricMessage.textContent =
    rows.length > 0
      ? useAttendanceSheet
        ? `Payroll loaded for ${rows.length} employees (from Attendance sheet).`
        : `Payroll loaded for ${rows.length} employees. Load Attendance sheet for same fortnight to use manual OT, PH/DO, etc.`
      : "No employees found to load payroll.";
};

const initBiometric = async () => {
  const localConfig = loadBiometricConfig();
  populateBiometricForm(localConfig);
  try {
    const response = await fetch(`${API_BASE}/api/biometric/config`);
    if (response.ok) {
      const serverConfig = await response.json();
      populateBiometricForm({ ...localConfig, ...serverConfig });
      biometricMessage.textContent = "Loaded device configuration from backend.";
    }
  } catch (error) {
    biometricMessage.textContent =
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
      updateEmployeeNameList(employeesCache);
      updatePayrollEmployeeList(employeesCache);
      updateRosterEmployeeList(employeesCache);
      renderEmployeeTable(employeesCache);
      updateDashboardStats(employeesCache);
      renderDashboardCharts();
      populateCostCenterFilter(attendanceSheetCostCenter);
      populateCostCenterFilter(payrollCostCenter);
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
      updateEmployeeNameList(employeesCache);
      updatePayrollEmployeeList(employeesCache);
      updateRosterEmployeeList(employeesCache);
      renderEmployeeTable(employeesCache);
      updateDashboardStats(employeesCache);
      renderDashboardCharts();
      populateCostCenterFilter(attendanceSheetCostCenter);
      populateCostCenterFilter(payrollCostCenter);
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
  dashboardChartPeriod.addEventListener("change", renderDashboardCharts);
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
    const metrics = buildPayrollMetrics(selected, logs, {
      publicHoliday: payrollPublicHoliday?.value === "yes",
      housingRate: payrollHousingAllowanceRateInput?.value,
      arrears: payrollArrearsInput?.value,
      compass: payrollCompassInput?.value,
      voluntaryNpf: payrollVoluntaryNpfInput?.value,
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
    const metrics = buildPayrollMetrics(selected, logs, {
      publicHoliday: payrollPublicHoliday?.value === "yes",
      housingRate: payrollHousingAllowanceRateInput?.value,
      arrears: payrollArrearsInput?.value,
      compass: payrollCompassInput?.value,
      voluntaryNpf: payrollVoluntaryNpfInput?.value,
      otherDeductions: payrollOtherDeductionsInput?.value,
    });
    const lines = buildPayslipLines(selected, metrics).map(
      ([label, value]) => (value ? `${label}: ${value}` : label)
    );
    const blob = await buildPdfWithLogo(lines);
    downloadBlob(blob, "payslip-selected.pdf");
  });
}

saveBiometric.addEventListener("click", saveBiometricConfig);
testBiometric.addEventListener("click", testBiometricConnection);
syncEmployees.addEventListener("click", syncEmployeeData);
syncAttendance.addEventListener("click", syncAttendanceData);
loadAttendanceLogs.addEventListener("click", loadAttendanceFromBackend);
if (downloadAllLogsExcel) {
  downloadAllLogsExcel.addEventListener("click", downloadAllAttendanceLogsExcel);
}

if (loadAttendanceSheet) {
  loadAttendanceSheet.addEventListener("click", loadAttendanceSheetData);
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
  const voluntaryNpf = parseFloat(inputEl.value) || 0;
  const totalEa = parseFloat(log.totalEa) || 0;
  const npf5 = parseFloat(log.npf5) || 0;
  const npf75 = parseFloat(log.npf75) || 0;
  const payeA = parseFloat(log.payeA) || 0;
  const basic1 = parseFloat(log.basic1) || 0;
  const otherDedu = parseFloat(log.otherDedu) || 0;
  const salaryForPeriod = totalEa - npf5 - npf75 - voluntaryNpf - payeA - basic1 - otherDedu;
  log.voluntaryN = voluntaryNpf.toFixed(2);
  log.salaryFor = salaryForPeriod.toFixed(2);
  log.salaryForRo = String(Math.round(salaryForPeriod));
  const asM = (v) => (Number(v) || 0).toFixed(2);
  const salaryForCell = row.querySelector(".payroll-salaryfor-cell");
  const salaryForRoCell = row.querySelector(".payroll-salaryforro-cell");
  if (salaryForCell) salaryForCell.textContent = asM(salaryForPeriod);
  if (salaryForRoCell) salaryForRoCell.textContent = String(Math.round(salaryForPeriod));
};

if (attendanceTable) {
  attendanceTable.addEventListener("input", (event) => {
    const target = event.target;
    if (target?.classList?.contains("payroll-voluntarynpf-input")) {
      updatePayrollRowFromVoluntaryNpfChange(target);
    }
  });
  attendanceTable.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const row = target.closest("tr");
    if (!row) return;
    const employeeId = row.dataset.employeeId || "";
    if (!employeeId) return;
    const entry = attendanceLogs.find(
      (item) => String(item.employeeId || "") === String(employeeId)
    );
    if (!entry) return;

    if (target.classList.contains("attendance-download-excel")) {
      downloadAttendanceSheetCsv(entry);
      return;
    }
    if (target.classList.contains("attendance-download-pdf")) {
      downloadAttendanceSheetPdf(entry);
    }
  });
}

const updateAttendanceRowCalculations = (row) => {
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
  const hhsVal = normalHours * 0.5;

  const totalCell = row.querySelector(".attendance-total-cell");
  const normalCell = row.querySelector(".attendance-normal-cell");
  const hhsCell = row.querySelector(".attendance-hhs-cell");
  if (totalCell) totalCell.textContent = totalWork.toFixed(2);
  if (normalCell) normalCell.textContent = normalHours.toFixed(2);
  if (hhsCell) hhsCell.textContent = hhsVal.toFixed(2);
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
  return {
    ...baseEntry,
    employeeId,
    names: row.querySelector("td:nth-child(3)")?.textContent?.trim() || baseEntry.names,
    costCenter: row.querySelector("td:nth-child(4)")?.textContent?.trim() || baseEntry.costCenter,
    shift: row.querySelector("td:nth-child(5)")?.textContent?.trim() || baseEntry.shift,
    dayValues,
    totalWork: parseFloat(row.dataset.totalWork || "0") || 0,
    totalOvertime: parseFloat(getCellText(".attendance-ot-input")) || 0,
    phDo: getCellText(".attendance-phdo-input"),
    phPay: parseFloat(getCellText(".attendance-phpay-input")) || 0,
    sickDays: getCellText(".attendance-sick-input"),
    compassionate: getCellText(".attendance-compassionate-input"),
    metLeave: parseFloat(getCellText(".attendance-metleave-input")) || 0,
    annualLeave: parseFloat(getCellText(".attendance-annualleave-input")) || 0,
    hhs: parseFloat(getCellText(".attendance-hhs-cell")) || 0,
    conveyanceAll: parseFloat(getCellText(".attendance-conveyance-input") || getCellText(".attendance-conveyance-cell")) || 0,
  };
};

if (attendanceSheetTable) {
  attendanceSheetTable.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const isRelevant =
      target.classList.contains("attendance-ot-input") ||
      target.classList.contains("attendance-phdo-input") ||
      target.classList.contains("attendance-day-input") ||
      target.classList.contains("attendance-phpay-input") ||
      target.classList.contains("attendance-sick-input") ||
      target.classList.contains("attendance-compassionate-input") ||
      target.classList.contains("attendance-metleave-input") ||
      target.classList.contains("attendance-annualleave-input") ||
      target.classList.contains("attendance-conveyance-input");
    if (!isRelevant) return;
    const row = target.closest("tr");
    updateAttendanceRowCalculations(row);
    debouncedSaveAttendanceSheet();
  });

  attendanceSheetTable.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const row = target.closest("tr");
    if (!row || !row.dataset.employeeId) return;
    if (target.classList.contains("attendance-sheet-download-excel")) {
      const entry = buildAttendanceEntryFromRow(row);
      downloadAttendanceSheetEntryExcel(entry);
    } else if (target.classList.contains("attendance-sheet-download-pdf")) {
      const entry = buildAttendanceEntryFromRow(row);
      downloadAttendanceSheetEntryPdf(entry);
    }
  });
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

["payrollCostCenter", "filterTaxable", "filterArrears", "filterCompass", "filterMetLeave", "filterAnnualLeave",
  "filterTotalEarning", "filterNpf5", "filterNpf75", "filterVoluntaryNpf", "filterPaye", "filterBasic1",
  "filterOtherDedu", "filterSalaryForRo"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("change", renderAttendanceTable);
});

if (attendanceFortnight) {
  attendanceFortnight.addEventListener("change", () => {
    attendancePage = 1;
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
