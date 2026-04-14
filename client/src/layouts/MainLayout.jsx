import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <>
      <header className="top-bar" style={{ background: '#ffffff !important' }}>
        <div className="header-content">
          <img
            src="/assets/Heritage_Park_Hotel_Logo__blue_-a340a593-ae1b-4c65-8813-4f78b79b6671.png"
            alt="Heritage Park Hotel Logo"
            className="logo"
          />
          <h1>HR Payroll System</h1>
        </div>
        <p className="muted"></p>
      </header>
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
