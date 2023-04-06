import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import  './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData()

    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !==id)
        removeFromDb(id)
        setCart(remaining)
    }
    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }
    // console.log(savedCart)
    return (
        <div className='shop-container'>
            <div className='single-order'>
                 <h1>Orders Page {savedCart.length}</h1>
                 {
                    cart.map( product => <ReviewItem
                        handleRemoveFromCart={handleRemoveFromCart}
                        key={product.id}
                        product={product}
                    ></ReviewItem>)
                 }
            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                    <Link to="/checkout">
                        <button className='proceed-check-btn'>Proceed checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;