import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiBriefcaseFill, RiArrowDropDownLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { SidebarLink } from "../../types";

import { sidebarLinksList, sidebarLinksListMobile } from "./sidebarLinksList";
import SidebarLinkItem from "./SidebarLinkItem";
import SidebarTextItem from "./SidebarTextItem";

import loggedInUserImg from "../../images/loggedIn-user.png";

import "../../styles/abstract/_variables.scss";
import "./sidebar.scss";

interface Props {
  mobileMenuOpen: boolean;
}

const Sidebar: React.FC<Props> = ({ mobileMenuOpen }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${
        mobileMenuOpen === true && width < 992 ? "sidebar-mobile" : "sidebar"
      }`}
    >
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
        <div
          className={`dashboard-link-item dashboard-menu ${
            location.pathname === "/dashboard/home" && "active"
          }`}
        >
          <Link to="/dashboard/home">
            <div className="sidebar-contents__container">
              <IoHomeOutline className="link-item-menu-icon" />
              <span>Dashboard</span>
              <div></div>
            </div>
          </Link>
        </div>
        <ul className="nav-links">
          {sidebarLinksList.map((item: SidebarLink) =>
            item.isLink ? (
              <SidebarLinkItem
                to={item.to}
                icon={item.icon}
                linkText={item.linkText}
                isActiveLink={location.pathname === item.to}
              />
            ) : (
              <SidebarTextItem linkText={item.linkText} />
            )
          )}
          {width <= 992 && (
            <>
              {sidebarLinksListMobile.map((item: SidebarLink) =>
                item.isLink ? (
                  <SidebarLinkItem
                    to={item.to}
                    icon={item.icon}
                    linkText={item.linkText}
                    isActiveLink={location.pathname === item.to}
                  />
                ) : (
                  <SidebarTextItem linkText={item.linkText} />
                )
              )}
              <li className="dashboard-link-item">
                <div className="sidebar-contents__container">
                  <div className="loggedin-user__info">
                    <div className="logged-user-img">
                      <img src={loggedInUserImg} alt="logged in user display" />
                    </div>
                    <p className="logged-user-name">Adedeji</p>
                    <MdArrowDropDown className="navbar-dropdown__icon" />
                  </div>
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
