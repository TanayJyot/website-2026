import React from 'react';
import { renderToString } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const md = `
# Test

$$
D_{KL}(P || Q) = H(X; Q) - H(X) \\geq 0
$$

\`\`\`math
D_{KL}(P || Q) = H(X; Q) - H(X) \\geq 0
\`\`\`
`;

function Test() {
  return React.createElement(ReactMarkdown, {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex],
    children: md
  });
}

console.log(renderToString(React.createElement(Test)));
