import React from 'react';
import VideoComments from '../VideoComments/VideoComments';
import './Comments.scss'



const Comments = (props) => {

    return (
        <>
        {(props.videoData[0].comments).map(comment => {
            console.log(comment)
            return (
                <VideoComments
                id={comment.id}
                name={comment.name}
                timestamp={comment.timestamp}
                comment={comment.comment}
                />
                    )
             })}
        </>
    );
};

export default Comments;