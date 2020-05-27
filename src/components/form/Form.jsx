import React from 'react'
import './Form.css'
import db from '../../config/firebase'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'

import Button from '../shared/button/Button'

class Form extends React.Component {

    state = {
        fullname: '',
        goal: '',
        tag: '',
        isError: false,
        availableTags: []
    }

    componentDidMount() {
        this.fetchTags()
    }

    fetchTags = () => {
        const tagsRef = db.ref().child('/tags')

        tagsRef.once('value', snap => {
            this.setState({
                availableTags: _.values(snap.val())
            })
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleTagChange = e => {
        this.setState({
            tag: e.target.value
        })
    }

    storeUserData = (userNode, data) => {

        userNode.set(data, err => {

            if(err) { alert(err) }

            else {
                //save to db success. Init state again
                this.setState({ 
                    fullname: '',
                    goal: '',
                    tag: '',
                    isError: false
                })

                this.props.history.push('/feed')
            }
        })
    }

    checkValidity = (fullname, goal) => (
        fullname.trim() !== '' && goal.trim() !== ''
    )

    handleSubmit = e => {
        e.preventDefault()

        let { fullname, goal, tag } = this.state

        if(this.checkValidity(fullname, goal)) {

            const newUserNode = db.ref().child('/users').push()

            let userData = {
                id: newUserNode.key, 
                fullname,
                goal,
                likes: 0,
                tag,
                createdAt: Date.now()   
            }

            this.storeUserData(newUserNode, userData)
        } else{
            this.setState({ isError: true })
        }
    }

    render() {

        return (
            <div className="Form-wrap">

                <div className="Form-thumb">
                    <div className="Thumb__wrap">
                        
                    </div>
                </div>
                
                <form className="Form" onSubmit={this.handleSubmit}>
                    
                    <div className="Form-group">
                        <label
                            htmlFor="fullname"
                            className="Form-label"
                        >Full Name</label>
                        <input
                            type="text"
                            id="fullname"
                            className="Form-input"
                            value={this.state.fullname}
                            onChange={this.handleChange}
                            required={true}
                        />
                    </div>

                    <div className="Form-group">
                        <label
                            htmlFor="goal"
                            className="Form-label"
                        >Goal</label>
                        <textarea
                            type="text"
                            id="goal"
                            className="Form-textarea"
                            value={this.state.goal}
                            onChange={this.handleChange}>
                        </textarea>
                    </div>

                    <div className="Form-group">
                        <label
                            className="Form-label"
                        >Select tag</label>
                        <select 
                            className="Form-select"
                            value={this.state.tag}
                            onChange={this.handleTagChange}
                        >
                        <option
                            defaultValue
                            value=""
                        >Nothing selected</option>
                        {
                            this.state.availableTags.map(tag => (
                                <option
                                    key={tag.id}
                                    value={tag.id}
                                >{tag.text}
                                </option>
                            ))
                        }
                        </select>
                    </div>

                    {
                        this.state.isError &&
                        <p className="Form__error">Fullname and goal are required.</p>
                    }

                    <Button click={this.handleSubmit}>Post your goal</Button>

                </form>

            </div>
        )
    }
}

export default withRouter(Form)
