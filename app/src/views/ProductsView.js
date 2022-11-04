import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import BreadcrumbSection from '../components/BreadcrumbSection';
import { ProductContext } from '../Contexts/Contexts';

const ProductsView = () => {

    const params = useParams();
    const products = useContext(ProductContext);
  
    return (
        <>
            <BreadcrumbSection currentPage='Products'></BreadcrumbSection>
            <div className='container mt-5'>
                <h1>{params.title}</h1>
            </div>
            <ProductGrid products={products.all}/>
        </>
    )

}

export default ProductsView