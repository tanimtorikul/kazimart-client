import logo from '../../assets/kazimart.png';

const DashboardNavbar = () => {
  return (
    <div className="bg-white shadow-md px-6 flex justify-between items-center">
      <img className="w-24 h-24" src={logo} alt="Kazimart Logo" />
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-all">
        Logout
      </button>
    </div>
  );
};

export default DashboardNavbar;
