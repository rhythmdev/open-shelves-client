import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {

    const { logIn, googleSignIn } = useAuth();
    const [displayPassword, setDisplayPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    //google login
    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire(`Welcome ${user?.displayName} to Open Shelves`)
                // navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                Swal.fire(errorMessage)
            })
    }


    //email and password base login
    const handelLogIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);
        //sign in existing user
        logIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Sign In Successfully"
                });

                // navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                Swal.fire(errorMessage);

            });
        e.currentTarget.reset();

    }


    return (
        <div className="py-6">
            <section className="bg-gray-100 dark:bg-gray-900 py-10 rounded">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl dark:text-white">
                                Please Log In!
                            </h1>
                            <form onSubmit={handelLogIn} className="space-y-4 md:space-y-6" >

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Your Email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="barry@gmail.com" required />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Password</label>
                                    <div className="relative">
                                        <input type={displayPassword ? "text" : "password"} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        <span
                                            onClick={() => setDisplayPassword(!displayPassword)}
                                            className="cursor-pointer absolute top-[35%] right-2
    "
                                        >
                                            {displayPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                        </span>
                                    </div>

                                </div>

                                <div className="flex items-center justify-center">
                                    <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-gray-800 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 mt-3">
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Log In Now
                                        </span>
                                    </button>
                                </div>

                                <span className="flex items-center">
                                    <span className="h-px flex-1 bg-gray-400"></span>
                                    <span className="shrink-0 px-6 font-medium">Or Log In with</span>
                                    <span className="h-px flex-1 bg-gray-400"></span>
                                </span>
                                <div className="flex items-center justify-center">
                                    <button onClick={handelGoogleSignIn} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-gray-800 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 mt-3">
                                        <span className="relative flex  px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
                                            Google <FcGoogle className="ml-2 h-5 w-5" />
                                        </span>
                                    </button>
                                </div>

                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don&apos;t have an account? <Link to='/register' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;