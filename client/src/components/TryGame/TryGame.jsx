import React from "react";
import "./try_game_style.scss";
import Home_Btn from "../Home_Btn/HomeBtn";

const TryGame = () => {
  return (
    <div>
      <h3>TryGame Component</h3>

      <h4>Task Description</h4>

      <div className="display">
        <p>Lorem ipsum dolor sit amet.</p>
        <label htmlFor="">Enter your code:</label>
        <textarea name="code" id="codeBox" cols="30" rows="10"></textarea>
      </div>

      <button>Check</button>

      <Home_Btn />
    </div>
  );
};

export default TryGame;
