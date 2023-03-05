import React from 'react';
import './VideoComments.scss'



const VideoComments = (props) => {
    return (
                <div className ="videoComments">
                    <div className ="videoComments__box">
                        <div className ="videoComments__avatar"></div>
                            <div className ="videoComments__header">
                                <h3 className="videoComments__title">{props.name}</h3>
                                <p className="videoComments__date">{props.timestamp}</p>
                            </div>
                            <p className="videoComments__text">{props.comment}</p>
                    </div>
                </div>
    );
};

export default VideoComments;