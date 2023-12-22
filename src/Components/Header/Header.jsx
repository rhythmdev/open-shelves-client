import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from '../../assets/logo.png'
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar fluid rounded>
                <Link to={'/'}>
                    <Navbar.Brand  >
                        <img src={logo} className="mr-2 h-6 sm:h-9" alt="Flowbite React Logo" />
                        <span className=" font-lobster self-center whitespace-nowrap text-3xl font-bold dark:text-white bg-gradient-to-r from-gra-start via-gra-middle to-gra-end bg-clip-text text-transparent">Open Shelves</span>
                    </Navbar.Brand>
                </Link>

                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>

                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-gradient-to-r from-gra-start via-gra-middle to-gra-end  bg-clip-text text-transparent underline font-bold" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/addBook"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-gradient-to-r from-gra-start via-gra-middle to-gra-end  bg-clip-text text-transparent underline font-bold" : ""
                        }
                    >
                        Add Books
                    </NavLink>
                    <NavLink
                        to="/allBooks"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-gradient-to-r from-gra-start via-gra-middle to-gra-end  bg-clip-text text-transparent underline font-bold" : ""
                        }
                    >
                        All Books
                    </NavLink>
                    <NavLink
                        to="/borrowedBooks"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-gradient-to-r from-gra-start via-gra-middle to-gra-end  bg-clip-text text-transparent underline font-bold" : ""
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