import React from 'react';

const Product = ({ product, handleAddToCart }) => {
    const { picture, name, price, } = product;
    return (
        <div className='bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 rounded-lg shadow-lg mt-4 w-80'>
            <div className='pt-3'>
                <img className='w-72 h-56 mx-auto rounded-md' src={picture} alt="" />
                <p className='font-sans font-medium mt-3 ml-4'>{name}</p>
                <p className='font-sans font-medium mt-3 ml-4'>BDT: {price}tk.</p>
            </div>
            <div onClick={() => handleAddToCart(product)} className='text-center my-3'>
                <button className='px-20 py-2 font-semibold font-sans rounded-lg text-white bg-orange-400'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;