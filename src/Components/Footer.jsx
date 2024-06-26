import React from 'react'
import "./CSS/Footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaYoutube,FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className='upper'>

      </div>
      <hr/>
      <div className="lower">
        <div className='lower-left'>
          <span>© 2024 All Rights Reserved</span>  
          <ul>
            <li><a href='https://www.worldgym.com/privacy-policy/' target='_blank'>Privacy Policy</a></li>
            <li>|</li>
            <li><a href='https://www.worldgym.com/accessibility/' target='_blank'>Accessibility</a></li>
          </ul>
        </div> 
        <div className='lower-right'>
          <a href="https://www.instagram.com/sa1_1rabh/" target="_blank" className='insta'>
            <FaInstagram color='black'/>
          </a>
          <a href="https://x.com/cognorise" target="_blank" className='twitter'>
            <FaXTwitter color='black'/>
          </a>
          <a href="https://www.youtube.com/@CognoRiseInfoTech" target="_blank" className='youtube'>
            <FaYoutube color='black'/>
          </a>
        </div>   
      </div>   
    </footer>
  )
}

export default Footer