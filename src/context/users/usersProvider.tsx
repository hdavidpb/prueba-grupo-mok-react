import { useReducer } from "react";

import { UsersContext, usersReducer } from "../";
import { IUser } from "../../interfaces/users.interfaces";

import { useUsersProvider } from "../../hooks";

export interface UsersState {
  usersList: IUser[];
  sortedUserList: IUser[];
  activeRowColor: boolean;
}

const USERS_INITIAL_STATE: UsersState = {
  usersList: [],
  sortedUserList: [],
  activeRowColor: false,
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
