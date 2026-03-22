import React, { useRef, useEffect, useState, useCallback } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import './Hero.css';

const fullData = {
  nodes: [
    { id: "Start", name: "Tanayjyot", val: 8, color: "#38bdf8", isMain: true, fx: -200, fy: 0, prefX: -200, prefY: 0 },
    
    // Central categorical nodes explicitly designated
    { id: "Interests", name: "Interests", val: 4, color: "#94a3b8", prefY: -80, fy: -80 },
    { id: "Lead", name: "Leadership", val: 4, color: "#94a3b8", prefY: -30, fy: -30 },
    { id: "Tech", name: "Tech Experience", val: 4, color: "#94a3b8", prefY: 30, fy: 30 },
    { id: "Writings", name: "Writings", val: 4, color: "#94a3b8", prefY: 80, fy: 80 },

    // Tech Timeline geometrically tiered to avoid overlap
    { id: "Neurobridge", name: "Neurobridge ('24)", val: 3, color: "#e2e8f0", link: "#experience", prefY: 15, fy: 15 },
    { id: "Sampark", name: "Sampark Info. ('24)", val: 3, color: "#e2e8f0", link: "#experience", prefY: 45, fy: 45 },
    { id: "Flybits", name: "Flybits ('25)", val: 3, color: "#e2e8f0", link: "#experience", prefY: 15, fy: 15 },
    { id: "LeeLang", name: "Lee Lang. Lab ('24)", val: 3, color: "#e2e8f0", link: "#experience", prefY: 45, fy: 45 },
    { id: "Shopify", name: "Shopify ('26)", val: 3, color: "#e2e8f0", link: "#experience", prefY: 30, fy: 30 },
    
    // Leadership Timeline geometrically tiered to avoid overlap
    { id: "IIMUN", name: "IIMUN ('22)", val: 3, color: "#e2e8f0", link: "#experience", prefY: -65, fy: -65 },
    { id: "Lyceum", name: "Lyceum HR ('22)", val: 3, color: "#e2e8f0", link: "#experience", prefY: -30, fy: -30 },
    { id: "LeoClub", name: "Leo Club Pres. ('22)", val: 3, color: "#e2e8f0", link: "#experience", prefY: 5, fy: 5 },
    { id: "UTMIST_ML", name: "UTMIST ML Lead", val: 3, color: "#e2e8f0", link: "#experience", prefY: -45, fy: -45 },
    { id: "UofTAI", name: "UofT AI Dir. Parts", val: 3, color: "#e2e8f0", link: "#experience", prefY: -15, fy: -15 },
    { id: "UTMIST", name: "UTMIST Co-Pres", val: 3, color: "#e2e8f0", link: "#experience", prefY: -45, fy: -45 },
    { id: "RSG", name: "RSG Asst ('24)", val: 3, color: "#e2e8f0", link: "#experience", prefY: -15, fy: -15 },

    // Writings layered neatly avoiding the central dense timeline
    { id: "Books", name: "Book Recs", val: 3, color: "#e2e8f0", link: "#interests", prefY: 110, fy: 110 },
    { id: "Blog", name: "Tech Blog", val: 3, color: "#e2e8f0", link: "/blog", prefY: 140, fy: 140 },

    // Interests
    { id: "Guitar", name: "Guitar", val: 3, color: "#e2e8f0", link: "#about", prefY: -110, fy: -110 }
  ],
  links: [
    { source: "Start", target: "Interests" },
    { source: "Start", target: "Lead" },
    { source: "Start", target: "Tech" },
    { source: "Start", target: "Writings" },

    { source: "Interests", target: "Guitar" },

    { source: "Writings", target: "Books" },
    { source: "Writings", target: "Blog" },

    { source: "Tech", target: "Neurobridge" },
    { source: "Tech", target: "Sampark" },
    { source: "Neurobridge", target: "Flybits" },
    { source: "Sampark", target: "LeeLang" },
    { source: "Flybits", target: "Shopify" },
    { source: "LeeLang", target: "Shopify" },

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
  "IIMUN": 2, "Lyceum": 2, "LeoClub": 2, "Neurobridge": 2, "Sampark": 2, "Books": 2,
  "UTMIST_ML": 3, "UofTAI": 3, "Flybits": 3, "LeeLang": 3, "Blog": 3,
  "UTMIST": 4, "RSG": 4, "Shopify": 4 
};

// Mathematically pin all node coordinates in advance so the DAG never jitters
fullData.nodes.forEach(node => {
  const layer = nodeLayers[node.id];
  const calculatedX = -200 + layer * 100; // Left-to-right span
  
  node.prefX = calculatedX;
  node.fx = calculatedX; // Pinned horizontally

  if (node.prefY !== undefined) {
    node.fy = node.prefY; // Pinned vertically to its geometry lane
  } else {
    // Default to the central axis for unspecified nodes
    node.prefY = 0;
    node.fy = 0;
  }
});

export default function Hero() {
  const fgRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const containerRef = useRef(null);
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const [hoverNode, setHoverNode] = useState(null);
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Rooted Tree Growing Animation Effect
  useEffect(() => {
    
    if (fgRef.current) {
      const chargeList = fgRef.current.d3Force('charge');
      if (chargeList) {
        chargeList.strength(-50); // Minimal generic repulsion since nodes follow strict coordinate routing
        chargeList.distanceMax(50); // Heavily constrained to prevent the DAG from forming massive empty spaces
      }
    }

    // Clear and start fresh with Start node so it's instantly onscreen
    const startNode = { ...fullData.nodes[0], createdAt: Date.now() };
    setGraphData({ nodes: [startNode], links: [] });

    // Begin interval from the next node
    let currentIndex = 1;

    const interval = setInterval(() => {
      const tickIndex = currentIndex; // capture locally for correct asynchronous React scheduling

      if (tickIndex >= fullData.nodes.length) {
        clearInterval(interval);
        // Force a soft zoom to fit once it's done growing
        if (fgRef.current) {
          setTimeout(() => fgRef.current.zoomToFit(1200, 50), 3000);
        }
        return;
      }
      
      setGraphData(prev => {
        const nextNode = fullData.nodes[tickIndex];
        const newNodesActive = [...prev.nodes, { ...nextNode, createdAt: Date.now() }];
        const newNodeIds = new Set(newNodesActive.map(n => n.id));

        const newLinks = fullData.links.filter(l => {
          const sId = typeof l.source === 'object' ? l.source.id : l.source;
          const tId = typeof l.target === 'object' ? l.target.id : l.target;
          return newNodeIds.has(sId) && newNodeIds.has(tId);
        });

        const existingLinkIds = new Set(prev.links.map(l => {
          const s = typeof l.source === 'object' ? l.source.id : l.source;
          const t = typeof l.target === 'object' ? l.target.id : l.target;
          return `${s}-${t}`;
        }));
        
        const addedLinks = newLinks.filter(l => {
          const s = typeof l.source === 'object' ? l.source.id : l.source;
          const t = typeof l.target === 'object' ? l.target.id : l.target;
          return !existingLinkIds.has(`${s}-${t}`);
        }).map(l => ({...l, createdAt: Date.now()})); 

        return {
          nodes: newNodesActive,
          links: [...prev.links, ...addedLinks]
        };
      });

      currentIndex++;
    }, 400); // Expanding timing faster for one-by-one nodes

    return () => clearInterval(interval);
  }, []);

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
        
        // Trigger generic engine layout cooling internally by unsetting and resetting briefly
        // Note: keeping fx/fy permanently set locks the layout securely as desired.
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
        window.location.href = node.link;
      } else {
        const element = document.querySelector(node.link);
        if (element) {
          const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  }, []);

  return (
    <section className="hero-section" style={{ padding: 0, margin: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
      
      {/* Foreground Split Layout Layer */}
      <div style={{ zIndex: 3, position: 'relative', width: '100%', height: '100%', display: 'flex', pointerEvents: 'none' }}>
        
        {/* Left Side: Profile & Title */}
        <div style={{ flex: '0 0 32%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '4%', paddingRight: '4%', pointerEvents: 'auto', borderRight: '1px solid rgba(255,255,255,0.08)', boxShadow: '10px 0 30px rgba(0,0,0,0.4)', background: 'var(--bg-color)', zIndex: 10 }}>
          <div className="animate-fade-in" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div style={{ marginBottom: '2.5rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <img src="/profile.jpg" alt="Tanayjyot" style={{ width: '100%', maxWidth: '350px', height: 'auto', borderRadius: '16px', objectFit: 'contain', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }} onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
            <h1 style={{ fontSize: '3.6rem', lineHeight: 1.1, letterSpacing: '-0.02em', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
              <span className="highlight">Tanayjyot Singh Chawla</span>
            </h1>
          </div>
        </div>

        {/* Right Side Placeholder */}
        <div style={{ flex: '0 0 68%', height: '100%' }}></div>
      </div>
      
      {/* Background Interactive Graph Layer (Now positioned strictly on the right half) */}
      <div 
        ref={containerRef} 
        style={{ position: 'absolute', top: 0, right: 0, width: '68%', height: '100%', zIndex: 2 }}
      >
        <ForceGraph2D
          ref={fgRef}
          width={dimensions.width}
          height={dimensions.height}
          graphData={graphData}
          dagMode="lr"
          dagLevelDistance={100}
          nodeLabel="name"
          nodeColor="color"
          nodeRelSize={6}
          linkDirectionalParticles={link => {
            const createdAt = link.createdAt || Date.now();
            if (Date.now() - createdAt < 1500) return 1; // return 1 to force canvas re-render during growth
            return highlightLinks.has(link) ? 6 : 3;
          }}
          linkDirectionalParticleWidth={link => highlightLinks.has(link) ? 4 : 2}
          linkDirectionalParticleSpeed={link => hoverNode ? 0.002 : 0.008}
          linkDirectionalParticleColor={link => {
            const createdAt = link.createdAt || Date.now();
            if (Date.now() - createdAt < 1500) return 'rgba(0,0,0,0)'; // hidden during growth
            return highlightLinks.has(link) ? 'rgba(56, 189, 248, 0.8)' : 'rgba(255,255,255,0.4)';
          }}
          linkCanvasObject={(link, ctx, globalScale) => {
            const startX = link.source.x;
            const startY = link.source.y;
            const endX = link.target.x;
            const endY = link.target.y;

            if (startX == null || endX == null) return; // not initialized yet

            const dx = endX - startX;
            const dy = endY - startY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Growing animation based on creation time
            const createdAt = link.createdAt || Date.now();
            const elapsed = Date.now() - createdAt;
            const duration = 1500; // 1.5 seconds to grow
            let progress = Math.min(1, elapsed / duration);
            
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
          nodeCanvasObject={(node, ctx, globalScale) => {
            const createdAt = node.createdAt || Date.now();
            const elapsed = Date.now() - createdAt;
            const popDelay = 1500; // wait for edge to reach it

            // Start node pops in instantly, others wait for the edge to connect
            if (node.id !== "Start" && elapsed < popDelay) {
              // Node is completely invisible while edge grows towards it
              return;
            }
            
            let scaleAnim = 1;
            if (node.id !== "Start" && elapsed >= popDelay && elapsed < popDelay + 300) {
              // 300ms pop-in animation
              const popElapsed = elapsed - popDelay;
              scaleAnim = Math.min(1, popElapsed / 300);
            }

            const label = node.name;
            const fontSize = Math.max(13/globalScale, 2) * scaleAnim;
            if (fontSize > 0.1) {
              ctx.font = `500 ${fontSize}px "Outfit", "Inter", sans-serif`;
            }
            
            const isHovered = hoverNode === node;
            const isHighlighted = highlightNodes.has(node.id);

            // Draw circle
            const baseRadius = isHovered ? node.val * 1.5 : node.val;
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
              ctx.fillText(label, node.x, node.y + (node.val * scaleAnim) + fontSize + (isHovered ? 4 : 0));
            }
          }}
        />
      </div>
    </section>
  );
}
