import React, { useState } from 'react'
import '../css/views/main-page.css'
import Showcase from '../sections/Section0'
import Section1 from '../sections/Section1'
import ProductSection from '../sections/ProductSection'
import Section3 from '../sections/Section3'

const MainView = () => {

  const [featuredProducts, setFeaturedProducts] = useState([
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
        <Showcase/>
        <Section1/>
        <ProductSection title="Featured Products" products={featuredProducts}/>
        <Section3/>
    </>
  )

}

export default MainView