import React from 'react'
import './Feed.css'
import db from '../../config/firebase.js'
import moment from 'moment'
import Posts from '../../components/posts/Posts'

class Feed extends React.Component {

    constructor(props) {
        super(props)

        this.usersRef = db.ref().child('/users')
        this.tagsRef = db.ref().child('/tags')

        this.state = {
            users: {},
            tags: {},
            totalCount: 0,
            isLoading: true,
            noGoals: false
        }
    }
    
    componentDidMount() {

        this.fetchTags()
        this.fetchUsers()
        this.addChangeListener()
    }

    fetchTags = () => {

        this.tagsRef.once('value', snap => {
            this.setState({ tags: snap.val() })
        })
    }

    checkCreatedAt = createdAt => {
        let created = moment(createdAt).format('DD')
        let today = moment().format('DD')
        return created === today
    }

    fetchUsers = () => {
        
        this.usersRef.once('value', snap => {
            if(snap.val() === null) {
                this.setState({ isLoading: false, noGoals: true})
            }
        })

        this.userAddedListener = this.usersRef.on('child_added', snap => {

            if(this.checkCreatedAt(snap.val().createdAt)) {

                this.setState(prevState => ({
                    users: {[snap.val().id]: snap.val(), ...prevState.users},
                    totalCount: ++prevState.totalCount,
                    isLoading: false,
                    noGoals: false
                }))
            } else {
                db.ref().child(`/users/${snap.val().id}`).remove()
            }
        })
    }

    updateLikes = userId => {
        let userRef = db.ref().child(`/users/${userId}`)

        userRef.child('/likes').once('value', oldLikes => {
            userRef.update({ likes: oldLikes.val() + 1 })
        })
    }

    addChangeListener = () => {
        //listener for ui update on likes
        this.userChangedListener = this.usersRef.on('child_changed', snap => {
            this.setState(prevState => ({
                users: {
                    ...prevState.users,
                    [snap.val().id]: snap.val()
                }
            }))
        })
    }

    componentWillUnmount() {
        this.usersRef.off('child_added', this.userAddedListener)
        this.usersRef.off('child_changed', this.userChangedListener)
    }

    render(){
        //console.log('[Feed.jsx] RENDERED')

        return (
            
            <div className="Feed">

                <Posts
                    users={this.state.users}
                    tags={this.state.tags}
                    updateLikes={this.updateLikes}
                    isLoading={this.state.isLoading}
                    noGoals={this.state.noGoals}
                />

                <div className="Feed__Stats">
                    
                <div className="StatsCard">
                    <span className="StatsCard__Tag">{moment().format('dddd')}</span>
                    <h2 className="StatsCard__Head">{moment().format("MMM Do[,] YYYY")}</h2>
                    <p className="StatsCard__Body">Goalpost tracks your goal for the day so that people can see what you are working on today.</p>
                    <div className="StatsCard__Info">
                        <p className="InfoGoal">
                            <span className="InfoGoal__Total">{this.state.totalCount}</span>
                            <span className="InfoGoal__Text">Goals commited</span>
                        </p>
                    </div>
                </div>

                </div>

            </div>
        )
    }
}

export default Feed
