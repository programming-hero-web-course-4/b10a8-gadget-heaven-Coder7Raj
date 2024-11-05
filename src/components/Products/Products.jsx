import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = ({ data, selectedCategory }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on the selected category
    let filtered;
    if (selectedCategory === null) {
      // If no category is selected, show the first six products
      filtered = data.slice(0, 6);
    } else if (selectedCategory === "AllProducts") {
      // If "All Products" is selected, show all products
      filtered = data;
      console.log(filtered);
    } else {
      // Filter products based on the selected category
      filtered = data.filter(
        (product) => product.category === selectedCategory
      );
    }
    setFilteredProducts(filtered);
  }, [data, selectedCategory]);

  return (
    <div>
      <h1 className="text-3xl text-center font-bold mb-8">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
