import { createContext, useContext } from "react";

export const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
}

// export const ProductProvider = ({ children }) => {

//   const url = "https://win22-webapi.azurewebsites.net/api/products/";
//   const [product, setProduct] = useState();
//   const [products, setProducts] = useState(
//   { 
//     all: [], 
//     featured: [], 
//     sale1: [], 
//     sale2: [], 
//     latest: [], 
//     bestSelling: [], 
//     topReacted: [] 
//   });

//   useEffect(() => {

//     const fetchAllProducts = async () => {

//       let result = await fetch(url);
//       let json = await result.json();

//       setProducts({...products, 
//         all: json, 
//         featured: json.slice(0, 8), 
//         sale1: json.slice(0, 4), 
//         sale2: json.slice(0, 4), 
//         latest: json.slice(0, 3), 
//         bestSelling: json.slice(0, 3),
//         topReacted: json.slice(0, 3)
//       });

//     }
    
//     fetchAllProducts();

//   }, [setProducts]);

//   const getProduct = async (articleNumber) => {
//     let result = await fetch(url + articleNumber);
//     setProduct(await result.json());
//   }
  
//   return <ProductContext.Provider value={{ products, product, getProduct }}>
//     {children}
//   </ProductContext.Provider>

// }