import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Breadcrumb from '../components/BreadcrumbSection';
import ExternalLink from '../components/ExternalLink';
import Rating from '../components/Rating';
import UpDown from '../components/UpDown';
import { formatCurrency } from '../Utility/CurrencyUtility';
import { useProducts } from '../Utility/ProductUtility';
import { useShoppingCart } from '../Utility/ShoppingCartUtility';
import ProductGrid from '../components/ProductGrid';

const ProductView = () => {
    
    const { name } = useParams();
    const { getProduct, products } = useProducts();
    const { incrementQuantity, decrementQuantity, getItemQuantity, removeItem } = useShoppingCart();

    const product = getProduct(name);
    const relatedProducts = products.all.slice(0, 4);

    return (
        product == null
        ? <p className='error'>Could not retrieve product, please try again in a moment.</p>
        : <>

            <Breadcrumb currentPage={<NavLink to="/products/">Products</NavLink>} page2={product.name}/>

            <section className='main-layout2 d-flex flex-rows'>

                <div className='w-100 h-100 me-5'>
                    <img src={product.imageName} className="w-100 h-100"/>
                    <div className='d-flex flex-rows w-100 h-100 mt-4 justify-content-between'>
                        <img src={product.imageName} className="w-160" />
                        <img src={product.imageName} className="w-160"/>
                        <img src={product.imageName} className="w-160"/>
                    </div>
                </div>

                <div className='w-100 text-start'>
                    <h5 className='mb-0'>{product.name}</h5>
                    <p className='color-gray'>{ "SKU: " + product.articleNumber}</p>
                    <p className='color-gray'>BRAND: The Northland</p>
                    <Rating count={product.rating}/>
                    <h6 className='m-2 ms-0'>{formatCurrency(product.price)}</h6>
                    <p className='color-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    
                    <div className='container'>
                        <div className='column'>
                            <p>dsad</p>
                        </div>
                        <div className='column'>

                            <p>f</p>
                        </div>

                    </div>

                    <fieldset>
                        <input id='size-s' name='size' type="radio"/>
                        <label for="size-s">S</label>
                        <input id='size-m' name='size' type="radio"/>
                        <label for="size-m">M</label>
                        <input id='size-l' name='size' type="radio"/>
                        <label for="size-l">L</label>
                        <input id='size-x' name='size' type="radio"/>
                        <label for="size-x">X</label>
                    </fieldset>
                    <select id='color'>
                        <option>Black</option>
                        <option>Blue</option>
                        <option>Green</option>
                        <option>White</option>
                        <option>Red</option>
                    </select>
                    <UpDown count={getItemQuantity(product.articleNumber)}
                        onIncrement={() => incrementQuantity(product)}
                        onDecrement={() => decrementQuantity(product)}
                        onRemove={() => removeItem(product.articleNumber)}/>

                    <div className='d-flex flex-rows'>
                        <ExternalLink link="https://facebook.com" className="fa fa-facebook"></ExternalLink>
                        <ExternalLink link="https://instagram.com" className="fab fa-instagram"></ExternalLink>
                        <ExternalLink link="https://twitter.com" className="fab fa-twitter"></ExternalLink>
                        <ExternalLink link="https://google.com" className="fab fa-google"></ExternalLink>
                        <ExternalLink link="https://linkedin.com" className="fab fa-linkedin"></ExternalLink>
                    </div>

                </div>

            </section>

            <section className='main-layout2'>

                <fieldset>
                    <input id='tab-description' name='tab' type="radio"/>
                    <label for="tab-description" className='tab-header w-fit-content'>Description</label>
                    <input id='tab-additional' name='tab' type="radio"/>
                    <label for="tab-additional" className='tab-header w-fit-content'>Additional</label>
                    <input id='tab-shopping-returns' name='tab' type="radio"/>
                    <label for="tab-shopping-returns" className='tab-header w-fit-content'>Shopping & Returns</label>
                    <input id='tab-reviews' name='tab' type="radio"/>
                    <label for="tab-reviews" className='tab-header w-fit-content'>Reviews</label>
                </fieldset>

                <tab className="tab-description active text-start ps-2">
                    <p className='mt-4'>Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.</p>
                    <p className='mt-4'>* Village did removed enjoyed explain nor ham saw calling talking.</p>
                    <p>* Securing as informed declared or margaret.</p>
                    <p>* Joy horrible moreover man feelings own shy.</p>
                    <p className='mt-4'>On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. </p>
                </tab>

                <tab className="tab-additional active">

                </tab>

                <tab className="tab-shopping-returns active">

                </tab>

                <tab className="tab-reviews active">

                </tab>

            </section>
            <section className='main-layout2'>
                <h5 className='text-start'>Related Products</h5>
                <ProductGrid products={relatedProducts}/>
            </section>
            
          </>
    )

}

export default ProductView