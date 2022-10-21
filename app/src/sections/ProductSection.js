import React from 'react'
import ProductGrid from '../components/ProductGrid'

const ProductSection = ({title, products}) => {
  return (
    <section>
      <h5 className='mb-5 mt-5'>{title}</h5>
      <ProductGrid products={products}/>
    </section>
  )
}

export default ProductSection