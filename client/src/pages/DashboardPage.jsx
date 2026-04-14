import { useEffect, useState } from 'react';
import { getEmployees, getAttendanceTable, getBiometricConfig } from '../utils/api';
import { getCurrentFortnight, parseFortnightValue } from '../utils/fortnight';
import { buildEmployeeHoursMap } from '../utils/payroll';
import { useSyncContext } from '../utils/SyncContext';

const REFRESH_INTERVAL_MS = 60_000;

export default function DashboardPage() {
  const { syncVersion } = useSyncContext();
  const [stats, setStats] = useState({
    employees: '—',
    compliance: '—',
    nextPayroll: '—',
    totalPayout: 'SB$ —',
    averageWage: 'SB$ —',
    lastSynced: null,
    deviceStatus: 'Unknown',
  });
  const [alerts, setAlerts] = useState([]);

  const loadStats = async () => {
    try {
      const [employees, config] = await Promise.all([
        getEmployees(),
        getBiometricConfig().catch(() => ({})),
      ]);

      const active = employees.filter((e) => (e.status || 'Active') === 'Active');

      // Payroll snapshot from current fortnight
      const currentPeriod = getCurrentFortnight();
      let totalPayout = 0;
      let averageWage = 0;
      let compliance = 0;

      if (currentPeriod) {
        const { startIso, endIso } = parseFortnightValue(currentPeriod.value);
        try {
          const tableData = await getAttendanceTable({ from: startIso, to: endIso, pageSize: 5000 });
          const hoursMap = buildEmployeeHoursMap(tableData.rows || []);
          const basicWages = active.map((e) => Number(e.basicWage) || 0).filter((v) => v > 0);

          // Estimate total payout: sum of basic wages × average hours worked
          let sumSalary = 0;
          let empWithData = 0;
          active.forEach((emp) => {
            const eid = String(emp.employeeId || '');
            const hours = hoursMap.get(eid) || hoursMap.get(eid.replace(/^0+/, '')) || null;
            const wage = Number(emp.basicWage) || 0;
            if (hours && wage) {
              sumSalary += wage * hours.totalHours;
              empWithData++;
            }
          });
          totalPayout = sumSalary;
          averageWage = basicWages.length > 0 ? basicWages.reduce((s, v) => s + v, 0) / basicWages.length : 0;

          // Compliance: % of active employees who have at least some attendance data this fortnight
          const presentCount = active.filter((emp) => {
            const eid = String(emp.employeeId || '');
            return hoursMap.has(eid) || hoursMap.has(eid.replace(/^0+/, ''));
          }).length;
          compliance = active.length > 0 ? Math.round((presentCount / active.length) * 100) : 0;
        } catch {
          // attendance not available yet
        }
      }

      // Next payroll date = day after current fortnight ends
      let nextPayroll = '—';
      if (currentPeriod) {
        const { endIso } = parseFortnightValue(currentPeriod.value);
        const payDate = new Date(`${endIso}T12:00:00`);
        payDate.setDate(payDate.getDate() + 1);
        nextPayroll = payDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      }

      // Alerts
      const newAlerts = [];
      const noEnrollment = employees.filter((e) => !e.names || e.names.trim() === '' || e.names === 'Admin').length;
      if (noEnrollment > 0) {
        newAlerts.push(`${noEnrollment} employee${noEnrollment > 1 ? 's' : ''} may be missing biometric enrollment.`);
      }
      const missingWage = active.filter((e) => !Number(e.basicWage)).length;
      if (missingWage > 0) {
        newAlerts.push(`${missingWage} active employee${missingWage > 1 ? 's' : ''} missing basic wage.`);
      }
      if (compliance > 0 && compliance < 80) {
        newAlerts.push(`Low attendance compliance this fortnight: ${compliance}%.`);
      }
      if (config?.lastSyncAt) {
        const lastSync = new Date(config.lastSyncAt);
        const ageHours = (Date.now() - lastSync.getTime()) / 3_600_000;
        if (ageHours > 24) {
          newAlerts.push(`Last device sync was ${Math.round(ageHours)} hours ago. Consider syncing.`);
        }
      } else {
        newAlerts.push('No device sync recorded yet. Go to Biometric Setup to sync.');
      }

      setAlerts(newAlerts.length > 0 ? newAlerts : ['All systems normal.']);
      setStats({
        employees: active.length,
        compliance: compliance > 0 ? `${compliance}%` : 'No data',
        nextPayroll,
        totalPayout: `SB$ ${totalPayout.toFixed(2)}`,
        averageWage: `SB$ ${averageWage.toFixed(2)}`,
        lastSynced: new Date(),
        deviceStatus: config?.connectionStatus || 'Unknown',
        lastSyncAt: config?.lastSyncAt
          ? new Date(config.lastSyncAt).toLocaleString()
          : 'Never',
      });
    } catch {
      // server offline
    }
  };

  useEffect(() => {
    loadStats();
    const timer = setInterval(loadStats, REFRESH_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  // Immediately refresh when any sync completes (new employees appear on dashboard)
  useEffect(() => {
    if (syncVersion > 0) loadStats();
  }, [syncVersion]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <h2>HR Dashboard</h2>
        {stats.lastSynced && (
          <span className="hint" style={{ fontSize: '0.82rem' }}>
            Refreshed {stats.lastSynced.toLocaleTimeString()}
          </span>
        )}
      </div>
      <div className="grid three">
        <div className="stat">
          <h3>Active Employees</h3>
          <p>{stats.employees}</p>
        </div>
        <div className="stat">
          <h3>Attendance Compliance</h3>
          <p>{stats.compliance}</p>
          <small className="muted" style={{ fontSize: '0.78rem' }}>Current fortnight</small>
        </div>
        <div className="stat">
          <h3>Next Payroll Run</h3>
          <p>{stats.nextPayroll}</p>
        </div>
      </div>
      <div className="grid two">
        <div className="panel">
          <h3>Alerts</h3>
          <ul>
            {alerts.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
        <div className="panel">
          <h3>Payroll Snapshot</h3>
          <p>
            Estimated payout this fortnight: <strong>{stats.totalPayout}</strong>
          </p>
          <p>
            Average basic wage per hour: <strong>{stats.averageWage}</strong>
          </p>
          <p style={{ marginTop: 8, fontSize: '0.85rem', color: '#6b7280' }}>
            Device: <strong>{stats.deviceStatus}</strong>
            {stats.lastSyncAt && <> · Last sync: {stats.lastSyncAt}</>}
          </p>
        </div>
      </div>
    </section>
  );
}
