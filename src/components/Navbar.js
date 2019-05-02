import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return(
    <nav className="topnav">
      <div className="container">
        <Link to='/' className="logo">My Comps</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  )
}

export default Navbar;
