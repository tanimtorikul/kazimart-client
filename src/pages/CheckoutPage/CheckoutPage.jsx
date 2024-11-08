import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { TbCurrencyTaka } from "react-icons/tb";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { user } = useAuth();
  const [cart, refetch, clearCart] = useCart();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(cart);

  // Calculate total price
  const total = cart.reduce((acc, item) => {
    const price = parseFloat(item.price);
    const quantity = parseFloat(item.quantity);
    return acc + price * quantity;
  }, 0);

  const onSubmit = async (data) => {
    const orderData = {
      name: data.name,
      email: data.email,
      phone: data.phoneNumber,
      address: data.address,
      note: data.note,
      items: cart.map((item) => ({
        productId: item._id,
        productName: item.name,
        quantity: item.quantity,
        price: item.price,
        totalPrice: item.price * item.quantity,
        image: item.imageUrls[0],
        amount: item.amount,
      })),
      totalItems: cart.reduce((total, item) => total + item.quantity, 0),
      subtotal: total,
      shippingCost: 50,
      totalPrice: total + 50,
      paymentMethod: data.paymentMethod,
      orderStatus: "Pending",
      orderDate: new Date().toISOString(),
    };

    try {
      const res = await axiosSecure.post("/allorders", orderData);
      if (res.data.insertedId) {
        toast.success(`${user.displayName}, Your Order placed successfully`);
        await clearCart();
        navigate("/order-successful");
      }
    } catch (error) {
      toast.error("Failed to place the order. Please try again.");
      console.error("Order placement error:", error);
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto min-h-screen my-2 lg:my-12">
      <h1 className="md:text-xl font-semibold mb-2 md:mb-6">Checkout</h1>

      <div className="flex flex-col md:flex-row gap-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-3 w-full md:w-2/3 border p-4 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm md:text-lg font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Full Name is required" })}
                name="name"
                readOnly
                defaultValue={user?.displayName || ""}
                className="w-full text-sm px-3 py-2 border rounded-md border-gray-300"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm md:text-lg font-medium"
              >
                Phone Number
              </label>
              <input
                type="tel"
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^[0-9]{11}$/,
                    message: "Phone Number must be 11 digits",
                  },
                })}
                name="phoneNumber"
                placeholder="Enter Your Phone Number"
                className="w-full text-sm px-3 py-2 border rounded-md border-gray-300 text-gray-900"
              />
              {errors.phoneNumber && (
                <span className="text-red-500">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm md:text-lg font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                readOnly
                {...register("email", { required: "Email is required" })}
                name="email"
                defaultValue={user?.email || ""}
                className="w-full text-sm px-3 py-2 border rounded-md border-gray-300"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block mb-2 text-sm md:text-lg font-medium"
              >
                Address
              </label>
              <input
                type="text"
                {...register("address", { required: "Address is required" })}
                name="address"
                placeholder="Enter Your Address"
                className="w-full text-sm px-3 py-2 border rounded-md border-gray-300 text-gray-900"
              />
              {errors.address && (
                <span className="text-red-500">{errors.address.message}</span>
              )}
            </div>

            {/* Additional Note */}
            <div className="md:col-span-2">
              <label
                htmlFor="note"
                className="block mb-2 text-sm md:text-lg font-medium"
              >
                Additional Note
              </label>
              <textarea
                {...register("note")}
                name="note"
                placeholder="Any additional information"
                className="w-full text-sm px-3 py-2 border rounded-md border-gray-300 text-gray-900"
                rows="2"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-sm md:text-lg font-semibold mb-4">
              Payment Method
            </h2>
            <div className="space-y-3">
              <label className="flex items-center text-sm md:text-lg">
                <input
                  type="radio"
                  value="Cash on Delivery"
                  {...register("paymentMethod", {
                    required: "Payment Method is required",
                  })}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Online Payment"
                  {...register("paymentMethod", {
                    required: "Payment Method is required",
                  })}
                  className="mr-2"
                  disabled
                />
                <span className="text-sm md:text-lg">Online Payment</span>
                <span className="text-red-500 text-[10px] ml-2">
                  [Under Development]
                </span>
              </label>
            </div>
            {errors.paymentMethod && (
              <span className="text-red-500">
                {errors.paymentMethod.message}
              </span>
            )}
          </div>

          {/* for large screens */}
          <div className="hidden md:block">
            <button
              type="submit"
              className="bg-primary-light w-full rounded-md py-2 text-white"
            >
              Place Order
            </button>
          </div>

          {/* for mobile device*/}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
            <button
              type="submit"
              className="bg-primary-light w-full py-2 text-white md:block"
            >
              Place Order
            </button>
          </div>
        </form>
        <div className="space-y-6 w-full md:w-1/3">
          <div className="p-6 border-2 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Order Summary
            </h2>
            <div className="mb-4 flex items-center justify-center">
              <p className="text-lg font-medium">Total Price: </p>
              <TbCurrencyTaka className="ml-1" />
              <p className="text-lg font-medium">{total + 50}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
