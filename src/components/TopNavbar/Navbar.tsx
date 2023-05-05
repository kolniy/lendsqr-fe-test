import "../../styles/abstract/_variables.scss"
import "./navbar.scss"

import Logo from '../Logo/Logo'

const Navbar = () => {
  return (
    <div className='navbar'>
         <div className="navbar-brand">
           <div className="navbar-logo-container">
            <Logo />
           </div>
         </div>
         <div className="navbar-links">
            <div className="navbar-search-input">search bar</div>
             <div className="navbar-links__container">Links</div>
         </div>
    </div>
  )
}

export default Navbar
