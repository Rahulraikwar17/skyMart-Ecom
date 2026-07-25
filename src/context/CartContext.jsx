import React, { createContext, useContext, useState, useEffect } from "react";
import { Auth } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { loggedInUser } = useContext(Auth);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (loggedInUser?.id) {
      const savedCart =
        JSON.parse(localStorage.getItem(`cart_${loggedInUser.id}`)) || [];
      setCart(savedCart);
    } else {
      setCart([]);
    }
  }, [loggedInUser]);

  useEffect(() => {
    if (loggedInUser?.id) {
      localStorage.setItem(`cart_${loggedInUser.id}`, JSON.stringify(cart));
    }
  }, [cart, loggedInUser]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (id) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === id);
      if (exists) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { id, quantity: 1 }];
    });
    openCart();
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setCart,
        openCart,
        closeCart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
