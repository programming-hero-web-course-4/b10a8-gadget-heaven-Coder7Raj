import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { title, image, price, id } = product || {};
  const navigate = useNavigate();

  const handleDetails = (di) => {
    // Navigate to the product details page using the product ID
    navigate(`/productDetails/${di}`);
  };

  return (
    <div className="flex flex-col border border-red-600 p-2 rounded-lg">
      <figure className="w-full h-full overflow-hidden">
        <img className="rounded-lg" src={image} alt={title} />
      </figure>
      <div className="flex flex-col gap-2 p-1">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="font-bold">Price: ${price}</p>
        <button
          onClick={() => handleDetails(id)} // Pass the product ID to the handler
          className="p-2 rounded-xl border border-[#9538E2] outline-none"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Product;