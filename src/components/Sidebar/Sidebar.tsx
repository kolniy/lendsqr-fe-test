import { Link } from "react-router-dom"
import { AiOutlineBarChart } from "react-icons/ai"
import { RiBriefcaseFill, RiArrowDropDownLine, RiUserSettingsLine, RiFilePaper2Line, RiTodoFill } from "react-icons/ri"
import { IoHomeOutline } from "react-icons/io5"
import { FiUsers, FiUserCheck, FiUserX, FiDatabase } from "react-icons/fi"
import { FaRegHandshake, FaPercentage } from "react-icons/fa"
import { GiBank, GiBoomerangSun } from "react-icons/gi"
import { MdOutlineGroups, MdOutlineSavings } from "react-icons/md"
import { TbMoneybag, TbArrowsLeftRight } from "react-icons/tb"
import { GiReceiveMoney } from "react-icons/gi"
import { GoSettings } from "react-icons/go"

import "../../styles/abstract/_variables.scss"
import "./sidebar.scss"

const Sidebard = () => {
  return (
    <div className="sidebar">
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
            <div className="dashboard-link-item">
              <div className="sidebar-contents__container">
                 <Link to="/dashboard">
                  <IoHomeOutline className="link-item-menu-icon" />
                    <span>Dashboard</span>
                  </Link>
                   <div>
                </div>
              </div>
            </div>
            <ul className="nav-links">
              <li className="dashboard-link-text">
                <div className="sidebar-contents__container">
                  Customers
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                  <Link to="/dashboard">
                    <FiUsers className="link-item-menu-icon" />
                    <span>Users</span>
                  </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                  <Link to="/dashboard">
                    <MdOutlineGroups className="link-item-menu-icon" />
                    <span>Guarantors</span>
                  </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard">
                  <TbMoneybag className="link-item-menu-icon" />
                  <span>Loans</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard">
                  <FaRegHandshake className="link-item-menu-icon" />
                  <span>Decision Models</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard">
                  <MdOutlineSavings className="link-item-menu-icon" />
                  <span>Savings</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard">
                  <GiReceiveMoney className="link-item-menu-icon" />
                  <span>Loan Requests</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard">
                  <FiUserCheck className="link-item-menu-icon" />
                  <span>Whitelist</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard">
                  <FiUserX className="link-item-menu-icon" />
                  <span>Karma</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-text">
                <div className="sidebar-contents__container">
                Business
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard">
                  <RiBriefcaseFill className="link-item-menu-icon" />
                  <span>Organization</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard">
                  <GiReceiveMoney className="link-item-menu-icon" />
                  <span>Loan Products</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard">
                  <GiBank className="link-item-menu-icon" />
                  <span>Savings Products</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard">
                  <FiDatabase className="link-item-menu-icon" />
                  <span>Fees and Charges</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard">
                  <TbArrowsLeftRight className="link-item-menu-icon" />
                  <span>Transactions</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
               <div className="sidebar-contents__container">
                <Link to="/dashboard">
                  <GiBoomerangSun className="link-item-menu-icon" />
                  <span>Services</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container"> 
                <Link to="/dashboard">
                  <RiUserSettingsLine className="link-item-menu-icon" />
                  <span>Service Account</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard">
                  <RiFilePaper2Line className="link-item-menu-icon" />
                  <span>Settlements</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard">
                  <AiOutlineBarChart className="link-item-menu-icon" />
                  <span>Reports</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-text">
                <div className="sidebar-contents__container">
                Settings
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard">
                  <GoSettings className="link-item-menu-icon" />
                  <span>Preferences</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard">
                  <FaPercentage className="link-item-menu-icon" />
                  <span>Fees and Pricing</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard">
                  <RiTodoFill className="link-item-menu-icon" />
                  <span>Audit Logs</span>
                </Link>
                </div>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebard