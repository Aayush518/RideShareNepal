import React from 'react';

function LoginForm() {
    return (
        <div className="login-form">
            <h2>Login</h2>
            <form action="/login" method="post">
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
