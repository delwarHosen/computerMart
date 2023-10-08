import React, { useState } from 'react';
import { useContext } from "react";
import { CartContext, ProductContext } from "../Root/Root";
import Product from '../Product/Product';
import { adToDb } from '../../utils/fakeDb';
import { toast } from 'react-toastify';

const Shop = () => {
    // Load data from fake data using context Api
    const products = useContext(ProductContext);

    const [cart, setCart] = useContext(CartContext)
    // console.log(cart)

    // collect data from cart or local storage
    const handleAddToCart = (product) => {
        let newCart = [];
        const remaining = cart.find(exists => exists.id === product.id)
        if (!remaining) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            const restProduct = cart.filter(exists => exists.id !== product.id)
            remaining.quantity = remaining.quantity + 1;
            newCart = [...restProduct, remaining]
        }
        setCart(newCart)
        adToDb(product.id)
        toast.success('Your product add to cart', { autoClose: 400 })
        // console.log(newCart)
    }

    return (
        <div className='flex justify-center'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-6 animate-jump-in animate-once animate-duration-[1200ms] animate-delay-100 animate-ease-linear animate-normal animate-fill-forwards'>
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