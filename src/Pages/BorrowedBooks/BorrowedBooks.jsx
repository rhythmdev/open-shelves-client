import { useEffect, useState } from "react";
import useApiUrl from "../../hooks/useApiUrl";
import useAuth from "../../hooks/useAuth";
import BorrowedBooksCard from "./BorrowedBooksCard";


const BorrowedBooks = () => {
    const { user } = useAuth();
    const apiUrl = useApiUrl();
    const [borrowedBooks, setBorrowedBooks] = useState([]);

    useEffect(() => {
        apiUrl.get(`/api/borrowedBooks/${user?.email}`)
            .then(res => {
                console.log(res.data);
                setBorrowedBooks(res.data);
            })
            .catch(err => console.log(err))
    }
        , [apiUrl, user?.email])

    return (
        <div>
            <h2 className="text-2xl font-bold text-center text-gray-600">Borrowed Books</h2>
            <div>

                {borrowedBooks.length < 1 ? <h2 className="text-2xl font-bold 
                
                text-center text-gray-600">No Books Borrowed</h2>
                    :
                    (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
                            {
                                borrowedBooks?.map(book => <BorrowedBooksCard key={book._id} book={book} />)
                            }

                        </div>

                    )

                }


            </div>
        </div>
    );
};

export default BorrowedBooks;