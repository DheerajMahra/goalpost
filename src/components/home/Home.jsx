import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Form from '../form/Form'
import Button from '../shared/button/Button'

const Home = () => {
    return (
        <div className="Home">

            <Form />

            <div className="Home__card-box">

                <div className="Feature__card">
                    <div className="Feature__tag">Goalpost</div>
                    <h2 className="Feature__head">Keep track of your daily targets</h2>
                    <p className="Feature__body">Goalpost tracks your goal for the day so that people can see what you are working on and get motivation from you.</p>
                    <Link to="/feed">
                        <Button inverted>See goals&nbsp;&nbsp;&#10141;</Button>
                    </Link>
                </div>

                <div className="container">
                    <div className="Professional__card">
                        <h2 className="Professional__head">How it works</h2>
                        <p className="Professional__body">This plan is for those who have a team already and running a large business.</p>
                        <ul className="Professional__list">
                            <li className="Professional__item">
                                <span>&#10003;</span>Post your today's tech goal
                            </li>
                            <li className="Professional__item">
                                <span>&#10003;</span>See what others are doing
                            </li>
                            <li className="Professional__item">
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
