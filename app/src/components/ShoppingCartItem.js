import React from 'react'
import { NavLink } from 'react-router-dom';
import { formatCurrency } from '../Utility/CurrencyUtility';
import { productURL } from '../Utility/ProductUtility';
import { useShoppingCart } from '../Utility/ShoppingCartUtility'
import UpDown from './UpDown';

const ShoppingCartItem = ({ item }) => {
    
    const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart();
    
    return (
        <div className='shopping-cart-item d-flex flex-row'>
            <div className='item-image'>
                <NavLink to={productURL(item.product)}>
                    <img src={item.product.imageName ?? ""} alt={item.product.name}/>
                </NavLink>
            </div>
            <div className='item-info w-100'>
                <NavLink to={productURL(item.product)}>
                    <p>{item.product.name}</p>
                </NavLink>
                <UpDown count={item.quantity} onIncrement={() => incrementQuantity(item)} onDecrement={() => decrementQuantity(item)}/>
            </div>
            <div className='price'>
                <p>{ formatCurrency(item.product.price * item.quantity)}</p>
                <button className='fa-regular fa-trash remove-button' onClick={() => removeItem(item.articleNumber)}></button>
            </div>
        </div>
    )

}

export default ShoppingCartItem