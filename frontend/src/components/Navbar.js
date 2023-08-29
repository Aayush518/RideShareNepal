import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file for styling

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">RideShareNepal</Link>
            </div>
            <div className="navbar-links">
                <Link to="/about">About Us</Link>
                <Link to="/features">Features</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="navbar-auth">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    );
}

export default Navbar;
