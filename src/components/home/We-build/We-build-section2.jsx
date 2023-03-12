import React from 'react'
import '../home.css'
import WeBuildSliderImage1 from '../../../assets/WeBuildSliderImage1.png'
import WeBuildSliderImage2 from '../../../assets/WeBuildSliderImage2.png'
import WeBuildSliderImage3 from '../../../assets/WeBuildSliderImage3.png'

function WeBuildSection2() {
    return (
        <div className="Webuild-section2">
            <h3>From building construction to sky scrapper developement.</h3>
            <div className="Webuild-image-slider">
                <img src={WeBuildSliderImage1} alt="" /><img src={WeBuildSliderImage3} alt="" /><img src={WeBuildSliderImage2} alt="" />
            </div>
        </div>
    )
}

export default WeBuildSection2
