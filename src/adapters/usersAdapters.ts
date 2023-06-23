import { IUser, IUserResult } from "../interfaces/users.interfaces";

export const usersAdapter = (user: IUserResult[]): IUser[] => {
  return user.map((user) => ({
    id: user.login.uuid,
    image: user.picture.thumbnail,
    title: user.name.title,
    name: user.name.first,
    lastName: user.name.last,
    country: user.location.country,
    city: user.location.city,
    phone: user.phone,
    email: user.email,
  }));
};
