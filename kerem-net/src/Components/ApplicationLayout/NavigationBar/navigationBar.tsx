import React from 'react';
import './navigationBar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-links">
        <a>Test</a>
        <a>Test</a>
      </div>
    </nav>
  );
};

export default Navbar;