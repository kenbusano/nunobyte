import { useState } from "react"
import { questions } from "../../pages/api/questions"
import Image from "next/image"

export default function Game() {
    const [current, setCurrent] = useState(0)
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0)

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }
        const nextQuestion = current + 1;
		if (nextQuestion < questions.length) {
			setCurrent(nextQuestion);
		} else {
            setShowScore(true)
        }
    }
    
    return (
    <>
        <header className="relative z-30">
            <aside className="flex justify-between items-center lg:container lg:mx-auto sm:p-2 md:p-4">
                <div id="logo">
                    <Image 
                        src={"./nunobyte.svg"} 
                        width="0" 
                        height="0"
                        className="sm:w-32 lg:w-48"
                        alt="Nuno logo" 
                    />
                </div>
                <div id="game-routes">
                    <span className="lg:text-xl text-white uppercase">
                        {`Score: ${score}/${questions.length}`}
                    </span>
                </div>   
            </aside>
        </header>
        <section className="fixed top-0 left-0 right-0 sm:p-4 md:p-0">
            <aside className="flex items-center justify-center h-screen text-center">
                <main className="bg-white p-6 rounded-lg">
                    {showScore ? (
                        <div>
                            ty for playing
                        </div>
                    ): (
                        <>
                            <div className="flex items-center justify-between sm:mb-2 lg:mb-6">
                                <header id="question-number" className="">
                                    <h2 className="lg:text-3xl font-bold">Question {current + 1}</h2>
                                </header>
                                <div id="toggle-switch">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                                    </label>
                                </div>
                            </div>
                            <div id="question" className="">
                                <span className="lg:w-[30rem] sm:w-[240px] md:w-full sm:mx-auto break-words block lg:mx-auto lg:text-2xl sm:mb-2 lg:mb-4">{questions[current].questionText}</span>
                            </div>
                            <div id="multiple-choice" className="grid grid-cols-1 sm:gap-2 lg:gap-4 text-white">
                                {questions[current].answerOptions.map((ansOption) => (
                                    <button className="inline-block sm:p-2 lg:p-3 bg-[#A725BC] text-white leading-tight uppercase rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => handleAnswer(ansOption.isCorrect)}>{ansOption.answerText}</button>
                                ))}
                            </div>
                        </>
                    )}
                </main>
            </aside>
        </section>
    </>
    )
}