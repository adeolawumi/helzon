import React from 'react'
import '../home.css'
import webuildimage from '../../../assets/webuildimage.png'

function WeBuildSection1() {
    return (
        <div className='Webuild-section1'>
            <div className='Webuild-image-container'><img src={webuildimage} alt=''></img></div>
            <div className='Webuild-text-container'>
                <div className="Webuild-text-styler">
                <span className='orange'>We build great </span><span>homes</span>
                <h3>Every home we’ve built has a great connection  in the aspect  making things to its very detail amd making sure it is well structured</h3>
                </div>
            </div>
        </div>
    )
}

export default WeBuildSection1