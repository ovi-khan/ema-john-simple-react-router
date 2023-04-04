import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/order">Order</a>
                <a href="/orderRevies">Order Review</a>
                <a href="/manageInventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;