import { useContext, useEffect, useState } from "react";
import getAllWish from "../LocalStorage/wishstorage";
import { MdDeleteForever } from "react-icons/md";
import { CartContext } from "../../Context/Context";
const WishList = () => {
  const [wish, setWish] = useState([]);
  const { removeFromWish } = useContext(CartContext);
  useEffect(() => {
    const fetchWish = async () => {
      const w = await getAllWish(); // Assuming this returns the cart data
      // console.log("w", w);
      setWish(w);
    };

    fetchWish();
  }, []);
  // console.log(wish);

  const handleRemoveItem = (itemId) => {
    const updatedCart = wish.filter((item) => item.id !== itemId); // Remove the item by id
    setWish(updatedCart); // Update state
    localStorage.setItem("wish", JSON.stringify(updatedCart)); // Update local storage
    // removeFromCart(itemId);
    removeFromWish(itemId);
  };
  return (
    <div>
      <div>
        <h1>wish list</h1>
        <div className="mt-2">
          {wish?.map((item, index) => (
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
      </div>
    </div>
  );
};

export default WishList;
