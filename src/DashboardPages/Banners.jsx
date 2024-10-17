import { useForm } from "react-hook-form";
import BannerImg from "../assets/banner.png";
import uploadImage from "../assets/uploadimg.png";

const Banners = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    
  };

  return (
    <div className="bg">
      <div className="flex gap-2">
        <img src={BannerImg} className="w-6" alt="" />
        <h2 className="font-semibold">Banner Setup</h2>
      </div>
      <div className="border-2 rounded-lg p-4 my-4 shadow-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-6 w-full md:w-2/3"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Banner Image URL */}
            <div>
              <p>Upload Image</p>
              <div className="flex gap-2">
                <label htmlFor="image1">
                  <img src={uploadImage} alt="" />
                  <input
                    type="file"
                    id="image1"
                    hidden
                    {...register("image1")}
                  />
                </label>
                <label htmlFor="image2">
                  <img src={uploadImage} alt="" />
                  <input
                    type="file"
                    id="image2"
                    hidden
                    {...register("image2")}
                  />
                </label>
                <label htmlFor="image3">
                  <img src={uploadImage} alt="" />
                  <input
                    type="file"
                    id="image3"
                    hidden
                    {...register("image3")}
                  />
                </label>
              </div>
            </div>

            {/* Banner Title */}
            <div>
              <label htmlFor="title" className="block mb-2 text-lg font-medium">
                Banner Title
              </label>
              <input
                type="text"
                {...register("title", { required: "Banner Title is required" })}
                name="title"
                placeholder="Enter Banner Title"
                className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
              />
              {errors.title && (
                <span className="text-red-500">{errors.title.message}</span>
              )}
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-lg font-medium"
              >
                Banner Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                name="description"
                placeholder="Enter Banner Description"
                className="w-full px-3 py-3 border rounded-md border-gray-300 text-gray-900"
                rows="2"
              />
              {errors.description && (
                <span className="text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-[#01684B] py-4 px-10 rounded-md text-white md:text-lg"
              >
                Add Banner
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banners;
