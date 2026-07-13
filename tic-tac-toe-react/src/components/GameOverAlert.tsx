import Button from "./Button";
import type { GameOverAlertProps } from "../types";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useMemo } from "react";

const GameOverAlert = ({
  isGameOver,
  moves,
  winBox,
  playerTurn,
  playAgain,
}: GameOverAlertProps) => {
  const { width, height } = useWindowSize();

  const gameOverAlertElement = useMemo(
    () => (
      <>
        {winBox.length > 0 && <Confetti width={width} height={height} />}
        <div className="blur"></div>
        <div className="alert">
          <b>GAME OVER</b>
          {moves === 9 && winBox.length === 0 ? (
            <b>DRAW</b>
          ) : (
            <b>PLAYER {playerTurn === "x" ? "O" : "X"} WON</b>
          )}
          <Button className="btn" onClick={playAgain} text="Play Again" />
        </div>
      </>
    ),
    [width, height, winBox, moves, playerTurn, playAgain]
  );

  return isGameOver ? gameOverAlertElement : null;
};

export default GameOverAlert;
