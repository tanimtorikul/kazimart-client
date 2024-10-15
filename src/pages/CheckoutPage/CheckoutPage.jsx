import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import { TbCurrencyTaka } from "react-icons/tb";

const CheckoutPage = () => {
  const { user } = useAuth();
  const [cart] = useCart();

 

  return (
    <div className="max-w-[1200px] mx-auto my-8 p-6">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>


      {/* Order Summary */}
      <div className="mb-8 p-6 border rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
       
      </div>

      {/* Payment Options */}
      <div className="mb-8 p-6 border rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
        <div className="flex flex-col space-y-3">
          <label className="flex items-center">
            <input type="radio" name="paymentMethod" className="mr-2" />
            Cash on Delivery
          </label>
          <label className="flex items-center">
            <input type="radio" name="paymentMethod" className="mr-2" />
            Card Payment
          </label>
        </div>
      </div>

      {/* Place Order Button */}
      <div>
        <button className="w-full bg-[#01684B] text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 text-lg font-semibold">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
