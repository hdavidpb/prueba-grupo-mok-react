import { useContext } from "react";
import { UsersContext } from "../context";
export const Header = () => {
  const {
    handleSortUser,
    handleRestoreState,
    handleActiveRowColor,
    handleFilterUserByCountry,
  } = useContext(UsersContext);

  return (
    <header className="actions-container">
      <button onClick={handleActiveRowColor}>Colorear filas</button>
      <button onClick={() => handleSortUser("country")}>
        Ordenar por país
      </button>
      <button onClick={handleRestoreState}>Restaurar estado inicial</button>
      <input
        type="text"
        placeholder="Filtar por país"
        className="input-field"
        onChange={(e) => handleFilterUserByCountry(e.target.value)}
      />
    </header>
  );
};
