import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import { TbCurrencyTaka } from "react-icons/tb";

const CheckoutPage = () => {
  const { user } = useAuth();
  const [cart] = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="max-w-[1400px] mx-auto my-8 p-6">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

      {/* Flex container for form and order summary */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Checkout Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-6 w-full md:w-2/3"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block mb-2 text-lg font-medium">
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Full Name is required" })}
                name="name"
                defaultValue={user.displayName}
                className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-lg font-medium"
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
                className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
              />
              {errors.phoneNumber && (
                <span className="text-red-500">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 text-lg font-medium">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                name="email"
                defaultValue={user?.displayName}
                className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block mb-2 text-lg font-medium"
              >
                Address
              </label>
              <input
                type="text"
                {...register("address", { required: "Address is required" })}
                name="address"
                placeholder="Enter Your Address"
                className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
              />
              {errors.address && (
                <span className="text-red-500">{errors.address.message}</span>
              )}
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block mb-2 text-lg font-medium">
                City
              </label>
              <input
                type="text"
                {...register("city", { required: "City is required" })}
                name="city"
                placeholder="Enter Your City"
                className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
              />
              {errors.city && (
                <span className="text-red-500">{errors.city.message}</span>
              )}
            </div>

            {/* Postal Code */}
            <div>
              <label
                htmlFor="postalCode"
                className="block mb-2 text-lg font-medium"
              >
                Postal Code
              </label>
              <input
                type="text"
                {...register("postalCode", {
                  required: "Postal Code is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Enter a valid Postal Code",
                  },
                })}
                name="postalCode"
                placeholder="Enter Your Postal Code"
                className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
              />
              {errors.postalCode && (
                <span className="text-red-500">
                  {errors.postalCode.message}
                </span>
              )}
            </div>

            {/* Additional Note */}
            <div className="md:col-span-2">
              <label htmlFor="note" className="block mb-2 text-lg font-medium">
                Additional Note
              </label>
              <textarea
                {...register("note")}
                name="note"
                placeholder="Any additional information"
                className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
                rows="4"
              />
            </div>
          </div>

          {/* Payment Options */}
          <div className="p-6 border rounded-lg shadow-md mt-6">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
            <div className="space-y-3">
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

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-[#01684B] w-full rounded-md py-2 text-white md:text-lg"
            >
              Place Order
            </button>
          </div>
        </form>

        {/* Order Summary */}
        <div className="p-6 border rounded-lg shadow-md w-full md:w-1/3">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="mb-4">
          
            <p className="text-lg font-medium">
              Total Price: <TbCurrencyTaka /> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
