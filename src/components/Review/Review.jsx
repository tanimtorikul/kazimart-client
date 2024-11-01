import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useReviews from "../../hooks/useReviews";
import Spinner from "../../utlis/Spinner";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";

const Review = ({ productId }) => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { reviews,  isLoading } = useReviews(productId);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newReview = {
      productId,
      userName: user.displayName || "Anonymous",
      userImage: user.photoURL || null,
      userEmail: user.email,
      reviewText: data.reviewText,
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };

    setIsSubmitting(true);
    try {
      await axiosPublic.post("/reviews", newReview);
      reset();
      toast.success("Review submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit review!");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-8">
        <div className="flex-1">
          {reviews.length > 0 ? (
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg flex items-center gap-4"
                >
                  {review.userImage && (
                    <img
                      src={review.userImage}
                      alt={review.userName}
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-[#2B59A4]">
                      {review.userName}
                    </p>
                    <p className="text-sm text-gray-400">{review.date}</p>
                    <p className="text-gray-500 text-lg">{review.reviewText}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No reviews yet.</p>
          )}
        </div>

        <div className="flex-1 mb-6">
          {user ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 bg-white p-4"
            >
              <div>
                <label
                  htmlFor="reviewText"
                  className="block mb-2 text-sm font-medium"
                >
                  Your Review
                </label>
                <textarea
                  id="reviewText"
                  {...register("reviewText", {
                    required: "Review text is required",
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                  rows="4"
                  placeholder="Write your review here..."
                ></textarea>
                {errors.reviewText && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.reviewText.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-4 py-2 bg-[#01684B] text-white rounded-lg font-semibold hover:bg-[#014d32] transition duration-150"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          ) : (
            <div className="text-center">
              <p className="mb-4 text-sm md:text-lg">
                <Link
                  to="/login"
                  className="text-[#01684B] font-medium underline"
                >
                  Login
                </Link>{" "}
                to submit a review.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
