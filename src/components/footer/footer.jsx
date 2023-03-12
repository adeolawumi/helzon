import React from 'react'
import General from './General'
import Info from './Info'
import Location from './Location'
import Socials from './Socials'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
        <Info />
        <General/>
        <Location/>
        <Socials/>
    </div>
  )
}

export default Footer