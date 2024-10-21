import useCart from "./useCart";

function useCartPrice() {
  const { cart } = useCart();

  const total = cart?.map((item) => parseFloat(item.totalLatestPrice)) 
    .reduce((sum, price) => sum + price, 0) || 0; 

  return { total };
}

export default useCartPrice;
