import Swal from "sweetalert2";
import useApiUrl from "../../hooks/useApiUrl";

const AddBook = () => {

    const apiUrl = useApiUrl();



    const handelAddBook = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const book_name = form.get('book_name');
        const book_image = form.get('book_image');
        const book_quantity = form.get('book_quantity');
        const author_name = form.get('author_name');
        const rating = form.get('rating');
        const category = form.get('category');
        const description = form.get('description');


        const newBook = {
            book_name,
            book_image,
            book_quantity,
            author_name,
            rating,
            category,
            description
        }
        console.log(newBook);


        // save data in database
        apiUrl.post('/api/addBook', newBook)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
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
                        title: "Book Added Successfully"
                    });
                  
                }
               
            })
            .catch(error => {
                console.log(error)
            })
            e.currentTarget.reset();
    }

    return (
        <div className="py-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800 ">Add a Book</h2>
            <div className="py-6">
                <form onSubmit={handelAddBook}>
                    <div className="grid gap-4 mb-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="book_name" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Book Name</label>
                            <input type="text" name="book_name" id="book_name" className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Book Name" required />
                        </div>
                        <div>
                            <label htmlFor="book_image" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Book Image</label>
                            <input type="text" name="book_image" id="book_image" className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Book Image Url" required />
                        </div>
                        <div>
                            <label htmlFor="book_quantity" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Book Quantity</label>
                            <input type="text" name="book_quantity" id="book_quantity" className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Book Quantity" required />
                        </div>
                        <div>
                            <label htmlFor="author_name" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Author Name</label>
                            <input type="text" name="author_name" id="author_name" className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Book Author Name" required />
                        </div>

                        <div>
                            <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Rating</label>
                            <input type="text" name="rating" id="rating" className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="5" required min={1} max={5} />
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Category</label>
                            <select id="category" name="category" className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option defaultValue='Select Category'>Select Category</option>
                                <option value="Mystery & Thrillers">Mystery & Thrillers</option>
                                <option value="Novel">Novel</option>
                                <option value="Speculative Fiction">Speculative Fiction</option>
                                <option value="Comics">Comics</option>

                            </select>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Description</label>
                            <textarea id="description" name="description" rows="4" className="block p-2.5 w-full text-sm text-gray-800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write book description here"></textarea>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button onSubmit={handelAddBook} type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-gray-800 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 mt-3 ">
                            <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Add a book
                            </span>
                        </button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default AddBook;