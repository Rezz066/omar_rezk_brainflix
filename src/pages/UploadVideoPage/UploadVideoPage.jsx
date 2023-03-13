import React from 'react';
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg"
import "./UploadVideoPage.scss"
import Publish from '../../assets/icons/publish.svg'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UploadVideoPage = () => {

    const navigate = useNavigate();

      const handleSubmit = (event) => {
        event.preventDefault();

        navigate('/success')

      };

    return (
        <>
        <form className="uploadVideo" onSubmit={handleSubmit}>
                <h1 className="uploadVideo__title">Upload Video</h1>
            <div className="uploadVideo__containerAll">
                <div className="uploadVideo__container">
                    <p className="uploadVideo__thumbnail">VIDEO THUMBNAIL</p>
                    <img className="uploadVideo__thumbnailVid" src={videoThumbnail} alt="video-thumbnail-bike" />
                </div>
            <div className="uploadVideo__box">
                <h2 className="uploadVideo__formTitle">TITLE YOUR VIDEO</h2>
                <input className="uploadVideo__formMessage" name="comment" id="title" placeholder="Add a title to your video"></input>
                <h2 className="uploadVideo__formTitle">ADD A VIDEO DESCRIPTION</h2>
                <textarea className="uploadVideo__formText" name="comment" id="description" placeholder="Add a description to your video"></textarea>
            </div>
            </div>
            <div className="uploadVideo__boxButton">
            <button className="uploadVideo__button uploadVideo__buttonTab--link" type="submit">
            <img src={Publish} className="uploadVideo__buttonIcon"alt="publish-icon"/>
            <p className="uploadVideo__publish">PUBLISH</p>
            </button>

            <button className="uploadVideo__buttonTab">
                <Link className="uploadVideo__link" to="/">
                <p className="uploadVideo__cancel">CANCEL</p>
                </Link>
            </button>
            </div>
        </form>
        </>
    );
};

export default UploadVideoPage;