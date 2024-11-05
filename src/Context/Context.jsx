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
    if (!Array.isArray(carts)) {
      // If carts is not defined or is not an array, initialize it as an empty array
      setCart([]);
    }
    if (carts === 0) {
      const updatedCart = [...carts, item];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem("cart", JSON.stringify([item]));
      setCart([item]);
    }
  };

  const addToWish = (item) => {
    const isExist = wishs.find((wishItem) => wishItem.id === item.id);
    if (isExist) return alert("Item already in wishlist!");

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
    const newCart = localStorage.removeItem("cart");
    setCart(newCart);
  };

  const removeFromWish = (id) => {
    const updatedWish = wishs.filter((item) => item.id !== id);
    setWish(updatedWish);
    localStorage.setItem("wish", JSON.stringify(updatedWish));
  };

  useEffect(() => {
    const storedCarts = JSON.parse(localStorage.getItem("cart"));
    if (storedCarts && Array.isArray(storedCarts)) {
      setCart(storedCarts); // Set carts only if the stored data is a valid array
    }
  }, []);

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
