import { RiBriefcaseFill, RiArrowDropDownLine } from "react-icons/ri"
import { IoHomeOutline } from "react-icons/io5"
// import Logo from '../Logo/Logo'

import "../../styles/abstract/_variables.scss"
import "./sidebar.scss"

const Sidebard = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-brand">
            {/* <Logo /> */}
            Welcome To LendSQR
        </div>
        <div className="organization-switcher__container">
            <div className="sidebar-contents__container">
                <div className="organization-switcher">
                  <RiBriefcaseFill className="pre-icon" />
                <p>Switch Organization</p>
                <RiArrowDropDownLine className="post-icon" />
              </div>
            </div>
        </div>

        <div className="sidebar-menu">
            <div className="dashboard-link">
              <div className="sidebar-contents__container">
                <div className="dashboard-link-item">
                    <IoHomeOutline className="link-item-menu" /> <p>Dashboard</p>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebard