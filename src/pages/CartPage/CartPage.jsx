import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import cartImg from "../../assets/emptycart.png";
import CartItemCard from "../../components/CartItemCard/CartItemCard";
import { TbCurrencyTaka } from "react-icons/tb";
import { useEffect } from "react";

const CartPage = () => {
  const [cart] = useCart();

  const total = cart.reduce((acc, item) => {
    const price = parseFloat(item.price);
    const quantity = parseFloat(item.quantity);
    return acc + price * quantity;
  }, 0);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="min-h-screen py-6 lg:py-16 px-0 md:px-8 xl:px-0">
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
          <h2 className="text-xl mt-2">
            <Link
              to="/"
              className="bg-primary-light text-white px-6 py-2 rounded-xl"
            >
              Lets Shop
            </Link>
            .
          </h2>
        </div>
      ) : (
        <div className="flex gap-6 md:gap-32 flex-col md:flex-row md:items-start items-center justify-center">
          {/* Cart item cards */}
          <div className="flex flex-col gap-8">
            {cart.map((item, index) => (
              <CartItemCard key={index} item={item} />
            ))}
          </div>
          <div className="p-6 rounded-lg shadow-lg border">
            {/* Promo Code Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Promo Code</h2>
              <div className="flex items-center gap-3 border-gray-300 border-dotted border p-3 rounded-xl">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                />
                <button className="bg-primary-light text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200">
                  Apply
                </button>
              </div>
            </div>

            {/* Cost Summary Section */}
            <div className="mb-6 border-b pb-4">
              <h2 className="text-lg font-semibold mb-3">Cost Summary</h2>
              <div className="flex justify-between mb-2">
                <p>Subtotal</p>
                <div className="flex items-center">
                  <TbCurrencyTaka className="w-6 h-6 mr-1" />
                  <p>{total}</p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <p>Delivery</p>
                <div className="flex items-center">
                  <TbCurrencyTaka className="w-6 h-6 mr-1" />
                  <p>50</p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <p>Promo Discount</p>
                <div className="flex items-center">
                  <TbCurrencyTaka className="w-6 h-6 mr-1" />
                  <p>0</p>
                </div>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t pt-2">
                <p>Total</p>
                <div className="flex items-center">
                  <TbCurrencyTaka className="w-6 h-6 mr-1" />
                  <p>{total + 50}</p>
                </div>
              </div>
            </div>

            {/* Proceed to Checkout Button */}
            <div>
              <Link to="/checkout">
                <button className="w-full bg-primary-light text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 text-lg font-semibold">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
