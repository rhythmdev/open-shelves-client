import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Foooter from "../Components/Foooter/Foooter";



const MainLayout = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <div className="font-poppins">
                <div className="container mx-auto px-6 py-4 ">
                    <Header />
                    <div className="min-h-screen">
                        <Outlet />
                    </div>
                </div>
                <Foooter />
            </div>
        </div>



    );
};

export default MainLayout;