import logo from "../assets/shopping-bag.png";
const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[550px] space-y-4">
      <div className="flex items-center space-x-2">
        <img className="w-6 md:w-10" alt="Kazimart Logo" src={logo} />
        <h2 className="text-lg md:text-xl font-semibold text-primary-light">
          Kazimart
        </h2>
      </div>
      <div className="w-10 h-10 border-4 border-t-4 border-t-primary-light border-[#d1d5db] rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
