import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import About from "../pages/Home/About/About";
import Category from "../pages/Home/Category/Category";
import Login from "../pages/Home/Login/Login/Login";
import Register from "../pages/Home/Login/Register/Register";
import News from "../pages/News/News";
import PrivateRoutes from "./PrivateRoutes";
import TermCondition from "../pages/Shored/Term&Condition/TermCondition";

const router = createBrowserRouter([
    {
        path:'/',
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path:"/",
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path:"about",
                element:<About></About>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path:'termsconditons',
                element:<TermCondition></TermCondition>
            }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children:[
            {
                path:':id',
                element: <Category></Category>,
                loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)

            }
        ]
    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            
        ]
    }
])

export default router;