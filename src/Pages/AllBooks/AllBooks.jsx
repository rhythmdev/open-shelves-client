import { useEffect, useState } from "react";
import useApiUrl from "../../hooks/useApiUrl";
import AllBook from "./AllBook";


const AllBooks = () => {

    const [allBooks, setAllBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [showBooks, setShowBooks] = useState([]);

    const apiUrl = useApiUrl();

    useEffect(() => {
        apiUrl.get(`/api/books`)
            .then(res => {
                // console.log(res.data);
                setAllBooks(res.data)
                setShowBooks(res.data)
            })
            .catch(err => console.log(err))
    }
        , [apiUrl])

  // get filtered books
   
  useEffect(() => {
    apiUrl.get('/api/filteredBooks')
    .then(res => {
        setFilteredBooks(res.data)

    })
    .catch(error => {
        console.log(error);
    })
  }, [apiUrl])

  const handelAvailableBooks = () => {
   setShowBooks(filteredBooks)
  }

  const handelAllBooks = () => {
    setShowBooks(allBooks)
  }


    return (
        <div className="mt-10">
           
            <div>
                <button onClick={handelAllBooks} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-gray-800 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 mt-3">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        All Books 
                    </span>
                </button>
                <button onClick={handelAvailableBooks} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-gray-800 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 mt-3">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Available Books
                    </span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
                {
                    showBooks?.map(allBook => <AllBook key={allBook?._id} allBook={allBook} />)
                }
            </div>
        </div>
    );
};

export default AllBooks;