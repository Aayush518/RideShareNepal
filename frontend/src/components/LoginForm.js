import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
};

function LoginForm() {
    return (
        <motion.div className="login-form"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h2>Login</h2>
            <form action="/login" method="post">
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <div>
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <button type="submit">Login</button>
            </form>
            <a href="/forgot-password">Forgot Password?</a>
        </motion.div>
    );
}

export default LoginForm;
