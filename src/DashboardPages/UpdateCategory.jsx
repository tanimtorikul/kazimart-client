import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCategories from "../hooks/useCategories"; // Import your useCategories hook
import Spinner from "../utlis/Spinner";
import { Helmet } from "react-helmet-async";

const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const upload_preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const cloudinary_upload_api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

const UpdateCategory = () => {
  const { categoryId } = useParams();
  const { categories, isLoading } = useCategories();
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState(null);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    // Find the category by ID
    if (categories.length > 0) {
      const foundCategory = categories.find((cat) => cat._id === categoryId);
      if (foundCategory) {
        setCategory(foundCategory);
      } else {
        toast.error("Category not found");
      }
    }
  }, [categories, categoryId]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let imgUrl = "";

    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", upload_preset);

      try {
        const res = await axios.post(cloudinary_upload_api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        imgUrl = res.data.secure_url;
      } catch (error) {
        console.error(error);
        toast.error("Failed to upload image");
        return;
      }
    } else {
      imgUrl = category?.imgUrl || "";
    }

    const categoryData = {
      category: event.target.category.value,
      imgUrl,
    };

    try {
      const categoryRes = await axiosSecure.put(
        `/categories/${categoryId}`,
        categoryData
      );
      if (categoryRes.data.modifiedCount > 0) {
        toast.success("Category updated successfully!");
        navigate("/dashboard/categories");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update category");
    }
  };

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Update Category</title>
      </Helmet>
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
        Update Category
      </h2>
      {category && (
        <div className="border-2 max-w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 md:gap-24 justify-center">
              {/* Category Name */}
              <div className="flex-1">
                <label
                  htmlFor="category"
                  className="block text-lg md:text-xl font-medium"
                >
                  Category Name
                </label>
                <input
                  type="text"
                  defaultValue={category.category}
                  name="category"
                  placeholder="Enter category name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  required
                />
              </div>

              {/* Category Image Upload */}
              <div className="flex-1">
                <label
                  htmlFor="image"
                  className="block text-lg md:text-xl font-medium"
                >
                  Category Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="border rounded-md mb-2"
                />
                <img
                  src={image ? URL.createObjectURL(image) : category?.imgUrl}
                  alt="Preview"
                  className="w-full h-auto max-w-[8rem] md:max-w-[12rem] object-contain border-2 border-gray-300 rounded-lg"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex md:justify-end">
              <button
                type="submit"
                className="bg-primary-light py-2 md:py-4 px-4 md:px-10 rounded-md text-white text-lg hover:bg-green-600 transition duration-200"
              >
                Update Category
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateCategory;
