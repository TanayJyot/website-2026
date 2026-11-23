// Password check and signed session cookie for the private writings.
// Needs one env var, WRITINGS_PASSWORD. WRITINGS_SESSION_SECRET is optional extra
// signing material. Changing either one signs everyone out. With no password set,
// nothing can sign in and the private writings stay locked.
import crypto from 'node:crypto';

const COOKIE = 'writings_session';
const MAX_AGE = 60 * 60 * 24 * 14; // seconds

export const isConfigured = () => Boolean(process.env.WRITINGS_PASSWORD);

const sha = (s) => crypto.createHash('sha256').update(String(s)).digest();
const key = () =>
  crypto.createHmac('sha256', 'writings-session-v1').update(`${process.env.WRITINGS_PASSWORD}\n${process.env.WRITINGS_SESSION_SECRET || ''}`).digest();
const sign = (value) => crypto.createHmac('sha256', key()).update(value).digest('base64url');

export function passwordMatches(candidate) {
  if (!isConfigured() || typeof candidate !== 'string') return false;
  return crypto.timingSafeEqual(sha(candidate), sha(process.env.WRITINGS_PASSWORD));
}

const secure = (req) => req.headers['x-forwarded-proto'] === 'https' || process.env.VERCEL === '1';

export function sessionCookie(req) {
  const exp = String(Math.floor(Date.now() / 1000) + MAX_AGE);
  return `${COOKIE}=${exp}.${sign(exp)}; Path=/; Max-Age=${MAX_AGE}; HttpOnly; SameSite=Lax${secure(req) ? '; Secure' : ''}`;
}

export const clearCookie = (req) => `${COOKIE}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax${secure(req) ? '; Secure' : ''}`;

export function isAuthenticated(req) {
  if (!isConfigured()) return false;
  const cookie = (req.headers.cookie || '').split(/;\s*/).find((c) => c.startsWith(`${COOKIE}=`));
  if (!cookie) return false;
  const [exp, mac] = cookie.slice(COOKIE.length + 1).split('.');
  if (!exp || !mac || !(Number(exp) > Date.now() / 1000)) return false;
  const expected = Buffer.from(sign(exp));
  const given = Buffer.from(mac);
  return given.length === expected.length && crypto.timingSafeEqual(given, expected);
}

/** JSON body whether or not the platform already parsed it (Vercel does, the dev server doesn't). */
export async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') return safeParse(req.body);
  let data = '';
  for await (const chunk of req) {
    data += chunk;
    if (data.length > 4096) return {};
  }
  return safeParse(data);
}

function safeParse(text) {
  try {
    return JSON.parse(text) || {};
  } catch {
    return {};
  }
}

export function send(res, status, payload, headers = {}) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'private, no-store');
  for (const [k, v] of Object.entries(headers)) res.setHeader(k, v);
  res.end(JSON.stringify(payload));
}
