import { User } from "../types";

export const persistUserInfo = (userData: User | undefined) => {
  const userDetailsAsString = JSON.stringify(userData); // stringify the user data
  localStorage.setItem("userDetails", userDetailsAsString); // then persist user data to localStorage
};

export const readUserInfo = () => {
  const userDetailsString = localStorage.getItem("userDetails");
  if (userDetailsString) {
    return JSON.parse(userDetailsString);
  }
  return null;
};

export const searchUserById = (userId: string, users: User[]) =>
  users.find((userItem) => userItem.id === userId);
