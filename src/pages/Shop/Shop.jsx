import ProductCard from "../../components/shared/ProductCard";
import useProducts from "../../hooks/useProducts";

const Shop = () => {
  const { products } = useProducts();
  return (
    <div>
      <div className="max-w-[1400px] mx-auto bg-[#01684B] my-2 py-6 text-white">
        <h2 className="capitalize text-2xl font-bold text-center">Shop</h2>
        <p className="my-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          officia sapiente nostrum magni reprehenderit, modi eius consequuntur
          neque aperiam eos!
        </p>
      </div>
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
