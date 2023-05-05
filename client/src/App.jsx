import "./App.scss";
import { useState, useEffect } from "react";
import ClientRoutes from "./components/ClientRoutes/ClientRoutes";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

// const currentUser = JSON.parse(localStorage.getItem());

function App() {
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    } else {
      setUser(null);
    }
    // localStorage.setItem("currentUser", JSON.stringify(user));
  }, []);

  return (
    <div className="App">
      <h1>App Component</h1>
      <ClientRoutes setUser={setUser} user={user} />
      {/* <Landing /> */}
      {/* {user ? <Home use={user} /> : <Login setUser={setUser} />} */}
    </div>
  );
}

export default App;
