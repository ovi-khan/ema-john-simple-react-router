import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {id, img, name, price, seller, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h2>{name}</h2>
                <h4>Price: ${price}</h4>
                <h4>Ratings: {ratings}</h4>
                <h4>Manufacturar: {seller}</h4>
            </div>
            <button onClick={()=> handleAddToCart(props.product)} className='cart-btn'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;