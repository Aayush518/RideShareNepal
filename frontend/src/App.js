import React from 'react';
import Register from './components/Register';
import './App.css';


function App() {
    const appStyle = {
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        padding: '50px'
    };

    return (
        <div className="App" style={appStyle}>
            <h1>RideShareNepal</h1>
            <Register />
        </div>
    );
}

export default App;
