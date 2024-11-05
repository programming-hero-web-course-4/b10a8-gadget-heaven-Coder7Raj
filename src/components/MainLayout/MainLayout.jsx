import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import getAllCart from "../LocalStorage/LocalStorage";

const MainLayout = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const fetchedCart = await getAllCart(); // Assuming this returns the cart data
      setCart(fetchedCart);
    };

    fetchCart();
  }, []);
  // console.log("raj", cart);
  // console.log("object");
  // This function can be called whenever items are added or removed from the cart
  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart)); // Update local storage
  };

  // const cartCount = cartItems.length;
  // console.log("cart", cartCount);
  return (
    <div>
      <header className="h-16">
        {/* <Navbar /> */}

        <Navbar />
      </header>
      {/* Main Content */}
      <main className="min-h-[calc(100vh-254px)] container mx-auto">
        <Outlet context={{ updateCart }} />{" "}
        {/* Pass updateCart to child components */}
      </main>
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
