import React from 'react';
import './home_style.scss';
import logoGold from '../../images/logoGold.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homeContainer">
      <img src={logoGold} alt="Syntch Logo" style={{ color: 'white', width: '250px' }} />
      <h5>Syntch Home Component</h5>
      {/* <img
        className="smurf"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-qFoXwFn4QRwCZ6f1Ipwvxr0lHFGIf8Ktif749cPAuTmRflFeeghduNffNarStFXGCaE&usqp=CAU"
        alt=""
      /> */}

      <div className="openerContainer">
        {/* onClick={} */}
        <NavLink to="/HowPlay">
          <button className="opener">How To Play</button>
        </NavLink>
        {/* <NavLink to="/TryGame">
          <button className="opener">Try</button>
        </NavLink> */}
        <NavLink to="/TryGame">
          <button className="opener">Try Me!</button>
        </NavLink>
        <NavLink to="/Register">
          <button className="opener">Register</button>
        </NavLink>

        <NavLink to="/Login">
          <button className="opener">Login</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
