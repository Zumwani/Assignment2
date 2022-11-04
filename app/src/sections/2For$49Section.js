import React, { useContext } from 'react'
import ProductGrid from '../components/ProductGrid'
import SaleButton from '../components/SaleButton';
import { ProductContext } from '../Contexts/Contexts';

const Section6 = () => {

    const products = useContext(ProductContext);

    return (
        <>
        <section className="main-layout">
            <div className='d-flex flex-rows'>
                <ProductGrid products={products.sale2} columns="1" className="text-end w-540"/>
                <SaleButton title="2 for USD $49" image="model8"/>
            </div>
        </section>
        </>
    )

}

export default Section6