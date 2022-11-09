import React from 'react'
import ProductButton from './ProductButton'

const ProductGrid = ({ products, columns = 1, className, innerClassName, createButtonCallback = createProductButton, itemClassName }) => {
  
  return (
    <div className={'container ' + (className ?? "")}>
      <div className={'row w-100 g-30 ml-10 col-' + columns + ' ' + (innerClassName ?? '')}>
        {
          products == null || products.length == 0
          ? <p className='error'>An error occured when retrieving products, please try again in a moment.</p>
          : products.map(p => createButtonCallback(p, itemClassName))
        }
      </div>
    </div>
  )

}

const createProductButton = (item, itemClassName) => {
  return item == null ? null : <ProductButton key={item.articleNumber} product={item} className={itemClassName}/>
} 

export default ProductGrid