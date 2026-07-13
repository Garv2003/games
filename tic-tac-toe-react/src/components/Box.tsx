import { BoxProps } from "../types";

const Box = ({ index, value, play, winBox }: BoxProps) => (
  <div
    id={`box${index + 1}`}
    className={`box ${
      index === 0 || index === 3 || index === 6 ? "left" : ""
    } ${index === 2 || index === 5 || index === 8 ? "right" : ""} ${
      index === 0 || index === 1 || index === 2 ? "top" : ""
    } ${index === 6 || index === 7 || index === 8 ? "bottom" : ""}`}
  >
    <button
      onClick={() => play(index)}
      className={winBox.includes(index) ? "activeBox" : ""}
    >
      {value[index]}
    </button>
  </div>
);

export default Box;
