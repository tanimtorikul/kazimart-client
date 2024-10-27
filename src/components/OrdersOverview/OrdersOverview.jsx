import useOrders from "../../hooks/useOrders";

const OrdersOverview = () => {
  const { orders } = useOrders();

  const orderCounts = {
    Pending: 0,
    Processing: 0,
    Shipped: 0,
    Delivered: 0,
    Cancelled: 0,
  };

  orders.forEach((order) => {
    orderCounts[order.orderStatus] += 1;
  });

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 my-4">
        Order Analytics
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 my-6">
        {/* Pending Orders Card */}
        <div className="bg-white border p-8 rounded-lg shadow">
          <h2 className="text-sm font-semibold text-gray-600">Pending</h2>
          <p className="text-2xl font-bold text-gray-800">
            {orderCounts.Pending}
          </p>
        </div>

        {/* Processing Orders Card */}
        <div className="bg-white border p-8 rounded-lg shadow">
          <h2 className="text-sm font-semibold text-gray-600">Processing</h2>
          <p className="text-2xl font-bold text-gray-800">
            {orderCounts.Processing}
          </p>
        </div>

        {/* Shipped Orders Card */}
        <div className="bg-white border p-8 rounded-lg shadow">
          <h2 className="text-sm font-semibold text-gray-600">Shipped</h2>
          <p className="text-2xl font-bold text-gray-800">
            {orderCounts.Shipped}
          </p>
        </div>

        {/* Delivered Orders Card */}
        <div className="bg-white border p-8 rounded-lg shadow">
          <h2 className="text-sm font-semibold text-gray-600">Delivered</h2>
          <p className="text-2xl font-bold text-gray-800">
            {orderCounts.Delivered}
          </p>
        </div>

        {/* Cancelled Orders Card */}
        <div className="bg-white border p-8 rounded-lg shadow">
          <h2 className="text-sm font-semibold text-gray-600">Cancelled</h2>
          <p className="text-2xl font-bold text-gray-800">
            {orderCounts.Cancelled}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrdersOverview;
