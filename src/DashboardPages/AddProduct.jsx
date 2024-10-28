import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import uploadImg from "../assets/uploadimg.png";
import useCategories from "../hooks/useCategories";
import useAxiosSecure from "../hooks/useAxiosSecure";
import ProductDescriptionEditor from "../components/shared/ProductDescriptionEditor";
import { useNavigate } from "react-router-dom";

const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const upload_preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const cloudinary_upload_api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [isPopular, setIsPopular] = useState(false);
  const [inStock, setInStock] = useState(true);
  const axiosSecure = useAxiosSecure();
  const [description, setDescription] = useState(""); 
  const { categories } = useCategories();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate()


  const onSubmit = async (data) => {
    if (!image) {
      setError("image", {
        type: "manual",
        message: "Product image is required",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", upload_preset);

    try {
      const res = await axios.post(cloudinary_upload_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.secure_url) {
        const categoryArray = [data.category];

        // if "Popular" is checked, then add it to the category array
        if (isPopular) {
          categoryArray.push("popular");
        }

        const productData = {
          name: data.name,
          price: data.price,
          previousPrice: data.previousPrice,
          quantity: data.quantity,
          description: description, 
          category: categoryArray,
          imageUrl: res.data.secure_url,
          inStock: inStock,
        };

        const productRes = await axiosSecure.post("/products", productData);
        if (productRes.data.insertedId) {
          toast.success("Product added successfully!");
          setImage(null);
          setDescription("");
          navigate('/dashboard/manage-products')
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload image");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        Add New Product
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          {/* Product Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg md:text-xl font-medium"
            >
              Product Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Product name is required" })}
              placeholder="Enter product name"
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>

          {/* Product Category Dropdown */}
          <div>
            <label
              htmlFor="category"
              className="block text-lg md:text-xl font-medium"
            >
              Category
            </label>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Select category</option>
              {/* category options */}
              {categories.map((category) => (
                <option key={category._id} value={category.category}>
                  {category.category}
                </option>
              ))}
            </select>
            {errors.category && (
              <span className="text-red-500">{errors.category.message}</span>
            )}
          </div>

          {/* Product Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-lg md:text-xl font-medium"
            >
              Product Price
            </label>
            <input
              type="number"
              {...register("price", { required: "Product price is required" })}
              placeholder="Enter product price"
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.price && (
              <span className="text-red-500">{errors.price.message}</span>
            )}
          </div>

          {/* Previous Price */}
          <div>
            <label
              htmlFor="previousPrice"
              className="block text-lg md:text-xl font-medium"
            >
              Previous Price
            </label>
            <input
              type="number"
              {...register("previousPrice")}
              placeholder="Enter previous price"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Quantity */}
          <div>
            <label
              htmlFor="quantity"
              className="block text-lg md:text-xl font-medium"
            >
              Quantity
            </label>
            <input
              type="text"
              {...register("quantity")}
              min="1"
              placeholder="Enter quantity"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Description */}
          <ProductDescriptionEditor 
            value={description} 
            onChange={setDescription}
          />

          {/* Popular Checkbox */}
          <div>
            <label
              htmlFor="popular"
              className="block text-lg md:text-xl font-medium"
            >
              Popular
            </label>
            <input
              type="checkbox"
              id="popular"
              checked={isPopular}
              onChange={() => setIsPopular(!isPopular)}
              className="mr-2"
            />
            <span>Mark as Popular</span>
          </div>

          {/* In Stock Radio Buttons */}
          <div>
            <label className="block text-lg md:text-xl font-medium">
              Stock Status
            </label>
            <div>
              <input
                type="radio"
                id="inStock"
                name="stockStatus"
                value="inStock"
                checked={inStock}
                onChange={() => setInStock(true)}
                className="mr-2"
              />
              <label htmlFor="inStock">In Stock</label>
            </div>
            <div>
              <input
                type="radio"
                id="outOfStock"
                name="stockStatus"
                value="outOfStock"
                checked={!inStock}
                onChange={() => setInStock(false)}
                className="mr-2"
              />
              <label htmlFor="outOfStock">Out of Stock</label>
            </div>
          </div>

          {/* Product Image Upload */}
          <div className="w-full md:w-1/2 mx-auto">
            <label
              htmlFor="image"
              className="block text-lg md:text-xl font-medium"
            >
              Product Image
            </label>
            <div>
              <label htmlFor="image">
                <img
                  className="w-full md:w-48 md:h-48 object-cover"
                  src={image ? URL.createObjectURL(image) : uploadImg}
                  alt="Product"
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
        </div>

        {/* Submit Button */}
        <div className="w-full md:w-1/2 mx-auto">
          <button
            type="submit"
            className="bg-[#005555] w-full text-white py-2 rounded-md hover:bg-[#004545] transition"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
