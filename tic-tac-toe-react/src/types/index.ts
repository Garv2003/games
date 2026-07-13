type ButtonProps = {
    text: string;
    onClick: () => void;
    className: string;
};

type GridProps = {
    value: string[];
    play: (y: number) => void;
    winBox: number[];
};

type GameOverAlertProps = {
    isGameOver: boolean;
    moves: number;
    winBox: number[];
    playerTurn: string;
    playAgain: () => void;
};

type HeaderProps = {
    playerTurn: string;
    resetGame: () => void;
}

type BoxProps = {
    index: number;
    value: string[];
    play: (index: number) => void;
    winBox: number[];
}

export type { ButtonProps, GridProps, GameOverAlertProps, HeaderProps, BoxProps };