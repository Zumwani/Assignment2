import React, { useState } from 'react'
import ProductButton from './ProductButton'
import '../css/components/ProductGrid.css'

const ProductGrid = ({products}) => {

  return (
    <section className='container'>
      <div className='row row-cols-1 row-cols-md-2 g-3 gap-10'>
        { 
          products.map(p => <ProductButton key={p.id} product={p}/>)
        }
      </div>
    </section>
  )

}

export default ProductGrid