import './_scss/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainView from './views/MainView';
import ContactView from './views/ContactView';
import NotFoundView from './views/NotFoundView';
import ProductView from './views/ProductView';

//TODO: Fix responsive
//TODO: Add quickview popup and fix product buttons
//TODO: Fix bad animations on buttons when using touch
//TODO: Finish rest of main-view
//TODO: Finish product-page
//TODO: Add animations

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<MainView/>}/>
          <Route path="/contact" element={<ContactView/>}/>
          <Route path='/product/:title' element={<ProductView/>}/>
          <Route path="*" element={<NotFoundView/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
