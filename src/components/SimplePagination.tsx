import { useContext } from "react";
import { UsersContext } from "../context";
import { usePagination } from "../hooks/usePagination";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export const SimplePagination = () => {
  const { currentPage, totalPages, itemsPerPage, usersList } =
    useContext(UsersContext);
  const { handleNextPage, handlePreviousPage } = usePagination();

  return (
    <div className="pagination-container">
      <span>{`Página ${currentPage} de ${totalPages} `}</span>
      <span>{`Usuarios por página: ${itemsPerPage} de ${usersList.length}`}</span>
      <div className="pagination-actions-container">
        <button
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
          style={{ marginRight: "10px" }}
        >
          <MdNavigateBefore size={20} />
          <p>Anterior</p>
        </button>
        <button disabled={currentPage === totalPages} onClick={handleNextPage}>
          <p>Siguiente</p>
          <MdNavigateNext size={20} />
        </button>
      </div>
    </div>
  );
};
