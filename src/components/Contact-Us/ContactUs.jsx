import React from 'react'
import './ContactUs.css'
import Navbar from '../Navbar/Navbar'
import ContactUsLanding from './ContactUsLanding/ContactUsLanding'
import ContactUsLandingExtension from './ContactUsLanding/ContactUsLandingExtension'
import ContactUsForm from './ContactUsForm'
import GoToTop from '../Go-to-top/GoToTop'

function ContactUs() {
  return (
    <div style={{position: 'relative', width:'100%'}}>
        {/* <Navbar style={{background: 'rgba(250, 130, 2, 1)'}}/> */}
        <ContactUsLanding/>
        <ContactUsLandingExtension/>
        <ContactUsForm/>
        <GoToTop />
    </div>
  )
}

export default ContactUs