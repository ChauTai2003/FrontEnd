import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-">
        <div className="footer-content-left">
            <p>Our restaurant offers a cozy atmosphere and a diverse menu, from familiar traditional dishes to attractive specialties. Each dish is meticulously prepared, retaining its unique flavor and full of creativity. We are committed to bringing you a wonderful culinary experience, dedicated service to always make you feel satisfied.</p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
              <h2>HOMEMADE & TASTES</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
        </div>
        <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+84-817-903-338</li>
                <li>21522561@gm.uit.edu.vn</li>
              </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright © Thanh Tai Inc. 2024 All rights reserved.</p>
    </div>
  )
}

export default Footer
