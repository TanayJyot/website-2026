/**
 * Builds src/content/notes-index.json from src/content/notes/*.md.
 *
 * The note page loads each note lazily (one chunk per note), so anything that
 * needs to see every note at once is precomputed here instead:
 *   - backlinks: lowercase note slug → lowercase slugs of the notes linking to it
 *   - images:    lowercase image-embed target → file name in public/notes-assets,
 *                only for embeds whose literal target doesn't exist there (e.g.
 *                Obsidian's `Pictures/foo.png`, exported flattened as
 *                `Pictures - foo.png`)
 *
 * Runs automatically from the Vite plugin in vite.config.js (build start and
 * whenever a note changes in dev); `node scripts/build-notes-index.mjs` runs it
 * by hand and prints how many image embeds are still unresolved.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const NOTES_DIR = path.join(ROOT, 'src/content/notes');
export const ASSETS_DIR = path.join(ROOT, 'public/notes-assets');
export const INDEX_FILE = path.join(ROOT, 'src/content/notes-index.json');

// Keep these two in sync with src/pages/NotePage.jsx
const WIKILINK_RE = /\[\[([^\]|#]+)(?:[#|][^\]]*)?\]\]/g;
const IMAGE_EMBED_RE = /!\[\[([^\]|]+\.(?:png|jpg|jpeg|gif|svg|webp|bmp|tiff|tif|excalidraw))(?:\|[^\]]*)?\]\]/gi;

/** Plain code-unit sort, so the output is stable across platforms and locales */
const byCodeUnit = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

/**
 * Find the exported file for an image embed target, or null.
 * Tries, in order: the literal name, a case-insensitive match, the Obsidian
 * subfolder path flattened with " - ", then the bare file name; for the last
 * two, a unique export carrying an extra folder prefix (e.g.
 * "MITx course - Pictures - foo.png") also counts.
 */
export function resolveImage(target, assetNames, assetsByLower = indexAssets(assetNames)) {
  if (assetNames.has(target)) return target;
  const lower = target.toLowerCase();
  const flat = lower.replace(/\s*\/\s*/g, ' - ');
  const base = lower.split('/').pop();
  for (const candidate of [lower, flat, base]) {
    if (assetsByLower.has(candidate)) return assetsByLower.get(candidate);
  }
  for (const candidate of [flat, base]) {
    const suffixed = [...assetsByLower.keys()].filter(name => name.endsWith(` - ${candidate}`));
    if (suffixed.length === 1) return assetsByLower.get(suffixed[0]);
  }
  return null;
}

function indexAssets(assetNames) {
  return new Map([...assetNames].map(name => [name.toLowerCase(), name]));
}

export function buildNotesIndex({ write = true } = {}) {
  const files = fs.readdirSync(NOTES_DIR).filter(f => f.endsWith('.md')).sort(byCodeUnit);
  const notes = files.map(f => ({
    slug: f.replace(/\.md$/, '').toLowerCase(),
    raw: fs.readFileSync(path.join(NOTES_DIR, f), 'utf8'),
  }));
  const slugs = new Set(notes.map(n => n.slug));

  const assetNames = new Set(fs.existsSync(ASSETS_DIR) ? fs.readdirSync(ASSETS_DIR) : []);
  const assetsByLower = indexAssets(assetNames);

  const backlinks = {};
  const images = {};
  const unresolved = [];
  let embedCount = 0;

  for (const { slug, raw } of notes) {
    for (const m of raw.matchAll(WIKILINK_RE)) {
      const target = m[1].trim().toLowerCase();
      // Only real notes can be opened, so links to anything else need no entry
      if (target === slug || !slugs.has(target)) continue;
      const list = (backlinks[target] ||= []);
      if (!list.includes(slug)) list.push(slug);
    }

    for (const m of raw.matchAll(IMAGE_EMBED_RE)) {
      embedCount++;
      const target = m[1].trim();
      const resolved = resolveImage(target, assetNames, assetsByLower);
      if (resolved === null) unresolved.push({ note: slug, target });
      else if (resolved !== target) images[target.toLowerCase()] = resolved;
    }
  }

  const sortKeys = obj => Object.fromEntries(Object.keys(obj).sort(byCodeUnit).map(k => [k, obj[k]]));
  const index = { backlinks: sortKeys(backlinks), images: sortKeys(images) };
  const json = JSON.stringify(index, null, 1) + '\n';

  let changed = false;
  if (write) {
    const previous = fs.existsSync(INDEX_FILE) ? fs.readFileSync(INDEX_FILE, 'utf8') : null;
    // Only touch the file when it changes, so dev doesn't loop on its own write
    if (previous !== json) {
      fs.writeFileSync(INDEX_FILE, json);
      changed = true;
    }
  }

  return { index, changed, stats: { notes: notes.length, embeds: embedCount, remapped: Object.keys(images).length, unresolved } };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { stats, changed } = buildNotesIndex();
  const verbose = process.argv.includes('--verbose');
  console.log(
    `notes-index: ${stats.notes} notes, ${stats.embeds} image embeds ` +
    `(${stats.remapped} remapped, ${stats.unresolved.length} unresolved)` +
    `${changed ? '; wrote' : '; unchanged'} ${path.relative(ROOT, INDEX_FILE)}`,
  );
  if (verbose) for (const { note, target } of stats.unresolved) console.log(`  ${note}: ${target}`);
}
