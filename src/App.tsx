import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

export default function App() {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
