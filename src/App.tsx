import { useEffect, useContext } from "react";
import { Header, Loader, SimplePagination, Table } from "./components";
import { UsersContext } from "./context";

import "./App.css";

function App() {
  const { getUserList, isLoadingList } = useContext(UsersContext);

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">LISTA DE USUARIOS</h1>
      <Header />

      {isLoadingList ? (
        <Loader />
      ) : (
        <>
          <Table />
          <SimplePagination />
        </>
      )}
    </div>
  );
}

export default App;
