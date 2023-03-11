import './NextVideo.scss'
import React from 'react';

const NextVideo = ({image, title, channel, id, setDisplayVideo, videoId}) => {

    const handleOnClick = () => {
        console.log("Video was clicked", id)
        setDisplayVideo(videoId)
      }

    return (
        <>
            <div className="nextVideo" key={id} onClick={handleOnClick}>
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