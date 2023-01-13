export default function Game() {
    return (
        <section className="fixed top-0 left-0 right-0 sm:p-4 md:p-0">
            <aside className="flex items-center justify-center h-screen text-center">
                <main className="bg-white p-6 rounded-lg">
                    <div className="flex items-center justify-between sm:mb-2 lg:mb-6">
                        <header id="question-number" className="">
                            <h2 className="lg:text-3xl font-bold">Question #1</h2>
                        </header>
                        <div id="toggle-switch">
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                            </label>
                        </div>
                    </div>
                    <div id="question" className="">
                        <span className="lg:w-[30rem] sm:w-[240px] md:w-full sm:mx-auto break-words block lg:mx-auto lg:text-2xl sm:mb-2 lg:mb-4">test question</span>
                    </div>
                    <div id="multiple-choice" className="grid grid-cols-1 sm:gap-2 lg:gap-4 text-white">
                        <button data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block sm:p-2 lg:p-3 bg-[#A725BC] text-white leading-tight uppercase rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">01</button>
                        <button data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block sm:p-2 lg:p-3 bg-[#DE1B9C] text-white leading-tight uppercase rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-600 active:shadow-lg transition duration-150 ease-in-out">02</button>
                        <button data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block sm:p-2 lg:p-3 bg-orange-500 text-white leading-tight uppercase rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#AC631F] active:shadow-lg transition duration-150 ease-in-out">03</button>
                        <button data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block sm:p-2 lg:p-3 bg-[#BB2A44] text-white leading-tight uppercase rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">04</button>
                    </div>
                </main>
            </aside>
        </section>
    )
}