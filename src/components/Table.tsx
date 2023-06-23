import { useContext } from "react";
import { UsersContext } from "../context";

import { AiOutlineSortAscending } from "react-icons/ai";
export const Table = () => {
  const { sortedUserList, activeRowColor, handleSortUser, handleDeleteUser } =
    useContext(UsersContext);

  return (
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
        {sortedUserList.map(({ id, image, name, lastName, country }, _idx) => (
          <tr
            className="table-row-items"
            key={`${id}_${name}_${_idx}`}
            style={{
              backgroundColor:
                activeRowColor && _idx % 2 === 0
                  ? "#112233"
                  : activeRowColor && _idx % 2 !== 0
                  ? "#556677"
                  : "",
            }}
          >
            <td>
              <img src={image} alt={name} />
            </td>
            <td>{name}</td>
            <td>{lastName}</td>
            <td>
              <span>{country}</span>
            </td>
            <td>
              <button onClick={() => handleDeleteUser(id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
