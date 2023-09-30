import { useState } from 'react';
import MarkdownRenderer from '../MarkdownRenderer';

export default function Notes() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleButtonClick = (fileName: string) => {
    setSelectedFile(fileName);
  };

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => handleButtonClick("intro-to-mips.md")}>
        Load "intro-to-mips.md"
      </button>
      {selectedFile !== null && <MarkdownRenderer fileName={selectedFile} />}
    </div>
  );
}
