import Lottie from 'lottie-react';
import error from '../../assets/error.json'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='py-6'>
            <div className='flex items-center justify-center'>
                <Lottie animationData={error} className='size-[70%] lg:size-[25%] md:size-[30%]' />


            </div>
            <div className='flex items-center justify-center mt-4'>
                <Link to={'/'}>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-gray-800 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 mt-3 ">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Back to home
                        </span>
                    </button>
                </Link>
            </div>



        </div>
    );
};

export default ErrorPage;