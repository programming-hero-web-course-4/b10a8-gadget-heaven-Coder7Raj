import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/public/products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center font-bold mb-8">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
        {data?.slice(0, 6).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
