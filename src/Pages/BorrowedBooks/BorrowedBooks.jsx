import { useEffect, useState } from "react";
import useApiUrl from "../../hooks/useApiUrl";
import useAuth from "../../hooks/useAuth";
import { FaHandHolding, FaHandHoldingHand } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BorrowedBooks = () => {
    const { user } = useAuth();
    const apiUrl = useApiUrl();
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const axiosSecure = useAxiosSecure();


    useEffect(() => {
        axiosSecure.get(`/api/borrowedBook/${user?.email}`)
            .then(res => {
                // console.log(res.data);
                setBorrowedBooks(res.data);
            })
            .catch(err => console.log(err))
    }
        , [axiosSecure, user?.email])
    // console.log(borrowedBooks);

    const handelReturnBook = (_id, bookId) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You want to return this book!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#007c0e",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, return it!"
        }).then((result) => {
            if (result.isConfirmed) {

                apiUrl.delete(`/api/returnBook/${_id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount) {
                            apiUrl.patch(`api/increaseBookQuantity/${bookId}`)
                                .then(res => {
                                    console.log(res.data);
                                    if (res.data.modifiedCount) {
                                        console.log("Book Quantity Increased");
                                        Swal.fire({
                                            title: "The book has been returned!",
                                            icon: "success",
                                        });

                                    }
                                    const newBorrowedBooks = borrowedBooks.filter(book => book.bookId !== bookId);
                                    setBorrowedBooks(newBorrowedBooks);
                                })
                                .catch(err => console.log(err))

                        }
                    })

                    .catch(err => console.log(err))


            }
        });
    }




    return (
        <div className="py-8">

            <div>

                {borrowedBooks.length < 1 ? <h2 className="text-2xl font-bold 
                
              text-gray-700 text-center">No Borrowed Books Available</h2>
                    :
                    (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">

                            {
                                borrowedBooks?.map(book => <div key={book?._id} className="block rounded-lg p-4 shadow-md shadow-indigo-200 ">
                                    <img
                                        alt="book_cover"
                                        src={book?.image}
                                        className="h-56 w-full rounded-md object-cover"
                                    />

                                    <div className="mt-2">
                                        <dl>
                                            <div>

                                                <dd className="text-sm text-gray-500">{book?.category}</dd>
                                            </div>

                                            <div>

                                                <dd className="font-medium">{book?.bookName}</dd>
                                            </div>
                                        </dl>

                                        <div className="mt-6 flex items-center justify-between text-xs">
                                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                                <FaHandHolding className="h-4 w-4 text-gray-700" />
                                                <div className="mt-1.5 sm:mt-0">
                                                    <p className="text-gray-500">Borrowed Date</p>

                                                    <p className="font-medium">{book?.borrowedDate}</p>
                                                </div>
                                            </div>

                                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                                <FaHandHoldingHand className="h-4 w-4 text-gray-700" />

                                                <div className="mt-1.5 sm:mt-0">
                                                    <p className="text-gray-500">Return Date</p>

                                                    <p className="font-medium">{book?.returnDate}</p>
                                                </div>
                                            </div>

                                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                                <button onClick={() => handelReturnBook(book?._id, book?.bookId)} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Return</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }

                        </div>

                    )

                }


            </div>
        </div>
    );
};

export default BorrowedBooks;