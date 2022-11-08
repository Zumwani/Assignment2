import React from 'react'
import ActionButton from '../components/ActionButton'
import { NavLink } from 'react-router-dom'
import Rating from './Rating'
import { useShoppingCart } from '../Utility/ShoppingCartUtility'
import { formatCurrency } from '../Utility/CurrencyUtility'

const ProductButton = ({ product }) => {

  const { incrementQuantity } = useShoppingCart();

  return (
    <div className="button-product container">
      <img className="sm-row" src={product.imageName} title={product.name} alt={product.name}></img>
      <p className='mt-3'>{product.category ?? "Category"}</p>
      <b>{product.name}</b>
      <Rating count={product.rating ?? 0}/>
      <p>{formatCurrency(product.price)}</p>
      <div className="hover-box">
          <NavLink to={"/product/" + product.name.replaceAll(" ", "-").toLowerCase()}><ActionButton text="Quick View" color="red"/></NavLink>
          <div className="icon-buttons d-flex flex-sm-column">
              <button className='row button-icon fa fa-heart' onClick={() => {}}/>
              <button className='row button-icon fa fa-code-compare' onClick={() => {}}/>
              <button className='row button-icon fa fa-bag-shopping' onClick={() => incrementQuantity({ articleNumber: product.articleNumber, product: product })}/>
          </div>
      </div>
    </div>
  )

}

export default ProductButton