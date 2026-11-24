import React, { useState } from 'react';
import { Lock } from 'lucide-react';

/** Password prompt for the private writings. `onLogin(password)` resolves to an error message or null. */
export default function WritingsLogin({ onLogin, configured = true, heading = 'Sign in' }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    if (!password || busy) return;
    setBusy(true);
    setError('');
    const message = await onLogin(password);
    if (message) { setError(message); setPassword(''); }
    setBusy(false);
  }

  return (
    <form className="glass-card writings-login" onSubmit={submit}>
      <Lock size={22} aria-hidden="true" className="writings-login-icon" />
      <h3>{heading}</h3>
      <p>
        {configured ? 'Enter the password to continue.' : "Sign-in isn't available right now."}
      </p>
      {configured && (
        <>
          <label className="sr-only" htmlFor="writings-password">Password</label>
          <input
            id="writings-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="writings-login-input"
          />
          <button type="submit" className="btn-primary btn-touch" disabled={busy || !password}>
            {busy ? 'Checking…' : 'Unlock'}
          </button>
          <p role="alert" className="writings-login-error">{error}</p>
        </>
      )}
    </form>
  );
}
