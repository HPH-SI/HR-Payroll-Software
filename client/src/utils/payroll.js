/**
 * Core payroll calculation utilities — mirrors app.js business rules.
 */

const STANDARD_DAILY_HOURS = 7.5;

/** Compute salary for the period (take-home). */
export const computeSalaryForPeriod = ({ totalEa, basicSalary, voluntaryNpfPct, payeA, otherDeductions }) => {
  const te = Number(totalEa) || 0;
  const bs = Number(basicSalary) || 0;
  const npf5 = te * 0.05;
  const voluntaryNpfAmount = (te * (Number(voluntaryNpfPct) || 0)) / 100;
  const basic1 = bs * 0.01;
  const paye = Number(payeA) || 0;
  const other = Number(otherDeductions) || 0;
  return te - npf5 - voluntaryNpfAmount - paye - basic1 - other;
};

/** Compute PAYE (income tax) for a fortnightly earning. */
export const computePayeA = (totalEarning) => {
  const te = Number(totalEarning) || 0;
  const annualized = te * 26;
  if (te < 1156.92) return 0;
  if (te < 1733.86) return ((annualized - 30080) * 0.11) / 26;
  if (te < 2310.78) return ((annualized - 30080 - 15000) * 0.23) / 26 + 63.46;
  if (te < 3464.63) return ((annualized - 30080 - 30000) * 0.35) / 26 + 63.46 + 132.69;
  return ((annualized - 30080 - 60000) * 0.4) / 26 + 63.46 + 132.69 + 403.85;
};

/**
 * Build full payroll record for one employee given total worked hours.
 */
export const buildPayrollRow = (employee, totalHours, otHours = 0) => {
  const basicWage = Number(employee.basicWage) || 0;
  const housingRate = Number(employee.hAllow) || 0;
  const voluntaryNpfPct = Number(employee.voluntaryNpf) || 0;
  const otherDeductions = Number(employee.otherDeductions) || 0;
  const arrears = Number(employee.arrears) || 0;
  const compass = Number(employee.compass) || 0;
  const rentAllowance = Number(employee.rentAllowance) || 0;

  const normalHours = Math.max(0, totalHours - otHours);
  const basicSalary = basicWage * normalHours;
  const otSalary = basicWage * 1.5 * otHours;
  const housingAllowance = housingRate * (normalHours + otHours);
  const taxableEarning = basicSalary + otSalary + housingAllowance + rentAllowance + arrears + compass;
  const totalEarning = taxableEarning;

  const npf5 = totalEarning * 0.05;
  const npf75 = totalEarning * 0.075;
  const basicRate1 = basicSalary * 0.01;
  const payeA = computePayeA(totalEarning);
  const salaryForPeriod = computeSalaryForPeriod({ totalEa: totalEarning, basicSalary, voluntaryNpfPct, payeA, otherDeductions });

  const fmt = (v) => Number(v || 0).toFixed(2);

  return {
    employeeId: String(employee.employeeId || ''),
    employeeName: employee.names || '',
    costCenter: employee.costCenter || employee.department || '',
    npfNumber: employee.npf || '',
    bspAccount: employee.bsp || '',
    basicWage: fmt(basicWage),
    normalHours: fmt(normalHours),
    otHours: fmt(otHours),
    basicSalary: fmt(basicSalary),
    otSalary: fmt(otSalary),
    housingAllowance: fmt(housingAllowance),
    taxableEarning: fmt(taxableEarning),
    totalEarning: fmt(totalEarning),
    npf5: fmt(npf5),
    npf75: fmt(npf75),
    basicRate1: fmt(basicRate1),
    payeA: fmt(payeA),
    otherDeductions: fmt(otherDeductions),
    salaryForPeriod: fmt(salaryForPeriod),
    _raw: {
      totalEarning,
      salaryForPeriod,
      basicSalary,
      totalHours,
      otHours,
    },
  };
};

/**
 * Build work totals per employee from attendance table rows.
 * Returns Map<empId, { totalHours, otHours }>
 */
export const buildEmployeeHoursMap = (tableRows) => {
  const map = new Map();
  (tableRows || []).forEach((row) => {
    const eid = String(row.userId || row.employeeId || '').trim();
    if (!eid) return;
    const prev = map.get(eid) || { totalHours: 0, otHours: 0 };
    prev.totalHours += Math.min(parseFloat(row.work) || 0, STANDARD_DAILY_HOURS);
    prev.otHours += parseFloat(row.overtime) || 0;
    map.set(eid, prev);
  });
  return map;
};
