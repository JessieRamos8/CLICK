/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../Styles/Components/ButtonsNavigation.scss';

import account from '../assets/images/user.png';
import productsImg from '../assets/images/products.png';
import client from '../assets/images/client.png';
import siclik from '../assets/images/siclik.png';
import support from '../assets/images/support.png';
import shoppingCart from '../assets/images/shoppingcart.png';

const ButtonsNavigation = ({ showAllFunction, products = 0 }) => {

    return (
        <div className='buttons-navigation-container'>
            <div onClick={() => showAllFunction('all products')} className='view-products-button'><img src={productsImg}/>Ver todos los productos</div>
            <div className='client-select'><img src={client}/>Cliente</div>
            <div className='siclick-button'><img src={siclik}/>siclik</div>
            <div className='support-button'><img src={support}/>Soporte</div>
            <div className='shopping-cart-button'><img src={shoppingCart}/>{products}</div>
            <div className='account-select'><img src={account}/></div>
        </div>
    );
}

export default ButtonsNavigation;