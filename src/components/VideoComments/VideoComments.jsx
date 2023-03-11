import React from 'react';
import './VideoComments.scss'



const VideoComments = ({name, timestamp, comment, id}) => {
    return (
                <div className ="videoComments" key={id}>
                    <div className ="videoComments__box">
                        <div className ="videoComments__avatar"></div>
                            <div className ="videoComments__header">
                                <h3 className="videoComments__title">{name}</h3>
                                <p className="videoComments__date">{timestamp}</p>
                            </div>
                            <p className="videoComments__text">{comment}</p>
                    </div>
                </div>
    );
};

export default VideoComments;