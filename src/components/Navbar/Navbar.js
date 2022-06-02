import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </div>
  </nav>
);

export default Navbar;
