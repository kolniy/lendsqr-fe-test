import React from "react"
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../TopNavbar/Navbar'

import "./layout.scss"

interface Props {
   children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='dashboard-layout'>
        <Navbar />
        <div className="dashboard-layout__page-contents">
            <Sidebar />
            {
                children
            }
        </div>
    </div>
  )
}

export default Layout
