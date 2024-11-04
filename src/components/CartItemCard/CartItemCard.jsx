import { FaRegTrashCan } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useCart from "../../hooks/useCart";

const CartItemCard = ({ item }) => {
  const [, refetch] = useCart();
  const { _id, imageUrls, name, price, quantity, amount } = item;
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    axiosSecure.delete(`/carts/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch();
        toast.success(`${name} is deleted from the cart`);
      }
    });
  };

  const handleIncrease = () => {
    const newAmount = amount + 1;
    const newPrice = (price / amount) * newAmount;

    axiosSecure
      .patch(`/carts/${_id}`, { amount: newAmount, price: newPrice })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`Updated cart of ${name}`);
        }
      });
  };

  const handleDecrease = () => {
    if (amount > 1) {
      const newAmount = amount - 1;
      const newPrice = (price / amount) * newAmount;

      axiosSecure
        .patch(`/carts/${_id}`, { amount: newAmount, price: newPrice })
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            toast.success(`Updated cart of ${name}`);
          }
        });
    } else {
      toast.error(`Cannot decrease ${name} below 1`);
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 p-4 border border-gray-200 shadow-lg rounded-xl">
      <div className="flex items-center gap-4 w-3/4">
        <img
          src={imageUrls[0]}
          alt={name}
          className="w-20 h-20 object-cover rounded-lg border"
        />
        <div className="flex-grow">
          <h2 className="text-sm md:text-lg font-semibold mb-1">{name}</h2>
          <div className="text-white w-16 px-2 py-1 rounded-lg text-xs font-semibold flex items-center bg-primary-light">
            {price}
            <TbCurrencyTaka className="w-4 h-4 ml-1" />
          </div>
        </div>
        <p className="text-sm md:text-lg text-primary-light font-semibold">
          {quantity}
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={handleDecrease}
            className="w-8 h-8 flex items-center justify-center text-primary-light bg-[#F2F2F2] rounded-full hover:bg-gray-500 hover:text-white transition duration-200"
          >
            -
          </button>
          <p className="text-lg text-primary-light font-semibold">{amount}</p>
          <button
            onClick={handleIncrease}
            className="w-8 h-8 flex items-center justify-center text-primary-light bg-[#F2F2F2] rounded-full hover:bg-gray-500 hover:text-white transition duration-200"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={() => handleDelete(item._id)}
        className="text-red-500 text-xl rounded-full hover:bg-gray-600 hover:text-white transition duration-200"
      >
        <FaRegTrashCan />
      </button>
    </div>
  );
};

export default CartItemCard;
