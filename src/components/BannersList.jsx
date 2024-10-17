const BannersList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
              SL
            </th>
            <th className="py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Image
            </th>
            <th className="py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Title
            </th>
            <th className="py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Description
            </th>
            <th className="py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200"></tbody>
      </table>
    </div>
  );
};

export default BannersList;
