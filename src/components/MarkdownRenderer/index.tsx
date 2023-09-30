import './index.scss'
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  fileName: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ fileName }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    if (!fileName) return;

    fetch(`./markdown/${fileName}`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
      .catch((error) => console.error(error));
  }, [fileName]);

  return (
    <div className="markdown-container">
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      />
    </div>
  );
}

export default MarkdownRenderer;