import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs";
import Spinner from "../../utlis/Spinner";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageBlogs = () => {
  const { blogs, refetch, isLoading } = useBlogs();
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete ${name}. This action cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.delete(`/blogs/${id}`);
          if (response.data.deletedCount > 0) {
            refetch(); 
            toast.success(`${name} has been deleted.`);
          } else {
            toast.error("Failed to delete the blog.");
          }
        } catch (error) {
          console.error("Error deleting blog:", error);
          toast.error("An error occurred while deleting the blog.");
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        toast.info("Action canceled.");
      }
    });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Blogs</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-[#F2FCFD]">
          <tr>
            <th className="py-3 px-5 text-center">SL</th>
            <th className="py-3 px-5 text-center">Image</th>
            <th className="py-3 px-5 text-center">Title</th>
            <th className="py-3 px-5 text-center">Category</th>
            <th className="py-3 px-5 text-center">Author</th>
            <th className="py-3 px-5 text-center">Published Date</th>
            <th className="py-3 px-5 hidden sm:table-cell text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {blogs.map((blog, index) => (
            <tr key={blog._id}>
              <td className="py-3 px-5 text-center">{index + 1}</td>
              <td className="py-3 px-5 flex justify-center">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-6 h-6 md:w-8 md:h-8 object-cover"
                />
              </td>
              <td className="py-3 px-5 text-center">{blog.title}</td>
              <td className="py-3 px-5 text-center">{blog.category}</td>
              <td className="py-3 px-5 text-center">{blog.username}</td>
              <td className="py-3 px-5 text-center">{blog.date}</td>
              <td className="py-3 px-5 text-center">
                <Link to={`/dashboard/update-blog/${blog._id}`}>
                  <button className="border-blue-500 text-blue-500 border px-2 py-1 rounded-md md:ml-3">
                    <MdEdit />
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(blog._id, blog.title)}
                  className="border-red-500 text-red-500 border px-2 py-1 rounded-md md:ml-3"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBlogs;
