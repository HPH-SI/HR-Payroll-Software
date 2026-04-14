const API_BASE = import.meta.env.VITE_API_BASE || '';

export async function fetchApi(path, options = {}) {
  const url = path.startsWith('http') ? path : `${API_BASE || ''}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers },
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

// ── Employees ─────────────────────────────────────────────────────────────────

export async function getEmployees() {
  const data = await fetchApi('/api/biometric/employees');
  return data.employees || [];
}

// ── Config ────────────────────────────────────────────────────────────────────

export async function getBiometricConfig() {
  return fetchApi('/api/biometric/config');
}

export async function saveBiometricConfig(config) {
  return fetchApi('/api/biometric/config', {
    method: 'POST',
    body: JSON.stringify(config),
  });
}

export async function testBiometricConnection(payload) {
  return fetchApi('/api/biometric/test', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// ── Sync ──────────────────────────────────────────────────────────────────────

export async function syncEmployees() {
  return fetchApi('/api/biometric/sync', { method: 'POST' });
}

export async function syncAttendanceLogs() {
  return fetchApi('/api/biometric/attendance', { method: 'POST' });
}

export async function syncAttendanceTable() {
  return fetchApi('/api/biometric/attendance/table', { method: 'POST' });
}

// ── Attendance ────────────────────────────────────────────────────────────────

export async function getAttendanceLogs(params) {
  const q = new URLSearchParams(
    Object.fromEntries(Object.entries(params || {}).filter(([, v]) => v !== undefined && v !== ''))
  ).toString();
  return fetchApi(`/api/biometric/attendance?${q}`);
}

export async function getAttendanceTable(params) {
  const q = new URLSearchParams(
    Object.fromEntries(Object.entries(params || {}).filter(([, v]) => v !== undefined && v !== ''))
  ).toString();
  return fetchApi(`/api/biometric/attendance/table?${q}`);
}

export async function getAttendanceSummary(params) {
  const q = new URLSearchParams(
    Object.fromEntries(Object.entries(params || {}).filter(([, v]) => v !== undefined && v !== ''))
  ).toString();
  return fetchApi(`/api/biometric/attendance/summary?${q}`);
}

// ── Manual sheet ──────────────────────────────────────────────────────────────

export async function getManualSheet() {
  const data = await fetchApi('/api/attendance-sheet-manual');
  return data.data || {};
}

export async function saveManualSheet(fortnightValue, data) {
  return fetchApi('/api/attendance-sheet-manual', {
    method: 'POST',
    body: JSON.stringify({ fortnightValue, data }),
  });
}

// ── Health ────────────────────────────────────────────────────────────────────

export async function getHealth() {
  return fetchApi('/api/health');
}

export { API_BASE };
