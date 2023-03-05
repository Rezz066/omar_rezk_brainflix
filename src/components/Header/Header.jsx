import React from 'react';
import './Header.scss'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import uploadIcon from '../../assets/icons/upload.svg'

const Header = () => {

    return (
        <>
            <div className="header">
                <div className='header__items'>
                    <div className="header__box">
                    <input className="header__input" type="search" placeholder="Search"/> 
                        <img className="header__avatar" src={avatar} alt="mohan-muruge"/>
                        <a className="header__upload"><img className="header__icon" src={uploadIcon} alt='upload-icon'/><p>UPLOAD</p></a>
                    </div>
                        <a className="header__button"><img className="header__icon" src={uploadIcon} alt='upload-icon'/><p>UPLOAD</p></a>
                </div>
            </div>
        </>
    );
};

export default Header;

