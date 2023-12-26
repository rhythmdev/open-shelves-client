import { useLoaderData } from "react-router-dom";
import { usePDF } from "react-to-pdf";

const ReadBook = () => {
    const book = useLoaderData();

    const { toPDF, targetRef } = usePDF({ filename: `${book?.book_name}.pdf` });

    return (
        <div className="py-12">

            <div className="text-center">
                <h5 className="text-2xl text-gray-800 dar:text-gray-200 font-bold">{book?.book_name}</h5>
                <h5 className="font-medium text-gray-700 dark:text-gray-700 mt-2">By {book?.author_name}</h5>
                <h6 ref={targetRef} className="text-lg font-medium text-gray-700 dark:text-gray-200 text-balance my-5 antialiased">{book?.description}</h6>
            </div>
            <div className="flex items-center justify-center">
                <button onClick={() => toPDF()} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-gray-800 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 mt-3">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Download Pdf
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ReadBook;