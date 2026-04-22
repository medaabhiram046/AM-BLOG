import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'demo@amblog.com' && password === '123456') {
      setMessage('Login successful. Welcome back!');
    } else {
      setMessage('Wrong email or password. Try again.');
    }
  };

  return (
    <section className="login-page">
      <form className="login-card glass" onSubmit={handleSubmit}>
        <span className="badge">Demo Login</span>
        <h2>Login to AM BlogSphere</h2>
        <p className="login-help">Use demo@amblog.com and 123456</p>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />

        <button type="submit" className="btn primary full">Login</button>
        {message && <p className={message.includes('successful') ? 'success' : 'error'}>{message}</p>}
        <Link to="/" className="back-home">← Back Home</Link>
      </form>
    </section>
  );
}
