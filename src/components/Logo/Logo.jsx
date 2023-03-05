import React from 'react';
import './Logo.scss'
import logo from '../../assets/logo/BrainFlix-logo.svg'


const Logo = () => {
    return (
        <>
            <a href="/">
                <img className="logo" src={logo} alt="brainflix-logo"/>
            </a> 
        </>
    );
};

export default Logo;