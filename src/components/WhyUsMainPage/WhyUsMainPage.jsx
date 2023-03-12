import React from 'react'
import { WhyUsData } from '../home/Why us/WhyUsData'
import './WhyUsMainPage.css'
import Ellipse from '../../assets/Ellipse-1.png'
import GoToTop from '../Go-to-top/GoToTop'

function WhyUsMainPage() {
  return (
    <div className='WhyUsMainPage'>
        {WhyUsData.map((Item, i) => {return (
                <div >
                    <h1>{0}{i+1}</h1>
                    <h1>{Item.Title}</h1>
                    <div className='WhyUsTextContainer'>
                        <p>{Item.text}</p>
                        <p>{Item.text}</p>
                    </div>
                    <img src={Ellipse} alt="" className='Ellipse-1' />
                    <GoToTop />
                </div>

            )}
            
        )}
    </div>
  )
}

export default WhyUsMainPage