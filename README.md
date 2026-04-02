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
