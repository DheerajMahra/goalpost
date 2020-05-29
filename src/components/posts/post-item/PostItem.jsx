import React from 'react'
import './PostItem.css'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const format = time => (
    time === "a few seconds ago" ? "just now" : time
)

const PostItem = props => {

    const { id, fullname, goal, likes, tag, createdAt, updateLikes } = props
    //console.log('[PostItem.jsx] RENDERED')
    return (
        <div className="Post">
            <div className="Post__head">
                <img className="Post__userimg" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="img" width="30" />
                <p className="Post__username">{fullname}</p>
                <p className="Post__time">{format(moment(createdAt).fromNow())}</p>
            </div>
            <div className="Post__body">{goal}</div>
            <div className="Post__extras">
                <div className="Post__icon-box" onClick={() => updateLikes(id)}>
                    <FontAwesomeIcon className="Post__icon" icon={faHeart} />
                    <span className="Post__likes">{likes}</span>
                </div>
                {
                    tag && <span className="Post__tag">{tag}</span>
                }
            </div>
        </div>
    )
}

export default PostItem
