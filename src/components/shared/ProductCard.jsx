import { FiShoppingCart } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const ProductCard = ({ item }) => {
  const { imageUrls, previousPrice, price, name, quantity, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = (item) => {
    if (user && user.email) {
      axiosSecure
        .get(`/carts?email=${user.email}`)
        .then((res) => {
          const existingCartItem = res.data.find(
            (cartItem) => cartItem.productId === _id
          );
  
          if (existingCartItem) {
            toast.error(`${name} is already in the cart!`);
          } else {
            const cartItem = {
              productId: _id,
              email: user.email,
              name,
              imageUrls, 
              price,
              amount: 1,
              quantity,
            };
            
            axiosSecure
              .post("/carts", cartItem)
              .then((res) => {
                if (res.data.insertedId) {
                  toast.success(`${name} added to the cart`);
                  refetch();
                  
                } else {
                  toast.error("Failed to add to the cart!");
                }
              })
              .catch((error) => {
                console.error(error);
              });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      toast.error(
        "You need to login first before adding a product to the cart!"
      );
      navigate("/login", { state: { from: location } });
    }
  };
  

  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-200 ease-in-out group">
      {/* Image */}
      <div className="relative flex justify-center border border-gray-100 rounded-lg pt-3">
        <Link to={`/product/${item._id}`} className="block">
          <img
            src={imageUrls[0]}
            alt={name}
            className="rounded-lg w-48 h-48 object-cover hover:"
          />

          {/* Discount */}
          {previousPrice && previousPrice > price && (
            <div className="absolute top-3 left-3">
              <h2 className="bg-[#FF5252] text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center">
                -{previousPrice - price}
                <TbCurrencyTaka />
              </h2>
            </div>
          )}
        </Link>
      </div>

      {/* Overlay Section */}
      <div className="absolute inset-0 hidden md:flex flex-col justify-end duration-500 opacity-0 group-hover:opacity-100 bg-[#01684B]/50">
        <div className="flex items-center justify-center gap-2 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={() => handleAddToCart(item)}
            className="bg-white hover:bg-[#36a853] hover:border-2 hover:text-white hover:border-white transition rounded-full text-gray-900 h-10 w-10 flex items-center justify-center"
          >
            <FiShoppingCart />
          </button>
        </div>
        <Link
          to={`/product/${item._id}`}
          className="bg-[#36a853] hover:bg-[#2f9047] transition w-full text-white text-sm py-2 cursor-pointer text-center"
        >
          Details
        </Link>
      </div>

      {/* Info Section */}
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
