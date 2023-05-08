import React from 'react'
import moment from "moment"
import { GoKebabVertical } from "react-icons/go"
import { User } from '../../../types'

interface Props {
    user: User
}

const UserItem: React.FC<Props> = ({ user }) => {

    const myDateString = `${user.createdAt}`
    const myMoment = moment(myDateString)

  return (
    <tr>
    <td>{user.orgName}</td>
    <td>{user.userName}</td>
    <td>{user.email}</td>
    <td>{user.phoneNumber}</td>
    <td>
        {
            moment(myMoment).format("MMMM Do YYYY, h:mm:ss a")
        }
    </td>
    <td>
      <span className={`user-status status-${user.status}`}>{user.status}</span>
    </td>
    <td>
      <GoKebabVertical className='user-item-vertical-menu' />
    </td>
    </tr>
  )
}

export default UserItem
