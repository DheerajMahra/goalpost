import React from 'react'
import './Feed.css'
import _ from 'lodash'
import db from '../../config/firebase.js'
import moment from 'moment'

import Posts from '../posts/Posts'

class Feed extends React.Component {

    state = {
        users: {},
        tags: {},
        totalCount: 0,
        isLoading: true
    }
    
    componentDidMount() {

        this.fetchUsers()
        this.fetchTags()
        this.addChangeListener()
    }

    fetchTags = () => {
        const tagsRef = db.ref().child('/tags')

        tagsRef.once('value', snap => {
            this.setState({ tags: snap.val() })
        })
    }

    fetchUsers = () => {
        const usersRef = db.ref().child('/users')
        
        usersRef.on('child_added', snap => {

            this.setState(prevState => ({
                users: {[snap.val().id]: snap.val(), ...prevState.users},
                totalCount: ++prevState.totalCount,
                isLoading: false
            }))
        })
    }

    updateLikes = userId => {
        const userRef = db.ref().child(`/users/${userId}`)

        userRef.child('/likes').once('value', oldLikes => {
            userRef.update({ likes: oldLikes.val() + 1 })
        })
    }

    addChangeListener = () => {
        const usersRef = db.ref().child('/users')
        //listener for ui update on likes
        usersRef.on('child_changed', snap => {
            this.setState(prevState => ({
                users: {
                    ...prevState.users,
                    [snap.val().id]: snap.val()
                }
            }))
        })
    }

    render(){
        console.log('[Feed.jsx] RENDERED')
        return (
            
            <div className="Feed">

                <Posts
                    users={this.state.users}
                    tags={this.state.tags}
                    updateLikes={this.updateLikes}
                    isLoading={this.state.isLoading}
                />

                <div className="Stats">
                    
                    <div className="Stats__card">
                        <div className="Stats__tag">{moment().format('dddd')}</div>
                        <h2 className="Stats__head">{moment().format("MMM Do[,] YYYY")}</h2>
                        <p className="Stats__body">Goalpost tracks your goal for the day so that people can see what you are working on today.</p>
                        <div className="Stats__info">
                            <p className="Stats__info-goal">
                                <span className="Goal-total">{this.state.totalCount}</span>
                                <span className="Goal-text">Goals commited</span>
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Feed
