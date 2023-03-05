import React from 'react';
import './DisplayVideo.scss'

const DisplayVideo = ({activeVideo}) => {
    return (
        <div className="banner">
                <video className="banner__video controls" controls width="250" poster={activeVideo.image}></video>
            </div>
    );
};

export default DisplayVideo;