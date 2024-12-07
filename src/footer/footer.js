import React from 'react'
import './footer.css'
import logo from '../assets/footer/logo.png'
import fbImg from '../assets/footer/fb-img.png'
import twitterImg from '../assets/footer/Twitter-img.png'
import instaImg from '../assets/footer/insta-img.png'
import tiktokImg from '../assets/footer/tiktok-img.png'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-contents">
            <div className="footer-logo-content">
                <img src={logo} alt="" />
                <p>GMAT website and its services are owned and operated by GMAT Sdn Bhd (1424121-U). We are growing aggressively to be the leading Insuretech startup in South East Asia. A Power that Protects you.</p>
            </div>
            <div className="footer-links-icons">
                <span>
                    <h6>About</h6>
                    <p>Insurance</p>
                    <p>About Us</p>
                </span>
                <span>
                    <h6>Support</h6>
                    <p>Contact Us</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </span>
                <span>
                    <span>
                        <img src={fbImg} alt="" />
                    </span>
                    <span>
                        <img src={twitterImg} alt="" />
                    </span>
                    <span>
                        <img src={instaImg} alt="" />
                    </span>
                    <span>
                        <img src={tiktokImg} alt="" />
                    </span>
                </span>
            </div>
        </div>
        <div className="line"></div>
        <p>Copyright © GMAT SDN BHD. All Rights Reserved.</p>
    </div>
  )
}

export default Footer