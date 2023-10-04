import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet, useLoaderData } from 'react-router-dom';
import { createContext } from 'react';
export const ProductContext = createContext([])

const Root = () => {
    const products = useLoaderData()

    return (
        <ProductContext.Provider value={products}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </ProductContext.Provider>
    );
};

export default Root;