import React from 'react'
import logo from '../../../src/assets/Logo.png'
import '../home/home.css'

function Info() {
  return (
    <div className='footer-section info'>
        <img src={logo} alt="" />
        <h4 style={{fontSize:'39px'}}>Helzon Limited</h4>
        <p>The leading Engineering, Procurement, Construction and Comission Service Provider in the Nigerian Construction Sector.</p>
        <span>
          <p>All Rights reserved</p>
          <p>2022 © HELSON LIMITED</p>
        </span>
    </div>
  )
}

export default Info