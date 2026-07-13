export type CardType = {
    id: number
    value: number
    isFlipped: boolean
    isMatched: boolean
    logo: string
}

export enum Difficulty {
    Easy = "Easy",
    Medium = "Medium",
    Hard = "Hard"
}

export type CardProps = {
    card: CardType
    handleCardFlip: (card: CardType) => void
}