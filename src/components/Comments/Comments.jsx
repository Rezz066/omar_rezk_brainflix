import React from 'react';
import VideoComments from '../VideoComments/VideoComments';
import './Comments.scss'


function stringDate(dateInput) {
    const date = new Date(dateInput);
    const dateString = date.toLocaleDateString();
    return dateString;
}

const Comments = ({activeVideo}) => {
    
    console.log(activeVideo)
    return (
        (activeVideo.comments).map(comment => {
            return (
                <VideoComments
                id={comment.id}
                name={comment.name}
                timestamp={stringDate(comment.timestamp)}
                comment={comment.comment}
                />
                    )
             })
    );
};

export default Comments;