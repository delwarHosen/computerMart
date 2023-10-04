import React from 'react';

const Product = ({ product }) => {
    const { picture, name, price, } = product;
    return (
        <div className='bg-gradient-to-r from-gray-100 to-gray-300 rounded-lg shadow-lg mt-4 w-80'>
            <div className='pt-3'>
                <img className='w-72 h-56 mx-auto rounded-md' src={picture} alt="" />
                <p className='font-sans font-medium mt-3 ml-4'>{name}</p>
                <p className='font-sans font-medium mt-3 ml-4'>BDT: {price}tk.</p>
            </div>
            <div className='text-center my-3'>
                <button className='px-20 py-2 font-semibold font-sans rounded-lg text-white bg-orange-400'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;