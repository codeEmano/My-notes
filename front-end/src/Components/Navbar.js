import '../bootstrap.min.css';
import './myStyle.css';
import {Link} from 'react-router-dom';
function Navbar()
{
    return (
        <nav className="navbar navbar-primary bg-primary navbar-expand-lg">
        <Link to="/" className="navbar-brand nav-link">Home</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Notes</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>)
}

export default Navbar;