import './VideoList.scss'
import NextVideo from '../NextVideo/NextVideo'

import React from 'react';

const VideoList = (props) => {
    const inactiveVids = props.videoData.filter((vids) => {
        return vids.id !== props.videoOption.id;
    });
    return (
        <div className="videoList">
            <h3 className="videoList__title">NEXT VIDEOS</h3>
            {inactiveVids.map((videoItems) => {
                return (
                    <>
                   <NextVideo
                   videoContentImage = {videoItems.image}
                    videoContentTitle ={videoItems.title}
                    videoContentChannel ={videoItems.channel}
                    videoContentId ={videoItems.id}
                    videoContentKey={videoItems.id}
                    />
                    </>
                );
            })}
        </div>
    )
};

export default VideoList;