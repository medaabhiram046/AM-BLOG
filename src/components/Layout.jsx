import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Rocket, Send } from 'lucide-react';

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <div className="glow-arc"></div>
      <div className="app-shell">
        <header className="header">
          <div className="brand-wrap">
            <div className="brand-icon">
              <Send size={16} color="white" />
            </div>
            <Link to="/" className="brand">Quantral AI</Link>
          </div>
          
          <nav className="nav">
            <NavLink to="/">About us</NavLink>
            <NavLink to="/posts">How it works</NavLink>
            <NavLink to="/comments">Smart solutions</NavLink>
            <NavLink to="/">Pricing</NavLink>
            <NavLink to="/">Contact us</NavLink>
          </nav>

          <div className="header-actions">
            <Link to="/login" className="btn-ghost">Login</Link>
            <Link to="/posts" className="btn-primary">
              Get started now <span style={{marginLeft: '4px'}}>›</span>
            </Link>
          </div>
        </header>

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}
