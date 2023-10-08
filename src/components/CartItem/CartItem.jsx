import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const CartItem = ({ product, handleRemoveItem }) => {
    const { id, name, picture, quantity, price } = product
    return (
        <div className="flex flex-col md:flex-col lg:flex-row m-5 rounded-lg bg-gradient-to-r from-slate-500 to-yellow-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 animate-fade animate-once animate-duration-[2000ms] animate-delay-300 animate-ease-linear animate-normal animate-fill-forwards">
            <img
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={picture}
                alt="" />
            <div className="flex flex-col justify-start p-6">
                <h5
                    className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    {name}
                </h5>
                <p className="flex justify-between mb-4 mt-6 text-base text-neutral-600 dark:text-neutral-200">
                    <span className='text-lg font-semibold font-sans mr-4'><span>{price}</span> tk</span>
                    <span className='text-lg font-semibold font-sans mr-4'><span>Total: {price * quantity}</span>tk</span>
                    <span className='text-lg font-semibold font-sans '><span>Quantity:{quantity}</span> </span>
                </p>
                <div className='flex justify-start text-xs text-neutral-500 dark:text-neutral-300'>
                    <button onClick={() => handleRemoveItem(id)} className='text-sm font-semibold font-sans'>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;