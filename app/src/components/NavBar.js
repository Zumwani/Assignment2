import React from 'react'
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../Utility/ShoppingCartUtility';
import IconButton from './IconButton';

const NavBar = () => {

  //Set color to transparent when scrollbar is at top
  const setTransparentWhenScrollbarIsAtTop = () => {
    const nav = document.querySelector("nav");
    nav?.classList?.toggle("top", window.scrollY == 0);
  }

  document.addEventListener('scroll', setTransparentWhenScrollbarIsAtTop);
  setTransparentWhenScrollbarIsAtTop();

  const { cartQuantity } = useShoppingCart();

  return (
    <>
      <nav className="top">
        <div className='main-layout'>
        
          <div className='container'>
            <NavLink end to="/" title="Fixxo" className="logo"/>
          </div>
          
          <div className="container text-align-center d-none d-lg-block">
              <NavLink end to="/" className="main-link">Home</NavLink>
              <NavLink to="/categories" className="main-link">Categories</NavLink>
              <NavLink to="/products" className="main-link">Products</NavLink>
              <NavLink end to="/contact" className="main-link">Contact</NavLink>
          </div>
          
          <div className="container justify-content-right mt-3">

              <NavLink end to="/search" className="d-none d-lg-inline"><IconButton icon="fa-search"/></NavLink>
              <NavLink end to="/compare" className="d-none d-lg-inline"><IconButton icon="fa-code-compare"/></NavLink>
              <NavLink end to="/wishlist" badge="1" className="d-none d-lg-inline"><IconButton icon="fa-heart"/></NavLink>

              {/* The following buttons opens sidebar, first is large viewport, second is small */}
              <button className="button-icon sidebar d-none d-lg-inline fa fa-shopping-bag" badge={cartQuantity ?? 0} type="button" data-bs-toggle="offcanvas" data-bs-target="#shopping-cart" aria-controls="shopping-cart"></button>
              <button className="button-icon sidebar fa fa-bars d-inline d-lg-none" badge={cartQuantity ?? 0} type="button" data-bs-toggle="offcanvas" data-bs-target="#shopping-cart" aria-controls="shopping-cart"></button>

          </div>

        </div>

      </nav>

  </>
  )
}

export default NavBar