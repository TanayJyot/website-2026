import { resolve, dirname, sep } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { buildNotesIndex, NOTES_DIR } from './scripts/build-notes-index.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * Regenerates src/content/notes-index.json (backlinks + image name fixes) at the
 * start of every build/dev server and whenever a note changes in dev, so the
 * committed file can never be stale.
 */
function notesIndexPlugin() {
  const isNote = (file) => file.startsWith(NOTES_DIR + sep) && file.endsWith('.md')
  return {
    name: 'notes-index',
    buildStart() {
      buildNotesIndex()
    },
    configureServer(server) {
      const rebuild = (file) => { if (isNote(file)) buildNotesIndex() }
      server.watcher.on('add', rebuild)
      server.watcher.on('change', rebuild)
      server.watcher.on('unlink', rebuild)
    },
  }
}

/** Vendor packages grouped into long-lived chunks, keyed by chunk name */
const VENDOR_CHUNKS = {
  react: [/^react$/, /^react-dom$/, /^react-router(-dom)?$/, /^scheduler$/, /^@remix-run\//, /^cookie$/, /^set-cookie-parser$/],
  graph: [/^react-force-graph-2d$/, /^force-graph$/, /^d3-/, /^kapsule$/, /^float-tooltip$/, /^bezier-js$/, /^canvas-color-tracker$/, /^accessor-fn$/, /^index-array-by$/, /^lodash-es$/, /^tinycolor2$/, /^internmap$/, /^react-kapsule$/, /^jerrypick$/, /^preact$/],
  katex: [/^katex$/, /^rehype-katex$/, /^remark-math$/, /^micromark-extension-math$/, /^mdast-util-math$/, /^hast-util-from-dom$/, /^hast-util-from-html-isomorphic$/, /^hast-util-to-text$/, /^unist-util-find-after$/],
  markdown: [
    /^react-markdown$/, /^remark-/, /^rehype-/, /^unified$/, /^bail$/, /^trough$/, /^vfile/, /^is-plain-obj$/, /^extend$/, /^devlop$/,
    /^mdast-/, /^hast-/, /^hastscript$/, /^micromark/, /^unist-/, /^decode-named-character-reference$/, /^character-entities/,
    /^parse5$/, /^entities$/, /^property-information$/, /^space-separated-tokens$/, /^comma-separated-tokens$/, /^style-to-js$/,
    /^style-to-object$/, /^inline-style-parser$/, /^html-url-attributes$/, /^estree-util-/, /^zwitch$/, /^ccount$/, /^longest-streak$/,
    /^markdown-table$/, /^trim-lines$/, /^web-namespaces$/, /^html-void-elements$/, /^escape-string-regexp$/, /^ungap/, /^@ungap\//,
  ],
}

function vendorChunk(id) {
  const match = id.match(/node_modules\/((?:@[^/]+\/)?[^/]+)\//)
  if (!match) return undefined
  const pkg = match[1]
  for (const [chunk, patterns] of Object.entries(VENDOR_CHUNKS)) {
    if (patterns.some(re => re.test(pkg))) return `vendor-${chunk}`
  }
  return undefined
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [notesIndexPlugin(), react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        opportunities: resolve(__dirname, 'opportunities.html')
      },
      output: {
        manualChunks: vendorChunk,
        // One chunk per note: name them by hash only, since note titles contain
        // characters (spaces, quotes, commas…) that make awkward URLs
        chunkFileNames: (chunk) =>
          chunk.facadeModuleId?.includes('/src/content/notes/') ? 'assets/notes/[hash].js' : 'assets/[name]-[hash].js',
      },
    },
  },
})
