import image from "../../assets/banner.jpg";

const HomeBanner = ({ product }) => {
  return (
    <div className="pb-[450px]">
      <div className="bg-[#9538E2] relative flex items-center justify-center text-white pb-40">
        {/* Text Section */}
        <div className="text-center space-y-4 pt-20 px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            {product
              ? product.title
              : "Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}
          </h1>
          <p className="text-sm md:text-lg">
            {product
              ? `Price: $${product.price}`
              : "Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
          </p>
          {product ? (
            <p className="mt-4">Description of the product goes here...</p> // You can add a product description if available
          ) : (
            <button className="mt-4 px-6 py-3 rounded-lg bg-white text-[#9538E2] font-semibold hover:bg-gray-200">
              Shop Now
            </button>
          )}
        </div>
      </div>

      {/* Conditional Image Section */}
      {!product && (
        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 z-0 w-7/12 h-[500px] p-2 bg-slate-100 bg-opacity-35 border border-white rounded-lg">
          <img
            src={image}
            alt="Gadget Heaven Banner"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default HomeBanner;
