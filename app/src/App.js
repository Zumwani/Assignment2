import './_scss/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainView from './views/MainView';
import ContactView from './views/ContactView';
import NotFoundView from './views/NotFoundView';
import ProductView from './views/ProductView';
import { useState, createContext, useEffect } from 'react';
import ProductsView from './views/ProductsView';
import { ProductContext } from './Contexts/Contexts';

//TODO: Fix responsive
//TODO: Add quickview popup and fix product buttons
//TODO: Fix bad animations on buttons when using touch
//TODO: Finish rest of main-view
//TODO: Finish product-page
//TODO: Add animations

function App() {
  
  const [products, setProducts] = useState(
    { 
      all: [], 
      featured: [], 
      sale1: [], 
      sale2: [], 
      latest: [], 
      bestSelling: [], 
      topReacted: [] 
    });

  useEffect(() => {

    const fetchAllProducts = async () => {
      let result = await fetch("https://win22-webapi.azurewebsites.net/api/products");
      let json = await result.json();
      setProducts({...products, 
        all: json, 
        featured: json.slice(0, 8), 
        sale1: json.slice(0, 4), 
        sale2: json.slice(0, 4), 
        latest: json.slice(0, 3), 
        bestSelling: json.slice(0, 3),
        topReacted: json.slice(0, 3)
      });
    }
    
    fetchAllProducts();

  }, [setProducts]);

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <ProductContext.Provider value={products}>
          <Routes>
            <Route path="/" element={<MainView/>}/>
            <Route path='/product/:title' element={<ProductView/>}/>
            <Route path='/products' element={<ProductsView/>}/>
            <Route path="/contact" element={<ContactView/>}/>
            <Route path="*" element={<NotFoundView/>}/>
          </Routes>
        </ProductContext.Provider>
        <Footer/>
      </BrowserRouter>
    </>
  );

}

export default App;
