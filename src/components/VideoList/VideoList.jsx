import './VideoList.scss'
import NextVideo from '../NextVideo/NextVideo'
import React from 'react';
import {Link} from 'react-router-dom'

const VideoList = ({nextVideos, id, videoId, displayVideo}) => {

    const inactiveVids = nextVideos.filter(video => {
        return displayVideo.id !== video.id
    })

    return (
        <div className="videoList" key={id}>
            <h3 className="videoList__title">NEXT VIDEOS</h3>
            {inactiveVids.map((videoItems) => {
                return (
                    <>
            <Link className="videoList__link" to={`/video/${videoItems.id}`}>
                   <NextVideo
                    image = {videoItems.image}
                    title ={videoItems.title}
                    channel ={videoItems.channel}
                    id ={videoItems.id}
                    displayVideo={displayVideo}
                    videoId={videoId}
                    />
            </Link>
                 </>
                );
            })}
        </div>
    )
};

export default VideoList;