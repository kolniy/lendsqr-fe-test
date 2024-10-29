import React from 'react'

import logoIcon from "../../images/logo1.png"
import logoImage from "../../images/logo2.png"

import "./logo.scss"

const Logo = () => {
  return <div className='logo-container'>
    <img src={logoIcon} alt="..." className='logo-icon'/>
    <img src={logoImage} alt="..." className='logo-text'/>
  </div>
}

export default Logo