import { Link } from "react-router-dom";

const ProductButton = () => {
  return (
    <div className="flex flex-col bg-white gap-3 p-12 rounded-xl">
      <Link className="p-2 rounded-lg border-none outline-none bg-gray-100">
        All Products
      </Link>
      <Link className="p-2 rounded-lg border-none outline-none bg-gray-100">
        Laptop
      </Link>
      <Link className="p-2 rounded-lg border-none outline-none bg-gray-100">
        Phone
      </Link>
      <Link className="p-2 rounded-lg border-none outline-none bg-gray-100">
        Watch
      </Link>
      <Link className="p-2 rounded-lg border-none outline-none bg-gray-100">
        MacBook
      </Link>
      <Link className="p-2 rounded-lg border-none outline-none bg-gray-100">
        iphone
      </Link>
      <Link className="p-2 rounded-lg border-none outline-none bg-gray-100">
        Accessories
      </Link>
    </div>
  );
};

export default ProductButton;
