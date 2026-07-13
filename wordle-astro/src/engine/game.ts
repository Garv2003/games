// import words from "../words";

// export function checkWord(word: string) {
//   return words.includes(word.toLowerCase());
// }

// interface Game {
//   word: string;
//   guesses: string[];
//   completed: boolean;
// }

// const games: { [key: string]: Game } = {
//   "zbeol9tr2j5": {
//     word: "bifid",
//     guesses: [],
//     completed: false
//   },
//   "1ud8oiqq5n8": {
//     word: "swigs",
//     guesses: [],
//     completed: false
//   },
//   "w8cunjqir6st": {
//     word: "slubs",
//     guesses: ["SLUBS"],
//     completed: true
//   },
//   "92ockvit3xe": {
//     word: "oaker",
//     guesses: [],
//     completed: false
//   },
//   "1i6r7hl8lqqe": {
//     word: "basho",
//     guesses: [],
//     completed: false
//   },
//   "0lt6hd5vohh": {
//     word: "demob",
//     guesses: [],
//     completed: false
//   },
//   "kqtmkexiqw9p": {
//     word: "gemot",
//     guesses: [],
//     completed: false
//   },
//   "44iijmyk1m3r": {
//     word: "azuki",
//     guesses: [],
//     completed: false
//   },
//   "h22x9rcv0y89": {
//     word: "abuna",
//     guesses: [],
//     completed: false
//   },
//   "0meihikoh8z": {
//     word: "baits",
//     guesses: [],
//     completed: false
//   },
//   "81m3d92jj3dm": {
//     word: "gigas",
//     guesses: [],
//     completed: false
//   },
//   "6dj2uh0pe84": {
//     word: "banal",
//     guesses: [],
//     completed: false
//   },
//   "c07cv91zkxqg": {
//     word: "tratt",
//     guesses: [],
//     completed: false
//   },
//   "sayo1y52i": {
//     word: "toppy",
//     guesses: [],
//     completed: false
//   }
// };


// // function initGameFile() {
// //   if (!fs.existsSync("games.json")) {
// //     fs.writeFileSync("games.json", "{}");
// //   }
// // }

// export function getGame(gameId: string) {
//   // initGameFile();

//   // const games = JSON.parse(fs.readFileSync("games.json", "utf-8"));
//   return games[gameId];
// }

// export function newGame() {
//   // initGameFile();

//   // const games = JSON.parse(fs.readFileSync("games.json", "utf-8"));
//   const gameId =
//     Math.random().toString(36).substring(7) +
//     Math.random().toString(36).substring(7);

//   games[gameId] = {
//     word: words[Math.floor(Math.random() * words.length)],
//     guesses: [],
//     completed: false,
//   };
//   /* `fs.writeFileSync("games.json", JSON.stringify(games, null, 2));` is writing the contents of the
//   `games` object to a file named "games.json" in JSON format. */
//   // fs.writeFileSync("games.json", JSON.stringify(games, null, 2));
//   return gameId;
// }

// export function updateGame(gameId: string, guess: string) {
//   // initGameFile();

//   // const games = JSON.parse(fs.readFileSync("games.json", "utf-8"));

//   games[gameId].guesses.push(guess);
//   games[gameId].completed =
//     games[gameId].word.toLowerCase() === guess.toLowerCase() ||
//     games[gameId].guesses.length >= 6;

//   // fs.writeFileSync("games.json", JSON.stringify(games, null, 2));
//   return games[gameId];
// }


import words from "../words";

export function checkWord(word: string) {
  return words.includes(word.toLowerCase());
}

interface Game {
  word: string;
  guesses: string[];
  completed: boolean;
}

const games: { [key: string]: Game } = {
  "zbeol9tr2j5": {
    word: "bifid",
    guesses: [],
    completed: false
  },
  "1ud8oiqq5n8": {
    word: "swigs",
    guesses: [],
    completed: false
  },
  "w8cunjqir6st": {
    word: "slubs",
    guesses: ["SLUBS"],
    completed: true
  },
  "92ockvit3xe": {
    word: "oaker",
    guesses: [],
    completed: false
  },
  "1i6r7hl8lqqe": {
    word: "basho",
    guesses: [],
    completed: false
  },
  "0lt6hd5vohh": {
    word: "demob",
    guesses: [],
    completed: false
  },
  "kqtmkexiqw9p": {
    word: "gemot",
    guesses: [],
    completed: false
  },
  "44iijmyk1m3r": {
    word: "azuki",
    guesses: [],
    completed: false
  },
  "h22x9rcv0y89": {
    word: "abuna",
    guesses: [],
    completed: false
  },
  "0meihikoh8z": {
    word: "baits",
    guesses: [],
    completed: false
  },
  "81m3d92jj3dm": {
    word: "gigas",
    guesses: [],
    completed: false
  },
  "6dj2uh0pe84": {
    word: "banal",
    guesses: [],
    completed: false
  },
  "c07cv91zkxqg": {
    word: "tratt",
    guesses: [],
    completed: false
  },
  "sayo1y52i": {
    word: "toppy",
    guesses: [],
    completed: false
  }
};

export function getGame(gameId: string) {
  return games[gameId];
}

export function newGame() {
  const gameId =
    Math.random().toString(36).substring(7) +
    Math.random().toString(36).substring(7);

  games[gameId] = {
    word: words[Math.floor(Math.random() * words.length)],
    guesses: [],
    completed: false,
  };

  return gameId;
}

export function updateGame(gameId: string, guess: string) {
  if (!games[gameId]) {
    throw new Error("Game not found");
  }

  games[gameId].guesses.push(guess);
  games[gameId].completed =
    games[gameId].word.toLowerCase() === guess.toLowerCase() ||
    games[gameId].guesses.length >= 6;

  return games[gameId];
}