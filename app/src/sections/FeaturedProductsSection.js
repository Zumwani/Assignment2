import React from 'react'
import ProductGrid from '../components/ProductGrid';
import { useProductContext } from '../Utility/ProductUtility';

const FeaturedProductsSection = () => {

    const products = useProductContext();

    return (
        <section className='mx-auto w-fit-content'>
            <h5 className='mb-5 mt-5'>Featured products</h5>
            <ProductGrid products={products.featured} columns="10" innerClassName='justify-content-evenly'/>
        </section>
    )

}

export default FeaturedProductsSection