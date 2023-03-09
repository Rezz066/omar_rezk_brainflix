import React from 'react';
import Video from '../../components/Video/Video'
import { useState, useEffect } from "react"
import CommentForm from '../../components/CommentForm/CommentForm'
import VideoList from '../../components/VideoList/VideoList'
import Comments from '../../components/Comments/Comments'
import DisplayVideo from '../../components/DisplayVideo/DisplayVideo'
import './Homepage.scss'
import { useParams } from 'react-router-dom';
import axios from 'axios';



const Homepage = () => {

  //videoList - Next Video List
  const API_URL = "https://project-2-api.herokuapp.com/videos"
  const API_KEY = "73873b50-6242-4436-86ca-a7f8bcb7f56b"

  const URL = `${API_URL}?api_key=${API_KEY}`

  
  const [nextVideos, setNextVideos] = useState();
  const [displayVideo, setDisplayVideo] = useState();

const {videoId} = useParams()

  useEffect(() => {
    axios.get(`${API_URL}/${videoId}?api_key=${API_KEY}`)
      .then(res =>
        setDisplayVideo(res.data))
      .catch(error => console.log(error))
  }, [])


  useEffect(() => {

    axios.get(URL)
      .then(result => setNextVideos(result.data))
        .catch(error => console.log(error))
      }, [])
      

  if (!nextVideos || !displayVideo) {

    return (

      <><h1>Loading...</h1></>

    )

  }


  function selectVideo(videoId) {
    const selectedVideo = nextVideos.find((video) => {
      return videoId === video.id;
    });
    setNextVideos(selectedVideo);
  }
  return (
    <>
      <DisplayVideo activeVideo={displayVideo} />
      <div className="homepage">
        <div className="homepage__container">

          <Video
            activeVideo={displayVideo}
          />

          <CommentForm
            activeVideo={displayVideo}
          />

          <Comments
            nextVideo={nextVideos}
            activeVideo={displayVideo}
          />
        </div>

        <VideoList
          displayVideo={displayVideo}
          setNextVideos={setNextVideos}
          selectVideo={selectVideo}
          nextVideos={nextVideos}
        />
      </div>
    </>
  );
};

export default Homepage;