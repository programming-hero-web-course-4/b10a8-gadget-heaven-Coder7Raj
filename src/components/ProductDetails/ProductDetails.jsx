import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/products.json"); // Fetch all products
      const products = await response.json();
      console.log(products);
      const foundProduct = products.find((item) => item.id == id);
      setProduct(foundProduct);
      setLoading(false);
    };

    fetchProducts();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="">
      <div>
        <h1>Products....</h1>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <div className="w-[260px]">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-lg mb-4"
          />
        </div>
        <p className="text-lg">Price: ${product.price}</p>
        <p className="mt-4">Description of the product goes here...</p>
      </div>
    </div>
  );
};

export default ProductDetails;
