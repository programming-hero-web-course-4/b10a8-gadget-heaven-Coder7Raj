import { useEffect, useState } from "react";
import HomeBanner from "../../Banner/HomeBanner";
import Products from "../../Products/Products";

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

  return (
    <div>
      <HomeBanner />
      <div className="flex gap-4 container mx-auto">
        <div>
          <div className="flex flex-col space-y-4 mb-4 mt-20">
            <button
              onClick={() => handleCategoryClick("AllProducts")} // Reset to show all products
              className="btn btn-success"
            >
              All Products
            </button>
            <button
              onClick={() => handleCategoryClick("Laptop")}
              className="btn btn-success"
            >
              Laptops
            </button>
            <button
              onClick={() => handleCategoryClick("Phone")}
              className="btn btn-success"
            >
              Phones
            </button>
            <button
              onClick={() => handleCategoryClick("Smart Watch")}
              className="btn btn-success"
            >
              Smart Watches
            </button>
            <button
              onClick={() => handleCategoryClick("Ear Pods")}
              className="btn btn-success"
            >
              Ear Pods
            </button>
          </div>
        </div>
        <div>
          {/* Pass selectedCategory to Products component */}
          <Products data={data} selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default Home;
