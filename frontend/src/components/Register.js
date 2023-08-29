import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        userType: '', // 'driver' or 'passenger'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Make an API call to the backend to register the user
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* TODO: Add input fields for name, email, password, and userType */}
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
