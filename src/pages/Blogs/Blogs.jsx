import BlogCard from "../../components/BlogCard/BlogCard";
import useBlogs from "../../hooks/useBlogs";
import Spinner from "../../utlis/Spinner";

const Blogs = () => {
  const { blogs, isLoading } = useBlogs();

  if (isLoading) return <Spinner />;

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
