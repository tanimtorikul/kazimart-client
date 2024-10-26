import { TbCurrencyTaka } from 'react-icons/tb';
import useOrders from '../hooks/useOrders';

const UserOrders = () => {
    const { userOrders, isLoading } = useOrders();

    if (isLoading) return <p className="text-center text-gray-500">Loading your orders...</p>;

    return (
        <div className="max-w-8xl mx-auto p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Orders</h2>
            {userOrders.length === 0 ? (
                <p className="text-center text-gray-500">You have no orders yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        <thead className="bg-[#F2FCFD] border-b text-sm">
                            <tr>
                                <th className="py-3 px-4 text-center font-semibold text-gray-600">Order ID</th>
                                <th className="py-3 px-4 text-center font-semibold text-gray-600">Location</th>
                                <th className="py-3 px-4 text-center font-semibold text-gray-600">Items</th>
                                <th className="py-3 px-4 text-center font-semibold text-gray-600">Total Price</th>
                                <th className="py-3 px-4 text-center font-semibold text-gray-600">Payment Method</th>
                                <th className="py-3 px-4 text-center font-semibold text-gray-600">Status</th>
                                <th className="py-3 px-4 text-center font-semibold text-gray-600">Order Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userOrders.map((order, index) => (
                                <tr key={order._id} className="border-b hover:bg-gray-50 transition">
                                    <td className="py-2 px-4 text-center text-gray-700">{order._id}</td>
                                  
                                    <td className="py-2 px-4 text-center">{order.address}</td>
                                    <td className="py-2 px-4 text-center">
                                        <div className="flex flex-col">
                                            {order.items.map((item) => (
                                                <div key={item.productId} className="flex items-center justify-center mb-1">
                                                    <img
                                                        src={item.image}
                                                        alt={item.productName}
                                                        className="w-10 h-10 object-cover rounded border border-gray-300 mr-2"
                                                    />
                                                    <span className="text-sm">{item.productName} ({item.quantity})</span>
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="py-2 px-4 text-center">
                                        <span className="font-medium text-lg">{order.totalPrice}</span>
                                        <TbCurrencyTaka className="inline-block text-lg" />
                                    </td>
                                    <td className="py-2 px-4 text-center">
                                        <span className={`text-sm font-semibold ${order.paymentMethod === 'Card' ? 'text-blue-600' : 'text-green-600'}`}>
                                            {order.paymentMethod}
                                        </span>
                                    </td>
                                    <td className="py-2 px-4 text-center">
                                        <span className={`inline-block px-2 py-1 text-xs font-semibold text-white rounded-full ${order.orderStatus === 'Delivered' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                                            {order.orderStatus}
                                        </span>
                                    </td>
                                    <td className="py-2 px-4 text-center text-gray-600">
                                        {new Date(order.orderDate).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default UserOrders;
