import React from 'react'
import { formatCurrency } from '../Utility/CurrencyUtility';
import { useShoppingCart } from '../Utility/ShoppingCartUtility'

const ShoppingCartItem = ({ item }) => {
    
    const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart();

    console.log(item);
    
    return (
        <div className='shopping-cart-item d-flex flex-row'>
            <div className='item-image'>
                <img src={item.product.imageName ?? ""} alt={item.product.name}/>
            </div>
            <div className='item-info w-100'>
                <p>{item.product.name}</p>
                <div className='quantity'>
                    <button onClick={() => decrementQuantity(item) }>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item) }>+</button>
                </div>
            </div>
            <div className='price'>
                <p>{ formatCurrency(item.product.price * item.quantity)}</p>
                <button className='fa-regular fa-trash' onClick={() => removeItem(item.articleNumber)}></button>
            </div>
        </div>
    )

}

export default ShoppingCartItem