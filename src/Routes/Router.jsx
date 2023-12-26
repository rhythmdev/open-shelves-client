import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Books from "../Components/BooksCategory/Books";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ReadBook from "../Pages/ReadBook/ReadBook";



const router = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/addBook',
                element: <PrivateRoute><AddBook /></PrivateRoute>
            },
            {
                path: '/allBooks',
                element: <PrivateRoute><AllBooks /></PrivateRoute>
            },
            {
                path: '/borrowedBooks',
                element: <PrivateRoute><BorrowedBooks /></PrivateRoute>
            },
            {
                path: '/books/:category',
                element: <PrivateRoute><Books /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:8080/api/books/${params.category}`)
            },
            {
                path: '/bookDetails/:id',
                element: <PrivateRoute> <BookDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:8080/api/singleBook/${params.id}`)
            },
            {
              path: '/readBook/:id',
              element: <PrivateRoute><ReadBook/></PrivateRoute>,
              loader: ({params}) => fetch(`http://localhost:8080/api/singleBook/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
           
        ]
    }
])



export default router;