import './VideoList.scss'
import NextVideo from '../NextVideo/NextVideo'

import React from 'react';

const VideoList = ({selectVideo, videoOption, videoData}) => {
    const inactiveVids = videoData.filter((vids) => {
        return vids.id !== videoOption.id;
    });

    return (
        <div className="videoList">
            <h3 className="videoList__title">NEXT VIDEOS</h3>
            {inactiveVids.map((videoItems) => {
                return (
                    <>
                   <NextVideo
                    image = {videoItems.image}
                    title ={videoItems.title}
                    channel ={videoItems.channel}
                    id ={videoItems.id}
                    key={videoItems.id}
                    selectVideo={selectVideo}
                    />
                    </>
                );
            })}
        </div>
    )
};

export default VideoList;