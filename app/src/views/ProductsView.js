import React from 'react'
import ProductGrid from '../components/ProductGrid';
import BreadcrumbSection from '../components/BreadcrumbSection';
import { useProducts } from '../Utility/ProductUtility';
import { useParams } from 'react-router-dom';

const ProductsView = () => {

    const { id } = useParams();
    const { products } = useProducts();

    return (
        <>
            <BreadcrumbSection currentPage='Products'/>
            <ProductGrid products={getProducts(id, products)} innerClassName="justify-content-center" className="main-layout2"/>
        </>
    )

}

const getProducts = (id, products) =>
    products.all.find(p => p != null && p.category.toLowerCase() == id)
    ? products.all.filter(p => p.category.toLowerCase() === id)
    : products.all;

export default ProductsView