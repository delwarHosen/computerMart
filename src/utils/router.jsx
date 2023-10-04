import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../components/Root/Root";
import About from "../components/About/About";
import Shop from "../components/Shop/Shop";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: () => fetch('products.json'),
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
                path: 'about',
                element: <About></About>
            },
        ]
    }
])

export default router;