import {
  FaUser,
  FaBoxArchive,
  FaClipboardList,
  FaChartColumn,
  FaStar,
} from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { MdCategory } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { RiGalleryView } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";

const AdminSidebar = () => {
  return (
    <div className="w-24 md:w-64 bg-[#005555] min-h-full text-white">
      <div className="p-2 md:p-6">
        <nav>
          <ul className="space-y-4 list-none">
            <h2 className="text-[#B1E3CE] text-xs md:text-xl py-2">
              Admin Dashboard
            </h2>

            {/* Overview */}
            <li>
              <p className="text-[#B1E3CE] hidden md:block">Overview</p>
              <NavLink
                to="/dashboard/overview"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded transition-colors ${
                    isActive
                      ? "text-[#47C466] bg-gray-900"
                      : "hover:bg-primary-dark"
                  }`
                }
              >
                <FaChartColumn className="mr-2" />
                <p className="md:block hidden">Overview</p>
              </NavLink>
            </li>

            {/* Product Management */}
            <li>
              <p className="text-[#B1E3CE] hidden md:block">Product Management</p>
              <NavLink
                to="/dashboard/add-product"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded transition-colors ${
                    isActive
                      ? "text-[#47C466] bg-gray-900"
                      : "hover:bg-primary-dark"
                  }`
                }
              >
                <GrGallery className="mr-2" />
                <p className="md:block hidden">Add Product</p>
              </NavLink>
            </li>

            {/* Additional Admin Links */}
            <li>
              <NavLink
                to="/dashboard/manage-products"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded transition-colors ${
                    isActive
                      ? "text-[#47C466] bg-gray-900"
                      : "hover:bg-primary-dark"
                  }`
                }
              >
                <FaBoxArchive className="mr-2" />
                <p className="md:block hidden">Manage Products</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/categories"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded transition-colors ${
                    isActive
                      ? "text-[#47C466] bg-gray-900"
                      : "hover:bg-primary-dark"
                  }`
                }
              >
                <MdCategory className="mr-2" />
                <p className="md:block hidden">Add Category</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/orders"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded transition-colors ${
                    isActive
                      ? "text-[#47C466] bg-gray-900"
                      : "hover:bg-primary-dark"
                  }`
                }
              >
                <FaClipboardList className="mr-2" />
                <p className="md:block hidden">Manage Orders</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/main-banner"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded transition-colors ${
                    isActive
                      ? "text-[#47C466] bg-gray-900"
                      : "hover:bg-primary-dark"
                  }`
                }
              >
                <GrGallery className="mr-2" />
                <p className="md:block hidden">Main Banners</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/promo"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded transition-colors ${
                    isActive
                      ? "text-[#47C466] bg-gray-900"
                      : "hover:bg-primary-dark"
                  }`
                }
              >
                <RiGalleryView className="mr-2" />
                <p className="md:block hidden">Promo Banners</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/users"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded transition-colors ${
                    isActive
                      ? "text-[#47C466] bg-gray-900"
                      : "hover:bg-primary-dark"
                  }`
                }
              >
                <FaUser className="mr-3" />
                <p className="md:block hidden">All Users</p>
              </NavLink>
            </li>

            {/* Reviews Section */}
            <li>
              <NavLink
                to="/dashboard/reviews"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded transition-colors ${
                    isActive
                      ? "text-[#47C466] bg-gray-900"
                      : "hover:bg-primary-dark"
                  }`
                }
              >
                
                <FaStar className="mr-2" />
                <p className="md:block hidden">Reviews</p>
              </NavLink>
            </li>

            {/* Blog Management Section */}
            <h2 className="text-[#B1E3CE] text-xs md:text-xl py-2 hidden md:block">
              Blog Management
            </h2>
            <li>
              <NavLink
                to="/dashboard/add-blog"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded transition-colors ${
                    isActive
                      ? "text-[#47C466] bg-gray-900"
                      : "hover:bg-primary-dark"
                  }`
                }
              >
                <TfiWrite className="mr-2" />
                <p className="md:block hidden">Add Blog</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manage-blogs"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded transition-colors ${
                    isActive
                      ? "text-[#47C466] bg-gray-900"
                      : "hover:bg-primary-dark"
                  }`
                }
              >
                <FaClipboardList className="mr-2" />
                <p className="md:block hidden">Manage Blogs</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
