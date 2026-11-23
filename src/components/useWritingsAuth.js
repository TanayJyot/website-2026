import { useCallback, useEffect, useState } from 'react';

async function call(method, body) {
  const res = await fetch('/api/auth', {
    method,
    credentials: 'same-origin',
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
}

/**
 * Sign-in state for the private writings. `status` is 'loading' until the first
 * check finishes, then 'in' or 'out'. `configured` is false when the site has no
 * password set (or the API isn't reachable), so the UI can say so.
 */
export default function useWritingsAuth() {
  const [state, setState] = useState({ status: 'loading', configured: true });

  useEffect(() => {
    let live = true;
    call('GET')
      .then(({ ok, data }) => live && setState({ status: ok && data.authenticated ? 'in' : 'out', configured: ok && data.configured }))
      .catch(() => live && setState({ status: 'out', configured: false }));
    return () => { live = false; };
  }, []);

  const login = useCallback(async (password) => {
    try {
      const { ok, data } = await call('POST', { password });
      if (ok) setState({ status: 'in', configured: true });
      return ok ? null : data.error || 'Could not sign in.';
    } catch {
      return 'Could not reach the server.';
    }
  }, []);

  const logout = useCallback(async () => {
    try { await call('DELETE'); } catch { /* cookie expires on its own */ }
    setState((s) => ({ ...s, status: 'out' }));
  }, []);

  return { ...state, login, logout };
}
