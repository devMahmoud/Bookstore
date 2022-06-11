import { Link } from 'react-router-dom';
import './Navbar.css';
import imgUrl from '../../img/person-64.png';

const Navbar = () => (
  <nav>
    <div className="links-container">
      <div className="bookstore-title">
        Bookstore CMS
      </div>
      <div className="nav-links">
        <Link to="/" className="books-link">Books</Link>
        <Link to="/categories" className="categories-link">Categories</Link>
      </div>
    </div>
    <img className="profile-icon" src={imgUrl} alt="" />
  </nav>
);

export default Navbar;
