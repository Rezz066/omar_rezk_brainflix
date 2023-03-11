import React from 'react';
import VideoComments from '../VideoComments/VideoComments';
import './Comments.scss'


function stringDate(dateInput) {
    const date = new Date(dateInput);
    const dateString = date.toLocaleDateString();
    return dateString;
}

const Comments = ({displayVideo}) => {
    
    return (
        (displayVideo.comments).map(comment => {
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