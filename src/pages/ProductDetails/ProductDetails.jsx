import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { FaCartShopping } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const [items] = useProducts();

  const product = items.find((item) => item._id === id);
  const {
    name,
    imageUrl,
    quantity,
    description,
    previousPrice,
    price,
    inStock,
    rating,
    reviews,
  } = product || {};

  return (
    <div className="max-w-[1400px] mx-auto my-8 px-4">
      {product ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div >
              <img
                src={imageUrl}
                alt={name}
                className="rounded-lg border-2 shadow-lg max-h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#002349]">{name}</h2>

              <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-[#a8d9e9] rounded-xl bg-[#FFF8E6] px-3 py-1">
                  <FaStar className="text-yellow-500" />
                  <span className="">
                    {rating}
                  </span>
                </div>
                <p
                  className={` rounded-2xl px-6 py-2 font-medium ${
                    inStock ? "bg-[#F2F7F6] border-[#01684B] border-2  text-[#01684B]" : "text-red-600"
                  }`}
                >
                  {inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
              {/* <p className="text-2xl font-semibold text-gray-900">
                Price: <span className="text-teal-500">${price}</span>
              </p> */}
              <p>{quantity}</p>
              <div className="flex gap-2 items-center mb-4">
                <p className="line-through">৳ {previousPrice}</p>
                <p className="text-2xl text-[#01684B] font-bold">৳ {price}</p>
              </div>
              <div>
                <p className="text-gray-300">Total Amount:</p>
                <h2 className="text-5xl text-[#01684B] font-bold">৳ {price}</h2>
              </div>

              <button className="bg-[#01684B] text-white md:text-xl font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-teal-600 transition duration-300 ease-in-out flex items-center space-x-2">
                <FaCartShopping />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Product not found!</p>
      )}
    </div>
  );
};

export default ProductDetails;
