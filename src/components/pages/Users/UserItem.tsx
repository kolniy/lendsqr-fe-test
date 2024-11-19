import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { HiDotsVertical } from "react-icons/hi";
import { User } from "../../../types";
import { FiEye, FiUserCheck, FiUserX } from "react-icons/fi";

import { searchUserById, persistUserInfo } from "../../../utilities/index";

interface Props {
  user: User;
  users: User[];
}

const UserItem: React.FC<Props> = ({ user, users }) => {
  const myDateString = `${user.createdAt}`;
  const myMoment = moment(myDateString);

  const [showItemMenu, setShowItemMenu] = useState<boolean>(false);
  const toggleShowItemMenu = () => setShowItemMenu(!showItemMenu);
  const navigate = useNavigate();

  const handleViewUserDetailHandler = () => {
    const foundUser = searchUserById(user.id, users);
    persistUserInfo(foundUser);
    navigate(`/dashboard/users/${user.id}`);
  };

  return (
    <tr>
      <td>{user.orgName}</td>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{moment(myMoment).format("MMM D, YYYY h:mm A")}</td>
      <td>
        <span className={`user-status status-${user.status}`}>
          {user.status}
        </span>
        {showItemMenu && (
          <div className="item-menu__container">
            <div onClick={handleViewUserDetailHandler}>
              <FiEye className="menu-icon" /> <p>View Details</p>
            </div>
            <div>
              <FiUserCheck className="menu-icon" /> <p>Blacklist User</p>
            </div>
            <div>
              <FiUserX className="menu-icon" /> <p>Activate User</p>
            </div>
          </div>
        )}
      </td>
      <td onClick={() => toggleShowItemMenu()}>
        <HiDotsVertical className="user-item-vertical-menu" />
      </td>
    </tr>
  );
};

export default UserItem;
