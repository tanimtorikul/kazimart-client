import { FaRegTrashCan } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useCart from "../../hooks/useCart";

const CartItemCard = ({ item }) => {
  const [, refetch] = useCart();
  const { imageUrl, name, price, quantity } = item;
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    axiosSecure.delete(`/carts/${id}`).then((res) => {
      // console.log(res);
      if (res.data.deletedCount > 0) {
        refetch();
        toast.success(`${name} is deleted from the cart`);
      }
    });
  };
  return (
    <div className="flex items-center gap-8 md:gap-24 p-2 md:p-4 border border-gray-200 shadow-lg rounded-xl">
      {/* img , name and price */}
      <div className="flex items-center gap-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-28 h-28 object-cover rounded-lg border"
        />
        <div>
          <h2 className="md:text-lg font-semibold mb-1">{name}</h2>
          <div>
            <p className="text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center bg-[#01684B]">
              {price}
              <TbCurrencyTaka className="w-4 h-4 ml-1" />
            </p>
          </div>
        </div>
      </div>
      {/* quantity */}
      <div>
        <p className="text-lg text-[#01684B] font-semibold">{quantity}</p>
      </div>
      {/* increase decrease button */}
      <div className="flex items-center gap-4 ">
        <button className="w-8 h-8 flex items-center justify-center text-[#01684B] bg-[#F2F2F2] rounded-full hover:bg-gray-500 hover:text-white transition duration-200">
          -
        </button>
        <p className="text-lg text-[#01684B] font-semibold">1</p>
        <button className="w-8 h-8 flex items-center justify-center text-[#01684B] bg-[#F2F2F2] rounded-full hover:bg-gray-500 hover:text-white transition duration-200">
          +
        </button>
        <button
          onClick={() => handleDelete(item._id)}
          className="flex items-center justify-center w-8 h-8 text-red-500 text-xl rounded-full hover:bg-gray-600 hover:text-white transition duration-200"
        >
          <FaRegTrashCan />
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
