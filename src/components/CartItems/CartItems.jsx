import { useState, useEffect, useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import getAllCart from "../LocalStorage/LocalStorage"; // Update with the correct path
import { CartContext } from "../../Context/Context";
import Modal from "../Modal/Modal";

const CartItems = () => {
  const [sortedCart, setSortedCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { removeFromCart, removeCart } = useContext(CartContext);
  //
  //
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  // console.log("count", sortedCart.length);
  // Retrieve the cart from local storage on mount
  useEffect(() => {
    const initialCart = getAllCart();
    setSortedCart(initialCart);
  }, []);

  // Calculate total price whenever sortedCart changes
  useEffect(() => {
    const total = sortedCart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  }, [sortedCart]);

  // Sort the items in descending order by price
  const handleSort = () => {
    const sorted = [...sortedCart].sort((a, b) => b.price - a.price); // Sort based on the current sortedCart
    setSortedCart(sorted); // Update the sortedCart state
  };

  // Handle item removal
  const handleRemoveItem = (itemId) => {
    const updatedCart = sortedCart.filter((item) => item.id !== itemId); // Remove the item by id
    setSortedCart(updatedCart); // Update state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
    removeFromCart(itemId);
  };
  //
  //
  const handlePurchase = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
    setSortedCart([]); // Clear the cart items
    setTotalPrice(0); // Reset the total price
    localStorage.removeItem("cart");
    removeCart();
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p>Cart</p>
        </div>
        <div className="flex items-center gap-6">
          <p>Total cost: ${totalPrice}</p>
          <button
            onClick={handleSort}
            className="py-1 px-10 rounded-xl font-bold text-black border border-red-500"
          >
            Sort by Price
          </button>
          <button
            onClick={handlePurchase} // Trigger modal on purchase
            className="py-1 px-10 rounded-xl font-bold text-black border border-red-500"
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="mt-5">
        {sortedCart?.map((item, index) => (
          <div
            key={item.id || index}
            className="flex justify-between items-center gap-10 p-4 rounded-lg border border-red-600 mb-2 bg-white"
          >
            <div className="flex items-center gap-10">
              <div>
                <img className="w-48" src={item.image} alt="Product" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-xl font-bold text-black">{item.title}</h1>
                <p>{item.description}</p>
                <h1>Price: ${item.price}</h1>
              </div>
            </div>
            <div
              className="text-2xl mb-20 border border-slate-300 p-1 rounded-xl cursor-pointer"
              onClick={() => handleRemoveItem(item.id)}
            >
              <MdDeleteForever />
            </div>
          </div>
        ))}
      </div>
      {/* Render the modal if open */}
      {isModalOpen && (
        <Modal totalPrice={totalPrice} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default CartItems;
