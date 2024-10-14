import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import cartImg from "../../assets/emptycart.png";
import CartItemCard from "../../components/CartItemCard/CartItemCard";

const CartPage = () => {
  const [cart] = useCart();
  console.log(cart);

  return (
    <div className="max-w-[1400px] mx-auto">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center space-y-8">
          <img
            src={cartImg}
            alt="Empty Cart"
            className="w-24 md:w-48 mx-auto my-4"
          />
          <p className="text-base font-medium text-gray-400">
            Empty Shopping Bag
          </p>
          <h2 className="text-xl mt-2 ">
            <Link
              to="/"
              className="bg-[#01684B] text-white px-6 py-2 rounded-xl"
            >
              Lets Shop
            </Link>
            .
          </h2>
        </div>
      ) : (
      <div className="flex gap-32 flex-col md:flex-row">
        {/* cartitem cards */}
          <div className="flex flex-col gap-8">
          {cart.map((item, index) => (
            <CartItemCard key={index} item={item} />
          ))}
        </div>
        {/* promo , total price calc and checkout btn */}
        <div>
            {/* proceed checkout and total price section */}
            <div>
                <h2>Delivery Option</h2>
                <h2 className="border-b">Cost Summary</h2>
            </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default CartPage;
