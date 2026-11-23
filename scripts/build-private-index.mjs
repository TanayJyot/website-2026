/**
 * Builds src/content/private-index.json from private/writings/*.md.
 *
 * The private pieces never enter the site bundle (they are only served by
 * api/private-writing.js to signed-in readers), but the Writings page still
 * needs to list them with a lock. This file holds just slug, title, date, label,
 * section and status for each: no body and no excerpt.
 *
 * Runs from the Vite plugin in vite.config.js (build start, and in dev whenever
 * a private piece changes); `node scripts/build-private-index.mjs` runs it by hand.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { listDir } from '../api/_lib/writings.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const PRIVATE_DIR = path.join(ROOT, 'private/writings');
export const INDEX_FILE = path.join(ROOT, 'src/content/private-index.json');

export function buildPrivateIndex() {
  const items = listDir(PRIVATE_DIR)
    .map(({ slug, title, date, label, section, status }) => ({ slug, title, date, label, section, ...(status ? { status } : {}) }))
    .sort((a, b) => b.date.localeCompare(a.date) || (a.slug < b.slug ? -1 : 1));
  const json = JSON.stringify(items, null, 1) + '\n';
  const previous = fs.existsSync(INDEX_FILE) ? fs.readFileSync(INDEX_FILE, 'utf8') : null;
  if (previous === json) return { changed: false, count: items.length };
  fs.writeFileSync(INDEX_FILE, json);
  return { changed: true, count: items.length };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { changed, count } = buildPrivateIndex();
  console.log(`private-index: ${count} private writings; ${changed ? 'wrote' : 'unchanged'} ${path.relative(ROOT, INDEX_FILE)}`);
}
