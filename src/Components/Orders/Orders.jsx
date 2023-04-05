import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import  './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData()

    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !==id)
        removeFromDb(id)
        setCart(remaining)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;