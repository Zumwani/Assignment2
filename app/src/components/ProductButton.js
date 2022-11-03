import React from 'react'
import ActionButton from '../components/ActionButton'
import { NavLink } from 'react-router-dom'
import Rating from './Rating'

const ProductButton = ({ product }) => {

  const addToWishlist = (id) => { console.log(id + " added to wishlist"); };
  const addToCompare = (id) => { console.log(id + " added to compare"); };
  const addToCart = (id) => { console.log(id + " added to cart"); };

  return (
    <div className="button-product container">
      <img className="sm-row" src={product.imageName} title={product.name} alt=""></img>
      <p className=' mt-3'>{product.category ?? "Category"}</p>
      <p>{product.name}</p>
      <Rating count={product.rating ?? 0}/>
      <p>{product.price}</p>
      <div className="hover-box">
          <NavLink to={"/product/" + product.name.replaceAll(" ", "-").toLowerCase()}><ActionButton text="Quick View" color="red"/></NavLink>
          <div className="icon-buttons d-flex flex-sm-column">
              <button onClick={() => addToWishlist(product.id)} className='row button-icon fa fa-heart'/>
              <button onClick={() => addToCompare(product.id)} className='row button-icon fa fa-code-compare'/>
              <button onClick={() => addToCart(product.id)} className='row button-icon fa fa-bag-shopping'/>
          </div>
      </div>
    </div>
  )

}

export default ProductButton