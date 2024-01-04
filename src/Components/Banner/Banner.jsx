import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Banner.css';
import { EffectCards } from 'swiper/modules';
import useApiUrl from "../../hooks/useApiUrl";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Banner = () => {

    const [books, setBooks] = useState([]);

    const apiUrl = useApiUrl();


    useEffect(() => {
        apiUrl.get('/api/books')
            .then(res => {

                setBooks(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [apiUrl])



    return (
        <div className="py-5">
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl items-center  px-4 py-8 mx-auto lg:gap-14 xl:gap-28 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h2 className="max-w-2xl mb-4  text-4xl text-balance font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white  bg-gradient-to-r from-gra-start to-gra-end text-transparent bg-clip-text py-2">
                            <Typewriter words={['Borrow, lend, discover. A community library for everyone', ' Millions of stories, endless possibilities. Start your adventure today', 'More than just books. A space to connect, learn, and grow']}
                                loop={0}
                                cursor={true}
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </h2>

                        <Link to={'/allBooks'}>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-gray-800 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 mt-3">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    See Books
                                </span>
                            </button>
                        </Link>



                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >

                            <>
                                {
                                    books.slice(0, 12)?.map(book => <SwiperSlide key={book?._id}><img className="w-[240px] h-[360px]" src={book?.book_image} /></SwiperSlide>)
                                }
                            </>
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;