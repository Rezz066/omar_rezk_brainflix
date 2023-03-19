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

  const [nextVideos, setNextVideos] = useState([]);
  const [displayVideo, setDisplayVideo] = useState(null);

  console.log(nextVideos)
  let { videoId } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8081/videos`)
      .then(result => {
        setNextVideos(result.data)
      })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    if (nextVideos.length !== 0) {  
      axios.get(`http://localhost:8081/videos/${videoId ? videoId : nextVideos[0].id}`)
      .then(result => setDisplayVideo(result.data))
      .catch(error => console.log(error))
    }

  }, [videoId, nextVideos])

  if (!displayVideo) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <>
        <DisplayVideo activeVideo={displayVideo} />
        <div className="homepage">
          <div className="homepage__container">

            <Video
              activeVideo={displayVideo}
            />

            <CommentForm
              displayVideo={displayVideo}

            />

            <Comments
              displayVideo={displayVideo}
              nextVideos={nextVideos}

            />
          </div>

          <VideoList
            nextVideos={nextVideos}
            videoId={videoId}
            displayVideo={displayVideo}
          />
        </div>
      </>
    </>
  );
};

export default Homepage;