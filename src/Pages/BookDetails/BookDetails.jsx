import { useLoaderData } from "react-router-dom";

const BookDetails = () => {

    const details = useLoaderData();
    const { _id, book_name, book_image, book_quantity, author_name, description, category } = details || {};


    return (
        <div className="flex items-center justify-center py-8">
            <div className="flex flex-col  max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex space-x-4">

                    <div className="flex flex-col space-y-1">
                        <h4 className="text-sm font-semibold">{category}</h4>

                    </div>
                </div>
                <div>
                    <img src={book_image} alt="image" className="object-cover w-full mb-4 h-64 sm:h-96 dark:bg-gray-500 rounded" />
                    <h2 className="mb-1 text-xl font-semibold text-gray-800 dark:text-gray-200">{book_name}</h2>
                    <div className="flex flex-wrap justify-between mt-2 font-medium text-gray-600 dark:text-gray-200">
                        <h4>Author: {author_name}</h4>
                        <h4>Available: {book_quantity}</h4>
                    </div>
                    <p className="text-sm dark:text-gray-400 mt-4">{description.slice(0, 220) + "........"}</p>
                </div>
                <div className="flex flex-wrap justify-between">

                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-gray-800 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 mt-3">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Borrow
                        </span>
                    </button>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-gray-800 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 mt-3">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Read
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;