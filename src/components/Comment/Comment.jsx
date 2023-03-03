import './Comment.scss'
import avatarImage from '../../assets/images/Mohan-muruge.jpg'
import commentIcon from '../../assets/icons/add_comment.svg'

import React from 'react';

const Comment = () => {
    return (
            <div class="form__box">
                    <div class="form__container">
                        <img class="form__avatar" src={avatarImage} alt="mohan-muruge"/>
                        <div className="form__box">
                            <h2 class="form__title">Join the Conversation</h2>
                            <textarea class="form__message" name="comments" id="comments" placeholder="Add a new comment"></textarea>
                            <button class="form__button"><img src={commentIcon} alt="" /><p className="form__comment">COMMENT</p></button>
                        </div>
                    </div>
            </div>
    );
};

export default Comment;