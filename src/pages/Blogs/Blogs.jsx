import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaRegUser } from "react-icons/fa6";

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
      <h2 className="text-3xl font-semibold text-center mb-6">
        Insights from Kazimart
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="h-full bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="bg-[#FEFCBF] text-sm font-semibold mb-2 text-center rounded-xl p-2 inline-block">
                {blog.category}
              </h2>

              <h3 className="text-2xl font-bold py-4">{blog.title}</h3>

              <p
                className="text-gray-700 mb-4"
                dangerouslySetInnerHTML={{ __html: blog.content.slice(0, 100) }}
              />

              <div className="mb-2 flex justify-between">
                <span className="flex items-center gap-2 text-[#748CEB]">
                  {" "}
                  {blog.userImage ? (
                    blog.userImage
                  ) : (
                    <FaRegUser size={20} />
                  )}{" "}
                  {blog.username}
                </span>
                <span className="text-gray-400 ml-7">{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
