import React from 'react';
import './Logo.scss'
import logo from '../../assets/logo/BrainFlix-logo.svg'
import { Link } from 'react-router-dom';


const Logo = () => {
    return (
        <>
            <Link to="/homepage">
                <img className="logo" src={logo} alt="brainflix-logo"/>
            </Link> 
        </>
    );
};

export default Logo;