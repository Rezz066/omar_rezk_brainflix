import React from 'react';
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg"
import "./UploadVideoPage.scss"
import Publish from '../../assets/icons/publish.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UploadVideoPage = () => {


    const navigate = useNavigate();

   
    const handleSubmit = (event) => {
    event.preventDefault();

    
    const title = event.target.title.value;
    const description = event.target.description.value;
    
/*
    I was trying to a validation form with styling -- please let's look into it later
    
    const inValid = () => {
        const errors = {};

        if (!title) {
             errors.title = 'Please Enter a Title'
             return errors
        }
        if (!description) {
            errors.description = 'Please Enter a Title'
            return errors
       }
       return errors
    }
    if (!title || !description){
        inValid()
    }
    */

    if (!title || !description){
        return false
    }

    console.log(title, description)

    const newVideo = {
        title,
        description,
    }

    axios.post(`http://localhost:8081/videos`,newVideo)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((error)=>{
        console.log("error making a new video",error)
    })
    event.target.reset()
    navigate('/loading')

    };

    const handelCancel  = () => {
        navigate('/')
    }

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
                    <input className="uploadVideo__formMessage" name="title"  id="title" placeholder="Add a title to your video"></input>

                    <h2 className="uploadVideo__formTitle">ADD A VIDEO DESCRIPTION</h2>
                    <textarea className="uploadVideo__formText" name="description"  id="description" placeholder="Add a description to your video"></textarea>

                </div>
            </div>

            <div className="uploadVideo__boxButton">
                <button className="uploadVideo__button uploadVideo__buttonTab--link" type="submit">
                    <img src={Publish} className="uploadVideo__buttonIcon"alt="publish-icon"/>
                    <p className="uploadVideo__publish">PUBLISH</p>
                </button>

                <button onClick={handelCancel} className="uploadVideo__buttonTab">
                    <p className="uploadVideo__cancel">CANCEL</p>
                </button>
            </div>
        </form>
        </>
    );
};

export default UploadVideoPage;