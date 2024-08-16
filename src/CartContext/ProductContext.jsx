'use client';

import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
     const [cart, setCart] = useState([]); // Initializing cart as an empty array

     const addToCart = (product) => {
          setCart((prevCart) => {
               const existingItem = prevCart.find((item) => item.id === product.id);

               if (existingItem) {
                    return prevCart.map((item) =>
                         item.id === product.id
                              ? { ...item, quantity: item.quantity + 1 }
                              : item
                    );
               } else {
                    return [...prevCart, { ...product, quantity: 1 }];
               }
          });
     };

     const removeFromCart = (id) => {
          setCart((prevCart) => prevCart.filter((item) => item.id !== id));
     };

     const updateQuantity = (id, quantity) => {
          setCart((prevCart) =>
               prevCart.map((item) =>
                    item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
               )
          );
     };

     return (
          <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
               {children}
          </CartContext.Provider>
     );
};
