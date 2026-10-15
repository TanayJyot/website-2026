import React, { useRef, useEffect, useState, useCallback, useMemo, useSyncExternalStore } from 'react';
import { useNavigate } from 'react-router-dom';
import ForceGraph2D from 'react-force-graph-2d';
import './Hero.css';

const fullData = {
  nodes: [
    { id: "Start", name: "Tanayjyot", val: 8, color: "#38bdf8", isMain: true },
    
    // Central categorical nodes explicitly designated
    { id: "Interests", name: "Interests", val: 4, color: "#94a3b8" },
    { id: "Lead", name: "Leadership", val: 4, color: "#94a3b8" },
    { id: "Tech", name: "Tech Experience", val: 4, color: "#94a3b8" },
    { id: "Writings", name: "Writings", val: 4, color: "#94a3b8" },

    // Tech timeline
    { id: "Neurobridge", name: "Neurobridge ('24)", val: 3, color: "#e2e8f0", link: "#experience" },
    { id: "Sampark", name: "Sampark Info. ('24)", val: 3, color: "#e2e8f0", link: "#experience" },
    { id: "Flybits", name: "Flybits ('25)", val: 3, color: "#e2e8f0", link: "#experience" },
    { id: "LeeLang", name: "Lee Lang. Lab ('25)", val: 3, color: "#e2e8f0", link: "#experience" },
    { id: "Shopify", name: "Shopify ('26)", val: 3, color: "#e2e8f0", link: "#experience" },
    { id: "HCDSL", name: "HCDS Lab ('26)", val: 3, color: "#e2e8f0", link: "#experience" },
    { id: "RBC", name: "RBC Borealis ('26)", val: 3, color: "#e2e8f0", link: "#experience" },
    
    // Leadership timeline
    { id: "IIMUN", name: "IIMUN ('22)", val: 3, color: "#e2e8f0", link: "#experience" },
    { id: "Lyceum", name: "Lyceum HR ('22)", val: 3, color: "#e2e8f0", link: "#experience" },
    { id: "LeoClub", name: "Leo Club Pres. ('22)", val: 3, color: "#e2e8f0", link: "#experience" },
    { id: "UTMIST_ML", name: "UTMIST ML Lead", val: 3, color: "#e2e8f0", link: "#experience" },
    { id: "UofTAI", name: "UofT AI Partnerships", val: 3, color: "#e2e8f0", link: "#experience" },
    { id: "UTMIST", name: "UTMIST Co-Pres", val: 3, color: "#e2e8f0", link: "#experience" },
    { id: "RSG", name: "RSG Asst ('24)", val: 3, color: "#e2e8f0", link: "#experience" },

    // Writings
    { id: "Opportunities", name: "Opportunities", val: 3, color: "#e2e8f0", link: "/node/Opportunities" },
    { id: "CSC401", name: "CSC401 NLP Notes", val: 3, color: "#e2e8f0", link: "/note/natural%20language%20processing" },
    { id: "CSC384", name: "CSC384 AI Notes", val: 3, color: "#e2e8f0", link: "/note/CSC384%20Index" },

    // Interests
    { id: "Guitar", name: "Guitar", val: 3, color: "#e2e8f0", link: "#about" }
  ],
  links: [
    { source: "Start", target: "Interests" },
    { source: "Start", target: "Lead" },
    { source: "Start", target: "Tech" },
    { source: "Start", target: "Writings" },

    { source: "Interests", target: "Guitar" },

    { source: "Writings", target: "Opportunities" },
    { source: "Writings", target: "CSC401" },
    { source: "Writings", target: "CSC384" },

    { source: "Tech", target: "Neurobridge" },
    { source: "Tech", target: "Sampark" },
    { source: "Neurobridge", target: "Flybits" },
    { source: "Sampark", target: "LeeLang" },
    { source: "Flybits", target: "Shopify" },
    { source: "LeeLang", target: "Shopify" },
    { source: "LeeLang", target: "HCDSL" },
    { source: "Flybits", target: "RBC" },

    { source: "Lead", target: "IIMUN" },
    { source: "Lead", target: "Lyceum" },
    { source: "Lead", target: "LeoClub" },
    
    { source: "IIMUN", target: "UTMIST_ML" },
    { source: "IIMUN", target: "UofTAI" },
    { source: "Lyceum", target: "UTMIST_ML" },
    { source: "Lyceum", target: "UofTAI" },
    { source: "LeoClub", target: "UTMIST_ML" },
    { source: "LeoClub", target: "UofTAI" },
    
    { source: "UTMIST_ML", target: "UTMIST" },
    { source: "UofTAI", target: "UTMIST" },
    { source: "UofTAI", target: "RSG" }
  ]
};

const nodeLayers = {
  "Start": 0,
  "Interests": 1, "Lead": 1, "Tech": 1, "Writings": 1,
  "Guitar": 2,
  "IIMUN": 2, "Lyceum": 2, "LeoClub": 2, "Neurobridge": 2, "Sampark": 2, "Opportunities": 2, "CSC401": 2, "CSC384": 2,
  "UTMIST_ML": 3, "UofTAI": 3, "Flybits": 3, "LeeLang": 3,
  "UTMIST": 4, "RSG": 4, "Shopify": 4, "HCDSL": 4, "RBC": 4 
};

// Vertical lane of every node, in rows. Every column alternates between whole
// and half rows relative to its neighbours (column 2 owns the whole rows 0-8,
// columns 1 and 3 sit on half rows, column 4 back on whole rows), so labels in
// adjacent columns can never sit on the same line even when the columns are
// closer together than the labels are wide (phones). Within a column nodes are
// at least one row apart.
const nodeSlots = {
  "Start": 3.5,
  "Interests": 0.5, "Lead": 2.5, "Tech": 4.5, "Writings": 6.5,
  "Guitar": 0, "IIMUN": 1, "Lyceum": 2, "LeoClub": 3, "Neurobridge": 4, "Sampark": 5,
  "Opportunities": 6, "CSC401": 7, "CSC384": 8,
  "UTMIST_ML": 1.5, "UofTAI": 2.5, "Flybits": 4.5, "LeeLang": 5.5,
  "UTMIST": 1, "RSG": 3, "RBC": 4, "Shopify": 5, "HCDSL": 6
};

const MAX_LEVEL = 4;
const MAX_SLOT = 8;
const GRAPH_PAD = 12; // px kept clear inside the canvas edges
const LABEL_GAP = 3; // px between a node and its label
const MAX_COL_W = 240;
const MAX_ROW_H = 88;
const LABEL_FONT = '"Outfit", "Inter", sans-serif';

let measureCtx = null;
const labelWidths = new Map();
// `fontKey` changes once the web font has loaded, so widths measured with the
// fallback font are not reused afterwards.
function measureLabel(text, fontPx, fontKey) {
  const key = `${fontKey}|${fontPx}|${text}`;
  if (!labelWidths.has(key)) {
    if (!measureCtx) measureCtx = document.createElement('canvas').getContext('2d');
    measureCtx.font = `500 ${fontPx}px ${LABEL_FONT}`;
    labelWidths.set(key, measureCtx.measureText(text).width);
  }
  return labelWidths.get(key);
}

function nodeRadius(node, coarse) {
  return coarse ? node.val * 1.35 + 1 : node.val;
}

function overlaps(a, b) {
  return a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;
}

// Places every node in canvas pixels (graph units at zoom 1, origin at the
// canvas centre) for a given canvas size and label size, and counts how many
// labels would collide with another label, another node or the canvas edge.
function layoutWithFont(width, height, coarse, font, fontKey) {
  const lineH = Math.ceil(font * 1.25);
  const items = fullData.nodes.map(n => ({
    id: n.id,
    level: nodeLayers[n.id],
    slot: nodeSlots[n.id],
    r: nodeRadius(n, coarse),
    w: Math.ceil(measureLabel(n.name, font, fontKey))
  }));
  const half = it => Math.max(it.r, it.w / 2);

  // Columns: as wide as the canvas allows once the outermost labels fit.
  const halfL = Math.max(...items.filter(it => it.level === 0).map(half));
  let colW = MAX_COL_W;
  items.forEach(it => {
    if (it.level > 0) colW = Math.min(colW, (width - 2 * GRAPH_PAD - halfL - half(it)) / it.level);
  });
  colW = Math.max(colW, 1);
  const usedW = halfL + Math.max(...items.map(it => it.level * colW + half(it)));
  const x0 = (width - usedW) / 2 + halfL;

  // Rows: as tall as the canvas allows once the top node and bottom label fit.
  const maxR = Math.max(...items.map(it => it.r));
  const below = maxR + LABEL_GAP + lineH;
  const rowH = Math.max(1, Math.min(MAX_ROW_H, (height - 2 * GRAPH_PAD - maxR - below) / MAX_SLOT));
  const top = Math.min(...items.map(it => it.slot * rowH - it.r));
  const bottom = Math.max(...items.map(it => it.slot * rowH + it.r + LABEL_GAP + lineH));
  const y0 = (height - (bottom - top)) / 2 - top;

  const pos = {};
  const labelBoxes = [];
  const nodeBoxes = [];
  items.forEach(it => {
    const cx = x0 + it.level * colW;
    const cy = y0 + it.slot * rowH;
    pos[it.id] = { x: cx - width / 2, y: cy - height / 2, r: it.r, w: it.w };
    labelBoxes.push({ id: it.id, x: cx - it.w / 2 - 4, y: cy + it.r + LABEL_GAP, w: it.w + 8, h: lineH });
    nodeBoxes.push({ id: it.id, x: cx - it.r, y: cy - it.r, w: 2 * it.r, h: 2 * it.r });
  });

  let collisions = 0;
  labelBoxes.forEach((a, i) => {
    if (a.x < 0 || a.y < 0 || a.x + a.w > width || a.y + a.h > height) collisions++;
    labelBoxes.forEach((b, j) => { if (j > i && overlaps(a, b)) collisions++; });
    nodeBoxes.forEach(b => { if (b.id !== a.id && overlaps(a, b)) collisions++; });
  });

  return { font, lineH, colW, rowH, pos, collisions };
}

// Largest label size (up to 13px, 14px on touch screens) at which nothing
// collides; below ~520px of width the labels shrink rather than overlap.
function computeLayout(width, height, coarse, fontKey) {
  let best = null;
  for (let font = coarse ? 14 : 13; font >= 9; font -= 0.5) {
    const layout = layoutWithFont(width, height, coarse, font, fontKey);
    if (layout.collisions === 0) return layout;
    if (!best || layout.collisions < best.collisions) best = layout;
  }
  return best;
}

function useMediaQuery(query) {
  const subscribe = useCallback(onChange => {
    const mql = window.matchMedia(query);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);
  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => false);
}

const age = item => Date.now() - (item.createdAt ?? 0);

export default function Hero() {
  const fgRef = useRef();
  const graphRef = useRef(null);
  const layoutRef = useRef(null);
  const [dimensions, setDimensions] = useState(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const [hoverNode, setHoverNode] = useState(null);
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const navigate = useNavigate();

  // Touch screens: no pan/zoom/drag so swipes scroll the page, bigger targets.
  const coarse = useMediaQuery('(pointer: coarse), (hover: none)');
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  // Give the canvas the real pixel size of its box, re-measuring whenever the
  // box changes (window resize, breakpoint switch, fonts or image loading).
  useEffect(() => {
    const el = graphRef.current;
    if (!el) return;
    const measure = () => {
      const width = Math.round(el.clientWidth);
      const height = Math.round(el.clientHeight);
      if (!width || !height) return;
      setDimensions(prev => (prev && prev.width === width && prev.height === height ? prev : { width, height }));
    };
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  // Label widths are measured on a canvas, so lay out again once Outfit loads.
  useEffect(() => {
    let cancelled = false;
    document.fonts?.ready.then(() => { if (!cancelled) setFontsLoaded(true); });
    return () => { cancelled = true; };
  }, []);

  const layout = useMemo(
    () => (dimensions ? computeLayout(dimensions.width, dimensions.height, coarse, fontsLoaded ? 'loaded' : 'fallback') : null),
    [dimensions, coarse, fontsLoaded]
  );

  useEffect(() => {
    layoutRef.current = layout;
  }, [layout]);

  // Pin every node on screen to its slot for the current canvas size.
  useEffect(() => {
    if (!layout) return;
    let moved = false;
    graphData.nodes.forEach(node => {
      const p = layout.pos[node.id];
      if (p && (node.fx !== p.x || node.fy !== p.y)) {
        node.fx = node.prefX = node.x = p.x;
        node.fy = node.prefY = node.y = p.y;
        moved = true;
      }
    });
    if (moved) fgRef.current?.d3ReheatSimulation();
  }, [layout, graphData]);

  // The layout is in canvas pixels, so keep the view at zoom 1 centred on the
  // origin (force-graph auto-zooms while the graph data changes).
  useEffect(() => {
    if (!layout) return;
    const timeout = setTimeout(() => {
      fgRef.current?.zoom(1, 0);
      fgRef.current?.centerAt(0, 0, 0);
    }, 40);
    return () => clearTimeout(timeout);
  }, [layout, graphData.nodes.length]);

  // Rooted tree growing animation (whole graph at once with reduced motion)
  useEffect(() => {
    const withPosition = node => {
      const p = layoutRef.current?.pos[node.id];
      return p ? { ...node, fx: p.x, fy: p.y, x: p.x, y: p.y, prefX: p.x, prefY: p.y } : { ...node };
    };

    if (reducedMotion) {
      setGraphData({
        nodes: fullData.nodes.map(n => ({ ...withPosition(n), createdAt: 0 })),
        links: fullData.links.map(l => ({ ...l, createdAt: 0 }))
      });
      return;
    }

    // Clear and start fresh with Start node so it's instantly onscreen
    setGraphData({ nodes: [{ ...withPosition(fullData.nodes[0]), createdAt: Date.now() }], links: [] });

    // Begin interval from the next node
    let currentIndex = 1;

    const interval = setInterval(() => {
      const tickIndex = currentIndex; // capture locally for correct asynchronous React scheduling

      if (tickIndex >= fullData.nodes.length) {
        clearInterval(interval);
        return;
      }

      const nextNode = { ...withPosition(fullData.nodes[tickIndex]), createdAt: Date.now() };

      setGraphData(prev => {
        const newNodesActive = [...prev.nodes, nextNode];
        const newNodeIds = new Set(newNodesActive.map(n => n.id));
        const linkKey = l => {
          const s = typeof l.source === 'object' ? l.source.id : l.source;
          const t = typeof l.target === 'object' ? l.target.id : l.target;
          return `${s}-${t}`;
        };
        const existingLinkIds = new Set(prev.links.map(linkKey));

        const addedLinks = fullData.links
          .filter(l => newNodeIds.has(l.source) && newNodeIds.has(l.target) && !existingLinkIds.has(linkKey(l)))
          .map(l => ({ ...l, createdAt: nextNode.createdAt }));

        return {
          nodes: newNodesActive,
          links: [...prev.links, ...addedLinks]
        };
      });

      currentIndex++;
    }, 400); // Expanding timing faster for one-by-one nodes

    return () => clearInterval(interval);
  }, [reducedMotion]);

  const handleNodeDragEnd = useCallback(node => {
    const targetX = node.prefX !== undefined ? node.prefX : node.x;
    const targetY = node.prefY !== undefined ? node.prefY : node.y;

    const animateSnap = () => {
      const dx = targetX - node.x;
      const dy = targetY - node.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 1) {
        // Precision lock when visually converged
        node.fx = targetX;
        node.fy = targetY;
        return;
      }
      
      // Smooth interpolation for ease-out
      node.fx = node.x + dx * 0.08;
      node.fy = node.y + dy * 0.08;
      
      // Re-render tick via generic UI queue
      requestAnimationFrame(animateSnap);
    };
    
    // Start sliding animation loop instead of snapping instantly
    requestAnimationFrame(animateSnap);
  }, []);

  const handleNodeHover = useCallback(node => {
    setHighlightNodes(new Set());
    setHighlightLinks(new Set());

    if (node) {
      const newHighlightNodes = new Set([node.id]);
      const newHighlightLinks = new Set();
      
      graphData.links.forEach(link => {
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;
        
        if (sourceId === node.id || targetId === node.id) {
          newHighlightLinks.add(link);
          newHighlightNodes.add(sourceId === node.id ? targetId : sourceId);
        }
      });

      setHighlightNodes(newHighlightNodes);
      setHighlightLinks(newHighlightLinks);
    }
    
    setHoverNode(node || null);
  }, [graphData]);

  const handleNodeClick = useCallback((node) => {
    if (node.link) {
      if (node.link.startsWith('/')) {
        navigate(node.link);
      } else {
        const element = document.querySelector(node.link);
        if (element) {
          const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: y, behavior: reducedMotion ? 'auto' : 'smooth' });
        }
      }
    }
  }, [navigate, reducedMotion]);

  const popDelay = reducedMotion ? 0 : 1500; // wait for the edge to reach the node

  return (
    <section className="hero-section">
      {/* Profile & title */}
      <div className="hero-intro">
        <div className="hero-intro-inner animate-fade-in">
          <img
            className="hero-photo"
            src="/profile.jpg"
            alt="Tanayjyot"
            width="800"
            height="1067"
            fetchPriority="high"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <h1 className="hero-name">
            <span className="highlight">Tanayjyot Singh Chawla</span>
          </h1>
        </div>
      </div>

      {/* Interactive graph */}
      <div className="hero-graph">
        <div className="hero-graph-canvas" ref={graphRef}>
          {dimensions && layout && (
            <ForceGraph2D
              ref={fgRef}
              width={dimensions.width}
              height={dimensions.height}
              graphData={graphData}
              nodeLabel={() => null}
              nodeColor="color"
              nodeRelSize={6}
              enableZoomInteraction={!coarse}
              enablePanInteraction={!coarse}
              enableNodeDrag={!coarse}
              linkDirectionalParticles={reducedMotion ? 0 : link => {
                if (age(link) < 1500) return 1; // return 1 to force canvas re-render during growth
                return highlightLinks.has(link) ? 6 : 3;
              }}
              linkDirectionalParticleWidth={link => highlightLinks.has(link) ? 4 : 2}
              linkDirectionalParticleSpeed={() => hoverNode ? 0.002 : 0.008}
              linkDirectionalParticleColor={link => {
                if (age(link) < 1500) return 'rgba(0,0,0,0)'; // hidden during growth
                return highlightLinks.has(link) ? 'rgba(56, 189, 248, 0.8)' : 'rgba(255,255,255,0.4)';
              }}
              linkCanvasObject={(link, ctx) => {
                const startX = link.source.x;
                const startY = link.source.y;
                const endX = link.target.x;
                const endY = link.target.y;

                if (startX == null || endX == null) return; // not initialized yet

                const dx = endX - startX;
                const dy = endY - startY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // Growing animation based on creation time
                const duration = 1500; // 1.5 seconds to grow
                const progress = reducedMotion ? 1 : Math.min(1, age(link) / duration);
                
                const isHighlighted = highlightLinks.has(link);
                const color = isHighlighted ? 'rgba(56, 189, 248, 0.8)' : 'rgba(255,255,255,0.1)';
                const width = isHighlighted ? 3 : 1;

                if (progress < 1) {
                  // Draw small cells growing towards target
                  const currentLength = distance * progress;
                  const cellSpacing = 8;
                  const numCells = Math.max(1, Math.floor(currentLength / cellSpacing));
                  
                  ctx.fillStyle = color;
                  for (let i = 0; i < numCells; i++) {
                    const ratio = (i * cellSpacing) / distance;
                    const cellX = startX + dx * ratio;
                    const cellY = startY + dy * ratio;
                    
                    ctx.beginPath();
                    ctx.arc(cellX, cellY, width, 0, 2 * Math.PI, false);
                    ctx.fill();
                  }
                } else {
                  // Form a full edge
                  ctx.beginPath();
                  ctx.moveTo(startX, startY);
                  ctx.lineTo(endX, endY);
                  ctx.strokeStyle = color;
                  ctx.lineWidth = width;
                  ctx.stroke();
                }
              }}
              onNodeHover={handleNodeHover}
              onNodeClick={handleNodeClick}
              onNodeDragEnd={handleNodeDragEnd}
              nodePointerAreaPaint={(node, color, ctx, globalScale) => {
                const p = layout.pos[node.id];
                if (!p) return;
                // Generous hit area on touch screens; the label is tappable too.
                const hitR = coarse ? Math.max(p.r + 8, 16) : Math.max(p.r + 3, 8);
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(node.x, node.y, hitR, 0, 2 * Math.PI, false);
                ctx.fill();
                const w = (p.w + 8) / globalScale;
                ctx.fillRect(node.x - w / 2, node.y + p.r, w, (LABEL_GAP + layout.lineH + 2) / globalScale);
              }}
              nodeCanvasObject={(node, ctx, globalScale) => {
                const elapsed = age(node);

                // Start node pops in instantly, others wait for the edge to connect
                if (node.id !== "Start" && elapsed < popDelay) {
                  // Node is completely invisible while edge grows towards it
                  return;
                }
                
                let scaleAnim = 1;
                if (!reducedMotion && node.id !== "Start" && elapsed < popDelay + 300) {
                  // 300ms pop-in animation
                  scaleAnim = Math.min(1, (elapsed - popDelay) / 300);
                }

                const p = layout.pos[node.id];
                const radius = p ? p.r : node.val;
                const label = node.name;
                const fontSize = (layout.font / globalScale) * scaleAnim;
                if (fontSize > 0.1) {
                  ctx.font = `500 ${fontSize}px ${LABEL_FONT}`;
                }
                
                const isHovered = hoverNode === node;
                const isHighlighted = highlightNodes.has(node.id);

                // Draw circle
                const baseRadius = isHovered ? radius * 1.5 : radius;
                ctx.beginPath();
                ctx.arc(node.x, node.y, baseRadius * scaleAnim, 0, 2 * Math.PI, false);
                
                if (isHighlighted || isHovered) {
                  ctx.fillStyle = '#38bdf8';
                  ctx.shadowColor = '#38bdf8';
                  ctx.shadowBlur = 15;
                } else {
                  ctx.fillStyle = hoverNode ? 'rgba(255,255,255,0.05)' : node.color;
                  ctx.shadowBlur = 0;
                }
                
                ctx.fill();
                ctx.shadowBlur = 0; // reset for text

                // Draw label
                if (scaleAnim > 0.5) { // Only draw text when mostly grown to prevent glitches
                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'middle';
                  if (isHovered || isHighlighted) {
                    ctx.fillStyle = `rgba(255, 255, 255, ${scaleAnim})`;
                  } else {
                    ctx.fillStyle = hoverNode ? `rgba(255,255,255,${0.15 * scaleAnim})` : (node.color === '#e2e8f0' ? `rgba(255,255,255,${scaleAnim})` : `rgba(255,255,255,${0.8 * scaleAnim})`);
                  }
                  ctx.fillText(label, node.x, node.y + radius * scaleAnim + (LABEL_GAP + layout.lineH / 2) / globalScale);
                }
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
