import './index.css'
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';

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