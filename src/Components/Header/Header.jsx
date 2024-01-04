import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from '../../assets/logo.png'
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import avatar from './avatar.jpg'
import DarkMode from "../DarkMode/DarkMode";

const Header = () => {
    const { user, logOut } = useAuth();

    const handelSignOut = () => {
        logOut()
            .then(() => {
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
                    title: "Log Out Successfully"
                });
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <Navbar fluid rounded>
                <Link to={'/'}>
                    <Navbar.Brand  >
                        <img src={logo} className="mr-2 h-6 sm:h-9" alt="Logo" />
                        <span className=" font-lobster self-center whitespace-nowrap text-3xl font-bold dark:text-white bg-gradient-to-r from-gra-start to-gra-end bg-clip-text text-transparent">Open Shelves</span>
                    </Navbar.Brand>
                </Link>

                <div className="flex md:order-2 ">

                    <DarkMode />
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            user ? (
                                <Avatar alt="User pic" img={user?.photoURL} rounded />
                            )
                                :
                                (<Avatar alt="User pic" img={avatar} rounded />)
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-base text-center">{
                                user ? (user?.displayName)
                                    :
                                    ('Open Shelves')
                            }</span>
                            <span className="block truncate text-sm font-medium">{
                                user ? (user?.email)
                                    :
                                    ('openshelves@hotmail.com')
                            }</span>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        {
                            user ? (<Dropdown.Item onClick={handelSignOut} className="font-semibold text-base justify-center">Log out</Dropdown.Item>)
                                :
                                (
                                    <Link to={'/login'} >
                                        <Dropdown.Item className="font-semibold text-base justify-center">Log In</Dropdown.Item>
                                    </Link>
                                )

                        }
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-gradient-to-r from-gra-start  to-gra-end  bg-clip-text text-transparent underline font-bold dark:text-gray-200" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/addBook"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-gradient-to-r from-gra-start  to-gra-end  bg-clip-text text-transparent underline font-bold dark:text-gray-200" : ""
                        }
                    >
                        Add Book
                    </NavLink>
                    <NavLink
                        to="/allBooks"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-gradient-to-r from-gra-start  to-gra-end  bg-clip-text text-transparent underline font-bold dark:text-gray-200" : ""
                        }
                    >
                        All Books
                    </NavLink>
                    <NavLink
                        to="/borrowedBooks"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-gradient-to-r from-gra-start  to-gra-end  bg-clip-text text-transparent underline font-bold dark:text-gray-100" : ""
                        }
                    >
                        Borrowed Books
                    </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>


    );
};

export default Header;