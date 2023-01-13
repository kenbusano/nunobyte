import Image from "next/image"

export default function ErrorPage() {
    return (
        <div className="flex items-center justify-center h-screen"> 
            <div className="fixed text-center">
                <Image 
                    src={"/elesis.png"}
                    alt={""}
                    width={1920}
                    height={1080}
                    className="w-[20rem]"
                />
            </div>
            <div className="relative font-primetime sm:text-3xl lg:text-6xl uppercase text-white z-40">
                There's nothing here
            </div>
        </div>
    )
}