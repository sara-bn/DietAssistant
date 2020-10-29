import React from 'react';
import logo from '../assets/images/logo_transparent.png';
import { Link } from "react-router-dom";
function Home() {
    return (
    <div className="home">
        <div>
            <img className='logo' src={logo} alt='logo' ></img> 
        </div>
        <div className="home-text">
            <h1>Daily Caloric Needs</h1>
            <Link className="start-button" to="/calculator">Click here to start</Link>
        </div>
    </div>
    );
}
export default Home;