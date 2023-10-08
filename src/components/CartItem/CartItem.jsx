import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const CartItem = ({ product, handleRemoveItem }) => {
    const { id, name, picture, quantity, price } = product
    return (
        <div className="flex flex-col md:flex-col lg:flex-row m-5 rounded-lg shadow-inner shadow-indigo-500/100 text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 animate-fade animate-once animate-duration-[2000ms] animate-delay-300 animate-ease-linear animate-normal animate-fill-forwards">
            <img
                className="h-96 p-3 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={picture}
                alt="" />
            <div className="flex flex-col justify-start p-6">
                <h5
                    className="mb-2 text-xl font-medium text-white">
                    {name}
                </h5>
                <p className="flex justify-between mb-4 mt-6 text-base text-white">
                    <span className='text-lg font-semibold font-sans mr-4 text-white'><span>{price}</span> tk</span>
                    <span className='text-lg font-semibold font-sans text-white'><span>Quantity:{quantity}</span> </span>
                    <span className='text-lg font-semibold font-sans mr-4 text-white'><span>Total: {price * quantity}</span>tk</span>
                </p>
                <div onClick={() => handleRemoveItem(id)} className='flex flex-row text-xs text-neutral-500 dark:text-neutral-300'>
                    <TrashIcon className='h-6 text-white'></TrashIcon><span className='text-white text-xl'>Remove</span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;