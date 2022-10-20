import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import IconButton from './IconButton';

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="main-layout">
      
      <div>
        <NavLink to="/" title="Fixxo" className="logo"/>
      </div>
      
      <div className={`text-align-center ${ !showMenu ? "o-0" : "" }`}>
          <NavLink to="/" end className="main-link">Home</NavLink>
          <NavLink to="/categories" className="main-link">Categories</NavLink>
          <NavLink to="/products" className="main-link">Products</NavLink>
          <NavLink to="/contact" className="main-link">Contact</NavLink>
      </div>
      
      <div>
          <NavLink to="/search"><IconButton icon="fa-search"/></NavLink>
          <NavLink to="/compare"><IconButton icon="fa-code-compare"/></NavLink>
          <NavLink to="/wishlist" badge="1"><IconButton icon="fa-heart"/></NavLink>
          <NavLink to="/cart" badge="3"><IconButton icon="fa-shopping-bag"/></NavLink>
      </div>
      
      <button onClick={toggleMenu} className="mobile-button button-icon fa fa-bars">
      </button>
      
  </nav>
  )
}

export default NavBar