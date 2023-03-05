import './App.css';
import Nav from './components/Nav/Nav'
import Video from './components/Video/Video'
import videoData from '../src/data/video-details.json'
import data from '../src/data/videos.json'
import { useState } from "react"
import CommentForm from '../src/components/CommentForm/CommentForm'
import VideoList from '../src/components/VideoList/VideoList'
import Comments from '../src/components/Comments/Comments'

export default function App() {

  const [defaultVideo, setDefaultVideo] = useState(videoData[0]);
  
  function selectVideo(id) {
    const selectedVideo = videoData.find((video) => {
      return id === video.id;
    });
    setDefaultVideo(selectedVideo);
  }
  return (
    <>
    <Nav/>
    
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
    <VideoList
    selectVideo = {selectVideo}
    videoOption = {defaultVideo}
    videoData = {videoData}/>
    
    </>
  );
}


