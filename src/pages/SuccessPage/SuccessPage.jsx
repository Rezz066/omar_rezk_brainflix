import React from 'react';
import { Link } from "react-router-dom"
import './SuccessPage'

const SuccessPage = () => {
    return (
        <div className="successPage">
            <h1>Success Page</h1>
            <Link to="/">
            <button className="successPage__button">Homepage</button>
            </Link>
        </div>
    );
};

export default SuccessPage;