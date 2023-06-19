import "./home_style.scss";
import logoGold from "../../images/logoGold.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userIn = localStorage.getItem("user");
    console.log("userIn", userIn);

    if (userIn) {
      setLoggedIn(true);
    }

    console.log({ loggedIn });
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    console.log("i logged out");

    // eslint-disable-next-line no-restricted-globals
    location.reload(true);
  };

  return (
    <div className="homeContainer">
      <img
        src={logoGold}
        alt="Syntch Logo"
        style={{ color: "white", width: "250px" }}
      />
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
        <NavLink to="/try-game">
          <button className="opener">{loggedIn ? "Play Me" : "Try Me"}</button>
        </NavLink>
        <NavLink to="/register">
          <button className="opener">Register</button>
        </NavLink>

        {!loggedIn && (
            <NavLink to="/register">
              <button className="opener">Register</button>
            </NavLink>
          ) && (
            <NavLink to="/login">
              <button className="opener">Login</button>
            </NavLink>
          )}

        {loggedIn && <button onClick={logoutHandler}> Logout </button>}
      </div>
    </div>
  );
};

export default Home;
