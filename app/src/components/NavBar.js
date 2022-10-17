import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="main-layout">
      
      <div>
        <NavLink to="/" title="Fixxo" className="logo"/>
      </div>
      
      <div className="text-align-center">
          <NavLink to="/" end className="main-link">Home</NavLink>
          <NavLink to="/categories" className="main-link">Categories</NavLink>
          <NavLink to="/products" className="main-link">Products</NavLink>
          <NavLink to="/contact" className="main-link">Contact</NavLink>
      </div>
      
      <div>
          <NavLink to="/search" className="button-icon fa fa-search"></NavLink>
          <NavLink to="/compare" className="button-icon fa fa-code-compare"></NavLink>
          <NavLink to="/wishlist" className="button-icon fa fa-heart" badge="1"></NavLink>
          <NavLink to="/cart" className="button-icon fa fa-shopping-bag" badge="3"></NavLink>
      </div>
      
  </nav>
  )
}

export default NavBar