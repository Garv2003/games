import { useState } from "react";
import { Grid, Header, GameOverAlert } from "./components";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const App = () => {
  const [playerTurn, setPlayerTurn] = useState<string>(
    Math.random() < 0.5 ? "x" : "o"
  );
  const [moves, setMoves] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [value, setValue] = useState<string[]>(Array(9).fill(""));
  const [winBox, setWinBox] = useState<number[]>([]);

  function checkWinner() {
    for (const [a, b, c] of winningCombinations) {
      if (value[a] && value[a] === value[b] && value[a] === value[c]) {
        setWinBox([a, b, c]);
        gameOver();
        return;
      }
    }
  }

  function play(y: number) {
    if (!isGameOver && value[y] === "") {
      value[y] = playerTurn;
      setPlayerTurn((prev) => (prev === "x" ? "o" : "x"));
      setMoves((prev) => prev + 1);
    }
    checkWinner();
    if (moves === 8 && !isGameOver) {
      gameOver();
    }
  }

  function playAgain() {
    resetGame();
    setIsGameOver(false);
  }

  function resetGame() {
    setValue(Array(9).fill(""));
    setPlayerTurn("x");
    setWinBox([]);
    setMoves(0);
  }

  function gameOver() {
    setIsGameOver(true);
  }

  return (
    <div id="container">
      <GameOverAlert
        isGameOver={isGameOver}
        moves={moves}
        winBox={winBox}
        playerTurn={playerTurn}
        playAgain={playAgain}
      />
      <Header playerTurn={playerTurn} resetGame={resetGame} />
      <Grid value={value} play={play} winBox={winBox} />
    </div>
  );
};

export default App;
