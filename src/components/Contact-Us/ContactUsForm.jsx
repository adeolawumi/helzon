import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import ChevronRight from '../../assets/chevron-right.svg'

function ContactUsForm() {
  const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_dko035k', 'template_xgec475', form.current, 'RdOOTpEFUuXUeXyFZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    };
  return (
    <div className='ContactUsForm'>
        <h1>Contact Us</h1>
        <p>Do you have anything to say to us, you can fill the the form below.</p>
        <form 
        ref={form} 
        onSubmit={sendEmail}>
            <input type="text" placeholder='fullname' name='name'/>
            <input type="email" placeholder='Email Adress'name='email'/>
            <input type="number" placeholder='Phone number' name='phone'/>
            <input type="text" placeholder='write your message...' name='name'/>
            <button><input type="submit" value="submit" /> <img src={ChevronRight} className='chevron'/></button>  
        </form>
    </div>
  )
}

export default ContactUsForm