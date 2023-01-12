import Image from "next/image"

export default function Navbar() {
    return (
        <header className="fixed top-0 right-0 left-0 sm:bg-red-700 lg:bg-transparent z-30">
            <aside className="flex justify-between items-center lg:container lg:mx-auto sm:p-2 md:p-4">
                <div id="logo">
                    <Image 
                        src={"./nunobyte.svg"} 
                        width="0" 
                        height="0"
                        className="sm:w-32 lg:w-48"
                        alt="Logo of Nuno" 
                    />
                </div>
                <div id="game-routes">
                    <button className="bg-aroma sm:p-2 md:p-4 lg:p-4 lg:px-8 lg:text-xl text-white sm:rounded-lg lg:rounded-xl">
                        Play Game
                    </button>
                </div>
            </aside>
        </header>
    )
}