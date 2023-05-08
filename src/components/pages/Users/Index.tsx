import React, { useState, useEffect } from "react"
import axios from "axios"
import { HiOutlineUsers } from "react-icons/hi"
import { FaUsers, FaDatabase } from "react-icons/fa"
import { VscGitPullRequestNewChanges } from "react-icons/vsc"
import { IoMdFunnel } from "react-icons/io"
import Layout from '../../DashboardLayout/Layout'
import UserItem from "./UserItem"
import Loader from "../../Loader/Loader"

import { User } from "../../../types"

import "../../../styles/abstract/_variables.scss"
import "./users.scss"

const Index = () => {

  const [ userDataLoading, setUserDataLoading ] = useState<Boolean>(true)
  const [ users, setUsers ] = useState<User[]>([])
  const [ page, setPage ] = useState<number>(1)
  const [ userDisplayCount, setUserDisplayCount ] = useState<number>(20)

  const getUserData = async () => {
    try {
      const response = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      setUsers(response.data)
      setUserDataLoading(false)
    } catch (error) {
      setUserDataLoading(false)
      alert("Error Loading user data")
      console.log("error loading user data")
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return <>
    <Layout>
        <div className="users-page-contents">
            <div className="users-page-contents__container">
              <h3 className="users-page-contents__title">
                Users
              </h3>
              {
                userDataLoading === true ? <Loader /> : <>
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
                                <td style={{ visibility: 'hidden'}}><span className="table-head-text">status <IoMdFunnel className='table-head-icon' /></span></td>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                users.slice(page * userDisplayCount - userDisplayCount, page * userDisplayCount).map((user) => <UserItem key={user.id as string} user={user} />)
                              }
                            </tbody>
                          </table>
                          </div>
                        </div>
                        <div className="pagination-summary">
                          <div className="pagination-dropdown__btn">
                            <p>Showing</p>
                              <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setUserDisplayCount(parseInt(e.target.value))}>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                              </select>
                            <p>out of {users.length}</p>
                          </div>
                        </div>
                    </div>
                </>
              }
            </div>
        </div>
    </Layout>
  </>
}

export default Index
