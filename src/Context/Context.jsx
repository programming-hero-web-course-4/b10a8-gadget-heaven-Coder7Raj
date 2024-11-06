import { createContext, useState, useEffect } from "react";

// Create the context
export const CartContext = createContext();

// Create a provider component
export const Context = ({ children }) => {
  const [carts, setCart] = useState([]);
  const [wishs, setWish] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    const storedWish = JSON.parse(localStorage.getItem("wish")) || [];
    setWish(storedWish);
  }, []);

  const addToCart = (item) => {
    // Check if item already exists in cart
    const isExist = carts.find((cartItem) => cartItem.id === item.id);
    if (isExist) return alert("Item already in cart!");

    // Update cart state and localStorage
    const updatedCart = [...carts, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const addToWish = (item) => {
    // Check if item already exists in wishlist
    const isExist = wishs.find((wishItem) => wishItem.id === item.id);
    if (isExist) return alert("Item already in wishlist!");

    // Update wishlist state and localStorage
    const updatedWish = [...wishs, item];
    setWish(updatedWish);
    localStorage.setItem("wish", JSON.stringify(updatedWish));
  };

  const removeFromCart = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeCart = () => {
    localStorage.removeItem("cart");
    setCart([]); // Clear the cart state
  };

  const removeFromWish = (id) => {
    const updatedWish = wishs.filter((item) => item.id !== id);
    setWish(updatedWish);
    localStorage.setItem("wish", JSON.stringify(updatedWish));
  };

  return (
    <CartContext.Provider
      value={{
        carts,
        addToCart,
        removeFromCart,
        addToWish,
        removeFromWish,
        wishs,
        removeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
