// Shared by the serverless endpoints and the build script that writes the
// public list of private pieces (scripts/build-private-index.mjs).
import fs from 'node:fs';
import path from 'node:path';

export const ROOT = process.cwd();
export const PRIVATE_DIR = path.join(ROOT, 'private/writings');
export const PUBLIC_DIR = path.join(ROOT, 'src/content/writings');

export const SLUG_RE = /^[\w-]+$/;

/** Frontmatter is `key: <JSON value>` lines between two `---` fences. */
export function parseWriting(slug, raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(':');
    meta[line.slice(0, colon).trim()] = JSON.parse(line.slice(colon + 1));
  }
  return { slug, ...meta, body: raw.slice(match[0].length).trim() };
}

export function listDir(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => parseWriting(f.replace(/\.md$/, ''), fs.readFileSync(path.join(dir, f), 'utf8')));
}

export function readPrivate(slug) {
  if (!SLUG_RE.test(slug)) return null;
  const file = path.join(PRIVATE_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  return parseWriting(slug, fs.readFileSync(file, 'utf8'));
}

/** Pieces (public and private) that link to `slug`. Only served to signed-in readers. */
export function linkedFrom(slug) {
  const re = new RegExp(`\\(/writing/${slug}\\)`);
  return [...listDir(PUBLIC_DIR), ...listDir(PRIVATE_DIR)]
    .filter((w) => w.slug !== slug && re.test(w.body))
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((w) => ({ slug: w.slug, title: w.title }));
}
