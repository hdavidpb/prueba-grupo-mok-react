import { IUser, IUserResult } from "../interfaces/users.interfaces";

export const usersAdapter = (user: IUserResult[]): IUser[] => {
  return user.map((user) => ({
    id: user.id.value,
    name: user.name.first,
    lastName: user.name.last,
    country: user.location.country,
    image: user.picture.thumbnail,
  }));
};
