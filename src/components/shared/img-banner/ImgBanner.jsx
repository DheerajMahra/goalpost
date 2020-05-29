import React from 'react'
import './ImgBanner.css'

const ImgBanner = props => {

    let { img } = props

    return (
        <div className="ImgBanner" style={{backgroundImage: `url(${img})`}}>
        </div>
    )
}

export default ImgBanner
