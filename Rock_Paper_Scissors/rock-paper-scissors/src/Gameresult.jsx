import "./Gameresult.css";
export default function Gameresult({ player, computer }) {
  const getWinner = () => {
    if (!player || !computer) return "";

    if (player === computer) return "Draw 🤝";

    if (
      (player === "ROCK" && computer === "SCISSORS") ||
      (player === "PAPER" && computer === "ROCK") ||
      (player === "SCISSORS" && computer === "PAPER")
    ) {
      return "Player Wins 🎉";
    }

    return "Computer Wins 🤖";
  };

  return (
    <div className="choice-container">
      <h1>
        <i>Game Result: {getWinner()}</i>
      </h1>
    </div>
  );
}
