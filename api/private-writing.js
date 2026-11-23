// GET /api/private-writing?slug=<slug> -> the piece, only with a valid session.
import { linkedFrom, readPrivate } from './_lib/writings.js';
import { isAuthenticated, send } from './_lib/session.js';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return send(res, 405, { error: 'Method not allowed.' });
  }
  if (!isAuthenticated(req)) return send(res, 401, { error: 'Sign in to read this.' });

  const slug = new URL(req.url, 'http://x').searchParams.get('slug') || '';
  const writing = readPrivate(slug);
  if (!writing) return send(res, 404, { error: 'Not found.' });

  const { title, date, label, section, status, body } = writing;
  return send(res, 200, { slug, title, date, label, section, status, body, linkedFrom: linkedFrom(slug) });
}
