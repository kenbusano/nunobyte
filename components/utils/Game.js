export default function Game() {
    return (
        <section className="fixed top-0 left-0 right-0 sm:p-4 md:p-0">
            <aside className="flex items-center justify-center h-screen text-center">
                <main className="bg-white p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-6">
                        <header id="question-number" className="">
                            <h2 className="lg:text-3xl font-bold">Question #1</h2>
                        </header>
                        <div id="toggle-switch">
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                    <div id="question" className="">
                        <span className="lg:w-[30rem] block lg:mx-auto text-2xl">What is the root number of 19?</span>
                    </div>
                </main>
            </aside>
        </section>
    )
}