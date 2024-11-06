import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string | undefined;
  icon: ReactElement | undefined;
  linkText: string;
  isActiveLink: boolean;
}

const SidebarLinkItem: React.FC<Props> = ({
  to,
  icon,
  linkText,
  isActiveLink,
}) => {
  return (
    <li className={`dashboard-link-item ${isActiveLink && "active"}`}>
      <Link to={to || "#"}>
        <div className="sidebar-contents__container">
          {icon}
          <span>{linkText}</span>
        </div>
      </Link>
    </li>
  );
};

export default SidebarLinkItem;
