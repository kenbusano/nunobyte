import Image from "next/image"

export default function Appbar() {
    return (
        <header className="relative z-30">
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
                <span className="lg:text-xl text-white uppercase">
                    {`Score: 0/20`}
                </span>
            </div>
        </aside>
    </header>
    )
}