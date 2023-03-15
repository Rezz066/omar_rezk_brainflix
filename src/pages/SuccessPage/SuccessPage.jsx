import React from 'react';
import { Link } from "react-router-dom"
import '../SuccessPage/SuccessPage.scss'
import HappyPikachu from '../../assets/images/happy-Pokemon-Pikachu.png'

const SuccessPage = () => {
    return (
        <div className="successPage">
            <h1 className="successPage__header">Upload Successful 🎉</h1>
                <img className="successPage__image" src={HappyPikachu} alt="happy-pikachu" />
                <p className="successPage__subheader">View the uploaded video on the homepage by clicking below</p>
            <Link className='successPage__link' to="/">
                <button className="successPage__button">
                    <p>Click Here!</p>
               </button>
            </Link>
        </div>
    );
};

export default SuccessPage;