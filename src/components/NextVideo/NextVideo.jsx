import './NextVideo.scss'
import React from 'react';

const NextVideo = ({image, title, channel, id, selectVideo}) => {

    const handleVideoSelect = () => {
        console.log("Video was clicked", id)
        selectVideo(id)
      }

    return (
        <>
            <div className="nextVideo" onClick={handleVideoSelect}>
                <img src={image} alt="images" className="nextVideo__image" />
                <div className="nextVideo__box">
                    <h2 className="nextVideo__title">{title}</h2>
                    <p className="nextVideo__text">{channel}</p>
                </div>
            </div>
        </>
    );
};

export default NextVideo;