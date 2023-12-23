import { useEffect, useState } from "react";
import useApiUrl from "../../hooks/useApiUrl";
import BooksCategoryCard from "./BooksCategoryCard";


const BooksCategory = () => {
    const [bookCategories, setBookCategories] = useState([]);
     
    const apiUrl = useApiUrl();

     useEffect(() => {
        apiUrl.get('/booksCategory')
        .then(response => {
          setBookCategories(response.data);  
        })
        .catch(error => {
            console.log(error);
        })
     }, [apiUrl])


    return (
        <div className="py-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-lobster text-center text-gray-700 underline ">Book Categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-12">
              {
                bookCategories?.map(book_category => <BooksCategoryCard key={book_category?._id} book_category={book_category}/>)
              }
            </div>
        </div>
    );
};

export default BooksCategory;