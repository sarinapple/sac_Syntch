import "./App.scss";
import { useState } from "react";
import ClientRoutes from "./components/ClientRoutes/ClientRoutes";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

// const currentUser = JSON.parse(localStorage.getItem());

function App() {
  // const [user, setUser] = useState(currentUser);
  const [user, setUser] = useState("");

  // useEffect(() => {
  //   localStorage.setItem('currentUser', JSON.stringify(user));
  // }, [user]);

  return (
    <div className="App">
      <h1>App Component</h1>
      <ClientRoutes />
      {/* <Landing /> */}
      {/* {user ? <Home /> : <Login setUser={setUser} />} */}
    </div>
  );
}

export default App;
