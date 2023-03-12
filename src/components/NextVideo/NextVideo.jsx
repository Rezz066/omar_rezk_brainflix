import './NextVideo.scss'
import React from 'react';
import {Link} from 'react-router-dom'

const NextVideo = ({image, title, channel, id, displayVideo}) => {

    // const handleOnClick = () => {
    //     console.log("Video was clicked", id)
    //     selectVideo(id)
    //   }

    return (
        <>
            <div className="nextVideo" key={id}>
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