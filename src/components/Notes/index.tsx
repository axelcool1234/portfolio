import './index.css'
import { Link } from 'react-router-dom';

export default function Notes() {
  return (
    <div>
      <h1>Notes</h1>
      <Link to="/notes/intro-to-mips">Intro to MIPS</Link>
    </div>
  );
}
