import React from 'react'
import ProductButton from './ProductButton'
import '../css/components/ProductGrid.css'

const ProductGrid = () => {
  return (
    <section className='container'>
      <div className='row row-cols-1 row-cols-md-2 g-3 gap-10'>
        <ProductButton title="Modern Black Blouse" price="$35.00"/>
        <ProductButton title="Modern Black Blouse" price="$35.00"/>
        <ProductButton title="Modern Black Blouse" price="$35.00"/>
        <ProductButton title="Modern Black Blouse" price="$35.00"/>        
        <ProductButton title="Modern Black Blouse" price="$35.00"/>
        <ProductButton title="Modern Black Blouse" price="$35.00"/>
        <ProductButton title="Modern Black Blouse" price="$35.00"/>
        <ProductButton title="Modern Black Blouse" price="$35.00"/>
      </div>
    </section>
  )
}

export default ProductGrid