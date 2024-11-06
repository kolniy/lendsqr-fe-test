import React from "react";

interface Props {
  linkText: string;
}

const SidebarTextItem: React.FC<Props> = ({ linkText }) => {
  return (
    <li className="dashboard-link-text">
      <div className="sidebar-contents__container">{linkText}</div>
    </li>
  );
};

export default SidebarTextItem;
