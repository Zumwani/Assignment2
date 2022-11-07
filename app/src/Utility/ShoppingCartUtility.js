import { createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
}

export const ShoppingPartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const cartQuantity = cartItems?.reduce(
        (quantity, item) => item.quantity + quantity, 0
    );

    const getItemsQuantity = (articleNumber) => {
        return cartItems.find(item => item.articleNumber === articleNumber)?.quantity || 0;
    }

    const decrementQuantity = (cartItem, by = 1) => incrementQuantity(cartItem, -by);
    const incrementQuantity = (cartItem, by = 1) => {
        
        if (cartItem == null || cartItem.articleNumber == null)
            return;

        const { articleNumber, product } = cartItem;

        setCartItems(items => {
            
            if (items.find(item => item.articleNumber === articleNumber) == null)
                return [...items, { articleNumber, product, quantity: by }];
            else
                return items.map(item => {
                    if (item.articleNumber === articleNumber && item.quantity + by >= 1) {
                            return {...item, quantity: item.quantity + by};
                    }
                    else
                        return item;
                })

        });

    }

    const removeItem = (articleNumber) => {
        setCartItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber);
        });
    }

    return <>
    <ShoppingCartContext.Provider value={{ cartItems, cartQuantity, getItemsQuantity, incrementQuantity, decrementQuantity, removeItem }}>
        {children}
        <ShoppingCart/>
    </ShoppingCartContext.Provider>
    </>

}