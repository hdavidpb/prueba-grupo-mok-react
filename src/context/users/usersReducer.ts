import { UsersState } from "../";
import { IUser } from "../../interfaces/users.interfaces";
import localStorageService from "../../services/localStorage.services";

export type UsersActionType =
  | {
      type: "[Users] - GET-USERS-DATA";
      payload: IUser[];
    }
  | {
      type: "[Users] - SELECT-USER";
      payload: IUser | undefined;
    }
  | {
      type: "[Users] - SORT-USERS";
      payload: IUser[];
    }
  | {
      type: "[Users] - FILTER-USERS-BY-COUNTRY";
      payload: IUser[];
    }
  | {
      type: "[Users] - PAGINATION-USER";
      payload: IUser[];
    }
  | {
      type: "[Users] - DELETE-USER";
      payload: {
        userList: IUser[];
        sortedList: IUser[];
      };
    }
  | {
      type: "[Users] - SET-USERS-CURRENT-PAGE";
      payload: number;
    }
  | {
      type: "[Users] - SET-USERS-TOTAL-PAGES";
      payload: number;
    }
  | {
      type: "[Users] - CHANGE-ACTIVE-ROW-COLORS";
    }
  | {
      type: "[Users] - RESTORE-STATE";
    }
  | {
      type: "[Users] - LOADING-USERS";
      payload: boolean;
    };

export const usersReducer = (
  state: UsersState,
  action: UsersActionType
): UsersState => {
  switch (action.type) {
    case "[Users] - LOADING-USERS":
      return { ...state, isLoadingList: action.payload };
    case "[Users] - GET-USERS-DATA":
      return {
        ...state,
        usersList: action.payload,
        sortedUserList: action.payload,
      };
    case "[Users] - SET-USERS-TOTAL-PAGES":
      return { ...state, totalPages: action.payload };
    case "[Users] - SET-USERS-CURRENT-PAGE":
      return { ...state, currentPage: action.payload };
    case "[Users] - PAGINATION-USER":
      return { ...state, sortedUserList: action.payload };
    case "[Users] - SELECT-USER":
      return { ...state, selectedUser: action.payload };
    case "[Users] - CHANGE-ACTIVE-ROW-COLORS":
      return { ...state, activeRowColor: !state.activeRowColor };
    case "[Users] - SORT-USERS":
      return {
        ...state,
        sortedUserList: action.payload,
      };
    case "[Users] - FILTER-USERS-BY-COUNTRY":
      return { ...state, sortedUserList: action.payload };
    case "[Users] - DELETE-USER":
      return {
        ...state,
        sortedUserList: action.payload.sortedList,
        usersList: action.payload.userList,
      };
    case "[Users] - RESTORE-STATE":
      return {
        ...state,
        activeRowColor: false,
        usersList: localStorageService.getUserListStorage(),
        sortedUserList: localStorageService.getUserListStorage(),
        currentPage: 1,
        totalPages: Math.ceil(
          localStorageService.getUserListStorage().length / 20
        ),
        itemsPerPage: 20,
      };
    default:
      return state;
  }
};
