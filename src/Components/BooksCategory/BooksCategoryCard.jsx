import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const BooksCategoryCard = ({ book_category }) => {
    const { image, category } = book_category || {}
    return (
        <div>
            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover w-full h-56" src={image} alt="book-category" />

                <div className="py-5 text-center">
                    <h4 className="block text-xl font-bold text-gray-700 dark:text-white" tabIndex="0" role="link">{category}</h4>
                    <Link to={`/books/${category}`}>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-gray-800 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 mt-3">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            See Books
                        </span>
                    </button>
                    </Link>
                   

                </div>
            </div>
        </div>
    );
};

export default BooksCategoryCard;

BooksCategoryCard.propTypes = {
    book_category: PropTypes.object.isRequired
}