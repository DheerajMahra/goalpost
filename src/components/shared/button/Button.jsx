import React from 'react'
import './Button.css'

const Button = props => {

    let classes = "Btn "
    classes += props.inverted ? "Btn--inverted" : "Btn--filled"

    return (
        <div className={classes} onClick={props.click}>
        {
            props.children
        }
        </div>
    )
}

export default Button