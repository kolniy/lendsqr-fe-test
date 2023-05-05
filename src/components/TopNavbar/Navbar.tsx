import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { FaSearch } from "react-icons/fa"
import { IoMdNotificationsOutline } from "react-icons/io"
import { MdArrowDropDown } from "react-icons/md"

import loggedInUserImg from "../../images/loggedIn-user.png"

import "../../styles/abstract/_variables.scss"
import "./navbar.scss"

const Navbar = () => {
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
                    <Link to="/dashboard">Docs</Link>
                </div>
                <div className="notification-icon">
                    <IoMdNotificationsOutline className='navbar-bell-icon' />
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
    </div>
  )
}

export default Navbar
