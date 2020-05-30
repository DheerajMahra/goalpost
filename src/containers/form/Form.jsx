import React from 'react'
import './Form.css'
import db from '../../config/firebase'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import FormImg from '../../img/form-img.png'
import Button from '../../components/shared/button/Button'
import ImgBanner from '../../components/shared/img-banner/ImgBanner'

class Form extends React.Component {

    state = {
        fullname: '',
        goal: '',
        tag: 'NA',
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
                availableTags: snap.val()
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
                    tag: 'NA',
                    isError: false
                })
                this.props.history.push('/feed')
            }
        })
    }

    incrementTagCount = tag => {
        
        if(tag === 'NA') return

        const tagsRef = db.ref().child(`/tags/${tag}`)
        tagsRef.update({ count: this.state.availableTags[tag].count + 1 })
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
            this.incrementTagCount(tag)
        } else{
            this.setState({ isError: true })
        }
    }

    render() {

        return (
            <div className="FormBox">

                <ImgBanner img={FormImg}/>
                
                <form className="Form" onSubmit={this.handleSubmit}>
                    
                    <div className="Form__Group">
                        <label
                            htmlFor="fullname"
                            className="Form__Label"
                        >Full Name</label>
                        <input
                            type="text"
                            id="fullname"
                            className="Form__Input"
                            value={this.state.fullname}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="Form__Group">
                        <label
                            htmlFor="goal"
                            className="Form__Label"
                        >Goal</label>
                        <textarea
                            type="text"
                            id="goal"
                            className="Form__Textarea"
                            value={this.state.goal}
                            onChange={this.handleChange}>
                        </textarea>
                    </div>

                    <div className="Form__Group">
                        <label
                            className="Form__Label"
                        >Select Tag</label>
                        <select 
                            className="Form__Select"
                            value={this.state.tag}
                            onChange={this.handleTagChange}
                        >
                        <option
                            defaultValue
                            value="NA"
                        >Nothing selected</option>
                        {
                            _.values(this.state.availableTags).map(tag => (
                                <option
                                    key={tag.text}
                                    value={tag.text}
                                >{tag.text}
                                </option>
                            ))
                        }
                        </select>
                        <p className="Form__TagRequest">Tag missing? Request your tag <a href="https://forms.gle/CXdxtCSbJsDNHrSc9" rel="noopener noreferrer" target="_blank">here</a></p>
                    </div>

                    {
                        this.state.isError &&
                        <p className="Form__Error">*Fullname and goal are required.</p>
                    }

                    <Button click={this.handleSubmit}>Create goal</Button>
                </form>

            </div>
        )
    }
}

export default withRouter(Form)
