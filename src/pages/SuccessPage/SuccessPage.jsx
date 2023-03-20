import React from 'react';
import { Link, useNavigate } from "react-router-dom"
import '../SuccessPage/SuccessPage.scss'
import HappyPikachu from '../../assets/images/happy-Pokemon-Pikachu.png'
import { useEffect } from 'react';

const SuccessPage = () => {

    const navigate = useNavigate()
    
    useEffect(() =>{
        setTimeout(() =>{

            navigate('/')

        }, 3500)
    })

    return (
        <div className="successPage">
            <h1 className="successPage__header">Upload Successful 🎉</h1>
                <img className="successPage__image" src={HappyPikachu} alt="happy-pikachu" />
                <p className="successPage__subheader">Please click below if the video doesn't redirect to Homepage</p>
            <Link className='successPage__link' to="/">
                <button className="successPage__button">
                    <p>Click Here!</p>
               </button>
            </Link>
        </div>
    );
};

export default SuccessPage;