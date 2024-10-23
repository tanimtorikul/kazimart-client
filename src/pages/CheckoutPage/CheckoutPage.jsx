import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { TbCurrencyTaka } from "react-icons/tb";
// import useCartPrice from "../../hooks/useCartPrice";

const CheckoutPage = () => {
  const { user } = useAuth();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // todo: Handle form submission here
  };

  return (
    <div className="max-w-[1400px] mx-auto md:my-4">
      <h1 className="md:text-xl font-semibold mb-6">Checkout</h1>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Checkout Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-3 w-full border p-4 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 md:text-lg font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Full Name is required" })}
                name="name"
                disabled
                defaultValue={user?.displayName}
                className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-400"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block mb-2 md:text-lg font-medium"
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
              <label
                htmlFor="email"
                className="block mb-2 md:text-lg font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                name="email"
                defaultValue={user?.email}
                disabled
                className="w-full px-4 py-3 text-gray-400 border rounded-md border-gray-300 "
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block mb-2 md:text-lg font-medium"
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
          
        <div className="space-y-6 w-full ">
          {/* Payment Options */}
          <div className="p-6 border rounded-lg shadow-md">
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

          {/* Order Summary */}
          <div className="p-6 border-2 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Order Summary
            </h2>
            <div className="mb-4 flex items-center justify-center">
              <p className="text-lg font-medium">Total Price: </p>
              <TbCurrencyTaka className="ml-1" />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#01684B] w-full rounded-md py-2 text-white md:text-lg"
          >
            Place Order
          </button>
        </div>
        </form>

      </div>
    </div>
  );
};

export default CheckoutPage;
