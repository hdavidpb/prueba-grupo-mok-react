import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../context";
import { IUser } from "../interfaces/users.interfaces";

export const usePagination = () => {
  const {
    usersList,
    totalPages,
    currentPage,
    itemsPerPage,
    handleSetPaginatedUser,
    handleSetCurrentPage,
  } = useContext(UsersContext);

  const [displayedData, setDisplayedData] = useState<IUser[]>([]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handleSetCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handleSetCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setDisplayedData((_) => {
      const displayedData = usersList.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
      return displayedData;
    });
  }, [currentPage]);

  useEffect(() => {
    handleSetPaginatedUser(displayedData);
  }, [displayedData]);

  return { handlePreviousPage, handleNextPage };
};
