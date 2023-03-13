import React from 'react';
import { Link } from "react-router-dom"
import '../SuccessPage/SuccessPage.scss'

const SuccessPage = () => {
    return (
        <div className="successPage">
            <h1 className="successPage__header">Success Page</h1>
                <p className="successPage__title">Click here to go to the Homepage</p>
            <Link to="/">
            <button className="successPage__button">
               <p className="successPage__text">Homepage</p></button>
            </Link>
        </div>
    );
};

export default SuccessPage;