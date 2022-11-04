import React from 'react'
import ProductButton from './ProductButton'

const ProductGrid = ({ products, justifyContent = "start", columns }) => {

  products = Array.from(products);
  
  return (
    <div className='container'>
      <div className={'row col-' + columns + ' g-3 justify-content-' + justifyContent}>
        { 
        products.map(p => <ProductButton key={p.articleNumber} product={p}/>)
        }
      </div>
    </div>
  )

}

export default ProductGrid