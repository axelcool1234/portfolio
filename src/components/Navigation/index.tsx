import './index.scss'
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png'

export default function Navigation() {
  return (
    <div className = 'topnav'>
      <Link to="/" className = 'logo'>
        <img src = {Logo} alt="Logo"/>
      </Link>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
    </div>
  );
}