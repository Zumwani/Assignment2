import React from 'react'
import ProductButton from '../components/ProductButton'
import SaleButton from '../components/SaleButton'
import { useProducts } from '../Utility/ProductUtility'

const WeirdAlignSections = () => {

    const { products } = useProducts();

    return (
        <section className='weird-align main-layout s-align-center'>
            <SaleButton className="grid-area" image="model7"/>
            <SaleButton className="grid-area" image="model8"/>

            { products.sale1.map(p => <ProductButton key={p.articleNumber} product={p}/>) }
            { products.sale2.map(p => <ProductButton key={p.articleNumber} product={p}/>) }

        </section>
    )

}

export default WeirdAlignSections