import { useParams, useNavigate, useLocation } from "react-router-dom";
import { FaCartShopping, FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ProductDetails = () => {
  const { id } = useParams();
  const [items] = useProducts();
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const product = items.find((item) => item._id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // to check the product is already added or not
  useEffect(() => {
    if (user && product) {
      axiosSecure.get(`/carts?email=${user.email}`).then((res) => {
        const existingCartItem = res.data.find(
          (cartItem) => cartItem.productId === product._id
        );
        if (existingCartItem) {
          setIsAddedToCart(true);
        }
      });
    }
  }, [user, product, axiosSecure]);

  const handleAddToCart = (product) => {
    if (user && user.email) {
      const cartItem = {
        productId: product._id,
        email: user.email,
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity: product.quantity,
      };
      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success(`${product.name} added to the cart`);
            refetch();
          } else {
            toast.error("Failed to add to the cart!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      toast.error("You need to login first before adding product to the cart!");
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto my-8 px-4">
      {product ? (
        <>
          <div className="max-w-[1200px] mx-auto my-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex justify-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="rounded-lg border-2 shadow-lg md:max-h-[500px] object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#002349]">
                  {product.name}
                </h2>

                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2 text-[#a8d9e9] rounded-xl bg-[#FFF8E6] px-3 py-1">
                    <FaStar className="text-yellow-500" />
                    <span>{product.rating}</span>
                  </div>
                  <p
                    className={`rounded-2xl text-sm md:text-lg px-2 md:px-6 py-1 md:py-2 font-medium ${
                      product.inStock
                        ? "bg-[#F2F7F6] border-[#01684B] border-2 text-[#01684B]"
                        : "text-red-600"
                    }`}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </p>
                </div>

                <p>{product.quantity}</p>
                <div className="flex gap-2 items-center mb-4">
                  <p className="line-through">৳ {product.previousPrice}</p>
                  <p className="text-lg md:text-2xl text-[#01684B] font-bold">
                    ৳ {product.price}
                  </p>
                </div>
                <div>
                  <p className="text-gray-300">Total Amount:</p>
                  <h2 className="text-2xl md:text-5xl text-[#01684B] font-bold">
                    ৳ {product.price}
                  </h2>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className={`${
                    isAddedToCart
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-[#01684B] hover:bg-teal-600"
                  } text-white md:text-xl font-semibold px-4 md:px-8 py-2 md:py-3 rounded-xl shadow-lg transition duration-300 ease-in-out flex items-center space-x-2`}
                  disabled={isAddedToCart}
                >
                  <FaCartShopping />
                  <span>{isAddedToCart ? "Already Added" : "Add to Cart"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8">
            <div className="flex space-x-4 border-b-2 mb-4">
              <button
                onClick={() => setActiveTab("description")}
                className={`px-4 py-2 text-lg font-semibold ${
                  activeTab === "description"
                    ? "border-b-2 border-[#01684B] text-[#01684B]"
                    : "text-gray-500"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`px-4 py-2 text-lg font-semibold ${
                  activeTab === "reviews"
                    ? "border-b-2 border-[#01684B] text-[#01684B]"
                    : "text-gray-500"
                }`}
              >
                Reviews
              </button>
            </div>
            {/* 
             based on active tab */}
            {activeTab === "description" ? (
              <div>
                <p>{product.description}</p>
              </div>
            ) : (
              <div>
                <p>No reviews yet. Be the first to leave a review!</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Product not found!</p>
      )}
    </div>
  );
};

export default ProductDetails;
