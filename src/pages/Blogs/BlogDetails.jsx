import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Spinner from "../../utlis/Spinner";

const BlogDetails = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axiosPublic.get(`/get-blog/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (!blog) return <Spinner/>

  return (
    <div className="max-w-[1400px] mx-auto p-8 min-h-screen">
      <h2 className="text-lg md:text-3xl font-semibold mb-4 lg:text-center">{blog.title}</h2>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full md:h-96 object-cover rounded-lg mb-4"
      />
      <div className="text-gray-700 mb-6"> <span className="font-semibold">By</span> 
        <span className="font-semibold text-[#748CEB] ml-1">{blog.username}</span>{" "}
        <span className="text-gray-400">| <span className="text-black">Published on</span> {blog.date}</span>
      </div>
      <div
        className="text-gray-800 text-lg leading-7"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogDetails;
