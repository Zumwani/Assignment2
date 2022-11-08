import React from 'react'
import ProductGrid from '../components/ProductGrid'
import SaleButton from '../components/SaleButton';
import { useProductContext } from '../Utility/ProductUtility';

const _TwoFor$29Section = () => {

    const {products} = useProductContext();

    return (
        <>
        <section className="d-flex flex-rows main-layout">
            <SaleButton title="2 for USD $29" image="model7"/>
            <ProductGrid products={products.sale1} columns="8" className="w-540 g-30-offset"/>
        </section>
        </>
    )

}

export default _TwoFor$29Section