import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Notes from './components/Notes';
import Contact from './components/Contact';
import MarkdownRenderer from './components/MarkdownRenderer';
import markdownFiles from './components/markdownFiles';

export default function App() {
  const markdownRoutes = markdownFiles.map((fileName: string) => {
    const routePath = `/notes/${fileName.replace('.md', '')}`;
    return (
      <Route
        key={routePath}
        path={routePath}
        element={<MarkdownRenderer fileName={fileName} />}
      />
    );
  });

  return ( 
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/contact" element={<Contact />} />
          {/* Markdown Notes */}
          {markdownRoutes}
        </Route>
      </Routes>
    </>
  )
}
