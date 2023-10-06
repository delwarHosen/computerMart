import React, { useState } from 'react';
import { useContext } from "react";
import { ProductContext } from "../Root/Root";
import Product from '../Product/Product';
import { adToDb } from '../../utils/fakeDb';

const Shop = () => {
    // Load data from fake data using context Api
    const products = useContext(ProductContext);

    const [cart, setCart] = useState([])

    // collect data from cart or local storage
    const handleAddToCart = (product) => {
        let newCart = [];
        const remaining = cart.find(exists => exists.id === product.id)
        if (!remaining) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            const restProduct = cart.filter(exists => exists !== product.id)
            remaining.quantity = remaining.quantity + 1;
            newCart = [...restProduct, remaining]
        }
        setCart(newCart)
        adToDb(product.id)
        console.log(newCart)
    }

    return (
        <div className='flex justify-center'>
            <div className='grid grid-cols-3 gap-6'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Shop;