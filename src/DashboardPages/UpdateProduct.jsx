import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useCategories from "../hooks/useCategories";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";

const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const upload_preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const cloudinary_upload_api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

const UpdateProduct = () => {
  const { productId } = useParams();
  console.log("Product ID:", productId);

  const [image, setImage] = useState(null);
  const [isPopular, setIsPopular] = useState(false);
  const [inStock, setInStock] = useState(true);
  const { categories } = useCategories();
  const { fetchProductById } = useProducts();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProductDetails = async () => {
      const fetchedProduct = await fetchProductById(productId);
      setProduct(fetchedProduct);
    };

    getProductDetails();
  }, [productId, fetchProductById]);
  console.log(product);

  const onSubmit = async (data) => {
    if (!image) {
      setError("image", {
        type: "manual",
        message: "Product image is required",
      });
      return;
    }

    let imageUrl = data.imageUrl; 

    if (typeof image === "object") {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", upload_preset);

      try {
        const res = await axios.post(cloudinary_upload_api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        imageUrl = res.data.secure_url; 
      } catch (error) {
        console.error(error);
        toast.error("Failed to upload image");
        return; 
      }
    }

    const categoryArray = [data.category];
    if (isPopular) {
      categoryArray.push("popular");
    }

    const productData = {
      name: data.name,
      price: data.price,
      previousPrice: data.previousPrice,
      quantity: data.quantity,
      description: data.description,
      category: categoryArray,
      imageUrl,
      inStock,
    };

    console.log(productData);
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
        Update Product
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
              defaultValue={product?.name}
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
              defaultValue={product?.category[0]} 
              {...register("category", { required: "Category is required" })}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Select category</option>
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
              defaultValue={product?.price} 
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
              defaultValue={product?.previousPrice} 
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
              defaultValue={product?.quantity} 
              {...register("quantity")}
              min="1"
              placeholder="Enter quantity"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Product Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-lg md:text-xl font-medium"
            >
              Product Description
            </label>
            <textarea
              defaultValue={product?.description} 
              {...register("description", {
                required: "Product description is required",
              })}
              placeholder="Enter product description"
              className="w-full px-4 py-2 border rounded-md"
              rows="3"
            />
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}
          </div>

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
          <div>
            <label
              htmlFor="image"
              className="block text-lg md:text-xl font-medium"
            >
              Product Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border rounded-md"
            />
            <img
              src={image ? URL.createObjectURL(image) : product?.imageUrl}
              alt="Preview"
              className="w-1/2 mt-2"
            />
            {errors.image && (
              <span className="text-red-500">{errors.image.message}</span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
