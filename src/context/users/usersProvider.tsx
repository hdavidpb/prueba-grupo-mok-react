import { useReducer } from "react";

import { UsersContext, usersReducer } from "../";
import { IUser } from "../../interfaces/users.interfaces";

import { useUsersProvider } from "../../hooks";

export interface UsersState {
  isLoadingList: boolean;
  usersList: IUser[];
  sortedUserList: IUser[];
  activeRowColor: boolean;
  selectedUser?: IUser;
  itemsPerPage: number;
  currentPage: number;
  totalPages: number;
}

const USERS_INITIAL_STATE: UsersState = {
  isLoadingList: false,
  usersList: [],
  sortedUserList: [],
  activeRowColor: false,
  itemsPerPage: 20,
  currentPage: 0,
  totalPages: 0,
};

export const UsersProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [state, dispatch] = useReducer(usersReducer, USERS_INITIAL_STATE);
  const actions = useUsersProvider({ state, dispatch });

  return (
    <UsersContext.Provider
      value={{
        ...state,
        ...actions,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
