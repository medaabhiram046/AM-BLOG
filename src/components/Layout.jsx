import { Link, NavLink, Outlet } from 'react-router-dom';
import { Send, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
  const { user, logout } = useAuth();

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
            {user ? (
              <div className="user-menu">
                <div className="user-avatar">
                  <User size={16} color="white" />
                </div>
                <span className="user-name">{user.name}</span>
                <button
                  className="logout-btn"
                  onClick={logout}
                  title="Sign out"
                >
                  <LogOut size={15} />
                  Sign out
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn-ghost">Login</Link>
                <Link to="/signup" className="btn-primary">
                  Get started now <span style={{ marginLeft: '4px' }}>›</span>
                </Link>
              </>
            )}
          </div>
        </header>

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}
