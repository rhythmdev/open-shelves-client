import { useEffect, useState } from "react";
import useApiUrl from "../../hooks/useApiUrl";
import AllBook from "./AllBook";

const AllBooks = () => {

    const [allBooks, setAllBooks] = useState([]);

    const apiUrl = useApiUrl();

    useEffect(() => {
        apiUrl.get(`/api/books`)
            .then(res => {
                // console.log(res.data);
                setAllBooks(res.data)
            })
            .catch(err => console.log(err))
    }
        , [apiUrl])


    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold text-center text-gray-600">All Books: {allBooks?.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
                {
                    allBooks?.map(allBook => <AllBook key={allBook?._id} allBook={allBook} />)
                }
            </div>
        </div>
    );
};

export default AllBooks;