import { useContext, useRef } from "react";
import { UsersContext } from "../context";
export const Header = () => {
  const {
    handleSortUser,
    handleRestoreState,
    handleActiveRowColor,
    handleFilterUserByCountry,
  } = useContext(UsersContext);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <header className="actions-container">
      <button onClick={handleActiveRowColor}>Colorear filas</button>
      <button onClick={() => handleSortUser("country")}>
        Ordenar por país
      </button>
      <button
        onClick={() => {
          inputRef.current!.value = "";
          handleRestoreState();
        }}
      >
        Restaurar estado inicial
      </button>
      <input
        ref={inputRef}
        type="text"
        placeholder="Filtar por país"
        className="input-field"
        onChange={(e) => handleFilterUserByCountry(e.target.value)}
      />
    </header>
  );
};
