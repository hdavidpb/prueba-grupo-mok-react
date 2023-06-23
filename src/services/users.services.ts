import { UsersResponse } from "../interfaces/users.interfaces";

const API_URL = import.meta.env.VITE_API_URL;

const getUsersList = async (): Promise<UsersResponse> => {
  const response = await fetch(`${API_URL}/?page=1&results=100`);
  return response.json();
};

const usersService = {
  getUsersList,
};

export default usersService;
