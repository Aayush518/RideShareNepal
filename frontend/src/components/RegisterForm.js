import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: '50vh' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 120 } }
};

function RegisterForm() {
    return (
        <motion.div className="register-form"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h2>Register</h2>
            <form action="/register" method="post">
                <input type="text" name="username" placeholder="Username" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
                <button type="submit">Register</button>
            </form>
        </motion.div>
    );
}

export default RegisterForm;
