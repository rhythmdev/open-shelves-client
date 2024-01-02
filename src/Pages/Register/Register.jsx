import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const { createUser, googleSignIn, logOut } = useAuth();
    const [displayPassword, setDisplayPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();


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



    //email and password base auth
    const handelSignUp = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photoURL = form.get('photoUrl');
        const password = form.get('password');

        setRegisterError('');
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters long');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should have at least one upper case');
            return;
        }
        if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setRegisterError('Password should have at least one special character');
            return;
        }


        //create new user
        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                //update user name and photo
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL,
                });
                logOut();
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
                    title: "Sign Up Successfully"
                });

                navigate('/logIn')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                Swal.fire(errorMessage)
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
                                Create and account
                            </h1>
                            <form onSubmit={handelSignUp} className="space-y-4 md:space-y-6" >
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Barry Alan" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Your Email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="barry@gmail.com" required />
                                </div>
                                <div>
                                    <label htmlFor="photUrl" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Your Photo Url</label>
                                    <input type="text" name="photoUrl" id="photoUrl" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://i.ibb.co/CbB0XmF/profile-pic.jpg" required />
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


                                <div>
                                    {
                                        registerError && <p className='font-semibold text-sm text-red-600 text-center'>{registerError}</p>
                                    }
                                </div>
                                <div className="flex items-center justify-center">
                                    <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-gray-800 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 mt-3">
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Create an account
                                        </span>
                                    </button>
                                </div>

                                <span className="flex items-center">
                                    <span className="h-px flex-1 bg-gray-400"></span>
                                    <span className="shrink-0 px-6 font-medium">Or Sign up with</span>
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
                                    Already have an account? <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Log In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;