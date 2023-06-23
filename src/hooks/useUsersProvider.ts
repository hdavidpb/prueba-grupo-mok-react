import { usersAdapter } from "../adapters";
import { UsersActionType, UsersState } from "../context";
import { ISortByType, IUser } from "../interfaces/users.interfaces";
import localStorageService from "../services/localStorage.services";
import usersService from "../services/users.services";

interface Props {
  dispatch: React.Dispatch<UsersActionType>;
  state: UsersState;
}

export const useUsersProvider = ({ state, dispatch }: Props) => {
  const getUserList = () => {
    usersService
      .getUsersList()
      .then((response) => {
        const usersList = usersAdapter(response.results);
        localStorageService.setUserListStorage(usersList);
        dispatch({ type: "[Users] - GET-USERS-DATA", payload: usersList });
      })
      .catch(() => dispatch({ type: "[Users] - GET-USERS-DATA", payload: [] }));
  };

  const handleActiveRowColor = () => {
    dispatch({ type: "[Users] - CHANGE-ACTIVE-ROW-COLORS" });
  };

  const handleSortUser = (sortBy: ISortByType) => {
    const usersToSort: IUser[] = [...state.sortedUserList];

    switch (sortBy) {
      case "country":
        usersToSort.sort((a, b) => {
          if (a.country < b.country) return -1;
          if (a.country > b.country) return 1;
          return 0;
        });
        dispatch({ type: "[Users] - SORT-USERS", payload: usersToSort });
        return;

      default:
        usersToSort.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        dispatch({ type: "[Users] - SORT-USERS", payload: usersToSort });
        return;
    }
  };

  const handleFilterUserByCountry = (country: string) => {
    const filteredUsers = state.usersList.filter((user) =>
      user.country.toLowerCase().includes(country.toLowerCase())
    );
    dispatch({
      type: "[Users] - FILTER-USERS-BY-COUNTRY",
      payload: filteredUsers,
    });
  };

  const handleDeleteUser = (userID: string) => {
    const newUsers = state.usersList.filter((user) => user.id !== userID);
    const newSortedUsers = state.sortedUserList.filter(
      (user) => user.id !== userID
    );
    dispatch({
      type: "[Users] - DELETE-USER",
      payload: { userList: newUsers, sortedList: newSortedUsers },
    });
  };

  const handleRestoreState = () => {
    dispatch({ type: "[Users] - RESTORE-STATE" });
  };

  return {
    getUserList,
    handleSortUser,
    handleDeleteUser,
    handleRestoreState,
    handleActiveRowColor,
    handleFilterUserByCountry,
  };
};
