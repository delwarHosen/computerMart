import React from 'react';
import { useContext } from "react";
import { ProductContext } from "../Root/Root";
import Product from '../Product/Product';

const Shop = () => {
    const products = useContext(ProductContext);
    return (
        <div className='flex justify-center'>
            <div className='grid grid-cols-3 gap-6'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Shop;