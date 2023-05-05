import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import TryGame from "../TryGame/TryGame";
import Register from "../Register/Register";
import HowPlay from "../HowPlay/HowPlay";
// import logoGold from '../../images/logoGold.png';
import { createContext } from "react";
import { LoginProvider } from '../../LoginProvider'

// const LoginContext = createContext();

const ClientRoutes = (props) => {
  // const [loggedIn, setLoggedIn] = useState(true);
  return (
    <LoginProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home user={props.user} />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/login"
            setUser={(d) => console.log(d)}
            element={<Login setUser={props.setUser} user={props.user} />}
          ></Route>
          <Route path="/howPlay" element={<HowPlay />}></Route>
          <Route path="/TryGame" element={<TryGame />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/test" element={"this is a test route"}></Route>
        </Routes>
      </div>
    </LoginProvider>
  );
};

export default ClientRoutes;
