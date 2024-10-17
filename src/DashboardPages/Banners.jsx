import { useForm } from "react-hook-form";
import { useState } from "react";
import BannerImg from "../assets/banner.png";
import uploadImage from "../assets/uploadimg.png";
import BannersList from "../components/BannersList";

const Banners = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const [image, setImage] = useState(null);

  const onSubmit = (data) => {
    if (!image) {
      setError("image", {
        type: "manual",
        message: "Image is required",
      });
      return;
    }

    const formData = {
      ...data,
      image: image || null,
    };
    console.log(formData);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      clearErrors("image");
    }
  };

  return (
    <div className="">
      <div className="flex gap-2">
        <img src={BannerImg} className="w-6" alt="Banner Icon" />
        <h2 className="font-semibold">Banner Setup</h2>
      </div>
      <div className="border-2 rounded-lg p-4 my-4 shadow-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-6 w-full md:w-2/3"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Upload */}
            <div>
              <p>
                Banner Image{" "}
                <span className="text-sm text-red-600">* ( Ratio 2:1 )</span>
              </p>
              <div>
                <label htmlFor="image">
                  <img
                    className="w-96 h-48 object-contain"
                    src={image ? URL.createObjectURL(image) : uploadImage}
                    alt="Uploaded Banner"
                  />

                  <input
                    type="file"
                    id="image"
                    hidden
                    onChange={handleFileChange}
                  />
                </label>
                {errors.image && (
                  <span className="text-red-500">{errors.image.message}</span>
                )}
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

            {/* Banner Description */}
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

            {/* Submit Button */}
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
      <div>
        <h2>Banners Lists</h2>
        <BannersList />
      </div>
    </div>
  );
};

export default Banners;
