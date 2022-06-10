import { Link } from 'react-router-dom';
import './Navbar.css';
import imgUrl from '../../img/person-48.png';

const Navbar = () => (
  <nav>
    <span className="bookstore-title">
      Bookstore CMS
    </span>
    <div className="nav-links">
      <Link to="/" className="books-link">Books</Link>
      <Link to="/categories" className="categories-link">Categories</Link>
    </div>
    <img className="profile-icon" src={imgUrl} alt="" />
  </nav>
);

export default Navbar;
