import './_scss/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainView from './views/MainView';
import ContactView from './views/ContactView';
import NotFoundView from './views/NotFoundView';
import ProductView from './views/ProductView';
import { useState, createContext } from 'react';
import ProductsView from './views/ProductsView';
import { ProductContext } from './Contexts/Contexts';

//TODO: Fix responsive
//TODO: Add quickview popup and fix product buttons
//TODO: Fix bad animations on buttons when using touch
//TODO: Finish rest of main-view
//TODO: Finish product-page
//TODO: Add animations

function App() {
  
  const [products, setProducts] = useState([
    { id: 1, title: "Modern Black Blouse", category: "Fashion", price: "$35.00",  rating: 4, image: "https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, title: "Modern Black Blouse", category: "Fashion", price: "$33.00",  rating: 4, image: "https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, title: "Modern Black Blouse", category: "Fashion", price: "$355.00", rating: 4, image: "https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 4, title: "Modern Black Blouse", category: "Fashion", price: "$5.00",   rating: 4, image: "https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },    
    { id: 5, title: "Modern Black Blouse", category: "Fashion", price: "$35.00",  rating: 4, image: "https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 6, title: "Modern Black Blouse", category: "Fashion", price: "$33.00",  rating: 4, image: "https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 7, title: "Modern Black Blouse", category: "Fashion", price: "$355.00", rating: 4, image: "https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 8, title: "Modern Black Blouse", category: "Fashion", price: "$5.00",   rating: 4, image: "https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  ]);

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
