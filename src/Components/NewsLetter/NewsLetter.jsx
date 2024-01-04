
const NewsLetter = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md sm:text-center">
                        <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold font-lobster  text-gray-700 dark:text-gray-200 underline">Sign up for our latest update</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-base md:text-lg lg:text-lg font-medium text-gray-600 dark:text-gray-200">Stay up to date with the roadmap progress, announcements and exclusive Books release feel free to sign up with your email.</p>
                        <form >
                            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                    <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    </div>
                                    <input className="block p-3 pl-10 w-full text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required />
                                </div>
                                <div>
                                    <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer sm:rounded-none sm:rounded-r-lg bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 ">Subscribe</button>
                                  
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsLetter;