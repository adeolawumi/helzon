import React from 'react'
import './WhyUs.css'
import {WhyUsData} from './WhyUsData'

function WhyUs() {
  return (
    <div className='Why-us-container'>
    <span style={{marginLeft: '1.5rem', color:'rgba(255, 255, 255, 0.3)'}}>Why </span><span style={{color:'rgba(250, 130, 2, 0.5)'}}>Us </span>
      <div className="Why-us-sub-container">
          {WhyUsData.map((Item, index)=>{
              return(
                  <div className='Item-card'>
                      <span>{0}{index+1}</span>
                      <h2>{Item.Title}</h2>
                      <p>{Item.text}</p>
                      <a href={`# + {index + 1}`}>Learn more</a>
                  </div>
              )
          })}
      </div>
    </div>
  )
}

export default WhyUs