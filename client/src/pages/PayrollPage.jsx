import { useCallback, useEffect, useState } from 'react';
import { getEmployees, getAttendanceTable, syncAttendanceLogs, syncAttendanceTable } from '../utils/api';
import { getFortnightPeriods, getCurrentFortnight, parseFortnightValue } from '../utils/fortnight';
import { buildPayrollRow, buildEmployeeHoursMap } from '../utils/payroll';
import { useSyncContext } from '../utils/SyncContext';

const COST_CENTERS = ['', 'Admin', 'FBP', 'FBS', 'Finance', 'FO', 'HK', 'POMEC', 'Security', 'Others'];
const PAGE_SIZE = 25;

export default function PayrollPage() {
  const { syncVersion } = useSyncContext();
  const periods = getFortnightPeriods();
  const currentPeriod = getCurrentFortnight();

  const [fortnight, setFortnight] = useState(currentPeriod?.value || '');
  const [costCenter, setCostCenter] = useState('');
  const [columnFilter, setColumnFilter] = useState('');
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [loaded, setLoaded] = useState(false);

  const showMsg = (text, type = 'hint') => setMessage({ text, type });

  const loadPayroll = useCallback(async (fv) => {
    if (!fv) return;
    const { startIso, endIso } = parseFortnightValue(fv);
    if (!startIso || !endIso) return;

    setLoading(true);
    showMsg('Loading payroll data…', 'info');
    try {
      const [employees, tableData] = await Promise.all([
        getEmployees(),
        getAttendanceTable({ from: startIso, to: endIso, pageSize: 5000 }).catch(() => ({ rows: [] })),
      ]);

      const hoursMap = buildEmployeeHoursMap(tableData.rows || []);
      const payrollRows = employees
        .filter((e) => (e.status || 'Active') === 'Active')
        .map((emp) => {
          const eid = String(emp.employeeId || '');
          const hours = hoursMap.get(eid) || hoursMap.get(eid.replace(/^0+/, '')) || { totalHours: 0, otHours: 0 };
          return buildPayrollRow(emp, hours.totalHours, hours.otHours);
        });

      setRows(payrollRows);
      setPage(1);
      setLoaded(true);
      const total = payrollRows.reduce((s, r) => s + (r._raw?.salaryForPeriod || 0), 0);
      showMsg(
        `${payrollRows.length} employees · Total payout: SB$ ${total.toFixed(2)}`,
        'success'
      );
    } catch (err) {
      showMsg(`Load failed: ${err.message}`, 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (fortnight) loadPayroll(fortnight);
  }, [fortnight, loadPayroll]);

  // Reload when any sync completes (new employees appear automatically)
  useEffect(() => {
    if (syncVersion > 0 && fortnight) loadPayroll(fortnight);
  }, [syncVersion]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSyncAndLoad = async () => {
    setLoading(true);
    showMsg('Syncing attendance from device…', 'info');
    try {
      await Promise.allSettled([syncAttendanceLogs(), syncAttendanceTable()]);
      await loadPayroll(fortnight);
    } catch {
      showMsg('Sync failed.', 'error');
      setLoading(false);
    }
  };

  const filteredRows = rows.filter((r) => {
    if (costCenter && r.costCenter !== costCenter) return false;
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / PAGE_SIZE));
  const pageRows = filteredRows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const grandTotal = filteredRows.reduce(
    (acc, r) => ({
      basicSalary: acc.basicSalary + (Number(r.basicSalary) || 0),
      otSalary: acc.otSalary + (Number(r.otSalary) || 0),
      totalEarning: acc.totalEarning + (Number(r.totalEarning) || 0),
      salaryForPeriod: acc.salaryForPeriod + (Number(r.salaryForPeriod) || 0),
    }),
    { basicSalary: 0, otSalary: 0, totalEarning: 0, salaryForPeriod: 0 }
  );

  const COLUMNS = [
    { key: 'employeeId', label: 'Employee Id' },
    { key: 'employeeName', label: 'Employee Name' },
    { key: 'costCenter', label: 'Cost Center' },
    { key: 'npfNumber', label: 'NPF Number' },
    { key: 'bspAccount', label: 'BSP Account' },
    { key: 'basicSalary', label: 'Basic Salary', numeric: true },
    { key: 'otSalary', label: 'OT Salary', numeric: true },
    { key: 'totalEarning', label: 'Total Earning', numeric: true },
    { key: 'salaryForPeriod', label: 'Salary for Period', numeric: true },
  ];

  const visibleCols = columnFilter ? COLUMNS.filter((c) => c.key === 'employeeId' || c.key === 'employeeName' || c.key === columnFilter) : COLUMNS;

  const msgClass =
    message.type === 'error' ? 'hint error-text'
    : message.type === 'success' ? 'hint success-text'
    : 'hint';

  return (
    <section className="card">
      <h2>Payroll</h2>
      <div className="grid three">
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
          {fortnight && (
            <div style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: 4 }}>
              {parseFortnightValue(fortnight).startIso} → {parseFortnightValue(fortnight).endIso}
            </div>
          )}
        </label>
        <label>
          Cost Center
          <select value={costCenter} onChange={(e) => { setCostCenter(e.target.value); setPage(1); }}>
            {COST_CENTERS.map((cc) => (
              <option key={cc || 'all'} value={cc}>{cc || 'All'}</option>
            ))}
          </select>
        </label>
        <label>
          Filter by Column
          <select value={columnFilter} onChange={(e) => setColumnFilter(e.target.value)}>
            <option value="">All Columns</option>
            {COLUMNS.filter((c) => c.numeric).map((c) => (
              <option key={c.key} value={c.key}>{c.label}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="button-row">
        <button
          type="button"
          className="primary"
          onClick={() => loadPayroll(fortnight)}
          disabled={loading || !fortnight}
        >
          {loading ? 'Loading…' : 'Load Logs'}
        </button>
        <button type="button" onClick={handleSyncAndLoad} disabled={loading}>
          Sync &amp; Reload
        </button>
      </div>
      <p className={msgClass}>{message.text}</p>

      {loaded && (
        <div style={{ marginBottom: 8, display: 'flex', gap: 24, flexWrap: 'wrap', fontSize: '0.9rem', color: '#374151' }}>
          <span>Basic Salary: <strong>SB$ {grandTotal.basicSalary.toFixed(2)}</strong></span>
          <span>OT Salary: <strong>SB$ {grandTotal.otSalary.toFixed(2)}</strong></span>
          <span>Total Earning: <strong>SB$ {grandTotal.totalEarning.toFixed(2)}</strong></span>
          <span style={{ color: '#1e3a8a' }}>Net Payout: <strong>SB$ {grandTotal.salaryForPeriod.toFixed(2)}</strong></span>
        </div>
      )}

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {visibleCols.map((c) => <th key={c.key}>{c.label}</th>)}
            </tr>
          </thead>
          <tbody id="attendanceTable">
            {!loaded ? (
              <tr><td colSpan={visibleCols.length}>Select a fortnight period and click Load Logs.</td></tr>
            ) : pageRows.length === 0 ? (
              <tr><td colSpan={visibleCols.length}>No payroll data. Sync attendance from the device first.</td></tr>
            ) : (
              <>
                {pageRows.map((r) => (
                  <tr key={r.employeeId}>
                    {visibleCols.map((c) => (
                      <td key={c.key} style={c.numeric ? { textAlign: 'right' } : {}}>
                        {c.numeric ? `SB$ ${r[c.key]}` : r[c.key] || '—'}
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>

      {loaded && totalPages > 1 && (
        <div className="button-row">
          <button type="button" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
            Previous
          </button>
          <span className="hint">Page {page} of {totalPages} ({filteredRows.length} employees)</span>
          <button type="button" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
            Next
          </button>
        </div>
      )}
    </section>
  );
}
