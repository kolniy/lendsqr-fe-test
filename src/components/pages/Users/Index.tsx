import Layout from '../../DashboardLayout/Layout'
import { HiOutlineUsers } from "react-icons/hi"
import { FaUsers, FaDatabase } from "react-icons/fa"
import { VscGitPullRequestNewChanges } from "react-icons/vsc"
import { IoMdFunnel } from "react-icons/io"

import "../../../styles/abstract/_variables.scss"
import "./users.scss"

const Index = () => {
  return <>
    <Layout>
        <div className="users-page-contents">
            <div className="users-page-contents__container">
              <h3 className="users-page-contents__title">
                Users
              </h3>
              <div className="users-page-contents__cards">
                  <div className="single-card">
                      <div className="single-card-icon__container users-icon">
                        <HiOutlineUsers className='single-card-icon-users' />
                      </div>
                      <p className="single-card-text">Users</p>
                      <h4 className="single-card__counter">2,453</h4>
                  </div>

                  <div className="single-card">
                      <div className="single-card-icon__container active-user-icon">
                        <FaUsers className='single-card-icon-active-user' />
                      </div>
                      <p className="single-card-text">Active Users</p>
                      <h4 className="single-card__counter">2,453</h4>
                  </div>

                  <div className="single-card">
                      <div className="single-card-icon__container user-loan-icon">
                        <VscGitPullRequestNewChanges className='single-card-icon-user-loan' />
                      </div>
                      <p className="single-card-text">Users with Loans</p>
                      <h4 className="single-card__counter">12,453</h4>
                  </div>

                  <div className="single-card">
                      <div className="single-card-icon__container user-savings-icon">
                        <FaDatabase className='single-card-icon-user-savings' />
                      </div>
                      <p className="single-card-text">Users with savings</p>
                      <h4 className="single-card__counter">2,453</h4>
                  </div>
              </div>  
              <div className="users-page-contents-display__table">
                  <div className="table-card">
                    <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <td><span className='table-head-text'>Organization <IoMdFunnel className='table-head-icon' /></span></td>
                          <td><span className='table-head-text'>Username <IoMdFunnel className='table-head-icon' /></span></td>
                          <td><span className='table-head-text'>Email <IoMdFunnel className='table-head-icon' /></span></td>
                          <td><span className='table-head-text'>Phone Number <IoMdFunnel className='table-head-icon' /></span></td>
                          <td><span className="table-head-text">Date Joined <IoMdFunnel className='table-head-icon' /></span></td>
                          <td><span className="table-head-text">status <IoMdFunnel className='table-head-icon' /></span></td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                        <td>Lendsqr</td>
                        <td>Adedeji</td>
                        <td>adedeji@lendsqr.com</td>
                        <td>08078903721</td>
                        <td>may 15, 2020 10:00 AM</td>
                        <td>
                          <span className='user-status status-inactive'>inactive</span>
                        </td>
                        </tr>
                        <tr>
                        <td>Irorun</td>
                        <td>Debby Ogana</td>
                        <td>debby2irorun.com.com</td>
                        <td>08160780928</td>
                        <td>Apr 30, 2020 10:00 AM</td>
                        <td><span className="user-status status-pending">Pending</span></td>
                        </tr>
                        <tr>
                        <td>Irorun</td>
                        <td>Debby Ogana</td>
                        <td>debby2irorun.com.com</td>
                        <td>08160780928</td>
                        <td>Apr 30, 2020 10:00 AM</td>
                        <td> <span className="user-status status-blacklisted">Pending</span></td>
                        </tr>
                        <tr>
                        <td>Irorun</td>
                        <td>Debby Ogana</td>
                        <td>debby2irorun.com.com</td>
                        <td>08160780928</td>
                        <td>Apr 30, 2020 10:00 AM</td>
                        <td> <span className="user-status status-inactive">Pending</span></td>
                        </tr>
                        <tr>
                        <td>Irorun</td>
                        <td>Debby Ogana</td>
                        <td>debby2irorun.com.com</td>
                        <td>08160780928</td>
                        <td>Apr 30, 2020 10:00 AM</td>
                        <td> <span className="user-status status-active">Pending</span></td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </Layout>
  </>
}

export default Index
