import { createContext } from "react";
import { UsersState } from "..";
import { ISortByType } from "../../interfaces/users.interfaces";

interface ContextProps extends UsersState {
  getUserList: () => void;
  handleActiveRowColor: () => void;
  handleSortUser: (sortBy: ISortByType) => void;
  handleRestoreState: () => void;
  handleFilterUserByCountry: (country: string) => void;
  handleDeleteUser: (userID: string) => void;
}

export const UsersContext = createContext({} as ContextProps);
