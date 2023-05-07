import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { AiOutlineBarChart } from "react-icons/ai"
import { RiBriefcaseFill, RiArrowDropDownLine, RiUserSettingsLine, RiFilePaper2Line, RiTodoFill } from "react-icons/ri"
import { IoHomeOutline, IoDocumentAttachOutline } from "react-icons/io5"
import { FiUsers, FiUserCheck, FiUserX, FiDatabase } from "react-icons/fi"
import { FaRegHandshake, FaPercentage } from "react-icons/fa"
import { GiBank, GiBoomerangSun } from "react-icons/gi"
import { MdOutlineGroups, MdOutlineSavings } from "react-icons/md"
import { TbMoneybag, TbArrowsLeftRight } from "react-icons/tb"
import { GiReceiveMoney } from "react-icons/gi"
import { GoSettings } from "react-icons/go"
import { MdArrowDropDown } from "react-icons/md"
import { IoMdNotificationsOutline } from "react-icons/io"

import loggedInUserImg from "../../images/loggedIn-user.png"

import "../../styles/abstract/_variables.scss"
import "./sidebar.scss"

interface Props {
  mobileMenuOpen: Boolean
}

const Sidebard: React.FC<Props> = ({ mobileMenuOpen }) => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`${ mobileMenuOpen === true && width < 992 ? 
      "sidebar-mobile": "sidebar"
    }`}>
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
                 <Link to="/dashboard/index">
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
              <li className="dashboard-link-item active">
                <div className="sidebar-contents__container">
                  <Link to="/dashboard/users">
                    <FiUsers className="link-item-menu-icon" />
                    <span>Users</span>
                  </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                  <Link to="/dashboard/guarantors">
                    <MdOutlineGroups className="link-item-menu-icon" />
                    <span>Guarantors</span>
                  </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard/loan">
                  <TbMoneybag className="link-item-menu-icon" />
                  <span>Loans</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard/model">
                  <FaRegHandshake className="link-item-menu-icon" />
                  <span>Decision Models</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard/saving">
                  <MdOutlineSavings className="link-item-menu-icon" />
                  <span>Savings</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard/request">
                  <GiReceiveMoney className="link-item-menu-icon" />
                  <span>Loan Requests</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard/whitelist">
                  <FiUserCheck className="link-item-menu-icon" />
                  <span>Whitelist</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard/karma">
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
                <Link to="/dashboard/organization">
                  <RiBriefcaseFill className="link-item-menu-icon" />
                  <span>Organization</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard/product">
                  <GiReceiveMoney className="link-item-menu-icon" />
                  <span>Loan Products</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard/saving/product">
                  <GiBank className="link-item-menu-icon" />
                  <span>Savings Products</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard/fees">
                  <FiDatabase className="link-item-menu-icon" />
                  <span>Fees and Charges</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard/transaction">
                  <TbArrowsLeftRight className="link-item-menu-icon" />
                  <span>Transactions</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
               <div className="sidebar-contents__container">
                <Link to="/dashboard/service">
                  <GiBoomerangSun className="link-item-menu-icon" />
                  <span>Services</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container"> 
                <Link to="/dashboard/account">
                  <RiUserSettingsLine className="link-item-menu-icon" />
                  <span>Service Account</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard/settlement">
                  <RiFilePaper2Line className="link-item-menu-icon" />
                  <span>Settlements</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard/reports">
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
                <Link to="/dashboard/preferences">
                  <GoSettings className="link-item-menu-icon" />
                  <span>Preferences</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard/pricing">
                  <FaPercentage className="link-item-menu-icon" />
                  <span>Fees and Pricing</span>
                </Link>
                </div>
              </li>
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                <Link to="/dashboard/logs">
                  <RiTodoFill className="link-item-menu-icon" />
                  <span>Audit Logs</span>
                </Link>
                </div>
              </li>

             {
                width <= 992 && (<>
                <li className="dashboard-link-text">
                  <div className="sidebar-contents__container">
                  User
                  </div>
                </li>
                <li className="dashboard-link-item">
                  <div className="sidebar-contents__container">
                  <Link to="/dashboard/docs">
                    <IoDocumentAttachOutline className="link-item-menu-icon" />
                    <span>Docs</span>
                  </Link>
                  </div>
                </li>
                <li className="dashboard-link-item">
                  <div className="sidebar-contents__container">
                  <Link to="/dashboard/notification">
                    <IoMdNotificationsOutline className="link-item-menu-icon" />
                    <span>Notifications</span>
                  </Link>
                  </div>
                </li>
                <li className="dashboard-link-item">
                  <div className="sidebar-contents__container">
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
                </li></>)
             }

            </ul>
        </div>
    </div>
  )
}

export default Sidebard