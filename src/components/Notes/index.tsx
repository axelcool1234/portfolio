import './index.scss'
import { Link } from 'react-router-dom';

export default function Notes() {
  return (
    <div>
      <h1>Notes</h1>
      <table>
        <thead>
          <tr>
            <th>Computer Organization and Principles in System Design</th>
            <th>Data Structures and Algorithms</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/notes/intro-to-mips">Introduction to MIPS Assembly Language</Link>
            </td>
            <td>
              <Link to="/notes/searching-algorithms">Searching Algorithms</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/notes/mips-instructions">MIPS Assembly Instructions</Link>
            </td>
            <td>
              <Link to="/notes/sorting-algorithms">Sorthing Algorithms</Link>
            </td>
          </tr>
          <tr>
            <td>
              {/* Empty Computer Organization row */}
            </td>
            <td>
              <Link to="/notes/data-structures">Data Structures</Link>
            </td>
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>
    </div>
  );
}
