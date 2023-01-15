import { BsVolumeUpFill, BsVolumeMuteFill } from "react-icons/bs"

export default function Option() {
    return (
        <div className="fixed left-0 right-0 bottom-0 p-4 text-white opacity-30 -z-50">
            <div className="flex items-center justify-between lg:container lg:mx-auto">
                <button id="sound-mode" className="sm:text-4xl lg:text-6xl">
                    <BsVolumeUpFill />
                </button>
                <div id="latest-version" className="text-2xl uppercase">
                    <span>Version: 0.5.0 (Beta)</span>
                </div>
            </div>
        </div>
    )
}