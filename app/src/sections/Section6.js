import React, { useContext } from 'react'
import ProductGrid from '../components/ProductGrid'
import SaleButton from '../components/SaleButton';
import { ProductContext } from '../Contexts/Contexts';

const Section6 = () => {

    const products = useContext(ProductContext);

    return (
        <>
        <section className="d-flex flex-rows main-layout">
            <ProductGrid products={products.sale2}/>
            <SaleButton title="2 for USD $49"/>
        </section>
        </>
    )

}

export default Section6