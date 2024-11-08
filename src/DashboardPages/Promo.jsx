import { useForm } from "react-hook-form";
import BannerImg from "../assets/banner.png";
import uploadImg from "../assets/uploadimg.png";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useState } from "react";
import toast from "react-hot-toast";
import useProducts from "../hooks/useProducts";
import { Helmet } from "react-helmet-async";
import Spinner from "../utlis/Spinner";
import PromoList from "../components/PromoList";

const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const upload_preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const cloudinary_upload_api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

const Promo = () => {
  const [image, setImage] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { allProducts, allProductsLoading } = useProducts();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
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
        const promoItem = {
          imgUrl: res.data.secure_url,
          productId: selectedProduct,
        };

        const promoRes = await axiosSecure.post("/promo", promoItem);
        if (promoRes.data.insertedId) {
          toast.success("Promo uploaded successfully!");
          reset();
          setImage(null);
          setSelectedProduct(null);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="w-72 md:w-full">
      <Helmet>
        <title>Manage Promos</title>
      </Helmet>
      {allProductsLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className="flex gap-2">
            <img src={BannerImg} className="w-6" alt="Promo Icon" />
            <h2 className="font-semibold">Promo Setup</h2>
          </div>
          <div className="border-2 rounded-lg p-4 my-4 shadow-lg">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-6 w-full md:w-1/2"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p>
                    Promo Image{" "}
                    <span className="text-sm text-red-600">* ( Ratio 2:1 )</span>
                  </p>
                  <div>
                    <label htmlFor="image">
                      <img
                        className="w-24 md:w-96 md:h-48 object-contain"
                        src={image ? URL.createObjectURL(image) : uploadImg}
                        alt="Uploaded Promo"
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
                <div className="md:col-span-2">
                  <label htmlFor="product" className="block mb-2 text-lg font-medium">
                    Select Product
                  </label>
                  <select
                    id="product"
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    value={selectedProduct || ""}
                    className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
                  >
                    <option value="">Select a product</option>
                    {allProducts.map((product) => (
                      <option key={product._id} value={product._id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="bg-primary-light py-4 px-4 md:px-10 rounded-md text-white text-sm md:text-lg"
                  >
                    Add Promo
                  </button>
                </div>
              </div>
            </form>
          </div>
          <PromoList/>
        </div>
      )}
    </div>
  );
};

export default Promo;
