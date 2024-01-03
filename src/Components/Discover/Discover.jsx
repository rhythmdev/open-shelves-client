import { FaUsersViewfinder } from "react-icons/fa6";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
const Discover = () => {
    return (
        <div className="py-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-lobster text-center text-gray-700 dark:text-gray-200 underline ">Discover Your Next Read: Explore a World of Knowledge at Your Fingertips</h2>
            <h5 className="text-lg md:text-xl lg:text-xl  font-medium text-gray-700 dark:text-gray-200 text-center py-8">Our library management system simplifies access, streamlines borrowing,<br /> and connects you with the resources you need.</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 items-center py-10">
                <div className="text-center space-y-4 bg-gray-50 px-8 py-6 rounded-md cursor-pointer shadow-md shadow-gra-end hover:border-2 border-orange-400 w-full h-[330px]">
                 
                    <FaUsersViewfinder  className="mx-auto w-14 h-14 bg-gradient-to-r from-gra-start to-gra-end p-2 rounded-full text-gray-100"/>
                
                  
                    <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300 h">User-friendly interface</h4>
                    <p className="text-base font-medium dark:text-gray-200 text-gray-600 antialiased ">Forget confusing menus and hidden buttons. Our interface is as clean and welcoming as your favorite reading nook.</p>
                </div>
                <div className="text-center space-y-4 bg-gray-50 px-8 py-6 rounded-md cursor-pointer shadow-md shadow-gra-end hover:border-2 border-orange-400 w-full h-[330px]">
                    <RiLightbulbFlashLine className="mx-auto  w-14 h-14 bg-gradient-to-r from-gra-start to-gra-end p-2 rounded-full text-gray-100" />
                    <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300">Knowledge</h4>
                    <p className="text-base font-medium dark:text-gray-200 text-gray-600 antialiased ">Unravel the stories, theories, and insights woven by minds throughout history, enriching your own tapestry of understanding.</p>
                </div>
                <div className="text-center space-y-4 bg-gray-50 px-8 py-6 rounded-md cursor-pointer shadow-md shadow-gra-end hover:border-2 border-orange-400 w-full h-[330px]">
                    <FaBookOpen className="mx-auto w-14 h-14 bg-gradient-to-r from-gra-start to-gra-end p-2 rounded-full text-gray-100"/>
                    <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300">New Books</h4>
                    <p className="text-base font-medium dark:text-gray-200 text-gray-600 antialiased "> Whether you&apos;re a seasoned reader or just starting out, there&apos;s a perfect book waiting to captivate you.</p>
                </div>
                <div  className="text-center space-y-4 bg-gray-50 px-8 py-6 rounded-md cursor-pointer shadow-md shadow-gra-end hover:border-2 border-orange-400 w-full h-[330px]">
                    <HiOutlineStatusOnline className="mx-auto w-14 h-14 bg-gradient-to-r from-gra-start to-gra-end p-2 rounded-full text-gray-100"/>
                    <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300">24/7 online access</h4>
                    <p className="text-base font-medium dark:text-gray-200 text-gray-600 antialiased ">Unleash the library, anytime, anywhere: Access books, resources, and services 24/7.</p>
                </div>
            </div>
        </div>
    );
};

export default Discover;