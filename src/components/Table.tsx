import { useContext } from "react";
import { UsersContext } from "../context";

import { AiOutlineSortAscending } from "react-icons/ai";
import { TableListItem } from ".";
export const Table = () => {
  const { sortedUserList, handleSortUser } = useContext(UsersContext);

  return (
    <main className="table-main-container">
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th onClick={() => handleSortUser("name")}>
              <div className="row-action">
                <span>Nombre</span>
                <AiOutlineSortAscending size={20} />
              </div>
            </th>
            <th>Apellido</th>
            <th onClick={() => handleSortUser("country")}>
              <div className="row-action">
                <span>País</span>
                <AiOutlineSortAscending size={20} />
              </div>
            </th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sortedUserList.map((user, _idx) => (
            <TableListItem user={user} _idx={_idx} key={`${user.id}_${_idx}`} />
          ))}
        </tbody>
      </table>
    </main>
  );
};
