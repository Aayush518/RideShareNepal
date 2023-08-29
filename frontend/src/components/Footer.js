import React from 'react';
import './Footer.css';  // Import the CSS file for styling

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="/terms">Terms of Service</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/faq">FAQ</a>
            </div>
            <div className="footer-creator">
                <p>Created by <span className="creator-name">Aayush Adhikari</span></p>
            </div>
            <div className="footer-copyright">
                <p>&copy; 2023 RideShareNepal. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
