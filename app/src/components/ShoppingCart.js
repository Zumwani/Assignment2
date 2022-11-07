import React from 'react'
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../Utility/ShoppingCartUtility'
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = () => {

    const { cartItems } = useShoppingCart();

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="shopping-cart" aria-labelledby="shopping-cart">
        <div className="offcanvas-header">
            <h5 id="shopping-cart-label"><i className='fa-regular fa-shopping-bag me-3'></i>Your shopping cart</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <div className='d-lg-none'>
                <div className={"d-flex flex-column align-self-end"}>
                    <NavLink end to="/" className="main-link">Home</NavLink>
                    <NavLink end to="/categories" className="main-link">Categories</NavLink>
                    <NavLink to="/products" className="main-link">Products</NavLink>
                    <NavLink end to="/contact" className="main-link">Contact</NavLink>
                    <NavLink end to="/search">Search</NavLink>
                    <NavLink end to="/compare">Compare</NavLink>
                    <NavLink end to="/wishlist" badge="1">Wishlist</NavLink>
                </div>
            </div>
            { cartItems.map(item => (<ShoppingCartItem key={item.articleNumber} item={item}/>)) }
        </div>
    </div>
  )

}

export default ShoppingCart