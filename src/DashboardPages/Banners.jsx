import { useForm } from "react-hook-form";
import BannerImg from "../assets/banner.png";
import BannersList from "../components/BannersList";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useState } from "react";
import uploadImg from "../assets/uploadimg.png";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Banners = () => {
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

    console.log(data); // data contains title and description

    const formData = new FormData();
    formData.append("image", image); // Append the selected image file

    try {
        const res = await axiosPublic.post(image_hosting_api, formData, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });

        console.log(res.data);

        if (res.data.success) {
          const bannerItem = {
              title: data.title,
              description: data.description,
              imageUrl: res.data.data.display_url, 
          };
          // 
          const bannerRes = await axiosSecure.post('/banners', bannerItem)
          console.log(bannerRes.data);
          if (bannerRes.data.insertedId) {
            
          }
          
      }
      
    } catch (error) {
        console.error("Error uploading image:", error);
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
                {...register("title", { required: "Banner Title is required" })} // Register title
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
                })} // Register description
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
