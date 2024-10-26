import react from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav ClassName="navbar">
      <div className="logo">Perfume</div>
      <ul className="nav-links">
        <li>
          <link to="/">Home</link>
        </li>
        <li>
          <link to="About">About</link>
        </li>
        <li>
          <link to="Contact">Contact</link>
        </li>
        <li>
          <link to="Product">Product</link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;