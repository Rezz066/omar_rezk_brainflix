import React from 'react';
import Logo from '../Logo/Logo'
import Header from '../Header/Header'
import './Nav.scss'

const Nav = () => {
    return (
        <div  className='nav'>
        <Logo/>
        <Header/>
        </div>
    );
};

export default Nav;