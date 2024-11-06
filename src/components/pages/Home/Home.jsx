import { useEffect, useState } from "react";
import HomeBanner from "../../Banner/HomeBanner";
import Products from "../../Products/Products";
import CustomerReview from "../../CustomerReview/CustomerReview";

const Home = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // Default category set to null

  // Fetch data from the JSON file
  const fetchData = async () => {
    const response = await fetch("/public/products.json");
    const products = await response.json();
    setData(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Updated handleError to open the modal
  const handleError = () => {
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <div>
      <HomeBanner />
      <div className="flex gap-4 container mx-auto">
        <div>
          <div className="flex flex-col space-y-4 bg-white py-4 px-8 rounded-lg mb-4 mt-20">
            <button
              onClick={() => handleCategoryClick("AllProducts")} // Reset to show all products
              className="btn btn-outline"
            >
              All Products
            </button>
            <button
              onClick={() => handleCategoryClick("Laptop")}
              className="btn btn-outline"
            >
              Laptops
            </button>
            <button
              onClick={() => handleCategoryClick("Phone")}
              className="btn btn-outline"
            >
              Phones
            </button>
            <button
              onClick={() => handleCategoryClick("Smart Watch")}
              className="btn btn-outline"
            >
              Smart Watches
            </button>
            <button
              onClick={() => handleCategoryClick("Ear Pods")}
              className="btn btn-outline"
            >
              Ear Pods
            </button>
            <button onClick={handleError} className="btn btn-outline">
              Monitor
            </button>
          </div>
        </div>
        <div>
          {/* Pass selectedCategory to Products component */}
          <Products data={data} selectedCategory={selectedCategory} />
        </div>
      </div>
      <div className="p-8">
        <CustomerReview></CustomerReview>
      </div>
      {/* Modal code inside the return block */}
      <dialog id="my_modal_5" className="modal modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Sorry Sir!</h3>
          <p className="py-4">
            There is no other monitor products left. So, you cannot see or
            purchase sir.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-info">Ok</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Home;
