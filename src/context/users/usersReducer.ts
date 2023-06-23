import { UsersState } from "../";
import { IUser } from "../../interfaces/users.interfaces";
import localStorageService from "../../services/localStorage.services";

export type UsersActionType =
  | {
      type: "[Users] - GET-USERS-DATA";
      payload: IUser[];
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
      type: "[Users] - DELETE-USER";
      payload: {
        userList: IUser[];
        sortedList: IUser[];
      };
    }
  | {
      type: "[Users] - CHANGE-ACTIVE-ROW-COLORS";
    }
  | {
      type: "[Users] - RESTORE-STATE";
    };

export const usersReducer = (
  state: UsersState,
  action: UsersActionType
): UsersState => {
  switch (action.type) {
    case "[Users] - GET-USERS-DATA":
      return {
        ...state,
        usersList: action.payload,
        sortedUserList: action.payload,
      };
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
        sortedUserList: localStorageService.getUserListStorage(),
      };
    default:
      return state;
  }
};
