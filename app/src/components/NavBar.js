import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import IconButton from './IconButton';

const NavBar = () => {

  let [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <>
      <nav className="main-layout">
        
        <div>
          <NavLink end to="/" title="Fixxo" className="logo"/>
        </div>
        
        <div className="text-align-center d-none d-lg-block">
            <NavLink end to="/" className="main-link">Home</NavLink>
            <NavLink end to="/categories" className="main-link">Categories</NavLink>
            <NavLink to="/product" className="main-link">Products</NavLink>
            <NavLink end to="/contact" className="main-link">Contact</NavLink>
        </div>
        
        <div className="d-none d-lg-block">
            <NavLink end to="/search"><IconButton icon="fa-search"/></NavLink>
            <NavLink end to="/compare"><IconButton icon="fa-code-compare"/></NavLink>
            <NavLink end to="/wishlist" badge="1"><IconButton icon="fa-heart"/></NavLink>
            <NavLink end to="/cart" badge="3"><IconButton icon="fa-shopping-bag"/></NavLink>
        </div>
        
        <button onClick={toggleMenu} className="button-icon fa fa-bars d-lg-none">
        </button>

      </nav>

      <div className='d-lg-none'>
          <div className={"mobile-menu container " + (showMenu ? "d-block" : "d-none")}>
            <div>
              <NavLink end to="/" className="main-link">Home</NavLink>
              <NavLink end to="/categories" className="main-link">Categories</NavLink>
              <NavLink to="/product" className="main-link">Products</NavLink>
              <NavLink end to="/contact" className="main-link">Contact</NavLink>
              <NavLink end to="/search">Search</NavLink>
              <NavLink end to="/compare">Compare</NavLink>
              <NavLink end to="/wishlist" badge="1">Wishlist</NavLink>
              <NavLink end to="/cart" badge="3">Cart</NavLink>
            </div>          
          </div>
      </div>
      
    </>
  )
}

export default NavBar