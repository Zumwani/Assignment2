import React from 'react'
import ProductGrid from '../components/ProductGrid';
import { useProductContext } from '../Utility/ProductUtility';

const Latest_BestSelling_TopReactedSection = () => {

    const products = useProductContext();

    return (
        <section className="main-layout2 container row p-0 text-start">

            <div className="col container gap-35 p-0">
                <h5 className="mb-4 p-0">Latest Products</h5>
                <ProductGrid products={products.latest}/>
            </div>

            <div className="col container gap-35 p-0">
                <h5 className="mb-4 p-0">Best Selling Products</h5>
                <ProductGrid products={products.bestSelling}/>
            </div>

            <div className="col container gap-35 p-0">
                <h5 className="mb-4 p-0">Top Reacted Products</h5>
                <ProductGrid products={products.topReacted}/>
            </div>

        </section>
    )

}

export default Latest_BestSelling_TopReactedSection