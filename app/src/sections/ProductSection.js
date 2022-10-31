import React, { useContext } from 'react'
import ProductGrid from '../components/ProductGrid'
import { ProductContext } from '../Contexts/Contexts'

const ProductSection = ({title}) => {

  const products = useContext(ProductContext);

  return (
    <section>
      <h5 className='mb-5 mt-5'>{title}</h5>
      <ProductGrid products={products}/>
    </section>
  )

}

export default ProductSection