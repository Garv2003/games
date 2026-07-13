import { GridProps } from "../types";
import Box from "./Box";

const GridArray = [
  { id: 1, box: [0, 1, 2] },
  { id: 2, box: [3, 4, 5] },
  { id: 3, box: [6, 7, 8] },
];

const Grid = ({ value, play, winBox }: GridProps) => {
  return (
    <>
      {GridArray.map((row, index) => (
        <div className="block" key={row.id}>
          {row.box.map((box) => (
            <Box
              key={box}
              index={box}
              value={value}
              play={play}
              winBox={winBox}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Grid;
