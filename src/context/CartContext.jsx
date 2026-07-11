import { createContext, useContext } from "react";

const CartContext=createContext();
import { initialProducts } from "../data/Product";


export const CartProvider = ({children}) => {
    const products=initialProducts;

  return (
    <CartContext.Provider value={products}>
        {children}
    </CartContext.Provider>
  )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

