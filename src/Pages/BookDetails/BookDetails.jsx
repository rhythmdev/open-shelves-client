import { Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { format } from "date-fns";
import useApiUrl from "../../hooks/useApiUrl";
import Swal from "sweetalert2";

const BookDetails = () => {
    const { user } = useAuth();
    const loadSingleBook = useLoaderData();
    const [singleBook, setSingleBook] = useState(loadSingleBook);

    const { _id, book_name, book_image, book_quantity, author_name, description, category } = singleBook || {};
    const [openModal, setOpenModal] = useState(false);

    function onCloseModal() {
        setOpenModal(false);

    }

    const apiUrl = useApiUrl();


    const handelModalSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const returnDate = form.get('date');
        const name = user?.displayName;
        const email = user?.email;

        const borrowedBook = {
            name,
            email,
            returnDate,
            image: singleBook.book_image,
            bookName: singleBook.book_name,
            bookId: singleBook._id,
            category: singleBook.category,
            book_quantity: parseInt(singleBook.book_quantity),
            borrowedDate: format(new Date(), 'yyyy-MM-dd'),

        }
        // console.log(borrowedBook);
        apiUrl.post('/api/borrowBook', borrowedBook)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    apiUrl.patch(`/api/updateBookQuantity/${_id}`)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.result.modifiedCount) {
                                const Toast = Swal.mixin({
                                    toast: true,
                                    position: "top-end",
                                    showConfirmButton: false,
                                    timer: 3000,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                        toast.onmouseenter = Swal.stopTimer;
                                        toast.onmouseleave = Swal.resumeTimer;
                                    }
                                });
                                Toast.fire({
                                    icon: "success",
                                    title: "Book Borrowed Successfully"
                                });
                                onCloseModal();
                                // update book
                                setSingleBook(res.data.updatedBook)
                            }

                        }
                        )


                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'You already borrowed this book',


                    })
                    onCloseModal();
                }
            })
            .catch(err => console.log(err))


        // onCloseModal()
    }


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
                    <p className="text-sm dark:text-gray-400 mt-4">{description.slice(0, 220) + '.....'}</p>
                </div>
                <div className="flex flex-wrap justify-between">

                    <button disabled = {book_quantity === 0} onClick={() => setOpenModal(true)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-gray-800 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 mt-3 ">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Borrow
                        </span>
                    </button>

                    <Link to={`/readBook/${_id}`}>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-gray-800 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 mt-3">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Read
                            </span>
                        </button>
                    </Link>

                </div>
                {/* modal area */}
                <>

                    <>

                        <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
                            <Modal.Header className="mx-3">Borrow: {book_name}</Modal.Header>
                            <Modal.Body>
                                <div className="space-y-6">
                                    <form onSubmit={handelModalSubmit}>
                                        <label>Return Date</label>
                                        <TextInput name="date" type="date" placeholder="Please pick a date" required />
                                        <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-gray-800 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 mt-3">
                                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                Submit
                                            </span>
                                        </button>
                                    </form>

                                </div>
                            </Modal.Body>
                        </Modal>
                    </>


                </>

                {/* end of modal area */}
            </div>
        </div>
    );
};

export default BookDetails;