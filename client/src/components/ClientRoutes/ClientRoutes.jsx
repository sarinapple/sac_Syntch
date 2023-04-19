import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import TryGame from '../TryGame/TryGame';
import Register from '../Register/Register';
import HowPlay from '../HowPlay/HowPlay';
// import logoGold from '../../images/logoGold.png';

const ClientRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/howPlay" element={<HowPlay />}></Route>
        <Route path="/TryGame" element={<TryGame />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="/test" element={'this is a test route'}></Route>
      </Routes>
    </div>
  );
};

export default ClientRoutes;
