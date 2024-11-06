import { SidebarLink } from "../../types";
import { FiUsers, FiUserCheck, FiUserX, FiDatabase } from "react-icons/fi";
import { FaRegHandshake, FaPercentage } from "react-icons/fa";
import { GiBank, GiBoomerangSun } from "react-icons/gi";
import { MdOutlineGroups } from "react-icons/md";
import { TbArrowsLeftRight } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { GoSettings } from "react-icons/go";
import { AiOutlineBarChart } from "react-icons/ai";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  RiBriefcaseFill,
  RiUserSettingsLine,
  RiFilePaper2Line,
  RiTodoFill,
} from "react-icons/ri";

export const sidebarLinksList: SidebarLink[] = [
  {
    linkText: "Customers",
    isLink: false,
  },
  {
    linkText: "Users",
    icon: <FiUsers className="link-item-menu-icon" />,
    to: "/dashboard/users",
    isLink: true,
  },
  {
    linkText: "Guarantors",
    icon: <MdOutlineGroups className="link-item-menu-icon" />,
    to: "/dashboard/guarantors",
    isLink: true,
  },
  {
    linkText: "Decision Models",
    icon: <FaRegHandshake className="link-item-menu-icon" />,
    to: "/dashboard/model",
    isLink: true,
  },
  {
    linkText: "Whitelist",
    icon: <FiUserCheck className="link-item-menu-icon" />,
    to: "/dashboard/whitelist",
    isLink: true,
  },
  {
    linkText: "Karma",
    icon: <FiUserX className="link-item-menu-icon" />,
    to: "/dashboard/karma",
    isLink: true,
  },
  {
    linkText: "Business",
    isLink: false,
  },
  {
    linkText: "Organization",
    icon: <RiBriefcaseFill className="link-item-menu-icon" />,
    to: "/dashboard/organization",
    isLink: true,
  },
  {
    linkText: "Loan Products",
    icon: <GiReceiveMoney className="link-item-menu-icon" />,
    to: "/dashboard/product",
    isLink: true,
  },
  {
    linkText: "Savings Products",
    icon: <GiBank className="link-item-menu-icon" />,
    to: "/dashboard/saving/product",
    isLink: true,
  },
  {
    linkText: "Fees and Charges",
    icon: <FiDatabase className="link-item-menu-icon" />,
    to: "/dashboard/fees",
    isLink: true,
  },
  {
    linkText: "Transactions",
    icon: <TbArrowsLeftRight className="link-item-menu-icon" />,
    to: "/dashboard/transaction",
    isLink: true,
  },
  {
    linkText: "Services",
    icon: <GiBoomerangSun className="link-item-menu-icon" />,
    to: "/dashboard/service",
    isLink: true,
  },
  {
    linkText: "Service Account",
    icon: <RiUserSettingsLine className="link-item-menu-icon" />,
    to: "/dashboard/account",
    isLink: true,
  },
  {
    linkText: "Settlements",
    icon: <RiFilePaper2Line className="link-item-menu-icon" />,
    to: "/dashboard/settlement",
    isLink: true,
  },
  {
    linkText: "Reports",
    icon: <AiOutlineBarChart className="link-item-menu-icon" />,
    to: "/dashboard/reports",
    isLink: true,
  },
  {
    linkText: "Settings",
    isLink: false,
  },
  {
    linkText: "Preferences",
    icon: <GoSettings className="link-item-menu-icon" />,
    to: "/dashboard/preferences",
    isLink: true,
  },
  {
    linkText: "Fees and Pricing",
    icon: <FaPercentage className="link-item-menu-icon" />,
    to: "/dashboard/pricing",
    isLink: true,
  },
  {
    linkText: "Audit Logs",
    icon: <RiTodoFill className="link-item-menu-icon" />,
    to: "/dashboard/logs",
    isLink: true,
  },
];

export const sidebarLinksListMobile: SidebarLink[] = [
  {
    linkText: "User",
    isLink: false,
  },
  {
    linkText: "Docs",
    icon: <IoDocumentAttachOutline className="link-item-menu-icon" />,
    to: "/dashboard/docs",
    isLink: true,
  },
  {
    linkText: "Notifications",
    icon: <IoMdNotificationsOutline className="link-item-menu-icon" />,
    to: "/dashboard/notification",
    isLink: true,
  },
];
