import React from 'react'
import TestifierAvi from '../../../assets/TestifierAvi.png'
import quote from '../../../assets/quote.png'
import keyboard from '../../../assets/keyboard.png'
import {Testimonialdata} from './TestimonialData'
import './testimonial.css'


function Testimonial() {
  return (
    <div className='Testimonials-container'>
      {Testimonialdata.map((testimony)=> {
      return (
        <>  
          <p className='Titular'>
                <span>What Our </span>
                <span style={{color:'rgba(250, 130, 2, 1)', fontWeight:'500'}}>Clients </span>
                <span>Say</span>
          </p>
          <div className="Testimonial-wrapper">          
            <img src={TestifierAvi}
            alt=""/>
            <div className='testimony-right'>
              <img 
              src={quote} 
              alt=""/>
              <p>{testimony.testimony}
              </p>
              <span className='testimonial-bottom'>    
                  <span 
                  className="author">
                    <p 
                    style={{fontWeight:'400'}}>{testimony.org}</p>
                    <p 
                    style={{fontWeight:'700'}}>{testimony.author}</p>
                  </span>
                  <span>
                    <img src={keyboard} alt="" />
                  </span>
              </span>
            </div>
          </div>
        </>
      )
    })}
    </div>
  )
}

export default Testimonial

  
