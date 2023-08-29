import React from 'react';
import './Home.css';  // Import the CSS file for styling

function Home() {
    return (
        <div className="home-container">
            <div className="background-3d"></div>
            <div className="home-content">
                <h1 className="slide-in-element">Welcome to RideShareNepal</h1>
                <p>Your trusted ride-sharing platform in Nepal.</p>
                <p>Join us now and explore the features.</p>
                <div className="cta">
                    <h2>Ready to take your first ride?</h2>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
