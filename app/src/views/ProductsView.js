import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { ProductContext } from '../Contexts/Contexts';
import BreadcrumbSection from '../sections/BreadcrumbSection';

const ProductsView = () => {

    const params = useParams();
    const products = useContext(ProductContext);
  
    return (
        <>
            <BreadcrumbSection currentPage='Products'></BreadcrumbSection>
            <div className='container mt-5'>
                <h1>{params.title}</h1>
            </div>
            <ProductGrid products={products}/>
        </>
    )

}

export default ProductsView