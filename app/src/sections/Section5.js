import React, { useContext } from 'react'
import ProductGrid from '../components/ProductGrid'
import SaleButton from '../components/SaleButton';
import { ProductContext } from '../Contexts/Contexts';

const Section5 = () => {

    const products = useContext(ProductContext);

    return (
        <>
        <section className="d-flex flex-rows main-layout">
            <SaleButton title="2 for USD $29"/>
            <ProductGrid products={products.sale1}/>
        </section>
        </>
    )

}

export default Section5