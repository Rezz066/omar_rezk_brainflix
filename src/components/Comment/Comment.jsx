import './Comment.scss'
import avatarImage from '../../assets/images/Mohan-muruge.jpg'
import commentIcon from '../../assets/icons/add_comment.svg'

import React from 'react';

const Comment = () => {
    return (
            <div className="form__box">
                    <div className="form__container">
                        <img className="form__avatar" src={avatarImage} alt="mohan-muruge"/>
                        <div className="form__box">
                            <h2 className="form__title">JOIN THE CONVERSATION</h2>
                            <textarea className="form__message" name="comments" id="comments" placeholder="Add a new comment"></textarea>
                            <button className="form__button"><img src={commentIcon} alt="" /><p className="form__comment">COMMENT</p></button>
                        </div>
                    </div>
            </div>
    );
};

export default Comment;