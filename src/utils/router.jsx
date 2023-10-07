import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../components/Root/Root";
import About from "../components/About/About";
import Shop from "../components/Shop/Shop";
import { productAndCartData } from "../loaders/getProductAndCartProduct";
import Cart from "../components/Cart/Cart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: productAndCartData,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: 'about',
                element: <About></About>
            },
        ]
    }
])

export default router;