import React from 'react'
import { NavLink } from 'react-router-dom';
import { productURL } from '../Utility/ProductUtility';
import { useWishlist } from '../Utility/WishlistUtility';

const WishlistItem = ({ product }) => {
    
    const { toggleItem } = useWishlist();

    return (
        <div className='shopping-cart-item d-flex flex-row'>
            <div className='item-image'>
                <NavLink to={productURL(product)}>
                    <img src={product.imageName ?? ""} alt={product.name}/>
                </NavLink>
            </div>
            <div className='item-info w-100'>
                <NavLink to={productURL(product)}>
                    <p>{product.name}</p>
                </NavLink>
            </div>
            <div className='price'>
                <button className='fa-regular fa-trash' onClick={() => toggleItem(product)}></button>
            </div>
        </div>
    )

}

export default WishlistItem