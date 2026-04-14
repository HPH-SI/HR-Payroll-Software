import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/DashboardPage';
import BiometricPage from './pages/BiometricPage';
import AttendancePage from './pages/AttendancePage';
import PayrollPage from './pages/PayrollPage';
import ReportsPage from './pages/ReportsPage';
import { SyncProvider } from './utils/SyncContext';

export default function App() {
  return (
    <SyncProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="biometric" element={<BiometricPage />} />
            <Route path="attendance" element={<AttendancePage />} />
            <Route path="payroll" element={<PayrollPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SyncProvider>
  );
}
