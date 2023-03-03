import React from 'react';
import './Video.scss'
import viewsIcon from '../../assets/icons/views.svg'
import likesIcon from '../../assets/icons/likes.svg'


function stringDate(dateInput) {
    const date = new Date(dateInput);
    const dateString = date.toLocaleDateString();
    return dateString;
}

const Video = (props) => {

    return (
        <>
            <div className="banner">
                <video className="banner__video controls" controls width="250" poster={props.activeVideo.image}></video>
            </div>
            <div className="video__container">
                <h1 className="video__container-title">{props.activeVideo.title}</h1>
                <div className="video__container-box">
                    <div className="video__container-boxInfo">
                        <p className="video__container-name">By {props.activeVideo.channel}</p>
                        <p className="video__container-date">{stringDate(props.activeVideo.timestamp)}</p>
                    </div>
                    <div className="video__container-boxInfo">
                       <p className="video__container-watch"><img src={viewsIcon} className="video__container-image" alt="" />{props.activeVideo.views}</p>
                       <p className="video__container-like"><img src={likesIcon} className="video__container-image" alt="" />{props.activeVideo.likes}</p>
                    </div>
                </div>
                <div className="video__container-description">
                    <p className="video__container-summary">{props.activeVideo.description}</p>
                </div>
            </div>
        </>
    );
};

export default Video;