import React, { useContext } from 'react';
import { CartContext } from '../Root/Root';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { removeFromDb } from '../../utils/fakeDb';
import { toast } from 'react-toastify';

const Cart = () => {
    const [cart, setCurt] = useContext(CartContext)
    // console.log(cart)

    // remove Cart item
    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCurt(remaining)
        removeFromDb(id)
        toast.warn('Item remove', { autoClose: 300 })
    }

    // total Product count
    let total = 0
    for (const totalPrice of cart) {
        total = total + totalPrice.price * totalPrice.quantity;
    }

    // whole card delete
    const handleRemoveCart = () => {
        setCurt([])
        toast.warning('Cart Delete', { autoClose: 300 })
    }

    return (
        <div className='sm:w-1/2 mx-auto border rounded p-5 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800'>
            <h2 className='text-3xl font-sans font-bold text-white text-center'>ORDER PRODUCT</h2>
            <ul>
                {
                    cart.map(product => <CartItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></CartItem>)
                }
            </ul>
            <h4 className='text-2xl font-sans font-semibold text-end text-white'>Total Amount: {total}<span>tk</span></h4>
            <p className='text-end text-white'>happy shop</p>
            <div className='text-end'>
                <Link to='/shop'>
                    <button className="text-sm font-bold mt-10 py-2 px-6 rounded-lg shadow-inner shadow-indigo-500/100 text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">Back to Shop</button>
                </Link>
                <button onClick={handleRemoveCart} className="text-sm font-bold text-white mt-10 py-2 px-6 border-solid border-2 border-sky-500  ml-4 rounded-lg">Order Cancel</button>
            </div>
        </div>
    );
};

export default Cart;