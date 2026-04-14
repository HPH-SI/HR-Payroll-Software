import { useEffect, useState } from 'react';
import {
  getBiometricConfig,
  saveBiometricConfig,
  testBiometricConnection,
  syncEmployees,
  syncAttendanceLogs,
  syncAttendanceTable,
} from '../utils/api';
import { useSyncContext } from '../utils/SyncContext';

const DEFAULT_CONFIG = {
  deviceIp: '',
  devicePort: '4370',
  deviceModel: 'Face ID 4',
  deviceNo: '1',
  deviceCommKey: '0',
  bridgeUrl: 'http://localhost:5001',
  deviceId: '',
  syncInterval: '15',
  deviceUser: 'admin',
  devicePassword: '',
  connectionStatus: 'Offline',
  enrollmentMode: 'Face ID',
};

export default function BiometricPage() {
  const { notifySync } = useSyncContext();
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [message, setMessage] = useState({ text: 'Loading configuration…', type: 'info' });
  const [busy, setBusy] = useState('');

  useEffect(() => {
    getBiometricConfig()
      .then((cfg) => {
        setConfig((prev) => ({ ...prev, ...cfg }));
        const last = cfg.lastSyncAt
          ? `Last synced: ${new Date(cfg.lastSyncAt).toLocaleString()}`
          : 'No sync recorded yet.';
        setMessage({ text: last, type: 'hint' });
      })
      .catch(() => setMessage({ text: 'Server offline – using defaults.', type: 'error' }));
  }, []);

  const field = (key) => ({
    value: config[key] ?? '',
    onChange: (e) => setConfig((prev) => ({ ...prev, [key]: e.target.value })),
  });

  const showMsg = (text, type = 'hint') => setMessage({ text, type });

  const handleSave = async () => {
    setBusy('save');
    try {
      await saveBiometricConfig(config);
      showMsg('Configuration saved.', 'success');
    } catch {
      showMsg('Failed to save configuration.', 'error');
    } finally {
      setBusy('');
    }
  };

  const handleTest = async () => {
    setBusy('test');
    showMsg('Testing connection…', 'info');
    try {
      const result = await testBiometricConnection({
        deviceIp: config.deviceIp,
        devicePort: Number(config.devicePort),
      });
      const ok = result.status === 'online';
      showMsg(result.message || (ok ? 'Device online.' : 'Device offline.'), ok ? 'success' : 'error');
      if (ok) {
        setConfig((prev) => ({ ...prev, connectionStatus: 'Online' }));
      }
    } catch {
      showMsg('Connection test failed – is the server running?', 'error');
    } finally {
      setBusy('');
    }
  };

  const handleSyncEmployees = async () => {
    setBusy('syncEmp');
    showMsg('Syncing employees from device…', 'info');
    try {
      const res = await syncEmployees();
      showMsg(res.message || `Synced ${res.employees?.length ?? 0} employees.`, 'success');
      notifySync();
    } catch {
      showMsg('Employee sync failed – check bridge and device.', 'error');
    } finally {
      setBusy('');
    }
  };

  const handleSyncAttendance = async () => {
    setBusy('syncAtt');
    showMsg('Syncing attendance logs from device…', 'info');
    try {
      const [logsRes, tableRes] = await Promise.allSettled([
        syncAttendanceLogs(),
        syncAttendanceTable(),
      ]);
      const logMsg = logsRes.status === 'fulfilled'
        ? (logsRes.value.message || `${logsRes.value.totalCount ?? 0} logs synced.`)
        : 'Log sync failed.';
      const tableMsg = tableRes.status === 'fulfilled'
        ? (tableRes.value.message || `${tableRes.value.storedRows ?? 0} table rows synced.`)
        : 'Table sync failed.';
      showMsg(`${logMsg} | ${tableMsg}`, 'success');
      notifySync();
    } catch {
      showMsg('Attendance sync failed – check bridge and device.', 'error');
    } finally {
      setBusy('');
    }
  };

  const msgClass = message.type === 'error' ? 'hint error-text'
    : message.type === 'success' ? 'hint success-text'
    : message.type === 'info' ? 'hint'
    : 'hint';

  return (
    <section className="card">
      <h2>Biometric Device Setup</h2>
      <p className="muted">Integrated device: FingerTec Face ID 4</p>
      <form className="grid two" onSubmit={(e) => e.preventDefault()}>
        <label>
          Device IP
          <input type="text" placeholder="192.168.1.111" {...field('deviceIp')} />
        </label>
        <label>
          Port
          <input type="number" placeholder="4370" {...field('devicePort')} />
        </label>
        <label>
          Device Model
          <input type="text" placeholder="Face ID 4" {...field('deviceModel')} />
        </label>
        <label>
          Device No
          <input type="number" placeholder="1" {...field('deviceNo')} />
        </label>
        <label>
          Comm Key
          <input type="number" placeholder="0" {...field('deviceCommKey')} />
        </label>
        <label>
          Bridge URL (Windows SDK)
          <input type="text" placeholder="http://192.168.1.50:5001" {...field('bridgeUrl')} />
        </label>
        <label>
          Device ID
          <input type="text" placeholder="FT-FACEID-4-001" {...field('deviceId')} />
        </label>
        <label>
          Sync Interval (minutes)
          <input type="number" placeholder="15" {...field('syncInterval')} />
        </label>
        <label>
          Username
          <input type="text" placeholder="admin" {...field('deviceUser')} />
        </label>
        <label>
          Password
          <input type="password" placeholder="••••••" {...field('devicePassword')} />
        </label>
        <label>
          Connection Status
          <select {...field('connectionStatus')}>
            <option value="Offline">Offline</option>
            <option value="Online">Online</option>
          </select>
        </label>
        <label>
          Enrollment Mode
          <select {...field('enrollmentMode')}>
            <option value="Face ID">Face ID</option>
            <option value="Face + PIN">Face + PIN</option>
            <option value="Face + Card">Face + Card</option>
          </select>
        </label>
        <div className="button-row" style={{ gridColumn: '1 / -1' }}>
          <button
            type="button"
            className="primary"
            onClick={handleSave}
            disabled={!!busy}
          >
            {busy === 'save' ? 'Saving…' : 'Save Configuration'}
          </button>
          <button
            type="button"
            onClick={handleTest}
            disabled={!!busy}
          >
            {busy === 'test' ? 'Testing…' : 'Test Connection'}
          </button>
          <button
            type="button"
            onClick={handleSyncEmployees}
            disabled={!!busy}
          >
            {busy === 'syncEmp' ? 'Syncing…' : 'Sync Employees'}
          </button>
          <button
            type="button"
            onClick={handleSyncAttendance}
            disabled={!!busy}
          >
            {busy === 'syncAtt' ? 'Syncing…' : 'Sync Attendance'}
          </button>
        </div>
        <p className={msgClass} style={{ gridColumn: '1 / -1' }}>
          {message.text}
        </p>
      </form>
    </section>
  );
}
