# Tanayjyot's Personal Portfolio & Graph Explorer (2026)

Welcome to my personal website repository! 

This project goes beyond a traditional static portfolio page. It acts as an interactive visualization map constructed natively inside the browser, connecting my various passions, technical engineering intern experiences, writing catalogs, and leadership backgrounds all organically interconnected.

## 🚀 Key Features
- **Interactive Topography Map (Hero Graph):** Built from scratch utilizing `react-force-graph-2d` and D3, this visual DAG loads my life's milestones as draggable, organically connected physics nodes. They expand sequentially and gracefully stabilize.
- **Glassmorphic Navigation:** Custom dynamic headers utilizing smooth interpolation and backdrop filter blur layers.
- **Dynamic Content Routing:** Instead of cramming all details on a bloated scroll list, specific graphical nodes link directly to dynamically injected markdown breakdowns (`react-markdown`) using `React Router`.
- **Categorized Experience Layers:** Differentiates the complex dichotomy of Technical Engineering & Leadership.

## 💻 Tech Stack
- Frontend Framework: **React 19** with **Vite 5**
- Styling: Custom vanilla CSS with Glassmorphism variables
- Ecosystem Dependencies: `react-router-dom`, `lucide-react`, `remark-gfm`
- Routing: SPA Client-Side Routing

## 🛠️ Run Locally 
If you want to view the site topology natively on your local machine:
```bash
npm install
npm run dev
```

Then visit the provided localized development port (default `localhost:5173`).

## Private writings

Pieces in `private/writings/` are not part of the site bundle. They are served only by
`api/private-writing.js` to visitors who have signed in through `api/auth.js`. The public
Writings page lists them with a lock (title and date only, from the generated
`src/content/private-index.json`).

- **Make a piece private:** move its `.md` file from `src/content/writings/` to
  `private/writings/` (the build regenerates the index). Move it back to make it public.
- **Password:** set `WRITINGS_PASSWORD` in the Vercel project's environment variables
  (optionally `WRITINGS_SESSION_SECRET` too). Changing either signs everyone out.
  With no password set, private writing stays locked for everyone.
- **Local dev:** put `WRITINGS_PASSWORD=...` in `.env.local`, then `npm run dev`.
