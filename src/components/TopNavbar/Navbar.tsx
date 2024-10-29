import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { FaSearch } from "react-icons/fa"
import { IoMdNotificationsOutline } from "react-icons/io"
import { MdArrowDropDown } from "react-icons/md"

import loggedInUserImg from "../../images/loggedIn-user.png"

import "../../styles/abstract/_variables.scss"
import "./navbar.scss"

interface Props {
  toggleMobileMenu: () => void
  mobileMenuOpen: Boolean
}

const Navbar: React.FC<Props> = ({ mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <div className='navbar'>
         <div className="navbar-brand">
           <div className="navbar-logo-container">
            <Logo />
           </div>
         </div>
         <div className="navbar-links">
            <div className="navbar-search-input">
                <div className="form-input__container">
                      <input type="text" required placeholder='Search for anything' className="input-text" />
                      <div className='input-cta__text'>
                        <FaSearch className='navbar-fa-search'/>
                      </div>
                </div>
            </div>
             <div className="navbar-links__container">
                <div className="documentation-link">
                    <Link to="/dashboard/docs">Docs</Link>
                </div>
                <div className="notification-icon">
                    <Link to="/dashboard/notification">
                    <IoMdNotificationsOutline className='navbar-bell-icon' />
                    </Link>
                </div>
                <div className="loggedin-user__info">
                    <div className="logged-user-img">
                        <img 
                        src={loggedInUserImg}
                        alt='logged in user display' 
                        />
                    </div>
                    <p className="logged-user-name">
                        Adedeji
                    </p>
                    <MdArrowDropDown
                     className="navbar-dropdown__icon" 
                     />
                </div>
             </div>
         </div>
         <button
            onClick={toggleMobileMenu}
            className={`hamburger 
            ${mobileMenuOpen === true && "open"}
            `}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
           </button>
    </div>
  )
}

export default Navbar
