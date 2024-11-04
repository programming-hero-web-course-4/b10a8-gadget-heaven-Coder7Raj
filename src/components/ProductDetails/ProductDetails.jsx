import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/products.json"); // Fetch all products
      const products = await response.json();
      const foundProduct = products.find((item) => item.id == id);
      setProduct(foundProduct);
      setLoading(false);
    };

    fetchProducts();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  const {
    title,
    image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = product;
  return (
    <div className="pb-[360px]">
      <div className="bg-[#9538E2] relative flex items-center justify-center text-white pb-72">
        {/* Text Section */}
        <div className="text-center space-y-4 pt-20 px-4">
          <h1 className="text-3xl font-bold">Product Details</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
            illo? Labore culpa saepe eos fuga reiciendis illum sint nam ex.
          </p>
        </div>
      </div>
      <div className="flex gap-12 lg:flex-row hero absolute top-[35%] left-1/2 transform -translate-x-1/2 z-0 w-7/12 h-[500px] p-4 border border-white bg-white rounded-lg">
        <div className="w-8/12 h-full">
          <img src={image} className="w-full h-full rounded-lg shadow-2xl" />
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-lg font-bold">price: ${price}</p>
          <div>
            {availability ? (
              <button className="text-green-700 p-1 rounded-xl text-base outline-none border border-green-600 bg-green-100">
                In Stock
              </button>
            ) : (
              <button className="text-red-700 p-1 rounded-xl text-base outline-none border border-red-600 bg-red-100">
                Out of Stock
              </button>
            )}
          </div>
          <p className="text-base text-gray-500">{description}</p>
          <ul className="list-decimal list-inside pl-2 w-full">
            <p className="font-bold text-xl">Specification:</p>
            {Specification.map((item, index) => (
              <li className="mb-1 text-base text-gray-500" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <div>
            <div className="flex items-center">
              <span className="text-base font-bold mr-1">Rating:</span>
              <span className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </span>
            </div>
            <div className="rating flex items-center">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <span className="p-2 bg-gray-200 rounded-full border-none outline-none">
                {rating}
              </span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Link className="bg-[#9538E2] rounded-xl border-none outline-none">
              <button className="p-2 flex items-center space-x-2">
                <span className="text-white font-bold">Add To Cart</span>
                <span className="text-lg text-white font-bold">
                  <IoIosCart />
                </span>
              </button>
            </Link>
            <Link>
              <button className="p-2 border border-slate-500 rounded-full font-bold text-xl">
                <IoIosHeartEmpty />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
