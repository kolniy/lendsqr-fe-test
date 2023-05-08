import React, { useState, useEffect } from "react"
import axios from "axios"
import { HiOutlineUsers } from "react-icons/hi"
import { FaUsers, FaDatabase } from "react-icons/fa"
import { VscGitPullRequestNewChanges } from "react-icons/vsc"
import { IoMdFunnel } from "react-icons/io"
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5"
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
  const [ userDisplayCount, setUserDisplayCount ] = useState<number>(5)

  function getRandomStatus(strings: string[]): string {
    const index = Math.floor(Math.random() * strings.length);
    return strings[index];
}
const status = ['inactive', 'pending', 'blacklisted', 'active'];

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

  const selectPageHandle = (selectedPage: number) => {
    if(selectedPage >= 1 && selectedPage <= users.length / userDisplayCount && selectedPage !== page){
      setPage(selectedPage)
    }
  }

  const generatePageListing = () => {
    const totalPages = Math.ceil(users.length / userDisplayCount)
    const pageNumbers = []
    for (var i = 1; i <= totalPages; i++){
      pageNumbers.push(i)
    }
  
    const summary = 1
    const middlePage = page
    const startPage = Math.max(1, middlePage - summary)
    const endPage = Math.min(totalPages, middlePage + summary)

    const renderPageNumbers = [];
    if (startPage > 1) {
      renderPageNumbers.push(
          <div  key={1} className="pagination-count__item" onClick={() => selectPageHandle(1)}>
            1
          </div>
      );
      if (startPage > 2) {
        renderPageNumbers.push(<div className="pagination-count__item" key={"start-ellipsis"}>...</div>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      const isActive = page === i;
      renderPageNumbers.push(
        <div key={i} className={`pagination-count__item ${isActive && 'pagination-active__count'}`} onClick={() => selectPageHandle(i)}>
            {i}
        </div>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        renderPageNumbers.push(<div className="pagination-ellipsis" key={"end-ellipsis"}>...</div>);
      }
      renderPageNumbers.push(
        <div className="pagination-count__item" key={totalPages} onClick={() => selectPageHandle(totalPages)}>
            {totalPages}
        </div>
      );
    }
    return renderPageNumbers
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
                            <table cellPadding={"20"}>
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
                                users.slice(page * userDisplayCount - userDisplayCount, page * userDisplayCount).map((user) => <UserItem key={user.id as string} user={{ ...user, status: getRandomStatus(status) }} />)
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
                          <div className="pagination-actions">
                            <div onClick={() => selectPageHandle(page - 1)} className="btn-handler"><IoChevronBackSharp className="page-icon-control" /></div>
                            {
                              generatePageListing()
                            }
                            <div onClick={() => selectPageHandle(page + 1)} className="btn-handler"><IoChevronForwardSharp className="page-icon-control" /></div>
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
