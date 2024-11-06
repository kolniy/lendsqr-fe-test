import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../TopNavbar/Navbar";

import "./layout.scss";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="dashboard-layout">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <div className="dashboard-layout__page-contents">
        <Sidebar mobileMenuOpen={mobileMenuOpen} />
        <div className="dashboard-layout__main-contents">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
