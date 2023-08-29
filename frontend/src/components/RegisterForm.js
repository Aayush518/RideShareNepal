import React from 'react';

function RegisterForm() {
    return (
        <div className="register-form">
            <h2>Register</h2>
            <form action="/register" method="post">
                <input type="text" name="username" placeholder="Username" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;
