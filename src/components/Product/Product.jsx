import React from 'react';

const Product = ({ product, handleAddToCart }) => {
    const { picture, name, price } = product;
    return (
        <div className='w-full md:w-80 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-lg shadow-2xl mt-4 '>
            <div className='pt-3'>
                <img className='w-[420px] md:w-72 md:h-56 p-2 mx-auto rounded-md' src={picture} alt="" />
                <p className='font-sans font-medium mt-3 ml-4 text-white'>{name}</p>
                <p className='font-sans font-medium mt-3 ml-4 text-white'>BDT: {price}tk.</p>
            </div>
            <div onClick={() => handleAddToCart(product)} className='text-center my-3'>
                <button className='px-20 py-2 font-semibold font-sans rounded-lg shadow-inner shadow-indigo-500/100 text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;