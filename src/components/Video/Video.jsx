import React from 'react';
import videoData from '../../data/video-details.json'
import './Video.scss'

const Video = () => {
    const videoBanner = videoData[0]
    return (
        <>
            <div className="banner">
                <video className="banner__video controls" controls width="250" poster={videoBanner.image}></video>
            </div>
        </>
    );
};

export default Video;