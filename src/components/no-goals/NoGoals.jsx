import React from 'react'
import './NoGoals.css'
import { Link } from 'react-router-dom'
import NoGoalImg from '../../img/no-goal.png'
import ImgBanner from '../shared/img-banner/ImgBanner'
import Button from '../shared/button/Button'

const NoGoals = () => {
    return (
        <div className="No-goals">
            <ImgBanner img={NoGoalImg}/>
            <p className="No-goals__text">Nobody posted a goal today.</p>
            <Link to="/">
                <Button>Create a goal</Button>
            </Link>
        </div>
    )
}

export default NoGoals 
