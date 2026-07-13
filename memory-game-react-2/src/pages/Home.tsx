import { Button } from "@/components/ui/button";
import { useQueryState, parseAsBoolean, parseAsStringEnum } from 'nuqs'
import { useNavigate } from "react-router";

enum Difficulty {
    Easy = "Easy",
    Medium = "Medium",
    Hard = "Hard"
}

export default function Home() {

    const [start, setStart] = useQueryState('start', parseAsBoolean.withDefault(false))
    const [_, setDifficulty] = useQueryState('difficulty', parseAsStringEnum<Difficulty>(Object.values(Difficulty)))

    const navigate = useNavigate()

    const handleStart = () => {
        setStart(true)
    }

    const handleDifficulty = (diff: Difficulty) => {
        setDifficulty(diff)
        navigate('/game')
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            {start ? <div className="flex flex-col gap-6 justify-center items-center">
                <h2 className="text-3xl">Choose Difficulty</h2>
                <div className="flex gap-2">
                    <Button className="text-2xl py-6" onClick={() => handleDifficulty(Difficulty.Easy)} variant={"outline"}>Easy</Button>
                    <Button className="text-2xl py-6" onClick={() => handleDifficulty(Difficulty.Medium)} variant={"outline"}>Medium</Button>
                    <Button className="text-2xl py-6" onClick={() => handleDifficulty(Difficulty.Hard)} variant={"outline"}>Hard</Button>
                </div>
            </div> :
                <div className="flex flex-col gap-6 justify-center items-center">
                    <h1 className="text-4xl">Memory Game</h1>
                    <Button className="text-2xl p-6" onClick={handleStart} variant={"outline"}>Start Game</Button>
                </div>}
        </div>
    )
}

