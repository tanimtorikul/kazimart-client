const CategoriesList = () => {
  return (
    <div className="overflow-x-auto py-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-[#F2FCFD]">
          <tr>
            <th className="py-3 px-5 text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              SL
            </th>
            <th className="py-3 px-5 text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Image
            </th>
            <th className="py-3 px-5 text-center text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Category Name
            </th>
            <th className="py-3 px-5 hidden sm:table-cell text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200"></tbody>
      </table>
    </div>
  );
};

export default CategoriesList;
