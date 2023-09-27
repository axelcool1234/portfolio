import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>
      This is the home page content. You can{' '}
        <Link to="/contact">click here</Link> to go to another part of the website.
      </p>
    </div>
  );
}