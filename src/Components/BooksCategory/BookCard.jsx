import PropTypes from 'prop-types'
import ReactStars from 'react-rating-star-with-type'
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {


    const { _id, book_name, book_image, author_name, category, rating } = book || {};

    return (
        <div className='mt-6'>
            <div className="flex max-w-lg lg:h-52 md:h-52 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-700">
                <div className="w-1/3 bg-cover" style={{ backgroundImage: `url(${book_image})` }}></div>

                <div className="w-2/3 p-4 md:p-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{book_name}</h3>

                    <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-400">{category}</h4>

                    <div className=" mt-2">
                        <h4 className="text-base font-semibold text-gray-700 dark:text-gray-200">Author: {author_name}</h4>

                    </div>

                    <div className="flex justify-between mt-4 item-center">
                        <ReactStars value={rating} size={'1rem'} />
                        <Link to={`/bookDetails/${_id}`}>
                            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Details</button>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookCard;
BookCard.propTypes = {
    book: PropTypes.object.isRequired
}