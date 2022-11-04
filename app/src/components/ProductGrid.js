import React from 'react'
import ProductButton from './ProductButton'

const ProductGrid = ({ products, columns, className }) => {
  
  return (
    <div className={'container ' + className ?? ""}>
      <div className={'row w-100 ml-10 col-' + columns}>
        {
          products.map(p => <ProductButton key={p.articleNumber} product={p}/>)
        }
      </div>
    </div>
  )

}

export default ProductGrid