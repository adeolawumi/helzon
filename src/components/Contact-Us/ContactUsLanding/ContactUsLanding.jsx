import React from 'react'
import africa from '../../../assets/africa.png'

function ContactUsLanding() {
  return (
    <div className='ContactUsLanding'>
        <div className="Africa-Image-Container">
            <img src={africa} alt="" />
        </div>
        <div className="ContactUsLandingRight">
            <div className='Stranger'>
              <h2>Dont be a stranger,</h2>
              <div>
                <div></div>
                <span>  say</span><span className='hello'> HELLO</span>
              </div>
            </div>
            <div className='Address'>
              <h6>-   Main Office</h6>
              <p>Helzon Limited Center at Kaita Shopping complex. Near Japaro Hotel which is along Lokoja, Kaduna Expressway Gwagwalada Abuja.</p>
            </div>
        </div>
    </div>
  )
}

export default ContactUsLanding