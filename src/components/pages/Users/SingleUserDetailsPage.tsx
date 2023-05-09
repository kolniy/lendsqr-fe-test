import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom"
import { HiArrowLongLeft } from "react-icons/hi2"
import Layout from '../../DashboardLayout/Layout'
import Loader from '../../Loader/Loader'

import "../../../styles/abstract/_variables.scss"
import "./user-details.scss"

import { User } from '../../../types'

const SingleUserDetailsPage = () => {

    const [ userDataLoading, setUserDataLoading ] = useState<boolean>(false)
    const [ user, setUser ] = useState<User>()
    const { userId } = useParams<{ userId: string}>()
    const navigate = useNavigate()

    // function to get stored user in localstorage
    const queryCachedUser = () => {
        const userString = localStorage.getItem('user')
        const user = userString ? JSON.parse(userString) : null
        return user 
    }

    // function to determine if another query is would be necessary 
    // or user data should be rendered from localstorage
    const determineQueryMethod = () => {
        if(queryCachedUser() !== null){
            if(queryCachedUser().id === userId){
                // render user from cache 
                renderUserFromCache()
            } else {
                // query the new and uncached user data
                queryNewUser(userId)
            }
        } else {
            // query the new and uncached user data
            queryNewUser(userId)
        }
    }

    // query cached user data and update state
    const renderUserFromCache = () => {
        const user = queryCachedUser()
        setUser(user)
    }

    // query new and uncached user data, update state and persist to localStorage
    const queryNewUser = async (id: any) => {
        setUserDataLoading(true)
        try {
            const response = await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
            setUser(response.data)
            setUserDataLoading(false)
            localStorage.setItem('user', JSON.stringify(response.data))
          } catch (error) {
            setUserDataLoading(false)
            alert("Error Loading user data")
            console.log("error loading user data")
          }
    }

    const handleBackToUsersPageClick = () => navigate('/dashboard/users')

    useEffect(() => {
        determineQueryMethod()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])

  return <>
    <Layout>
        {
            userDataLoading === true ? <Loader /> : <>
            <div className="user-details-page-contents">
                <div className="user-details-page-contents__container">
                    <div onClick={handleBackToUsersPageClick} className="page-back__btn">
                        <HiArrowLongLeft className='back-btn-icon' /> <p>Back to Users</p>
                    </div>
                    <div className="user-details-page-header__info">
                        <h3 className="user-details-page-contents__title">
                            Users Details
                        </h3>
                        <div className="user-details-action-container">
                            <button className='btn-user-action btn-blacklist'>Blacklist User</button>
                            <button className='btn-user-action btn-activate'>Activate User</button>
                        </div>
                    </div>

                    <div className="user-info__page">
                        {user?.userName}
                    </div>
                </div>
            </div>
            </>
        }
    </Layout>
  </>
}

export default SingleUserDetailsPage
