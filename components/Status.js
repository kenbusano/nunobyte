import Link from "next/link"

export default function Status() {
    return (
        <Link href="https://github.com/kenbusano/nunobyte" target={"_blank"}>
            <section className="flex items-center justify-center uppercase text-center text-white sm:p-6 lg:p-0 lg:pb-24">
                <h2 className="font-primetime sm:text-2xl md:text-4xl lg:text-6xl lg:max-w-6xl">for more details kindly check our status</h2>
            </section>
        </Link>
    )
}