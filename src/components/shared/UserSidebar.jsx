import { FaChartBar, FaUser, FaClipboardList } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  return (
    <div className="w-24 md:w-64 bg-[#005555] min-h-full text-white">
      <div className="p-2 md:p-6">
        <nav>
          <ul className="space-y-4 list-none">
            <li>
              <p className="text-[#B1E3CE] hidden md:block">User - Orders</p>
              <NavLink
                to="/dashboard/my-orders"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded transition-colors ${
                    isActive
                      ? "text-[#47C466] bg-gray-900"
                      : "hover:bg-[#013737]"
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
                    isActive
                      ? "text-[#47C466] bg-gray-900"
                      : "hover:bg-[#013737]"
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
                    isActive
                      ? "text-[#47C466] bg-gray-900"
                      : "hover:bg-[#013737]"
                  }`
                }
              >
                <FaChartBar className="mr-2" />
                <p className="md:block hidden">Settings</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UserSidebar;
