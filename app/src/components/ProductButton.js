import React from 'react'
import '../css/components/ProductButton.css'
import ActionButton from '../components/ActionButton'
import IconButton from './IconButton'
import { NavLink } from 'react-router-dom'
import Rating from './Rating'

const ProductButton = (props) => {
  return (
    <div className="button-product container">
    <img className="sm-row" src="" title="" alt=""></img>
    <p>{props.category ?? "Category"}</p>
    <p>{props.title}</p>
    <Rating count={props.rating ?? 0}/>
    <p>{props.price}</p>
    <div className="hover-box">
        <NavLink to={"/products?id=" + props.id ?? 0}><ActionButton text="Quick View" color="red"/></NavLink>
        <div className="icon-buttons vertical">
            <IconButton icon="fa-heart"/>
            <IconButton icon="fa-code-compare"/>
            <IconButton icon="fa-bag-shopping"/>
        </div>
    </div>
</div>
  )
}

export default ProductButton