import { useLoaderData, useParams } from "react-router-dom";
import library from '../../assets/images/library.jpg'
import BookCard from "./BookCard";
import useAuth from "../../hooks/useAuth";
import loader from '../../assets/loader.json'
import Lottie from "lottie-react";

const Books = () => {

    const books = useLoaderData();
    // console.log(books);
    const { category } = useParams();
    // console.log(category);

    const { loading } = useAuth();


    return (
        <div className="py-8">
            {/* hero area */}
            <div className="bg-cover bg-center h-80 max-w-full rounded-md bg-gray-500 opacity-80 bg-blend-multiply" style={{ backgroundImage: `url(${library})` }}>
                <div className="flex flex-col items-center justify-center h-full max-w-2xl px-4 mx-auto text-center">
                    <h3 className="text-3xl lg:text-4xl text-gray-200 font-semibold">Books of {category}</h3>
                </div>
            </div>
            {/* end of hero area */}
            {/* books area start */}
            {
                loading ? (
                    <div className='flex items-center justify-center  min-h-screen'>
                        <div>
                            <Lottie animationData={loader} loop={true} className="size-[50%] lg:size-[15%] md:size-[20%] mx-auto" />
                        </div>
                    </div>
                )
                    :
                    (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12">
                            {
                                books?.map(book => <BookCard key={book?._id} book={book} />)
                            }
                        </div>
                    )
            }

            {/* end of books area */}
        </div>
    );
};

export default Books;