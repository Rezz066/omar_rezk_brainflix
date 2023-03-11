import React from 'react';
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg"
import "./UploadVideoPage.scss"
import Publish from '../../assets/icons/publish.svg'
import { Link } from 'react-router-dom';

const UploadVideoPage = () => {
    return (
        <>
        <div className="uploadVideo">
                <h1 className="uploadVideo__title">Upload Video</h1>
            <div className="uploadVideo__containerAll">
                <div className="uploadVideo__container">
                    <p className="uploadVideo__thumbnail">VIDEO THUMBNAIL</p>
                    <img className="uploadVideo__thumbnailVid" src={videoThumbnail} alt="video-thumbnail-bike" />
                </div>
            <div className="uploadVideo__box">
                <h2 className="uploadVideo__formTitle">TITLE YOUR VIDEO</h2>
                <textarea className="uploadVideo__formMessage" name="comments" id="comments" placeholder="Add a title to your video"></textarea>
                <h2 className="uploadVideo__formTitle">ADD A VIDEO DESCRIPTION</h2>
                <textarea className="uploadVideo__formText" name="comments" id="comments" placeholder="Add a description to your video"></textarea>
            </div>
            </div>
            <div className="uploadVideo__boxButton">
            <button className="uploadVideo__button uploadVideo__buttonTab--link"><img src={Publish} className="uploadVideo__buttonIcon"alt="" /><p className="uploadVideo__publish">PUBLISH</p></button>

            <Link className="uploadVideo__link" to="/">
            <button className="uploadVideo__buttonTab"><p className="uploadVideo__cancel">CANCEL</p></button>
            </Link>
            </div>
        </div>
        </>
    );
};

export default UploadVideoPage;