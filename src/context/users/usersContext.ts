import { createContext } from "react";
import { UsersState } from "..";
import { ISortByType, IUser } from "../../interfaces/users.interfaces";

interface ContextProps extends UsersState {
  getUserList: () => void;
  handleActiveRowColor: () => void;
  handleSortUser: (sortBy: ISortByType) => void;
  handleRestoreState: () => void;
  handleFilterUserByCountry: (country: string) => void;
  handleDeleteUser: (userID: string) => void;
  handleSelectedUser: (user?: IUser) => void;
  handleSetPaginatedUser: (users: IUser[]) => void;
  handleSetCurrentPage: (page: number) => void;
}

export const UsersContext = createContext({} as ContextProps);
