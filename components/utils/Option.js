import {useState, useRef, useEffect} from "react"
import { BsVolumeUpFill, BsVolumeMuteFill } from "react-icons/bs"

export default function Option(handleLoad, handlePlay, handleFinish) {
    const [soundMode, setSoundMode] = useState(false) //icon change
    const [audio, setAudio] = useState(null) //set default

    //Very-needed to work Audio property.
    useEffect(() => {
        setAudio(new Audio("./audio/nunobyte.mp3"))
    }, [])
    return (
        <div className="fixed left-0 right-0 bottom-0 p-4 text-white opacity-30">
            <div className="flex items-center justify-between lg:container lg:mx-auto">
                <button
                    id="sound-mode" className="sm:text-4xl lg:text-6xl"
                    onClick={() => setSoundMode(!soundMode) || audio.play()}
                >
                    {!soundMode ? <BsVolumeUpFill /> : <BsVolumeMuteFill />}
                </button>
                <div id="latest-version" className="text-2xl uppercase">
                    <span>Version: 0.5.0 (Beta)</span>
                </div>
            </div>
        </div>
    )
}