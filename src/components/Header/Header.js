// import React from 'react';
import logo from '../../assets/logo/BrainFlix-logo.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'

const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <a href="#">
                    <img src={logo} alt="brainflix-logo"/>
                </a>
                <input className="header__input" type="search" placeholder="Search"/> 
                <img className="header__avatar" src={avatar} alt="mohan-muruge"/>
                <button className="header__button"><i className="fa fa-upload icon"></i>UPLOAD</button>
            </div>
        </header>

    
    );
};

export default Header;