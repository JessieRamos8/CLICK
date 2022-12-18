/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import '../Styles/Components/ProductCard.scss';
import '../Styles/Components/QuantitySelectPanel.scss'
import shoppingcart from '../assets/images/shoppingcartgreen.png';
import { useEffect } from 'react';


const QuantitySelectPanel = ({shoppingCart, setShoppingCart, price}) => {

    const [ quantity, setQuantity ] = useState(0);
    const [ totalPrice, setTotalPrice ] = useState('00.00');

    useEffect(() => {
        const calculatedTotal = price * quantity;
        setTotalPrice(calculatedTotal.toFixed(2));
    }, [quantity]);

    return (
        <div className='product-quantity-select-container'>
            <div className='quantity-config-container'>
                <p className='product-config-title'>Configura tus productos.</p>
                <div className='information-tag-container'>
                    <p className='information-tag'>¿Cuántos quieres?</p>
                    <p className='information-tag light'>Disponible de 1 a 100</p>
                </div>
                <div className='quantity-select-container'>
                    <div className='shopping-cart-tag'><img src={shoppingcart} alt={'shopping-cart'}/></div>
                    <input 
                        className='quantity-input'
                        placeholder='Número de licencias'
                        type='number'
                        min={0}
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                    />
                </div>
            </div>
            <div className='price-calculation-container'>
                <p className='total-tag'>Total: ${totalPrice}</p>
                <button 
                    className='add-shopping-cart-button'
                    onClick={() => setShoppingCart(shoppingCart + quantity)}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default QuantitySelectPanel;
