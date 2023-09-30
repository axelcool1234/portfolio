import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Notes from './components/Notes';
import Contact from './components/Contact';
import MarkdownRenderer from './components/MarkdownRenderer';

export default function App() {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/contact" element={<Contact />} />
          {/* Markdown Notes */}
          <Route path="/notes/intro-to-mips" element={<MarkdownRenderer fileName="intro-to-mips.md" />} />
        </Route>
      </Routes>
    </>
  )
}
