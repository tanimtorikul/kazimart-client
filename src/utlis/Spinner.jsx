const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[550px] space-y-4">
      <div className="w-10 h-10 border-4 border-t-4 border-t-[#01684B] border-[#d1d5db] rounded-full animate-spin"></div>
      <h2 className="text-lg font-bold text-gray-600">
        Loading, please wait...
      </h2>
    </div>
  );
};

export default Spinner;
