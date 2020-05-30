import React from 'react'
import './PostItem.css'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const PostItem = props => {

    const { id, fullname, goal, likes, tag, createdAt, updateLikes } = props
    //console.log('[PostItem.jsx] RENDERED')
    return (
        <div className="Post">
            <div className="Post__Head">
                <img className="Post__UserImg" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="user" width="30" />
                <p className="Post__Username">{fullname}</p>
            </div>
            <div className="Post__Body">{goal}</div>
            <p className="Post__Time">posted {moment(createdAt).fromNow()}</p>
            <div className="Post__Extras">
                <div className="Post__IconBox" onClick={() => updateLikes(id)}>
                    <FontAwesomeIcon className="Post__Icon" icon={faHeart} />
                    <span className="Post__Likes">{likes}</span>
                </div>
                {
                    tag && <span className="Post__Tag">{tag}</span>
                }
            </div>
        </div>
    )
}

export default PostItem
