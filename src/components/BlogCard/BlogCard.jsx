import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom"; 

const BlogCard = ({ blog }) => {
    const {image, title, category, content, date, username, userImage} = blog;
  return (
    <Link to={`/blog-details/${blog._id}`} className="block"> 
      <div className="h-full bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-32 md:h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="bg-[#FEFCBF] text-sm font-semibold mb-2 text-center rounded-xl p-2 inline-block">
            {category}
          </h2>

          <h3 className="md:text-2xl font-bold py-4">{title}</h3>

          <p
            className="text-gray-700 mb-4 text-sm"
            dangerouslySetInnerHTML={{ __html: content.slice(0, 100) }}
          />

          <div className="mb-2 flex justify-between">
            <span className="flex items-center gap-2 text-[#748CEB] text-sm">
              {userImage ? (
                userImage
              ) : (
                <FaRegUser size={12} />
              )}
              {username}
            </span>
            <span className="text-gray-400 ml-7">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
