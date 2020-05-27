import React from 'react'
import './Posts.css'
import _ from 'lodash'

import Loader from '../shared/loader/Loader'
import PostItem from './post-item/PostItem'

const Posts = props => {

    const { users, tags, updateLikes, isLoading } = props

    console.log('[Post.jsx] RENDERED')
    console.log(users, tags)

    return (
        <div className="Posts">
        {
            isLoading && <Loader />
        } 
        {
            _.values(users).map(user => (
                <PostItem
                    key={user.id}
                    id={user.id}
                    fullname={user.fullname}
                    goal={user.goal}
                    likes={user.likes}
                    tag={user.tag}
                    createdAt={user.createdAt}
                    updateLikes={updateLikes}
                />
            ))
        }
        </div>
    )
}

export default Posts
