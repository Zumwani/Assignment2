import React from 'react'
import ProductButton from './ProductButton'

const ProductGrid = ({ products, columns, className, innerClassName }) => {
  
  return (
    <div className={'container ' + (className ?? "")}>
      <div className={'row w-100 g-30 ml-10 col-' + columns + ' ' + (innerClassName ?? '')}>
        {
          products.map(p => <ProductButton key={p.articleNumber} product={p}/>)
        }
      </div>
    </div>
  )

}

export default ProductGrid