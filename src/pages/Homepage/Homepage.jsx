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

const API_URL = "https://project-2-api.herokuapp.com/videos"
const API_KEY = "73873b50-6242-4436-86ca-a7f8bcb7f56b"

const URL = `${API_URL}?api_key=${API_KEY}`

const Homepage = () => {

  const [nextVideos, setNextVideos] = useState([]);
  const [displayVideo, setDisplayVideo] = useState(null);
  const { videoId } = useParams()

  useEffect(() => {
    axios.get(URL)
      .then(result => {
        setNextVideos(result.data)
      })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    if (nextVideos.length !== 0) {
      axios.get(`${API_URL}/${videoId ? videoId : nextVideos[0].id}?api_key=${API_KEY}`)
        .then(result => setDisplayVideo(result.data))
        .catch(error => console.log(error))
    }

  }, [videoId, nextVideos])

  if (!displayVideo) {
    return <h1>Loading...</h1>
  }

  function selectVideo(videoId) {
    const selectedVideo = nextVideos.find((video) => {

      return videoId === video.id;
    });
    setDisplayVideo(selectedVideo);
  }

  return (
    <>
      (
      <>
        <DisplayVideo activeVideo={displayVideo} />
        <div className="homepage">
          <div className="homepage__container">

            <Video
              activeVideo={displayVideo}
            />

            <CommentForm
             setDisplayVideo={setDisplayVideo}
              displayVideo={displayVideo}

            />

            <Comments
              displayVideo={displayVideo}
              nextVideos={nextVideos}

            />
          </div>

          <VideoList
            displayVideo={displayVideo}
            nextVideos={nextVideos}
            videoId={videoId}
            setDisplayVideo={setDisplayVideo}
            selectVideo={selectVideo}
          />
        </div>
      </>
      )
    </>
  );
};

export default Homepage;