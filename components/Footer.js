import { FaDev, FaGithub } from 'react-icons/fa'
import Link from "next/link"
export default function Footer() {
    return (
        <footer className="text-white bg-art sm:p-6 lg:p-12 text-center">
            <div>
                <span className='mb-2 block'>Create by Kenneth Obsequio and this project is <b>Open Source</b> under <b>MIT License</b></span>
                <p className='mb-4'>Therefore, do you like that? give it star on his GitHub repository</p>
                <div className='inline-flex text-4xl'>
                    <Link href="https://dev.to/kenbusano" target={"_blank"}>
                        <FaDev className='mr-4' />
                    </Link>
                    <Link href="https://github.com/kenbusano/" target={"_blank"}>
                        <FaGithub />
                    </Link>
                </div>
            </div>
        </footer>
    )
}