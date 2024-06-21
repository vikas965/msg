import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
     <Link to='/'> <h1 className="navbar__brand">SIMULATOR</h1></Link>
      <div className="navbar__links">
        {/* <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a> */}
        
      <Link to='/sliding-puzzle'>sliding-puzzle</Link>
      </div>
    </nav>
  );
};

export default Navbar;
