import React from 'react'

interface Props {
    children: React.ReactNode
    tabNumber: number
    activeTab: number
 }

const TabPane: React.FC<Props> = ({ children, tabNumber, activeTab }) => {
  return <>
    <div className={`user-details-information-content 
    ${activeTab === tabNumber ? 'tab-shown' : 'tab-removed'}`}>
        { children }
    </div>
  </>
}

export default TabPane
