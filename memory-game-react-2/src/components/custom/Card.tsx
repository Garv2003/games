import { CardProps } from '@/types';

export function Card({ card, handleCardFlip }: CardProps) {
    return (
        <div
            key={card.id}
            className="w-24 h-24 [perspective:1000px]"
            onClick={() => handleCardFlip(card)}
        >
            <div
                className={`relative w-full h-full transition-transform cursor-pointer duration-500 [transform-style:preserve-3d] ${card.isFlipped || card.isMatched ? '[transform:rotateY(180deg)]' : ''
                    }`}
            >
                <div className="absolute w-full h-full flex items-center justify-center bg-zinc-800 rounded-lg shadow-md [backface-visibility:hidden]">
                    <span className="text-white text-7xl font-bold">?</span>
                </div>

                <div className="absolute w-full h-full flex items-center justify-center bg-zinc-800 rounded-lg shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <img
                        src={card.logo}
                        alt={`logo-${card.value}`}
                        className="w-full h-full object-contain p-2"
                    />
                </div>
            </div>
        </div>
    )
}