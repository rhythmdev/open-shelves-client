import PropTypes from "prop-types";
import { FaHandHolding,  FaHandHoldingHand } from "react-icons/fa6";

const BorrowedBooksCard = ({ book }) => {
    const { image, bookName, category, borrowedDate, returnDate } = book || {};

    return (
        <div>
            <div className="block rounded-lg p-4 shadow-md shadow-indigo-100 ">
                <img
                    alt="book_cover"
                    src={image}
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <dl>
                        <div>

                            <dd className="text-sm text-gray-500">{category}</dd>
                        </div>

                        <div>

                            <dd className="font-medium">{bookName}</dd>
                        </div>
                    </dl>

                    <div className="mt-6 flex items-center justify-between text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <FaHandHolding className="h-4 w-4 text-gray-700" />
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Borrowed Date</p>

                                <p className="font-medium">{borrowedDate}</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <FaHandHoldingHand className="h-4 w-4 text-gray-700" />

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Return Date</p>

                                <p className="font-medium">{returnDate}</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                           <button>Return</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BorrowedBooksCard;

BorrowedBooksCard.propTypes = {
    book: PropTypes.object.isRequired
}