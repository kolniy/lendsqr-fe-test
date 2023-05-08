import Layout from '../../DashboardLayout/Layout'

import "../../../styles/abstract/_variables.scss"
import "./dashboard.scss"

const Dashboard = () => {
  return <>
    <Layout> 
      <div className="dashboard-page__contents">
        <div style={{
          height: '100%',
          width: '100%',
          display:'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}><p>dashboard Page is currently under construction</p></div>
      </div>
    </Layout>
  </>
  
}

export default Dashboard