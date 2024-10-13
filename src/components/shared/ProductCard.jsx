import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ item }) => {
  const { imageUrl, previousPrice, price, name, quantity } = item;

  return (
    <div className="bg-white shadow-lg rounded-lg px-5 py-2 hover:shadow-2xl transition duration-600 ease-in-out">
      {/* Image Section */}
      <div className="relative flex justify-center border border-gray-100 rounded-lg">
        <img
          src={imageUrl}
          alt={name}
          className="rounded-lg w-48 h-48 object-cover"
        />
        {/* Discount */}
        <div className="absolute top-2 left-2">
          <div>
            <h2 className="bg-[#FF5252] text-white px-2 py-1 rounded-lg text-xs font-semibold">
              -{previousPrice - price}৳
            </h2>
          </div>
        </div>
        {/* Heart Icon */}
        <div className="absolute top-1 right-2">
          <FaRegHeart className="text-3xl border border-gray-300 rounded-full p-1 text-gray-700" />
        </div>
        {/* Shopping Cart Icon */}
        <div className="absolute top-10 right-2">
          <FiShoppingCart className="text-3xl border border-gray-300 rounded-full p-1 text-gray-700" />
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-400 mt-4">{quantity}</p>

        {/* Price */}
        <div className="flex justify-center items-center gap-4">
          {previousPrice ? (
            <p className="ltext-lg">
              <span className="line-through ">৳{previousPrice}</span>{" "}
              <span className="ml-2 text-lg font-bold text-green-600">
                ৳{price}
              </span>
            </p>
          ) : (
            <p className="text-lg font-bold text-green-600">৳{price}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
