import './contact.css' 
import { useEffect } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { VscSend } from 'react-icons/vsc'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fmhw42c', 'template_3q07rv9', form.current, 'AcYZGocD4ujT8x5tx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <div id='Contact' className='contact'>
      <div>
        <h2 className='section-title'>Contact</h2>
        <p className='section-subtitle'>Get in touch</p>
      </div>
      <div className='contact_container' data-aos="zoom-in">
        <div className='contact_container-info'>
          <div className='contact_container-info-box'>
            <BsTelephone size={30}/>
            <div className='contact_container-info-box-data'>
              <h2>Call Me</h2>
              <p>(+971)568454974</p>
            </div>
          </div>
          <div className='contact_container-info-box'>
            <FiMail size={30}/>
            <div className='contact_container-info-box-data'>
              <h2>Email</h2>
              <p>hatam.007.h@gmail.com</p>
            </div>
          </div>
          <div className='contact_container-info-box'>
            <HiOutlineLocationMarker size={30}/>
            <div className='contact_container-info-box-data'>
              <h2>Location</h2>
              <p>United Arab Emirates, Dubai</p>
            </div>
          </div>
        </div>
        <form className='contact_container-mail' ref={form} onSubmit={sendEmail}>
          <div className='contact_container-mail_per'>
            <div className='contact_container-mail_port'>
              <label>Name</label>
              <input type="text" name="user_name" />
            </div>
            <div className='contact_container-mail_port'>
              <label>Email</label>
              <input type="email" name="user_email" />
            </div>
          </div>
          <div className='contact_container-mail_port mas'>
            <label>Message</label>
            <textarea name="message" rows={5}/>
          </div>
          <button className='section-button' type="submit">Send<VscSend/></button>
        </form>
      </div>
    </div>
  )
}

export default Contact