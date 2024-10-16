import { FaChartBar, FaUser, FaBoxArchive, FaClipboardList } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { MdCategory, MdAddShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const DashboardSideBar = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="w-24 md:w-64 bg-[#005555] min-h-screen text-white">
      <div className="p-2 md:p-6">
        <nav>
          <ul className="space-y-4 list-none">
            {isAdmin ? (
              <>
                {/* Product Management */}
                <li>
                  <p className="text-[#B1E3CE] hidden md:block">Admin - Product Management</p>
                  <NavLink
                    to="/dashboard/add-product"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 rounded transition-colors ${
                        isActive ? "text-[#47C466] bg-gray-900" : "hover:bg-[#013737]"
                      }`
                    }
                  >
                    <GrGallery className="mr-2" />
                    <p className="md:block hidden">Add Product</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/all-products"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 rounded transition-colors ${
                        isActive ? "text-[#47C466] bg-gray-900" : "hover:bg-[#013737]"
                      }`
                    }
                  >
                    <FaBoxArchive className="mr-2" />
                    <p className="md:block hidden">All Products</p>
                  </NavLink>
                </li>

                {/* Order Management */}
                <li>
                  <p className="text-[#B1E3CE] hidden md:block">Admin - Order Management</p>
                  <NavLink
                    to="/dashboard/manage-orders"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 rounded transition-colors ${
                        isActive ? "text-[#47C466] bg-gray-900" : "hover:bg-[#013737]"
                      }`
                    }
                  >
                    <FaClipboardList className="mr-2" />
                    <p className="md:block hidden">Manage Orders</p>
                  </NavLink>
                </li>

                {/* Category Management */}
                <li>
                  <p className="text-[#B1E3CE] hidden md:block">Admin - Category Management</p>
                  <NavLink
                    to="/dashboard/add-category"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 rounded transition-colors ${
                        isActive ? "text-[#47C466] bg-gray-900" : "hover:bg-[#013737]"
                      }`
                    }
                  >
                    <MdCategory className="mr-2" />
                    <p className="md:block hidden">Add Category</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/all-categories"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 rounded transition-colors ${
                        isActive ? "text-[#47C466] bg-gray-900" : "hover:bg-[#013737]"
                      }`
                    }
                  >
                    <FaBoxArchive className="mr-2" />
                    <p className="md:block hidden">All Categories</p>
                  </NavLink>
                </li>

                {/* User Management */}
                <li>
                  <p className="text-[#B1E3CE] hidden md:block">Admin - User Management</p>
                  <NavLink
                    to="/dashboard/users"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 rounded transition-colors ${
                        isActive ? "text-[#47C466] bg-gray-900" : "hover:bg-[#013737]"
                      }`
                    }
                  >
                    <FaUser className="mr-3" />
                    <p className="md:block hidden">All Users</p>
                  </NavLink>
                </li>

                {/* Admin Add Order */}
                <li>
                  <p className="text-[#B1E3CE] hidden md:block">Admin - Add Order</p>
                  <NavLink
                    to="/dashboard/add-order"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 rounded transition-colors ${
                        isActive ? "text-[#47C466] bg-gray-900" : "hover:bg-[#013737]"
                      }`
                    }
                  >
                    <MdAddShoppingCart className="mr-2" />
                    <p className="md:block hidden">Add Order</p>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {/* User-specific links */}
                <li>
                  <p className="text-[#B1E3CE] hidden md:block">User - Orders</p>
                  <NavLink
                    to="/dashboard/my-orders"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 rounded transition-colors ${
                        isActive ? "text-[#47C466] bg-gray-900" : "hover:bg-[#013737]"
                      }`
                    }
                  >
                    <FaClipboardList className="mr-2" />
                    <p className="md:block hidden">My Orders</p>
                  </NavLink>
                </li>
                <li>
                  <p className="text-[#B1E3CE] hidden md:block">User - Profile</p>
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 rounded transition-colors ${
                        isActive ? "text-[#47C466] bg-gray-900" : "hover:bg-[#013737]"
                      }`
                    }
                  >
                    <FaUser className="mr-2" />
                    <p className="md:block hidden">Profile</p>
                  </NavLink>
                </li>
                <li>
                  <p className="text-[#B1E3CE] hidden md:block">User - Settings</p>
                  <NavLink
                    to="/dashboard/settings"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 rounded transition-colors ${
                        isActive ? "text-[#47C466] bg-gray-900" : "hover:bg-[#013737]"
                      }`
                    }
                  >
                    <FaChartBar className="mr-2" />
                    <p className="md:block hidden">Settings</p>
                  </NavLink>
                </li>
              </>
            )}

          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DashboardSideBar;
