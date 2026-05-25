import React from 'react'
import './footer.css'
//import footer_logo from '../../assets/footer_logo.svg'
//import user_icon from '../../assets/user_icon.svg'
import { FaUserTie } from "react-icons/fa";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { GiFeather } from "react-icons/gi";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <GiNinjaHeroicStance size={40}/>
                <p>Sukumar Biswas</p>
            </div>
            <div className="footer-top-right">
                {/* <div className="footer-email-input">
                    <FaUserTie size={30}/>
                    <input type="email" placeholder='Enter your email' />
                </div> */}
                {/* `<div className="footer-subscribe">Subscribe</div> */}
            </div>
        </div>
        <hr />
        {/* <div className="footer-bottom">
            <GiFeather size={30}/>
            <div className="footer-bottom-right">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div> */}
    </div>
  )
}

export default Footer