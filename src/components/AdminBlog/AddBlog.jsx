import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import uploadImg from "../../assets/uploadimg.png";
import useCategories from "../../hooks/useCategories";
import { useNavigate } from "react-router-dom";
import ProductDescriptionEditor from "../../components/shared/ProductDescriptionEditor";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const upload_preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const cloudinary_upload_api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

const AddBlog = () => {
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const { categories } = useCategories();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();

  // Function to handle image upload
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", upload_preset);

    try {
      const res = await axios.post(cloudinary_upload_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data.secure_url;
    } catch (error) {
      console.error("Image upload failed:", error);
      toast.error("Image upload failed.");
      return null;
    }
  };

  const onSubmit = async (data) => {
    if (!image) {
      setError("image", {
        type: "manual",
        message: "Blog image is required",
      });
      return;
    }

    const blogData = {
      title: data.title,
      category: data.category,
      content,
      image,
      username: user.displayName,
      userImage: user.photoURL,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
console.log(blogData);

    try {
      const response = await axiosSecure.post("/add-blogs", blogData);
      if (response.data.insertedId) {
        toast.success("Blog added successfully!");
        setImage("");
        setContent("");
        navigate("/dashboard/manage-blogs");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add blog.");
    }
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = await uploadImage(file);
      if (imageUrl) {
        setImage(imageUrl);
      }
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Add New Blog
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Blog Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-lg md:text-xl font-medium mb-2"
            >
              Blog Title
            </label>
            <input
              type="text"
              {...register("title", { required: "Blog title is required" })}
              placeholder="Enter blog title"
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#005555] transition duration-150"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* Blog Category Dropdown */}
          <div>
            <label
              htmlFor="category"
              className="block text-lg md:text-xl font-medium mb-2"
            >
              Category
            </label>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#005555] transition duration-150"
            >
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category._id} value={category.category}>
                  {category.category}
                </option>
              ))}
            </select>
            {errors.category && (
              <span className="text-red-500 text-sm">
                {errors.category.message}
              </span>
            )}
          </div>

          {/* Blog Image Upload */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="image"
              className="block text-lg md:text-xl font-medium mb-2"
            >
              Blog Image{" "}
              <span className="text-red-500 text-sm">*Add an image</span>
            </label>
            <div className="relative">
              <label htmlFor="image" className="cursor-pointer">
                <img
                  className="w-full md:w-48 md:h-48 object-cover rounded-md border-2 border-dashed border-gray-400"
                  src={image ? image : uploadImg}
                  alt="Blog"
                />
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              {errors.image && (
                <span className="text-red-500 text-sm">
                  {errors.image.message}
                </span>
              )}
            </div>
          </div>

          {/* Blog Editor */}
          <div className="col-span-1 md:col-span-2">
            <ProductDescriptionEditor value={content} onChange={setContent} />
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full md:w-1/3 mx-auto">
          <button
            type="submit"
            className="bg-[#005555] w-full text-white py-3 rounded-md shadow-md hover:bg-[#004545] transition duration-150"
          >
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
