import './index.css'
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className = 'topnav'>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
    </div>
  );
}