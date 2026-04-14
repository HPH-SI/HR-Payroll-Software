import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'HR Dashboard', end: true },
  { to: '/biometric', label: 'Biometric Device Setup' },
  { to: '/attendance', label: 'Attendance' },
  { to: '/payroll', label: 'Payroll' },
  { to: '/reports', label: 'Reports' },
];

/** Full payroll UI (Bank Advice, accounting pivot, charts, PDF/Excel) lives on the Node server, not this React shell. */
function fullSystemHref(hash = '') {
  if (typeof window === 'undefined') return `http://localhost:4000/${hash}`;
  const { protocol, hostname } = window.location;
  return `${protocol}//${hostname}:4000/${hash}`;
}

export default function Navbar() {
  return (
    <nav className="main-nav">
      <div className="nav-links">
        <a
          href={fullSystemHref('')}
          className="nav-full-app"
          title="Bank Advice, pivot for accounting, dashboard charts, payslips, and full payroll tools"
        >
          Full system
        </a>
        {navItems.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {label}
          </NavLink>
        ))}
        <a href={fullSystemHref('#bank-advice')} className="nav-full-app nav-bank-advice">
          Bank Advice
        </a>
      </div>
    </nav>
  );
}
