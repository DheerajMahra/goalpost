import React from 'react'
import './Back.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Back = props => {
    return (
        <Link to={props.to}>
            <div className="BackBtn">
                <FontAwesomeIcon className="BackBtn__Icon" icon={faChevronLeft} />
            </div>
        </Link>
    )
}

export default Back
