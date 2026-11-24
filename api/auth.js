// GET    /api/auth  -> { configured, authenticated }
// POST   /api/auth  { password } -> signs in (sets the session cookie)
// DELETE /api/auth  -> signs out
import { clearCookie, isAuthenticated, isConfigured, passwordMatches, readJson, send, sessionCookie } from './_lib/session.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return send(res, 200, { configured: isConfigured(), authenticated: isAuthenticated(req) });
  }
  if (req.method === 'DELETE') {
    return send(res, 200, { authenticated: false }, { 'Set-Cookie': clearCookie(req) });
  }
  if (req.method === 'POST') {
    if (!isConfigured()) return send(res, 503, { error: 'Sign-in is not set up yet.' });
    const { password } = await readJson(req);
    if (!passwordMatches(password)) {
      await new Promise((r) => setTimeout(r, 700)); // slow down guessing
      return send(res, 401, { error: 'Wrong password.' });
    }
    return send(res, 200, { authenticated: true }, { 'Set-Cookie': sessionCookie(req) });
  }
  res.setHeader('Allow', 'GET, POST, DELETE');
  return send(res, 405, { error: 'Method not allowed.' });
}
