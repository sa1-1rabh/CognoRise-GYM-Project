import React, { useState } from 'react'
import "./CSS/Header.css"

const Header = () => {
  const [showLang,setShowLang] = useState(false);

  return (
    <div className='header-container'>
      <div className='header-left'>
        <img className="header-logo" src='./gym-logo-removebg-preview.png'/>
      </div>
      <div className="header-center">
        <span className='header-name'>BARSNRODS</span>
      </div>
      <div className='header-right'>
        <div className="country-container">
          <span className="country-text">Country</span>
          <select className="select-container">
            <option>USA</option>
            <option>INDIA</option>
            <option>Australia</option>
            <option>Europe</option>
          </select>
        </div>
        <div className="profile-pic-container">
          <img src='./profile-pic.jpg' className='user-profile-pic'/>
        </div>
      </div>
    </div>
  )
}

export default Header