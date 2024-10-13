import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/shared/ProductCard";
import useProducts from "../../hooks/useProducts";

const Shop = () => {
  const [items] = useProducts();
  const { id } = useParams();
  return (
    <div>
      <div className="max-w-[1400px] mx-auto bg-teal-500 my-2 py-24 text-white">
        <h2 className="capitalize text-2xl font-bold text-center">Shop</h2>
        <p className="my-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          officia sapiente nostrum magni reprehenderit, modi eius consequuntur
          neque aperiam eos!
        </p>
      </div>
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-4">
        {items.map((item) => (
          <Link key={item.id} to={`/product/${item._id}`}>
            <ProductCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
