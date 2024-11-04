import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import BlogCard from "../../components/BlogCard/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const axiosPublic = useAxiosPublic();

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosPublic.get("/get-blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto p-6 h-screen">
      <h2 className="md:text-3xl font-semibold text-center mb-6">
        Insights from Kazimart
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
