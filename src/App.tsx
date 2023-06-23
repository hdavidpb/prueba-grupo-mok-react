import { useEffect, useContext } from "react";
import { Header, Main } from "./components";
import { UsersContext } from "./context";

import "./App.css";
function App() {
  const { getUserList } = useContext(UsersContext);

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">LISTA DE USUARIOS</h1>
      <Header />
      <Main />
    </div>
  );
}

export default App;
