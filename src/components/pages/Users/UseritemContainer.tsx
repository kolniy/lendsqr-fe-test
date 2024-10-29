import React from 'react'
import UserItem from './UserItem';

import { User } from '../../../types';

interface Props {
    userDisplayCount: number;
    page: number;
    users: User[];
    userDataLoading: Boolean;
}

const UseritemContainer: React.FC<Props> = ({ userDisplayCount, page, users, userDataLoading }) => {

    function getRandomStatus(strings: string[]): string {
        const index = Math.floor(Math.random() * strings.length);
        return strings[index];
      }
    const status = ['inactive', 'pending', 'blacklisted', 'active'];

  return <tbody>
  {
        userDataLoading === false && users.length === 0 ? <tr><p className="error-text">Records not found</p></tr> : 
        <>
        {
            users.slice(page * userDisplayCount - userDisplayCount, page * userDisplayCount).map((user) => <UserItem key={user.id as string} user={{ ...user, status: getRandomStatus(status) }} />)
        }
        </>
    }
</tbody>
}

export default React.memo(UseritemContainer)
