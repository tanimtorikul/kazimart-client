import Spinner from "../utlis/Spinner";
import useOrders from "../hooks/useOrders";
import OrderCard from "../components/OrderCard/OrderCard";
import useAuth from "../hooks/useAuth";

const UserOrders = () => {
  const { userOrders, isLoading } = useOrders();
  const { user } = useAuth(); 

  if (isLoading) return <Spinner />;
  const lastName = user ? user.displayName.split(" ").pop() : "";

  return (
    <div className="max-w-[1400px] mx-auto">
      <p className="text-center text-lg font-semibold text-gray-700 mb-4">
        {user && `${lastName}, Here are your Orders`}
      </p>

      {userOrders.length === 0 ? (
        <p className="text-center text-gray-500">You have no orders yet.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {userOrders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserOrders;
