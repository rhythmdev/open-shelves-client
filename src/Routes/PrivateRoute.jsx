import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types'
import loader from '../assets/loader.json'
import Lottie from "lottie-react";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="flex items-center justify-center  min-h-screen ">
            <div>
                <Lottie animationData={loader} loop={true} className="size-[15%] mx-auto" />
            </div>
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'} />


};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
}