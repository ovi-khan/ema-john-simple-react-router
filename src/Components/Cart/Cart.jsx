import React from "react";
import Product from '../Product/Product';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart /* option 1 */
    // const {cart} = props;  /* Option 2 */
    console.log(cart);
    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart) {
         totalPrice = totalPrice + product.price;
         totalShipping = totalShipping + product.shipping
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax
  return (
    <div className="cart">
      <h2>Order Summery</h2>
      <p>Selected Item: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shopping Charge: ${totalShipping}</p>
      <p>Tax: ${tax}</p>
      <h3>Grand Total: ${grandTotal}</h3>
    </div>
  );
};
export default Cart;
