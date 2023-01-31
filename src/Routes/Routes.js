import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ProductCategory from "../Pages/ProductCategory/ProductCategory";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MyCart from "../Pages/MyCart/MyCart";
import CheckOut from "../Pages/CheckOut/CheckOut";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/productDetails",
                element: <ProductDetails />,
            },
            {
                path: "/productCategory",
                element: <ProductCategory />,
            },
            {
                path: "/myCart",
                element: <MyCart />
            },
            {
                path: "/checkOut",
                element: <CheckOut />
            },
        ],
    },
])

export default Routes;