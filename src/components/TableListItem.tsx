import { useContext } from "react";
import { UsersContext } from "../context";
import { IUser } from "../interfaces/users.interfaces";

interface Props {
  user: IUser;
  _idx: number;
}

export const TableListItem = ({ user, _idx }: Props) => {
  const {
    activeRowColor,

    handleDeleteUser,
    handleSelectedUser,
  } = useContext(UsersContext);

  return (
    <tr
      className="table-row-items"
      style={{
        backgroundColor:
          activeRowColor && _idx % 2 === 0
            ? "#112233"
            : activeRowColor && _idx % 2 !== 0
            ? "#556677"
            : "",
      }}
      onClick={() => handleSelectedUser(user)}
    >
      <td>
        <img src={user.image} alt={user.name} />
      </td>
      <td>{user.name}</td>
      <td>{user.lastName}</td>
      <td>
        <span>{user.country}</span>
      </td>
      <td>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteUser(user.id);
          }}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
