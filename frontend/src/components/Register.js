import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        userType: '' // 'driver' or 'passenger'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <select name="userType" onChange={handleChange}>
                    <option value="">Select User Type</option>
                    <option value="driver">Driver</option>
                    <option value="passenger">Passenger</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
