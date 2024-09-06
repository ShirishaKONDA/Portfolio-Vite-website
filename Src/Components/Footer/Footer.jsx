import './Footer.css'
import React from 'react'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <h2>Shirisha Konda</h2>
            <p>I am a frontend developer from Arizona,USA with 6 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        </div>
        <hr />
        <div className='footer-bottom'>
            <p className="footer-bottom-left"> @ 2024 Shirisha Konda. All rights are reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>


    </div>
  )
}

export default Footer
