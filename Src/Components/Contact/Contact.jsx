import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ixyr6w2', 'template_af51u7a', form.current, {
        publicKey: 'kiyN-b_M9qBYdSchr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent succesfully')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" width='150'/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p><a href="mailto:shirisha.k1122@gmail.com" style={{color:'#bebaba',fontSize:'20px'}}>shirisha.k1122@gmail.com</a></p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p><a href='tel:+16232681538' style={{color:'#bebaba',fontSize:'20px'}}>+1 (623)-268-1538</a></p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>AZ, United states</p>
                    </div>
                    <div className='contact-detail media-links'>
                        <a href='https://wa.me/+16232681538'><i class="bi bi-whatsapp"></i></a>
                        <a href="https://github.com/ShirishaKONDA"><i class="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/shirishakonda22/"><i class="bi bi-linkedin"></i></a>
                        <a href="#"><i class="bi bi-twitter"></i></a>
                    </div>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail} style={{borderRadius:'10px',padding:'25px 20px',boxShadow: '0px 0px 8px .5px rgb(224, 162, 45)',display:'flex',flexDirection:'column',gap:'30px'}}>
                <div className='contact-right'>
                  <label htmlFor="">Your Name</label>
                  <input type="text" placeholder='Enter your name' name='name' required />
                  <label htmlFor="">Your Email</label>
                  <input type="email" placeholder='Enter you email' name='email' required />
                  <label htmlFor="">Write your message here</label>
                  <textarea name="message" rows='8' placeholder='Type something here' required></textarea>
                </div>
                <div className='buttons' style={{display:'flex',flexDirection:'row',gap:'10px',justifyContent:'space-between',alignItems:'flex-start'}}>
                  <button type='submit' className='contact-submit'>Submit</button>
                  <button type='reset' className='contact-reset'><i class='bi bi-arrow-clockwise' ></i></button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
