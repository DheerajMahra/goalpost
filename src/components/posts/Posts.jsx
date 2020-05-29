import React from 'react'
import './Posts.css'
import _ from 'lodash'
import NoGoals from '../no-goals/NoGoals'
import PostItem from './post-item/PostItem'
import Loader from '../shared/loader/Loader'

const Posts = props => {

    const { users, tags, updateLikes, isLoading, noGoals } = props

    //console.log('[Post.jsx] RENDERED')

    return (
        <div className="Posts">

        { isLoading && <Loader /> }

        { noGoals && <NoGoals /> }

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
