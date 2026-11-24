// GET /api/private-writing             -> list of private pieces (signed in only)
// GET /api/private-writing?slug=<slug> -> one piece (signed in only)
import { linkedFrom, listPrivate, readPrivate } from './_lib/writings.js';
import { isAuthenticated, send } from './_lib/session.js';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return send(res, 405, { error: 'Method not allowed.' });
  }
  if (!isAuthenticated(req)) return send(res, 401, { error: 'Sign in to read this.' });

  const requested = new URL(req.url, 'http://x').searchParams.get('slug');
  if (!requested) return send(res, 200, { items: listPrivate().map(({ slug, title, date, label, section, status }) => ({ slug, title, date, label, section, status })) });

  const writing = readPrivate(requested);
  if (!writing) return send(res, 404, { error: 'Not found.' });

  const { slug, title, date, label, section, status, body } = writing;
  return send(res, 200, { slug, title, date, label, section, status, body, linkedFrom: linkedFrom(slug) });
}
