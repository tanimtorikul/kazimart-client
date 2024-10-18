import { useForm } from "react-hook-form";
import uploadImg from "../assets/uploadimg.png"; // Assuming you have an upload image icon
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useState } from "react";
import CategoriesList from "../components/Categories/CategoriesList";

const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const upload_preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const cloudinary_upload_api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

const AddCategories = () => {
  const [image, setImage] = useState(null);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    if (!image) {
      setError("image", { type: "manual", message: "Image is required" });
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", upload_preset);

    try {
      const res = await axiosPublic.post(cloudinary_upload_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.secure_url) {
        const categoryItem = {
          category: data.name,
          imgUrl: res.data.secure_url,
        };

        const categoryRes = await axiosSecure.post("/categories", categoryItem);
        if (categoryRes.data.insertedId) {
          toast.success("Category added successfully!");

          setImage(null);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Error uploading category. Please try again.");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Add Category
      </h2>
      <div className="border-2 max-w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-lg font-medium text-gray-700"
              >
                Category Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Category Name is required" })}
                name="name"
                placeholder="Enter Category Name"
                className="md:w-1/2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>

            {/* Image Upload */}
            <div>
              <p className="mb-2 text-lg font-medium text-gray-700">
                Category Image{" "}
                <span className="text-sm text-red-600">* ( Ratio 3:1 )</span>
              </p>
              <label
                htmlFor="image"
                className="flex items-center cursor-pointer"
              >
                <img
                  className="w-24 md:w-48 md:h-24 object-contain border-2 border-dashed border-gray-300 rounded-lg"
                  src={image ? URL.createObjectURL(image) : uploadImg}
                  alt="Uploaded Category"
                />
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  hidden
                />
              </label>
              {errors.image && (
                <span className="text-red-500">{errors.image.message}</span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#01684B] py-2 md:py-4 px-4 md:px-10 rounded-md text-white text-lg hover:bg-green-600 transition duration-200"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <div>
        <CategoriesList />
      </div>
    </div>
  );
};

export default AddCategories;
