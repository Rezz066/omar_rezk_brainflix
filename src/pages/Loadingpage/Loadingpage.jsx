import React from 'react';
import './Loadingpage.scss'
import BrainFlixlogo from '../../assets/logo/BrainFlix-logo.svg'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loadingpage = () => {

    const navigate = useNavigate()

    useEffect(() =>{
        setTimeout(() =>{

            navigate('/success')

        }, 3500)
    })

    return (
        <div className="loadingpage">
            <div className="loadingpage__container">
                <img src={BrainFlixlogo} alt='brainflix-logo' className="loadingpage__image"/>
                <div className="loadingpage__center">
                    <div className="loadingpage__ring"></div>
                    <p className="loadingpage__text">Loading...</p>
                </div>
            </div>
        </div>
    );
};

export default Loadingpage;