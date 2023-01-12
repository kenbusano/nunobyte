import { FaDev, FaGithub } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="text-white bg-art sm:p-6 lg:p-12 text-center">
            <div>
                <span className='mb-2 block'>Create by Kenneth Obsequio and this project is <b>Open Source</b> under <b>MIT License</b></span>
                <p className='mb-4'>Therefore, do you like that? give it star on his GitHub repository</p>
                <div className='inline-flex text-4xl'>
                    <FaDev className='mr-4' />
                    <FaGithub />
                </div>
            </div>
        </footer>
    )
}