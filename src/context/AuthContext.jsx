import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('am_blog_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  // Persist user to localStorage on change
  useEffect(() => {
    if (user) {
      localStorage.setItem('am_blog_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('am_blog_user');
    }
  }, [user]);

  /** Returns { ok, error } */
  function login(email, password) {
    // Load registered accounts from localStorage
    const accounts = getAccounts();
    const match = accounts.find(
      (a) => a.email.toLowerCase() === email.toLowerCase() && a.password === password
    );
    if (match) {
      const userData = { name: match.name, email: match.email };
      setUser(userData);
      return { ok: true };
    }
    // Also allow the built-in demo account
    if (email.toLowerCase() === 'demo@amblog.com' && password === '123456') {
      const userData = { name: 'Demo User', email: 'demo@amblog.com' };
      setUser(userData);
      return { ok: true };
    }
    return { ok: false, error: 'Invalid email or password.' };
  }

  /** Returns { ok, error } */
  function signup(name, email, password) {
    const accounts = getAccounts();
    if (accounts.find((a) => a.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, error: 'An account with this email already exists.' };
    }
    const newAccount = { name, email, password };
    accounts.push(newAccount);
    localStorage.setItem('am_blog_accounts', JSON.stringify(accounts));
    const userData = { name, email };
    setUser(userData);
    return { ok: true };
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function getAccounts() {
  try {
    const stored = localStorage.getItem('am_blog_accounts');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
