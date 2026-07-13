type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "3em",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "sans-serif",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <div
          key={index}
          style={{
            width: "1em",
            height: "1em",
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HangmanWord;
