import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './styles.css';

function App() {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(userPrefersDark ? 'dark' : 'light');

    useEffect(() => {
        const themeClass = theme === 'dark' ? 'dark-theme' : 'light-theme';
        document.documentElement.classList.add(themeClass);
        document.documentElement.classList.remove(theme === 'dark' ? 'light-theme' : 'dark-theme');
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <Router>
            <Navbar />
            <button className={`switch-theme-btn ${theme}`} onClick={toggleTheme}>
                {theme === 'light' ? '🌙 Dark Mode' : '☀ Light Mode'}
            </button>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/features" element={<Features />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
