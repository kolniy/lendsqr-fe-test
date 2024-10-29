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
            <div className="dashboard-link-item dashboard-menu">
              <Link to="/dashboard/home">
              <div className="sidebar-contents__container">
                  <IoHomeOutline className="link-item-menu-icon" />
                    <span>Dashboard</span>
                   <div>
                </div>
              </div>
              </Link>
            </div>
            <ul className="nav-links">
              <li className="dashboard-link-text">
                <div className="sidebar-contents__container">
                  Customers
                </div>
              </li>
              <li className="dashboard-link-item active">
                <Link to="/dashboard/users">
                <div className="sidebar-contents__container">
                    <FiUsers className="link-item-menu-icon" />
                    <span>Users</span>
                </div>
                </Link>
              </li>
              <li className="dashboard-link-item">
                  <Link to="/dashboard/guarantors">
                    <div className="sidebar-contents__container">
                        <MdOutlineGroups className="link-item-menu-icon" />
                        <span>Guarantors</span>
                    </div>
                  </Link>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/loan">
                  <div className="sidebar-contents__container">
                    <TbMoneybag className="link-item-menu-icon" />
                    <span>Loans</span>
                  </div>
                </Link>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/model">
                <div className="sidebar-contents__container">
                  <FaRegHandshake className="link-item-menu-icon" />
                  <span>Decision Models</span>
                </div>
                </Link>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/saving">
                <div className="sidebar-contents__container">
                  <MdOutlineSavings className="link-item-menu-icon" />
                  <span>Savings</span>
                </div>
                </Link>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/request">
                <div className="sidebar-contents__container">
                  <GiReceiveMoney className="link-item-menu-icon" />
                  <span>Loan Requests</span>
                </div>
                </Link>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/whitelist">
                <div className="sidebar-contents__container">
                  <FiUserCheck className="link-item-menu-icon" />
                  <span>Whitelist</span>
                </div>
                </Link>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/karma">
                <div className="sidebar-contents__container">
                  <FiUserX className="link-item-menu-icon" />
                  <span>Karma</span>
                </div>
                </Link>
              </li>
              <li className="dashboard-link-text">
                <div className="sidebar-contents__container">
                Business
                </div>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/organization">
                <div className="sidebar-contents__container">
                  <RiBriefcaseFill className="link-item-menu-icon" />
                  <span>Organization</span>
                </div>
                </Link>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/product">
                <div className="sidebar-contents__container">
                  <GiReceiveMoney className="link-item-menu-icon" />
                  <span>Loan Products</span>
                </div>
                </Link>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/saving/product">
                <div className="sidebar-contents__container">
                  <GiBank className="link-item-menu-icon" />
                  <span>Savings Products</span>
                </div>
                </Link>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/fees">
                <div className="sidebar-contents__container">
                  <FiDatabase className="link-item-menu-icon" />
                  <span>Fees and Charges</span>
                </div>
                </Link>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/transaction">
                <div className="sidebar-contents__container">
                  <TbArrowsLeftRight className="link-item-menu-icon" />
                  <span>Transactions</span>
                </div>
                </Link>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/service">
               <div className="sidebar-contents__container">
                  <GiBoomerangSun className="link-item-menu-icon" />
                  <span>Services</span>
                </div>
                </Link>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/account">
                <div className="sidebar-contents__container"> 
                  <RiUserSettingsLine className="link-item-menu-icon" />
                  <span>Service Account</span>
                </div>
                </Link>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/settlement">
                <div className="sidebar-contents__container">
                  <RiFilePaper2Line className="link-item-menu-icon" />
                  <span>Settlements</span>
                </div>
                </Link>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/reports">
                <div className="sidebar-contents__container">
                  <AiOutlineBarChart className="link-item-menu-icon" />
                  <span>Reports</span>
                </div>
                </Link>
              </li>
              <li className="dashboard-link-text">
                <div className="sidebar-contents__container">
                Settings
                </div>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/preferences">
                <div className="sidebar-contents__container">
                  <GoSettings className="link-item-menu-icon" />
                  <span>Preferences</span>
                </div>
                </Link>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/pricing">
                <div className="sidebar-contents__container">
                  <FaPercentage className="link-item-menu-icon" />
                  <span>Fees and Pricing</span>
                </div>
                </Link>
              </li>
              <li className="dashboard-link-item">
                <Link to="/dashboard/logs">
                <div className="sidebar-contents__container">
                  <RiTodoFill className="link-item-menu-icon" />
                  <span>Audit Logs</span>
                </div>
                </Link>
              </li>

             {
                width <= 992 && (<>
                <li className="dashboard-link-text">
                  <div className="sidebar-contents__container">
                  User
                  </div>
                </li>
                <li className="dashboard-link-item">
                  <Link to="/dashboard/docs">
                  <div className="sidebar-contents__container">
                    <IoDocumentAttachOutline className="link-item-menu-icon" />
                    <span>Docs</span>
                  </div>
                  </Link>
                </li>
                <li className="dashboard-link-item">
                  <Link to="/dashboard/notification">
                  <div className="sidebar-contents__container">
                    <IoMdNotificationsOutline className="link-item-menu-icon" />
                    <span>Notifications</span>
                  </div>
                  </Link>
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