/* Personal writing: every .md file in content/writings, with a small frontmatter
   block (JSON-encoded values). Links between pieces are plain markdown links to
   /writing/<slug>; "linked from" lists are worked out from them here. */
const modules = import.meta.glob('./writings/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

function parse(path, raw) {
  const slug = path.split('/').pop().replace(/\.md$/, '');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(':');
    meta[line.slice(0, colon).trim()] = JSON.parse(line.slice(colon + 1));
  }
  const body = raw.slice(match[0].length).trim();
  return { slug, ...meta, body, excerpt: excerptOf(body) };
}

/** The piece's own opening words, with markdown syntax removed. */
function excerptOf(body) {
  const [firstBlock] = body
    .replace(/^#+ .*$/gm, '')
    .trim()
    .split(/\n\s*\n/);
  const text = firstBlock
    .replace(/\[\^\d+\]/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^[>\-*\s]+/gm, '')
    .replace(/\*+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= 150) return text;
  return `${text.slice(0, text.lastIndexOf(' ', 150))}…`;
}

export const WRITINGS = Object.entries(modules)
  .map(([path, raw]) => parse(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date));

export const WRITINGS_BY_SLUG = Object.fromEntries(WRITINGS.map((w) => [w.slug, w]));

/** slug → pieces that link to it */
export const LINKED_FROM = {};
for (const writing of WRITINGS) {
  for (const [, target] of writing.body.matchAll(/\(\/writing\/([\w-]+)\)/g)) {
    if (target === writing.slug) continue;
    const list = (LINKED_FROM[target] ||= []);
    if (!list.includes(writing)) list.push(writing);
  }
}
