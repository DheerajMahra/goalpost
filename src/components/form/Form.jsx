import React from 'react'
import './Form.css'
import db from '../../config/firebase'
import { withRouter } from 'react-router-dom'

import Button from '../shared/button/Button'

class Form extends React.Component {

    state = {
        fullname: '',
        goal: '',
        isError: false
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    storeUserData = (userNode, data) => {
        userNode.set(data, err => {
            if(err) { alert(err) }
            else {
                this.setState({ 
                    fullname: '',
                    goal: '',
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

        let { fullname, goal } = this.state

        if(this.checkValidity(fullname, goal)) {

            const newUserNode = db.ref().child('/users').push()

            let userData = {
                id: newUserNode.key, 
                fullname,
                goal,
                likes: 0,
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
                    {
                        this.state.isError &&
                        <p className="Form__error">*All fields are required.</p>
                    }
                    <Button click={this.handleSubmit}>Post your goal</Button>

                </form>

            </div>
        )
    }
}

export default withRouter(Form)
