import React from 'react';
import Video from '../../components/Video/Video'
import videoData from '../../data/video-details.json'
import data from '../../data/videos.json'
import { useState } from "react"
import CommentForm from '../../components/CommentForm/CommentForm'
import VideoList from '../../components/VideoList/VideoList'
import Comments from '../../components/Comments/Comments'
import DisplayVideo from '../../components/DisplayVideo/DisplayVideo'
import './Homepage.scss'

const Homepage = () => {

    const [defaultVideo, setDefaultVideo] = useState(videoData[0]);

  function selectVideo(id) {
    const selectedVideo = videoData.find((video) => {
      return id === video.id;
    });
    setDefaultVideo(selectedVideo);
  }
    return (
        <>
        <DisplayVideo activeVideo={defaultVideo}/>
        <div className="homepage">
        <div className="homepage__container">

              <Video
              videosList={data}
              activeVideo={defaultVideo}
              />

              <CommentForm
              activeVideo={defaultVideo}
              />

              <Comments 
              videoData = {videoData}
              activeVideo={defaultVideo}
              />
        </div>

        <VideoList
            selectVideo = {selectVideo}
            videoOption = {defaultVideo}
            videoData = {videoData}
            />
        </div>
        </>
    );
};

export default Homepage;