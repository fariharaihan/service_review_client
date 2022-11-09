import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOutReview from "../../Pages/CheckOutReview/CheckOutReview";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ServicesDetail from "../../Pages/ServicesDetail/ServicesDetail/ServicesDetail";
import SignUp from "../../Pages/Signup/SignUp";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/servicesdetail',
                element: <ServicesDetail></ServicesDetail>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkoutreview/:id',
                element: <CheckOutReview></CheckOutReview>,
                loader: ({ params }) => fetch(`http://localhost:5000/cakeDetails/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '*',
        element: <div className='text-white font-semibold text-5xl'>This page is not found</div>
    }
])

export default router;  