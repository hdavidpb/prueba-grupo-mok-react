import { IUser } from "../interfaces/users.interfaces";

const setUserListStorage = (userList: IUser[]) => {
  localStorage.setItem("userList", JSON.stringify(userList));
};

const getUserListStorage = () => {
  return JSON.parse(localStorage.getItem("userList")!);
};

const localStorageService = {
  setUserListStorage,
  getUserListStorage,
};

export default localStorageService;
