import React from 'react'
import Animation from '../../../assets/Amimation.gif'

function ContactUsLandingExtension() {
  return (
    <div className='ContactUsLandingExtension'>
        <img src={Animation} alt="" />
        <div className='C-U-L-E-Text'>
            <div className='C-U-L-E-Text-Left'>
                <h3>Whether you want to work with us or are interested in learning more about what we do, we’d love to  hear from you.</h3>
                <h3>Say hello</h3>
                <p>You can also directly contact us at  <a href=''>hello@helzonlimited.com</a></p>
                
            </div>
            <div className='C-U-L-E-Text-Right'>
                <h2>Partener with Helzon Limited</h2>
                <p>Looking for a profitable partnershipthat works to bring even more value to the various functions of your business? Give us a call at :</p>
                <p>+2348167008965</p>
            </div>
        </div>
    </div>
  )
}

export default ContactUsLandingExtension