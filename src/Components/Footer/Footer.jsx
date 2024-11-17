import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum </p>
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
      <p className="footer-copyright">Copyright 2024 © VjpProLuxury.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
