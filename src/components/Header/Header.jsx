import React from 'react';
import './Header.scss'
import logo from '../../assets/logo/BrainFlix-logo.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import uploadIcon from '../../assets/icons/upload.svg'

const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <a href="#">
                    <img className="header__logo" src={logo} alt="brainflix-logo"/>
                </a>
            <div className='header__box'>
            <input className="header__input" type="search" placeholder="Search"/> 
                <img className="header__avatar" src={avatar} alt="mohan-muruge"/>
            </div>
                <button className="header__button"><img src={uploadIcon} alt='upload-icon'/>UPLOAD</button>
            </div>
        </header>
    );
};

export default Header;