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

                {/* Introduction card */}
                <div className="IntroCard">
                    <span className="IntroCard__Tag">Goalpost</span>
                    <h2 className="IntroCard__Head">Keep track of your daily targets</h2>
                    <p className="IntroCard__Body">Goalpost tracks your goal for the day so that people can see what you are working on and get motivation from you.</p>
                    <Link to="/feed">
                        <Button inverted>See goals&nbsp;&nbsp;&#10141;</Button>
                    </Link>
                </div>

                {/* How it works card */}
                <div className="Container">
                <div className="HowCard">
                    <h2 className="HowCard__Head">How it works</h2>
                    <p className="HowCard__Body">This plan is for those who have a team already and running a large business.</p>
                    <ul className="HowCard__List">
                        <li className="HowCard__Item">
                            <span>&#10003;</span>Post your today's tech goal
                        </li>
                        <li className="HowCard__Item">
                            <span>&#10003;</span>See what others are doing
                        </li>
                        <li className="HowCard__Item">
                            <span>&#10003;</span>Get realtime motivation
                        </li>
                    </ul>
                </div>
                </div>
    
            </div>
            
        </div>
    )
}

export default Home
