import { createContext, useContext, useState } from "react";
import ShoppingCart from "../views/ShoppingCartView";

const ShoppingCartContext = createContext();

export const useShoppingCart = () =>
    useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const cartQuantity = cartItems?.reduce(
        (quantity, item) => item.quantity + quantity, 0
    );

    const getItemsQuantity = (articleNumber) =>
        cartItems.find(item => item.articleNumber === articleNumber)?.quantity || 0;

    const decrementQuantity = (cartItem, by = 1) => incrementQuantity(cartItem, -by);
    const incrementQuantity = (cartItem, by = 1) => {
        
        if (cartItem == null || cartItem.articleNumber == null)
            return;

        const { articleNumber, product } = cartItem;

        setCartItems(items => {
            
            if (items.find(item => item.articleNumber === articleNumber) == null)
                return [...items, { articleNumber, product, quantity: by }];
            else
                return items.map(item => 
                    item.articleNumber === articleNumber && item.quantity + by >= 1
                    ? {...item, quantity: item.quantity + by}
                    : item);

        });

    }

    const removeItem = (articleNumber) =>
        setCartItems(items => items.filter(item => item.articleNumber !== articleNumber));

    const toCartItem = (product) => {
        return { articleNumber: product.articleNumber, product: product, quantity: 1 };
    }

    return <>
    <ShoppingCartContext.Provider value={{ cartItems, cartQuantity, getItemsQuantity, incrementQuantity, decrementQuantity, removeItem, toCartItem }}>
        {children}
        <ShoppingCart/>
    </ShoppingCartContext.Provider>
    </>

}