import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='hero' style={{display:'grid',gridTemplateColumns:'5% 95%'}}>
        <div className='hero-icons'>
          <a href='https://wa.me/+16232681538'><i class="bi bi-whatsapp"></i></a>
          <a href="https://github.com/ShirishaKONDA"><i class="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/shirishakonda22/"><i class="bi bi-linkedin"></i></a>
          <a href="#"><i class="bi bi-twitter"></i></a>
        </div>
        <div className='hero'>
          {/* <img src="profile_img.svg" alt="" /> */}
          <h2>Hi, I'm Shirisha Konda</h2>
          <h1>Frontend developer based in USA.</h1>
          <p>I am a frontend developer from Arizona,USA with 6 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
          <div className='hero-action'>
              <div className="hero-connect"><AnchorLink className='anchor-links' offset={50} href="#contact">Connect with me</AnchorLink></div>
              <a href="Shirisha_PREFinal_profile_24 (2).docx" download><div className='hero-resume'> My resume</div></a>
          </div>
        </div>
    </div>
  )
}

export default Hero
