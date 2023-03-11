import './VideoList.scss'
import NextVideo from '../NextVideo/NextVideo'

import React from 'react';

const VideoList = ({nextVideos, id, videoId, displayVideo, setDisplayVideo, selectVideo}) => {

    const inactiveVids = nextVideos.filter(video => {
        return video.id !== displayVideo.id
    })

    return (
        <div className="videoList" key={id}>
            <h3 className="videoList__title">NEXT VIDEOS</h3>
            {inactiveVids.map((videoItems) => {
                return (
                    <>
                   <NextVideo
                    image = {videoItems.image}
                    title ={videoItems.title}
                    channel ={videoItems.channel}
                    id ={videoItems.id}
                    videoId={videoId}
                    setDisplayVideo={setDisplayVideo}
                    selectVideo={selectVideo}
                    />
                    </>
                );
            })}
        </div>
    )
};

export default VideoList;