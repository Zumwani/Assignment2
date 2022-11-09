import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Breadcrumb from '../components/BreadcrumbSection';
import CategoryButton from '../components/CategoryButton';
import ProductButton from '../components/ProductButton';
import ProductGrid from '../components/ProductGrid';
import { useProducts } from '../Utility/ProductUtility'

const CategoriesView = () => {
  
  const { products } = useProducts();
  let categories = [...new Set(products.all.map(p => p.category))];

  const getImage = (category) =>
    products.all.find(p => p.category == category).imageName;

  const createCategoryButton = (category) =>
    <NavLink key={category} to={ "/products/" + category.replaceAll(" ", "-").toLowerCase() }><CategoryButton categoryName={category} image={getImage(category)}/></NavLink>;

  return (
    <>
      <Breadcrumb currentPage='Categories'></Breadcrumb>
      <ProductGrid products={categories} createButtonCallback={createCategoryButton} innerClassName="justify-content-center items-w-fit-content" className="main-layout"></ProductGrid>
    </>
    )

}

export default CategoriesView