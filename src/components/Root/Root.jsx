import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet, useLoaderData } from 'react-router-dom';
import { createContext } from 'react';
export const ProductContext = createContext([])
export const CartContext = createContext([])

const Root = () => {
    const { products, initialCart } = useLoaderData()
    const [cart, setCart] = useState(initialCart)
    // console.log(initialCart)

    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={[cart, setCart]}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </CartContext.Provider>
        </ProductContext.Provider>
    );
};

export default Root;