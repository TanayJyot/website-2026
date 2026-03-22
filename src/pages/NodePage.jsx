import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';

export default function NodePage() {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when loading

    // Dynamically retrieve the raw string of the matching markdown file using Vite's ?raw directive
    import(`../content/nodes/${id}.md?raw`)
      .then(res => setContent(res.default))
      .catch(err => {
        console.error(err);
        setContent(`# 404: Node Not Found\n\nCould not find content mapping for **${id}**. Ensure you have created a \`src/content/nodes/${id}.md\` file.`);
      });
  }, [id]);

  return (
    <div className="container section animate-fade-in" style={{ marginTop: '5rem', minHeight: '80vh', maxWidth: '800px' }}>
      <Link to="/" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.2rem', marginBottom: '2.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
        <ArrowLeft size={18} /> Back to Interface
      </Link>
      
      <div className="glass-card markdown-body" style={{ padding: '3.5rem', background: 'rgba(22, 25, 33, 0.4)' }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
