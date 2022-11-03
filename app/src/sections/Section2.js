import React, { useContext } from 'react'
import { ProductContext } from '../Contexts/Contexts';
import ProductSection from '../sections/ProductSection';

const Section2 = () => {

    const products = useContext(ProductContext);

    return (
        <ProductSection title="Featured Products" products={products.featured}/>
    )

}

export default Section2