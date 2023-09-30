import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  fileName: string;
}

export default function MarkdownRenderer({ fileName }: MarkdownRendererProps) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    if (!fileName) return; // Don't fetch if fileName is not provided

    fetch(`../../assets/markdown/${fileName}`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
      .catch((error) => console.error(error));
  }, [fileName]);

  return (
    <div className="markdown-container">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
