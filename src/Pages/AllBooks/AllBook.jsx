import ProTypes from 'prop-types'
import ReactStars from 'react-rating-star-with-type'
import { Link } from 'react-router-dom';

const AllBook = ({ allBook }) => {
    const { _id, book_image, book_name, category, author_name, rating } = allBook || {}
    return (
        <div>
            <div
                className="relative grid h-[30rem] w-full max-w-[28rem] flex-col items-center justify-center overflow-hidden rounded-xl bg-black bg-clip-border text-center text-gray-700 dark:text-white opacity-80">
                <div
                    className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none" style={{ backgroundImage: `url(${book_image})` }}>
                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                    <h2 className="mb-4 block text-3xl font-bold leading-[1.5] tracking-normal text-gray-100 dark:text-white antialiased">
                        {book_name}

                    </h2>



                    <h5 className="block mb-4 font-sans text-xl antialiased font-medium leading-snug tracking-normal text-gray-300 dark:text-white">
                        Author: {author_name}
                    </h5>
                    <h5 className="block mb-4 font-sans text-xl antialiased font-medium leading-snug tracking-normal text-gray-300 dark:text-white">
                        Category: {category}
                    </h5>
                    <div className='flex items-center justify-center gap-2'>
                        <h5 className='font-semibold text-gray-300 dark:text-white'>Rating:</h5>
                        <ReactStars value={rating} size={'1rem'} readonly />
                    </div>
                    <Link to={`/updateBook/${_id}`}>
                        <button className=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-gray-800 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 mt-4">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Update
                            </span>
                        </button>
                    </Link>

                </div>


            </div>
        </div>
    );
};

export default AllBook;
AllBook.propTypes = {
    allBook: ProTypes.object.isRequired
}