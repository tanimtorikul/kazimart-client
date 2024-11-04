import { TbCurrencyTaka } from "react-icons/tb";
import useOrders from "../hooks/useOrders";
import Spinner from "../utlis/Spinner";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(7);
  const [search, setSearch] = useState("");
  const { orders, allOrders, isLoading, ordersCount, refetch } = useOrders(
    currentPage,
    itemsPerPage,
    search
  );
  const axiossecure = useAxiosSecure();
  const numberOfPages = Math.ceil(ordersCount / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await axiossecure.patch(`/allorders/${orderId}`, {
        orderStatus: newStatus,
      });

      if (response.data.modifiedCount > 0) {
        toast.success("Status changed");
        refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Manage Orders</title>
      </Helmet>
      <h2 className="text-xl font-semibold mb-4">
        All Orders{" "}
        <span className="bg-[#c7cbcf] text-xs py-1 px-3 rounded-lg">
          {allOrders.length}
        </span>
      </h2>
      <form onSubmit={handleSearch} className="flex items-center md:justify-end my-4">
        <input
          name="search"
          type="search"
          placeholder="Search products..."
          className="rounded-l-lg px-4 py-2"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary-light text-white rounded-r-lg hover:bg-[#014C36]"
        >
          Search
        </button>
      </form>
      {isLoading ? (
        <Spinner />
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-[#F2FCFD] border text-sm">
            <tr>
              <th className="py-1 px-4 text-center">SL</th>
              <th className="py-1 px-4 text-center">Customer Information</th>
              <th className="py-1 px-4 text-center">Location</th>
              <th className="py-1 px-4 text-center">Items</th>
              <th className="py-1 px-4 text-center">Total Price</th>
              <th className="py-1 px-4 text-center">Payment Method</th>
              <th className="py-1 px-4 text-center">Status</th>
              <th className="py-1 px-4 text-center">Order Date</th>
              <th className="py-1 px-4 text-center">Additional Note</th>
              <th className="py-1 px-4 hidden sm:table-cell text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td className="py-1 px-4 text-center border-b border-gray-200">
                  {index + 1}
                </td>
                <td className="py-1 px-4 text-center border-b border-gray-200">
                  <span className="block font-medium">{order.name}</span>
                  <span className="block text-xs text-gray-600">
                    {order.email}
                  </span>
                  <span className="block text-xs text-gray-600">
                    {order.phone}
                  </span>
                </td>

                <td className="py-1 px-4 text-sm text-center border-b border-gray-200">
                  {order.address}
                </td>

                <td className="py-1 px-4 text-center border-b border-gray-200">
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

                <td className="py-1 px-4 text-center border-b border-gray-200">
                  <span className="font-medium text-lg">
                    {order.totalPrice}
                  </span>
                  <TbCurrencyTaka className="inline-block text-lg" />
                </td>

                <td className="py-1 px-4 text-sm text-center border-b border-gray-200">
                  {order.paymentMethod}
                </td>

                <td className="py-1 px-4 text-sm text-center border-b border-gray-200">
                  {order.orderStatus}
                </td>

                <td className="py-1 px-4 text-sm text-center border-b border-gray-200">
                  {new Date(order.orderDate).toLocaleDateString()}
                </td>

                <td className="py-1 px-4 text-sm text-center border-b border-gray-200">
                  {order.note ? order.note : "N/A"}
                </td>

                <td className="py-1 px-4 text-sm text-center border-b border-gray-200">
                  <select
                    className="py-1 px-4 text-sm text-center border-b border-gray-200"
                    name="action"
                    id="action"
                    onChange={(e) =>
                      updateOrderStatus(order._id, e.target.value)
                    }
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
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <nav className="inline-flex space-x-1">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 border rounded ${
                currentPage === page
                  ? "bg-primary-light text-white"
                  : "bg-white text-primary-light hover:bg-primary-light hover:text-white"
              }`}
            >
              {page + 1}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Orders;
