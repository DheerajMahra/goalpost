import React from 'react'
import './PostItem.css'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const PostItem = props => {

    const { id, fullname, goal, likes, createdAt, updateLikes } = props

    return (
        <div className="Post">
            <div className="Post__head">
                <img className="Post__userimg" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="img" width="30" />
                <p className="Post__username">{fullname}</p>
                <p className="Post__time">{moment(createdAt).fromNow()}</p>
            </div>
            <div className="Post__body">{goal}</div>
            <div className="Post__icon-box" onClick={() => updateLikes(id)}>
                <FontAwesomeIcon className="Post__icon" icon={faHeart} />
                <span className="Post__likes">{likes}</span>
            </div>
        </div>
    )
}

export default PostItem
