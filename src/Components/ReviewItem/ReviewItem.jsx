import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {id, img, price, quantity, saller, stock, shipping, name, category} = product
    return (
        <div className='review-container'>
                <img className='' src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name} {quantity}</p>
                <p>Price: {price}</p>
                <p>Shipping Charge: {shipping}</p>
            </div>
            <button onClick={ () => handleRemoveFromCart(id)} className='review-btn'>D</button>
        </div>
    );
};

export default ReviewItem;