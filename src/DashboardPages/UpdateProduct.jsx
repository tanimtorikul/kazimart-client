import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useCategories from "../hooks/useCategories";
import { useNavigate, useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import useAxiosSecure from "../hooks/useAxiosSecure";

const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const upload_preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const cloudinary_upload_api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

const UpdateProduct = () => {
  const { productId } = useParams();
  const [image, setImage] = useState(null);
  const [isPopular, setIsPopular] = useState(false);
  const [inStock, setInStock] = useState(true);
  const { categories } = useCategories();
  const { fetchProductById } = useProducts();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      const fetchedProduct = await fetchProductById(productId);
      setProduct(fetchedProduct);
    };

    getProductDetails();
  }, [productId, fetchProductById]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let imageUrl = "";

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
        imageUrl = res.data.secure_url;
      } catch (error) {
        console.error(error);
        toast.error("Failed to upload image");
        return;
      }
    } else {
      imageUrl = product?.imageUrl || "";
    }

    const categoryArray = [event.target.category.value];
    if (isPopular) {
      categoryArray.push("popular");
    }

    const productData = {
      name: event.target.name.value,
      price: event.target.price.value,
      previousPrice: event.target.previousPrice.value,
      quantity: event.target.quantity.value,
      description: event.target.description.value,
      category: categoryArray,
      imageUrl,
      inStock,
    };

    try {
      const productRes = await axiosSecure.put(
        `/products/${productId}`,
        productData
      );
      if (productRes.data.modifiedCount > 0) {
        toast.success("Product updated successfully!");
        setImage(null);
        navigate("/dashboard/manage-products");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update product");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        Update Product
      </h2>
      <form onSubmit={onSubmit} className="space-y-6">
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
              name="name"
              placeholder="Enter product name"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
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
              name="category"
              defaultValue={product?.category[0]}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category._id} value={category.category}>
                  {category.category}
                </option>
              ))}
            </select>
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
              name="price"
              placeholder="Enter product price"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
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
              name="previousPrice"
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
              name="quantity"
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
              name="description"
              defaultValue={product?.description || ""}
              placeholder="Enter product description"
              className="w-full px-4 py-2 border rounded-md"
              rows="3"
              required
            />
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
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full md:w-1/2 mx-auto">
          <button
            type="submit"
            className="bg-[#005555] w-full text-white py-2 px-6 rounded-md text-lg md:text-xl"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
