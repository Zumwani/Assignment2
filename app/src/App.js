import './_scss/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainView from './views/MainView';
import ContactView from './views/ContactView';
import NotFoundView from './views/NotFoundView';
import ProductView from './views/ProductView';
import ProductsView from './views/ProductsView';
import { ProductContext, Use_ProductContext } from './Utility/ProductUtility';
import { useEffect, useState } from 'react';

//TODO: Fix responsive
//TODO: Add quickview popup and fix product buttons
//TODO: Fix bad animations on buttons when using touch
//TODO: Finish rest of main-view
//TODO: Finish product-page
//TODO: Add animations
//TODO: Fix orientation of product button at bottom of page

function App() {

  const products = Use_ProductContext();

  return (
      <BrowserRouter>
        <ProductContext.Provider value={products}>
          <NavBar/>
          <Routes>
            <Route path="/" element={<MainView/>}/>
            <Route path='/product/:id' element={<ProductView/>}/>
            <Route path='/products' element={<ProductsView/>}/>
            <Route path="/contact" element={<ContactView/>}/>
            <Route path="*" element={<NotFoundView/>}/>
          </Routes>
          <Footer/>
        </ProductContext.Provider>
      </BrowserRouter>
  );

}

export default App;
