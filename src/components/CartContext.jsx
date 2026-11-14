import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved? JSON.parse(saved) : []
});

useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

const addToCart = (plant) => {
    console.log("addToCart called", plant);
    setCart((prev) => {
        const exists = prev.find((p) => p._id === plant._id);
        if(exists){
            return prev.map((p) => p._id === plant._id? {...p, qty: (p.qty || 1) + 1} : p);
        }else{
            return [...prev, {...plant, qty: 1}];
        }
    });
};
const clearCart = () => setCart([]);
const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p._id !== id));
};
return(
        <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};