import { createContext, useContext, useEffect, useState } from "react";

const url = "https://win22-webapi.azurewebsites.net/api/products/";

export const ProductContext = createContext();

export const useProducts = () => {
  return useContext(ProductContext);
}

export const getProduct = async (articleNumber) => {
  let result = await fetch(url + articleNumber);
  return await result.json();
}

export const ProductProvider = ({ children }) => {
  
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
  
    const getProduct = (articleNumber) =>
      products.all.find(p => p.articleNumber == articleNumber || p.name.replaceAll(" ", "-").toLowerCase() == articleNumber);

    useEffect(() => {
  
      const fetchAllProducts = async () => {
  
        let result = await fetch(url);
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

  return <>
  <ProductContext.Provider value={{ products, getProduct }}>
      {children}
  </ProductContext.Provider>
  </>

}

export const productURL = (product) =>
  product == null ? null : "/product/" + product.name.replaceAll(" ", "-").toLowerCase();

export const categoryURL = (product) =>
  product == null ? null : "/products/" + product.category.replaceAll(" ", "-").toLowerCase();