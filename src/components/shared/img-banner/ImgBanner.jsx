import React from 'react'
import './ImgBanner.css'

const ImgBanner = props => {

    let { img } = props

    return (
        <div className="Form-thumb" style={{backgroundImage: `url(${img})`}}>
            <div className="Thumb__wrap">
                
            </div>
        </div>
    )
}

export default ImgBanner
