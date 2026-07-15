import { useQueryState, parseAsStringEnum } from 'nuqs';
import { logos, SINGLE_CARD_TIMEOUT } from '@/constants';
import { useEffect, useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Card } from '@/components/custom/Card';
import { Difficulty, CardType } from '@/types';


export default function Game() {
    const [difficulty] = useQueryState('difficulty', parseAsStringEnum<Difficulty>(Object.values(Difficulty)));
    const [cards, setCards] = useState<CardType[]>([]);
    const [flippedCards, setFlippedCards] = useState<CardType[]>([]);
    const [matchedCards, setMatchedCards] = useState<CardType[]>([]);
    const [time, setTime] = useState(0);
    const [isGameStarted, setIsGameStarted] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const singleCardTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const gridSize = difficulty === Difficulty.Easy ? 12
            : difficulty === Difficulty.Medium ? 16
                : 20;

        const newCards = Array(gridSize).fill(null).map((_, i) => ({
            id: i,
            value: Math.floor(i / 2),
            isFlipped: false,
            isMatched: false,
            logo: logos[Math.floor(i / 2) % logos.length]
        }));

        setCards(shuffleArray(newCards));
        setTime(0);
        setIsGameStarted(false);
        setMatchedCards([]);
        setFlippedCards([]);

        if (intervalRef.current) clearInterval(intervalRef.current);
        if (singleCardTimeoutRef.current) clearTimeout(singleCardTimeoutRef.current);
    }, [difficulty]);

    useEffect(() => {
        if (isGameStarted && !intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (singleCardTimeoutRef.current) clearTimeout(singleCardTimeoutRef.current);
        };
    }, [isGameStarted]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const shuffleArray = (array: CardType[]) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const handleCardFlip = (card: CardType) => {
        if (flippedCards.length === 2 || card.isFlipped || card.isMatched) return;

        if (singleCardTimeoutRef.current) {
            clearTimeout(singleCardTimeoutRef.current);
            singleCardTimeoutRef.current = null;
        }

        if (!isGameStarted) {
            setIsGameStarted(true);
        }

        const updatedCards = cards.map((c) =>
            c.id === card.id ? { ...c, isFlipped: true } : c
        );
        setCards(updatedCards);
        setFlippedCards([...flippedCards, card]);

        if (flippedCards.length === 0) {
            singleCardTimeoutRef.current = setTimeout(() => {
                setCards(prevCards =>
                    prevCards.map(c =>
                        c.id === card.id ? { ...c, isFlipped: false } : c
                    )
                );
                setFlippedCards([]);
            }, SINGLE_CARD_TIMEOUT);
        }
    };

    useEffect(() => {
        if (flippedCards.length === 2) {
            if (singleCardTimeoutRef.current) {
                clearTimeout(singleCardTimeoutRef.current);
                singleCardTimeoutRef.current = null;
            }

            const [firstCard, secondCard] = flippedCards;

            if (firstCard.value === secondCard.value) {
                setMatchedCards((prev) => [...prev, firstCard, secondCard]);
                setCards((prevCards) =>
                    prevCards.map((c) =>
                        c.id === firstCard.id || c.id === secondCard.id
                            ? { ...c, isMatched: true }
                            : c
                    )
                );
            } else {
                setTimeout(() => {
                    setCards((prevCards) =>
                        prevCards.map((c) =>
                            c.id === firstCard.id || c.id === secondCard.id
                                ? { ...c, isFlipped: false }
                                : c
                        )
                    );
                }, 1000);
            }

            setFlippedCards([]);
        }
    }, [flippedCards]);

    useEffect(() => {
        if (matchedCards.length === cards.length && cards.length > 0) {
            confetti({
                particleCount: 500,
                spread: 800,
                origin: { x: 0.5, y: 0.5 }
            });
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    }, [matchedCards, cards]);

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="mb-8 text-4xl font-bold text-white">
                {formatTime(time)}
            </div>
            <div className="grid grid-cols-4 gap-4">
                {cards.map((card) => (
                    <Card card={card} handleCardFlip={handleCardFlip} />
                ))}
            </div>
        </div>
    );
}