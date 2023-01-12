import Image from "next/image"
import Status from "./Status"

export default function Welcome() {
    return (
    <>
        <section className="relative lg:top-[-30rem] bg-art sm:mt-12 md:mt-20 lg:mt-0">
            <aside className="text-white lg:container lg:mx-auto flex flex-col lg:text-center sm:items-start lg:items-center sm:p-6 lg:p-12">
                <div id="glow-effect" className="relative">
                    <div className="absolute -inset-0 rounded-full blur-xl opacity-40 bg-gradient-to-r from-[#FF4E50] to-[#F9D423]" /> 
                    <button className="relative bg-gradient-to-r from-[#FF4E50] to-[#F9D423] p-2 px-32 rounded-full mb-4" />
                </div>
                <div id="welcome-user">
                    <h2 className="font-bold sm:text-4xl lg:text-6xl mb-4">Welcome to Nunobyte</h2>
                    <p className="text-xl mb-4">Nunobyte is just an quiz game here's the mechanics</p>
                </div>
                <main className="grid sm:grid-cols-1 lg:grid-cols-3 sm:gap-6 text-left">
                    <section id="mechanics" className="bg-gradient-to-r from-[#A445B2] via-[#D41872] to-[#FF0066] p-8 rounded-xl">
                        <div className="mb-4">
                            <div className="w-24 bg-white rounded-full p-1 mb-2" />
                            <div className="w-32 bg-white rounded-full p-1" />
                        </div>
                            <span className="text-4xl font-bold mb-4 block">01</span>
                        <h2 className="font-primetime uppercase text-4xl">Choose the right answer</h2>
                    </section>
                    <section id="mechanics" className="bg-gradient-to-r from-[#A445B2] via-[#D41872] to-[#FF0066] p-8 rounded-xl">
                        <div className="mb-4">
                            <div className="w-24 bg-white rounded-full p-1 mb-2" />
                            <div className="w-32 bg-white rounded-full p-1" />
                        </div>
                            <span className="text-4xl font-bold mb-4 block">02</span>
                        <h2 className="font-primetime uppercase text-4xl">Be explicit</h2>
                    </section>
                    <section id="mechanics" className="bg-gradient-to-r from-[#A445B2] via-[#D41872] to-[#FF0066] p-8 rounded-xl">
                        <div className="mb-4">
                            <div className="w-24 bg-white rounded-full p-1 mb-2" />
                            <div className="w-32 bg-white rounded-full p-1" />
                        </div>
                            <span className="text-4xl font-bold mb-4 block">03</span>
                        <h2 className="font-primetime uppercase text-4xl">And have a fun</h2>
                    </section>
                </main>
            </aside>
            <aside id="art-cover" className="sm:hidden lg:block relative lg:top-60 rotate-180">
                <Image 
                    src={"./extra-wave.svg"}
                    width={"0"}
                    height={"0"}
                    className="w-full"
                    alt="my ugly artwork"
                />
            </aside>
        </section>
        <Status />
    </>
    )
}