import React from 'react';
import './navigationBar.css';
import logo from '../../assets/logo.png'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-links">
        <a href="#">KeremOne</a>
        <a href="#">KeremThree</a>
        <a href="#">KeremFive</a>
        <a href="#">KeremSeven</a>
      </div>
    </nav>
  );
};

export default Navbar;