import { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";

const CartItems = ({ cart }) => {
  const [sortedCart, setSortedCart] = useState(cart);
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total price whenever sortedCart changes
  useEffect(() => {
    const total = sortedCart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  }, [sortedCart]);

  // Sort the items in descending order by price
  const handleSort = () => {
    const sorted = [...cart].sort((a, b) => b.price - a.price); // Create a new sorted array
    setSortedCart(sorted); // Update the sortedCart state
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
          <button className="py-1 px-10 rounded-xl font-bold text-black border border-red-500">
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
            <div className="text-2xl mb-20 border border-slate-300 p-1 rounded-xl">
              <MdDeleteForever />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItems;
