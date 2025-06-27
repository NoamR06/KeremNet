import React from 'react';
import './navigationBar.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
          <Link id="navigation_link" to="/">Home Page</Link>
          <Link id="navigation_link" to="/posts/11">SinglePost</Link>
      </div>
    </nav>
  );
};

export default Navbar;