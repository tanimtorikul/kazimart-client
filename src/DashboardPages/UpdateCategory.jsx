import { useForm } from "react-hook-form";
import useCategories from "../hooks/useCategories";
import uploadImg from "../assets/uploadimg.png";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const UpdateCategory = () => {
  const { categories, refetch, isLoading } = useCategories();
  const [image, setImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (categories.length > 0) {
      const defaultCategory = categories[0];
      setSelectedCategory(defaultCategory);
      setValue("name", defaultCategory.category);
      setImage(defaultCategory.imgUrl);
    }
  }, [categories, setValue]);

  const onSubmit = async (data) => {
    try {
      let imgUrl = selectedCategory.imgUrl;
      if (image instanceof File) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append(
          "upload_preset",
          import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
        );

        const res = await axiosSecure.post(
          import.meta.env.VITE_CLOUDINARY_API_URL,
          formData
        );
        imgUrl = res.data.secure_url;
      }

      const updatedCategory = { category: data.name, imgUrl };
      const categoryRes = await axiosSecure.put(
        `/categories/${selectedCategory._id}`,
        updatedCategory
      );

      if (categoryRes.data.modifiedCount > 0) {
        toast.success("Category updated successfully!");
        refetch();
        setImage(null);
        navigate('/dashboard/categories')
      }
    } catch (error) {
      console.error("Error updating category:", error);
      toast.error("Failed to update category. Please try again.");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  if (isLoading) return <p>Loading categories...</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Update Category</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
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
              <span className="text-sm text-red-600">* (Ratio 3:1)</span>
            </p>
            <label htmlFor="image" className="flex items-center cursor-pointer">
              <img
                src={
                  image instanceof File
                    ? URL.createObjectURL(image)
                    : image || uploadImg
                }
                alt="Category Preview"
                className="w-24 h-24 object-contain border rounded mb-2"
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
            Update Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCategory;
