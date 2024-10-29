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

  // increase price and amount
  const handleIncrease = () => {
    const newAmount = amount + 1;
    const newPrice = (price / amount) * newAmount;

    // sending updated price and amount to the server
    axiosSecure
      .patch(`/carts/${_id}`, { amount: newAmount, price: newPrice })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`Updated cart of ${name}`);
        }
      });
  };

  // decrease price and amount
  const handleDecrease = () => {
    if (amount > 1) {
      const newAmount = amount - 1;
      const newPrice = (price / amount) * newAmount;
      // sending updated price and amount to the server
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
    <div className="flex items-center gap-8 md:gap-24 p-2 md:p-4 border border-gray-200 shadow-lg rounded-xl">
      <div className="flex gap-6 md:gap-20 items-center justify-center">
        {/* img, name, and price */}
      <div className="flex items-center gap-4">
        <img
          src={imageUrls[1]}
          alt={name}
          className="w-28 h-28 object-cover rounded-lg border"
        />
        <div className="">
          <h2 className="text-sm md:text-lg font-semibold mb-1">{name}</h2>
          <div>
            <p className="text-white w-16 px-2 py-1 rounded-lg text-xs font-semibold flex items-center bg-[#01684B]">
              {price}
              <TbCurrencyTaka className="w-4 h-4 ml-1" />
            </p>
          </div>
        </div>
      </div>
      {/* quantity */}
      <div>
        <p className="md:text-lg text-[#01684B] font-semibold">{quantity}</p>
      </div>
      {/* increase decrease button */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <button
          onClick={handleDecrease}
          className="w-8 h-8 flex items-center justify-center text-[#01684B] bg-[#F2F2F2] rounded-full hover:bg-gray-500 hover:text-white transition duration-200"
        >
          -
        </button>
        <p className="text-lg text-[#01684B] font-semibold">{amount}</p>
        <button
          onClick={handleIncrease}
          className="w-8 h-8 flex items-center justify-center text-[#01684B] bg-[#F2F2F2] rounded-full hover:bg-gray-500 hover:text-white transition duration-200"
        >
          +
        </button>
      </div>
      </div>
      <button
        onClick={() => handleDelete(item._id)}
        className="flex items-center justify-center w-8 h-8 text-red-500 text-xl rounded-full hover:bg-gray-600 hover:text-white transition duration-200"
      >
        <FaRegTrashCan />
      </button>
    </div>
  );
};

export default CartItemCard;
