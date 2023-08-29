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
                <button type="submit">Login</button>
            </form>
        </motion.div>
    );
}

export default LoginForm;
