import React from 'react';
import logo from '../assets/images/logo_transparent.png';
function Home() {

    return (
    <div className="home">
        <img className='logo' src={logo} alt='logo' ></img> 
        <h1>Daily Caloric Needs</h1>
        <button className="start-button">Click here to start</button>
    </div>
    );
}
export default Home;