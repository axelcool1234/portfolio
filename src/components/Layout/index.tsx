import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import './index.css'

export default function Layout() {
  return (
    <div className="App">
      <Navigation />
      <div className='page'>
        <Outlet />
      </div>
    </div>
  );
}