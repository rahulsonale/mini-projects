import { useState } from "react";
import "./Game.css";
import Gameresult from "./Gameresult";

export default function Game() {
  const [playerchoice, setPlayerchoice] = useState("");
  const [computerchoice, setComputerchoice] = useState("");
  const game = ["ROCK", "PAPER", "SCISSORS"];

  const playcomputer = () => {
    const randomindex = Math.floor(Math.random() * game.length);
    return game[randomindex];
  };

  const handlechooseoption = (choice) => {
    setPlayerchoice(choice);
    setComputerchoice(playcomputer());
  };

  return (
    <>
      <div className="image_container">
        <img
          src="/rock_image.jpg"
          alt="rock"
          onClick={() => handlechooseoption("ROCK")}
        />
        <img
          src="/paper.jpg"
          alt="paper"
          onClick={() => handlechooseoption("PAPER")}
        />
        <img
          src="/scissor.jpg"
          alt="scissor"
          onClick={() => handlechooseoption("SCISSORS")}
        />
      </div>
      <div className="player_computer">
        <div style={{ marginRight: "600px" }}>Player:{playerchoice}</div>
        <div>Computer: {computerchoice}</div>
      </div>

      <Gameresult player={playerchoice} computer={computerchoice} />
    </>
  );
}
