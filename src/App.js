import './App.scss';
import Nav from './components/Nav/Nav'
import Video from './components/Video/Video'
import videoData from '../src/data/video-details.json'
import data from '../src/data/videos.json'
import { useState } from "react"
import CommentForm from '../src/components/CommentForm/CommentForm'
import VideoList from '../src/components/VideoList/VideoList'
import Comments from '../src/components/Comments/Comments'
import DisplayVideo from '../src/components/DisplayVideo/DisplayVideo'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
    <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<UploadPage/>}/>
        </Routes>

        <DisplayVideo activeVideo={defaultVideo}/>
        
          <div className="app">
            <div className="app__container">

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
          videoData = {videoData}/>
        </div>
      </BrowserRouter>
    </>
  );
}


