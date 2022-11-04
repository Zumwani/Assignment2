import React, { useContext } from 'react'
import ProductGrid from '../components/ProductGrid';
import { ProductContext } from '../Contexts/Contexts';

const Section2 = () => {

    const products = useContext(ProductContext);

    return (
        <section>
            <h5 className='mb-5 mt-5'>Featured products</h5>
            <ProductGrid products={products.featured} columns="10" justifyContent='center'/>
        </section>
    )

}

export default Section2