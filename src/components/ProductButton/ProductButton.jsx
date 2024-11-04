import { Link } from "react-router-dom";

const ProductButton = () => {
  return (
    <div className="flex flex-col gap-3 border border-purple-800 p-16">
      <Link className="p-2 rounded-lg border-none outline-none bg-gray-300">
        All Products
      </Link>
      <Link className="p-2 rounded-lg border-none outline-none bg-gray-300">
        Laptop
      </Link>
      <Link className="p-2 rounded-lg border-none outline-none bg-gray-300">
        Phone
      </Link>
      <Link className="p-2 rounded-lg border-none outline-none bg-gray-300">
        Watch
      </Link>
      <Link className="p-2 rounded-lg border-none outline-none bg-gray-300">
        MacBook
      </Link>
      <Link className="p-2 rounded-lg border-none outline-none bg-gray-300">
        iphone
      </Link>
      <Link className="p-2 rounded-lg border-none outline-none bg-gray-300">
        Accessories
      </Link>
    </div>
  );
};

export default ProductButton;
