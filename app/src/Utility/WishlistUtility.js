import { createContext, useContext, useState } from "react";
import WishlistView from "../views/WishlistView";
import { useProducts } from "./ProductUtility";

const WishlistContext = createContext();

export const useWishlist = () =>
    useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {

    const [wishlistItems, setWishlistItems] = useState([]);

    const wishlistQuanitity = wishlistItems?.length ?? 0;
    const isWishlisted = (product) => wishlistItems.find(item => item == product.articleNumber);

    const toggleItem = (product) => {

        let items = [...wishlistItems];

        var index = items.indexOf(product.articleNumber);

        if (index === -1) {
            items.push(product.articleNumber);
        } else {
            items.splice(index, 1);
        }
        
        setWishlistItems(items);

    }

    return (
        <WishlistContext.Provider value={{ wishlistItems, wishlistQuanitity, toggleItem, isWishlisted }}>
            {children}
            <WishlistView/>
        </WishlistContext.Provider>
    )
    
}

