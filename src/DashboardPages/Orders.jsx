import { TbCurrencyTaka } from "react-icons/tb";
import useOrders from "../hooks/useOrders";
import Spinner from "../utlis/Spinner";

const Orders = () => {
  const { orders, isLoading } = useOrders();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        All Orders{" "}
        <span className="bg-[#c7cbcf] text-xs py-2 px-3 rounded-lg">
          {orders.length}
        </span>
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-[#F2FCFD] border">
            <tr>
              <th className="py-2 px-4 text-center">SL</th>
              <th className="py-2 px-4 text-center">Customer Information</th>
              <th className="py-2 px-4 text-center">Location</th>
              <th className="py-2 px-4 text-center">Items</th>
              <th className="py-2 px-4 text-center">Total Price</th>
              <th className="py-2 px-4 text-center">Payment Method</th>
              <th className="py-2 px-4 text-center">Status</th>
              <th className="py-2 px-4 text-center">Order Date</th>
              <th className="py-2 px-4 text-center">Additional Note</th>
              <th className="py-2 px-4 hidden sm:table-cell text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td className="py-2 px-4 text-center border-b border-gray-200">
                  {index + 1}
                </td>
                <td className="py-2 px-4 text-center border-b border-gray-200">
                  <span className="block font-medium">{order.name}</span>
                  <span className="block text-xs text-gray-600">
                    {order.email}
                  </span>
                  <span className="block text-xs text-gray-600">
                    {order.phone}
                  </span>
                </td>

                <td className="py-2 px-4 text-center border-b border-gray-200">
                  {order.address}
                </td>

                <td className="py-2 px-4 text-center border-b border-gray-200">
                  {order.items.map((item) => (
                    <div
                      key={item.productId}
                      className="flex items-center justify-center"
                    >
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-8 h-8 object-cover inline-block mr-2"
                      />
                      <span className="text-sm">
                        {item.productName} ({item.quantity})
                      </span>
                    </div>
                  ))}
                </td>

                <td className="py-2 px-4 text-center border-b border-gray-200">
                  <span className="font-medium text-lg">
                    {order.totalPrice}
                  </span>
                  <TbCurrencyTaka className="inline-block text-lg" />
                </td>

                <td className="py-2 px-4 text-center border-b border-gray-200">
                  {order.paymentMethod}
                </td>

                <td className="py-2 px-4 text-center border-b border-gray-200">
                  {order.orderStatus}
                </td>

                <td className="py-2 px-4 text-center border-b border-gray-200">
                  {new Date(order.orderDate).toLocaleDateString()}
                </td>

                <td className="py-2 px-4 text-center border-b border-gray-200">
                  {order.note ? order.note : "N/A"}
                </td>

                <td className="py-2 px-4 text-center border-b border-gray-200">
                  <select
                    className="border border-gray-300 rounded px-2 py-1 text-sm"
                    name="action"
                    id="action"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
