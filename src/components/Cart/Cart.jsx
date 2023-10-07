import React, { useContext } from 'react';
import { CartContext } from '../Root/Root';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { removeFromDb } from '../../utils/fakeDb';

const Cart = () => {
    const [cart, setCurt] = useContext(CartContext)
    // console.log(cart)

    // remove Cart item
    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCurt(remaining)
        removeFromDb(id)
    }

    // total Product count
    let total = 0
    for (const totalPrice of cart) {
        total = total + totalPrice.price * totalPrice.quantity;
    }

    const handleRemoveCart = () => {
        setCurt([])
    }



    return (
        <div className='sm:w-1/2 mx-auto border rounded p-5 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200'>
            <h2 className='text-3xl font-sans font-bold text-gray-800'>ORDER PRODUCT</h2>
            <ul>
                {
                    cart.map(product => <CartItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></CartItem>)
                }
            </ul>
            <h4 className='text-2xl text-gray-800 font-sans font-semibold text-end'>Total Amount: {total}<span>tk</span></h4>
            <p className='text-end'>happy shop</p>
            <div className='text-end'>
                <Link to='/shop'>
                    <button className="text-sm text-white font-bold mt-10 py-2 px-6 rounded-lg bg-gradient-to-r from-sky-400 to-cyan-300 hover:bg-cyan-800 ">Back to Shop</button>
                </Link>
                <button onClick={handleRemoveCart} className="text-sm font-bold mt-10 py-2 px-6 border-solid border-2 border-sky-500  ml-4 rounded-lg">Order Cancel</button>
            </div>
        </div>
    );
};

export default Cart;