import React from 'react'
import ActionButton from '../components/ActionButton'
import Rating from './Rating'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../Utility/ShoppingCartUtility'
import { formatCurrency } from '../Utility/CurrencyUtility'

const ProductButton = ({ product }) => {

  const { incrementQuantity } = useShoppingCart();
  let productUrl = "/product/" + product.name.replaceAll(" ", "-").toLowerCase();
  let categoryUrl = "/products/" + product.category.replaceAll(" ", "-").toLowerCase();

  return (
    <div className="button-product container">

      <img className="sm-row" src={product.imageName} title={product.name} alt={product.name}></img>
      <NavLink to={categoryUrl}><p className='mt-3'>{product.category ?? "Category"}</p></NavLink>
      <NavLink to={productUrl}><b>{product.name}</b></NavLink>
      <Rating count={product.rating ?? 0}/>
      <p>{formatCurrency(product.price)}</p>

      <div className="hover-box">
          <NavLink to={productUrl}><ActionButton text="Quick View" color="red"/></NavLink>
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