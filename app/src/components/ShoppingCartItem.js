import React from 'react'
import { useShoppingCart } from '../Utility/ShoppingCartUtility'

const ShoppingCartItem = ({ item }) => {
    
    const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart();

    return (
        <div className='shopping-cart-item'>
            <div className='item-image'>
                <img src={item.product.image ?? ""} alt={item.product.name}/>
            </div>
            <div className='item-info'>
                <div>{item.product.name}</div>
                <div>
                    <button onClick={() => decrementQuantity(item) }>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item) }>+</button>
                </div>
            </div>
            <div className='price'>
                <div>{item.product.price * item.quantity}</div>
                <button className='fa-regular fa-trash' onClick={() => removeItem(item.articleNumber)}></button>
            </div>
        </div>
    )

}

export default ShoppingCartItem