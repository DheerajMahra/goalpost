import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Form from '../../containers/form/Form'
import Button from '../shared/button/Button'

const Home = () => {
    return (
        <div className="Home">

            <Form />

            <div className="CardBox">

                <div className="IntroCard">
                    <span className="IntroCard__Tag">Goalpost</span>
                    <h2 className="IntroCard__Head">Keep track of your daily targets</h2>
                    <p className="IntroCard__Body">Goalpost tracks your goal for the day so that people can see what you are working on and get motivation from you.</p>
                    <ul className="IntroCard__List">
                        <li className="IntroCard__Item">
                            <span>&#10003;</span>Post your today's tech goal
                        </li>
                        <li className="IntroCard__Item">
                            <span>&#10003;</span>See what others are doing
                        </li>
                        <li className="IntroCard__Item">
                            <span>&#10003;</span>Get realtime motivation
                        </li>
                        <li className="IntroCard__Item">
                            <span>&#10003;</span>Goals are deleted as the day ends
                        </li>
                    </ul>
                    <Link to="/feed">
                        <Button inverted>See goals&nbsp;&nbsp;&#10141;</Button>
                    </Link>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home
