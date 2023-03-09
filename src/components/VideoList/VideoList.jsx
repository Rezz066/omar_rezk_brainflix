import './VideoList.scss'
import NextVideo from '../NextVideo/NextVideo'

import React from 'react';

const VideoList = ({selectVideo, nextVideos, displayVideo, id}) => {
    const inactiveVids = nextVideos.filter((vids) => {
        console.log(nextVideos)
        return vids.id !== displayVideo.id;

    });

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
                    selectVideo={selectVideo}
                    />
                    </>
                );
            })}
        </div>
    )
};

export default VideoList;