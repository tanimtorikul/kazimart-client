import { FaChartBar, FaUser } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const DashboardSideBar = () => {
  return (
    <div className="md:w-64 bg-[#005555] min-h-screen text-white">
      <div className="p-2 md:p-6">
        <nav>
          <ul className="space-y-4 list-none">
            {/* Products Section */}
            <li>
              <p className="text-[#B1E3CE] hidden md:block">
                Product Management
              </p>
              <NavLink
                to="/dashboard/add-product"
                className="flex items-center px-4 py-2 rounded hover:bg-[#013737] transition-colors"
                activeClassName="bg-gray-700"
              >
                <GrGallery className="mr-2" />
                <p className="md:block hidden">Add Product</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/all-products"
                className="flex items-center px-4 py-2 rounded hover:bg-[#013737] transition-colors"
                activeClassName="bg-gray-700"
              >
                <FaBoxArchive className="mr-2" />
                <p className="md:block hidden">All Products</p>
              </NavLink>
            </li>

            {/* Banners Section */}
            <li>
              <p className="text-[#B1E3CE] hidden md:block">
                Banners Management
              </p>
              <NavLink
                to="/dashboard/add-banner"
                className="flex items-center px-4 py-2 rounded hover:bg-[#013737] transition-colors"
                activeClassName="bg-gray-700"
              >
                <GrGallery className="mr-2" />
                <p className="md:block hidden">Add Banner</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/all-banners"
                className="flex items-center px-4 py-2 rounded hover:bg-[#013737] transition-colors"
                activeClassName="bg-gray-700"
              >
                <GrGallery className="mr-2" />
                <p className="md:block hidden">All Banners</p>
              </NavLink>
            </li>
            {/* Promo Banners Section */}
            <li>
              <p className="text-[#B1E3CE] hidden md:block">Promo Banners</p>
              <NavLink
                to="/dashboard/add-banner"
                className="flex items-center px-4 py-2 rounded hover:bg-[#013737] transition-colors"
                activeClassName="bg-gray-700"
              >
                <GrGallery className="mr-2" />
                <p className="md:block hidden">Add Banner</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/all-banners"
                className="flex items-center px-4 py-2 rounded hover:bg-[#013737] transition-colors"
                activeClassName="bg-gray-700"
              >
                <GrGallery className="mr-2" />
                <p className="md:block hidden">All Banners</p>
              </NavLink>
            </li>

            {/* Orders Section */}
            <li>
              <p className="text-[#B1E3CE] hidden md:block">
                Orders Management
              </p>
              <NavLink
                to="/dashboard/orders"
                className="flex items-center px-4 py-2 rounded hover:bg-[#013737] transition-colors"
                activeClassName="bg-gray-700"
              >
                <FaBoxArchive className="mr-2" />
                <p className="md:block hidden">Orders</p>
              </NavLink>
            </li>

            {/* Users Section */}
            <li>
              <p className="text-[#B1E3CE] hidden md:block">User Management</p>
              <NavLink
                to="/dashboard/customers"
                className="flex items-center px-4 py-2 rounded hover:bg-[#013737] transition-colors"
                activeClassName="bg-gray-700"
              >
                <FaUser className="mr-3" />
                <p className="md:block hidden">Users</p>
              </NavLink>
            </li>

            {/* Reports Section */}
            <li>
              <p className="text-[#B1E3CE] hidden md:block">
                Reports and Analytics
              </p>
              <NavLink
                to="/dashboard/report"
                className="flex items-center px-4 py-2 rounded hover:bg-[#013737] transition-colors"
                activeClassName="bg-gray-700"
              >
                <FaChartBar className="mr-3" />
                <p className="md:block hidden">Reports</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DashboardSideBar;
