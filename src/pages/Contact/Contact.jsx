import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    toast.success("Thank you! We will contact you shortly");
    reset();
  };

  return (
    <div className="min-h-screen my-12 max-w-[1000px] mx-auto md:px-4">
      <div className="bg-white shadow-sm rounded-lg p-4 md:p-8">
        <h2 className="text-lg md:text-3xl font-semibold text-gray-800 mb-6">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <input
              {...register("name", { required: "Name is required" })}
              className="border-2 border-gray-300  p-3 focus:outline-none"
              placeholder="Name *"
              type="text"
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Enter a valid email",
                },
              })}
              className="border-2 border-gray-300  p-3 focus:outline-none"
              placeholder="Email address *"
              type="email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <textarea
              {...register("message", { required: "Message is required" })}
              className="border-2 border-gray-300  p-3 h-32 resize-none focus:outline-none"
              placeholder="Your Message"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 md:w-1/4 py-4 bg-primary-light text-white font-semibold  focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
