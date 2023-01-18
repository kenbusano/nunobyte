import { useState, useRef } from "react"
import { BsVolumeUpFill, BsVolumeMuteFill } from "react-icons/bs"

export default function Option(handleLoad, handlePlay, handleFinish) {
    const audioplayer = useRef()
    const [play, setPlay] = useState(false)
    return (
        <div className="fixed left-0 right-0 bottom-0 p-4 text-white opacity-30">
            <div className="flex items-center justify-between lg:container lg:mx-auto">
                <button 
                    id="sound-mode" className="sm:text-4xl lg:text-6xl"
                    onClick={() => setPlay(!play) || start}
                >
                    {!play ? <BsVolumeUpFill /> : <BsVolumeMuteFill />}
                </button>
                <audio ref={audioplayer}>
                    <source src={"./audio/nunobye.mp3"} autoplay/>
                </audio>
                <div id="latest-version" className="text-2xl uppercase">
                    <span>Version: 0.5.0 (Beta)</span>
                </div>
            </div>
        </div>
    )
}