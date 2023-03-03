import './NextVideo.scss'
import React from 'react';

const NextVideo = (props) => {

    return (
        <>
            <div className="nextVideo">
                <img src={props.videoContentImage} alt="images" className="nextVideo__image" />
                <div className="nextVideo__box">
                    <h2 className="nextVideo__title">{props.videoContentTitle}</h2>
                    <p className="nextVideo__text">{props.videoContentChannel}</p>
                </div>
            </div>
        </>
    );
};

export default NextVideo;