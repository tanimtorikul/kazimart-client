import { FaRegCalendarDays } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";

const OrderCard = ({ order }) => {
  const { _id, items, totalPrice, paymentMethod, orderStatus, orderDate } =
    order;

  const getOrderId = (_id) => _id.slice(0, 5);
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <div className="bg-white p-3 rounded-md shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">
          Order ID: #{getOrderId(_id)}
        </h3>
        <div className="flex items-center">
          <span
            className={`w-2 h-2 rounded-full ${
              orderStatus === "Delivered" ? "bg-[#24917A]" : "bg-yellow-600"
            }`}
          />
          <span
            className={`inline-block px-2 py-1 font-semibold text-white rounded-full ${
              orderStatus === "Delivered" ? "text-[#24917A]" : "text-yellow-600"
            }`}
          >
            {orderStatus}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-gray-600">
          {items.length} Items
        </p>
        <div className="grid grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item.productId}
              className="flex items-center mb-2 border p-2 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.productName}
                className="w-10 h-10 object-cover rounded mr-2"
              />
              <span className="text-sm text-gray-700">
                {item.productName} (x{item.quantity})
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-600 text-sm flex gap-1 items-center">
          <FaRegCalendarDays className="text-lg" />
          <span className="mt-1">{formatDate(orderDate)}</span>
        </p>

        <div className="text-gray-600 ">
          <p className="flex items-center">
            Total:{" "}
            <span className="text-lg font-medium ml-1">{totalPrice}</span>
            <TbCurrencyTaka className="inline-block text-xl" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
