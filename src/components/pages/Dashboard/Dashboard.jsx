import { useContext, useEffect, useState } from "react";
import CartItems from "../../CartItems/CartItems";
import WishList from "../../WishList/WishList";
// import { getAllCart } from "../../LocalStorage/LocalStorage";
import { CartContext } from "../../../Context/Context";
import getAllCart from "../../LocalStorage/LocalStorage";
import getAllWish from "../../LocalStorage/wishstorage";
// import { getAllCart } from "../../LocalStorage/LocalStorage";

const Dashboard = () => {
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const context = useContext(CartContext);
  // console.log(context);
  useEffect(() => {
    const fetchCart = async () => {
      const fetchedCart = await getAllCart(); // Assuming this returns the cart data
      setCart(fetchedCart);
    };

    fetchCart();
  }, []);

  useEffect(() => {
    const fetchWish = async () => {
      const wish = await getAllWish(); // Assuming this returns the cart data
      setWish(wish);
    };

    fetchWish();
  }, []);
  // console.log(wish);

  // State to track the active tab
  const [activeTab, setActiveTab] = useState("tab1");

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  // console.log(cart);

  return (
    <div>
      <div className="bg-[#9538E2] flex flex-col items-center justify-center gap-4 p-20">
        {/* Text Section */}
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-white">Dashboard</h1>
          <p className="text-white mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,{" "}
            illo? Labore <br /> culpa saepe eos fuga reiciendis illum sint nam
            ex.
          </p>
        </div>

        {/* Tabs Section */}
        <div className="flex gap-4 mt-4">
          <div role="tablist" className="tabs tabs-boxed">
            <button
              role="tab"
              onClick={() => handleTabClick("tab1")}
              className={`tab ${activeTab === "tab1" ? "tab-active" : ""}`}
            >
              Cart
            </button>
            <button
              role="tab"
              onClick={() => handleTabClick("tab2")}
              className={`tab ${activeTab === "tab2" ? "tab-active" : ""}`}
            >
              Wish List
            </button>
          </div>
        </div>
      </div>

      {/* Content Section based on active tab */}

      <div className="mt-20">
        {activeTab === "tab1" &&
          (cart.length > 0 ? <CartItems /> : <p>No items in the cart.</p>)}
        {activeTab === "tab2" &&
          (wish.length > 0 ? <WishList /> : <p>No wishList available!</p>)}
      </div>
    </div>
  );
};

export default Dashboard;
