import React, { useContext } from 'react'
import ProductGrid from '../components/ProductGrid'
import SaleButton from '../components/SaleButton';
import { ProductContext } from '../Contexts/Contexts';

const Section6 = () => {

    const products = useContext(ProductContext);

    return (
        <>
        <section className="main-layout d-flex">
            <div className='d-flex flex-rows ms-auto'>
                <ProductGrid products={products.sale2} columns="1" className="w-540 g-30-offset"/>
                <SaleButton title="2 for USD $49" image="model8"/>
            </div>
        </section>
        </>
    )

}

export default Section6