import SectionTitle from "../shared/SectionTitle";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../shared/ProductCard";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const [items] = useProducts();
  const popularItems = items.filter((item) =>
    item.category.includes("popular")
  );

  console.log(popularItems);

  return (
    <div className="my-16">
      <SectionTitle
        heading="Popular products that we sold"
        subHeading="We provide the best quality & fresh items near your location"
      />
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-4">
        {popularItems.map((item) => (
          <Link key={item._id} to={`/product/${item._id}`}>
          <ProductCard item={item} />
        </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
