import Button from "./Button";
import { HeaderProps } from "../types";

const Header = ({ playerTurn, resetGame }: HeaderProps) => {
  return (
    <div className="header">
      <h1>XO Game</h1>
      <div className="sub_header">
        <h4>Player {playerTurn.toUpperCase()} Turn</h4>
        <Button
          text="Reset Game"
          onClick={() => resetGame()}
          className="reset btn"
        />
      </div>
    </div>
  );
};

export default Header;
