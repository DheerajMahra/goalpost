import React from 'react'
import './Posts.css'
import _ from 'lodash'

import Loader from '../shared/loader/Loader'
import PostItem from './post-item/PostItem'

const Posts = props => {

    const { users, tags, updateLikes, isLoading } = props

    //console.log('[Post.jsx] RENDERED')

    return (
        <div className="Posts">
        {
            isLoading && <Loader />
        } 
        {
            _.values(users).map(user => (
                <PostItem
                    key={user.id}
                    { ...user }
                    tag={user.tag !== '-1' && tags[user.tag].text}
                    updateLikes={updateLikes}
                />
            ))
        }
        </div>
    )
}

export default Posts
