import { createSignal, createEffect } from 'solid-js';
import confetti from 'canvas-confetti'; 

function App() {
  const [titles, setTitles] = createSignal<string[]>(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = createSignal<string>("X");
  const [gameOver, setGameOver] = createSignal<boolean>(false);
  const [gameResult, setGameResult] = createSignal<string>("");

  const resetGame = () => {
    setTitles(["", "", "", "", "", "", "", "", ""]);
    setCurrentPlayer("X");
    setGameOver(false);
    setGameResult("");
  };

  const checkWin = () => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (titles()[a] && titles()[a] === titles()[b] && titles()[a] === titles()[c]) {
        setGameOver(true);
        setGameResult(`${titles()[a]} wins!`);

        confetti({
          particleCount: 500,
          spread: 800,
          origin: { x: 0.5, y: 0.5 }
        });

        return titles()[a];
      }
    }
    return "";
  };

  const checkDraw = () => {
    if (!gameOver() && titles().every(cell => cell !== "")) {
      setGameOver(true);
      setGameResult("It's a draw!");
    }
  };

  createEffect(() => {
    checkWin();
    checkDraw();
  });

  const handleCellClick = (index: number) => {
    if (gameOver() || titles()[index] !== "") return;

    const newTitles = [...titles()];
    newTitles[index] = currentPlayer();
    setTitles(newTitles);

    setCurrentPlayer(currentPlayer() === "X" ? "O" : "X");
  };

  return (
    <div class="w-full h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 class="text-4xl font-bold mb-4">Tic Tac Toe</h1>
      <div class="mb-4 text-2xl">
        {gameOver() ? (
          <div class="text-center">
            <p>{gameResult()}</p>
            <button
              class="mt-4 px-4 py-2 bg-blue-500 rounded text-white"
              onClick={resetGame}
            >
              Restart Game
            </button>
          </div>
        ) : (
          <p>Player {currentPlayer()}'s turn</p>
        )}
      </div>

      <div class="grid grid-cols-3 border-4 border-white rounded-md">
        {titles().map((title, index) => (
          <div
            class="border-8 border-white w-36 h-36 flex items-center justify-center text-9xl cursor-pointer font-bold"
            classList={{
              "text-blue-500": title === "X",
              "text-red-500": title === "O",
            }}
            onClick={() => handleCellClick(index)}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
