import React from 'react'
import ProductButton from './ProductButton'

const ProductGrid = ({ products }) => {

  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-2 g-3 gap-10'>
        { 
        Array.isArray(products) && products.length > 0
        ? products.map(p => <ProductButton key={p.articleNumber} product={p}/>)
        : <p className='error'>Unable to retrieve products, please try again in a moment.</p>
        }
      </div>
    </div>
  )

}

export default ProductGrid