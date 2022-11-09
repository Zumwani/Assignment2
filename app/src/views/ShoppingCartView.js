import React from 'react'
import { NavLink } from 'react-router-dom';
import { formatCurrency } from '../Utility/CurrencyUtility';
import { useShoppingCart } from '../Utility/ShoppingCartUtility'
import ShoppingCartItem from '../components/ShoppingCartItem';

const ShoppingCartView = () => {

    const { cartItems } = useShoppingCart();

    return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="shopping-cart" aria-labelledby="shopping-cart">
        <div className="offcanvas-header">
            <h5 id="shopping-cart-label"><i className='fa-regular fa-shopping-bag me-3'></i>Your shopping cart</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            
            <div className='scrollable flex-grow-1'>
            { 
                cartItems.length == 0
                ? <p className='ms-5 mb-2'>No items in cart.</p>
                : cartItems.map(item => (<ShoppingCartItem key={item.articleNumber} item={item}/>)) 
            }
            </div>

            <div className='position-relative flex-grow-0 flex-shrink-0 mb-2'>
                <p className='total-price'><b>{ "Price total: " + formatCurrency(cartItems.reduce((partialSum, item) => partialSum + (item.product.price * item.quantity), 0))}</b></p>
                <button className='checkout'>Checkout</button>
            </div>

            <div className='d-lg-none nav mb-4 flex-grow-0 flex-shrink-0'>
                <div className={"d-flex flex-column"}>
                    <NavLink end to="/" className="main-link">Home</NavLink>
                    <NavLink to="/categories" className="main-link">Categories</NavLink>
                    <NavLink to="/product" className="main-link">Products</NavLink>
                    <NavLink end to="/contact" className="main-link">Contact</NavLink>
                    <NavLink end to="/search">Search</NavLink>
                    <NavLink end to="/compare">Compare</NavLink>
                    <NavLink end to="/wishlist"><p badge="1">Wishlist</p></NavLink>
                </div>
            </div>

        </div>
    </div>
    )

}

export default ShoppingCartView