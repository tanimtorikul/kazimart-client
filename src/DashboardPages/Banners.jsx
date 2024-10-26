import { useForm } from "react-hook-form";
import BannerImg from "../assets/banner.png";
import BannersList from "../components/BannersList";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useState } from "react";
import uploadImg from "../assets/uploadimg.png";
import toast from "react-hot-toast";
import useBanners from "../hooks/useBanners";
import Spinner from "../utlis/Spinner";

const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const upload_preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const cloudinary_upload_api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

const Banners = () => {
  const [image, setImage] = useState(null);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { refetch, isLoading} = useBanners();

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
        const bannerItem = {
          title: data.title,
          description: data.description,
          imageUrl: res.data.secure_url,
        };

        const bannerRes = await axiosSecure.post("/main-banners", bannerItem);
        if (bannerRes.data.insertedId) {
          refetch();
          toast.success("Banner uploaded successfully!");
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
     {
      isLoading ? <Spinner/>
      : <div>
         <div className="flex gap-2">
        <img src={BannerImg} className="w-6" alt="Banner Icon" />
        <h2 className="font-semibold">Banner Setup</h2>
      </div>
      <div className="border-2 rounded-lg p-4 my-4 shadow-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-6 w-1/2 md:w-2/3"
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
                    className="w-24 md:w-96 md:h-48 object-contain"
                    src={image ? URL.createObjectURL(image) : uploadImg}
                    alt="Uploaded Banner"
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
                className="w-48 md:w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
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
                className="w-48 md:w-full px-3 py-3 border rounded-md border-gray-300 text-gray-900"
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
                className="bg-[#01684B] py-4 px-4 md:px-10 rounded-md text-white text-sm md:text-lg"
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
      </div>     }
    </div>
  );
};

export default Banners;
