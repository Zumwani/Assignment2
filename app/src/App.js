import './_scss/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainView from './views/MainView';
import ContactView from './views/ContactView';
import NotFoundView from './views/NotFoundView';
import ProductView from './views/ProductView';
import ProductsView from './views/ProductsView';
import CategoriesView from './views/CategoriesView';
import { ProductProvider } from './Utility/ProductUtility';
import { ShoppingCartProvider } from './Utility/ShoppingCartUtility';

//TODO: Fix responsive
//TODO: Fix bad animations on buttons when using touch
//TODO: Fix the two weird align sections
//TODO: Add animations
//TODO: Fix orientation of product button at bottom of page

function App() {

  return (
      <BrowserRouter>
      <ShoppingCartProvider>
        <ProductProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<MainView/>}/>
            <Route path='/product/:name' element={<ProductView/>}/>
            <Route path='/products' element={<ProductsView/>}/>
            <Route path='/products/:id' element={<ProductsView/>}/>
            <Route path="/contact" element={<ContactView/>}/>
            <Route path="/categories" element={<CategoriesView/>}/>
            <Route path="/categories/:category" element={<CategoriesView/>}/>
            <Route path="*" element={<NotFoundView/>}/>
          </Routes>
          <Footer/>
        </ProductProvider>
      </ShoppingCartProvider>
      </BrowserRouter>
  );

}

export default App;
