import React from 'react';
import { color, motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: '-50vh' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 120 } }
};

function LoginForm() {
    return (
        <motion.div className="auth-form login-form" variants={containerVariants} initial="hidden" animate="visible">
            <h2>Login</h2>
            <form action="/login" method="post">
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <div className="checkbox-container">
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <button type="submit">Login</button>
            </form>
            <a href="/forgot-password" style={{color: 'crimson'}}>Forgot Password?</a>
        </motion.div>
    );
}

export default LoginForm;
