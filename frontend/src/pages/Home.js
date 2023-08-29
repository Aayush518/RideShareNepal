import React from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

function Home() {
    return (
        <div className="home">
            <h1>Welcome to RideShareNepal</h1>
            <LoginForm />
            <RegisterForm />
            {/* Add other homepage components here */}
        </div>
    );
}

export default Home;
