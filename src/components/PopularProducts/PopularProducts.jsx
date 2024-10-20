import SectionTitle from "../shared/SectionTitle";
import ProductCard from "../shared/ProductCard";
import useProducts from "../../hooks/useProducts";

const PopularProducts = () => {
  const { allProducts } = useProducts();
  const popularItems = allProducts.filter((item) =>
    item.category.includes("popular")
  );

  return (
    <div className="my-16">
      <SectionTitle
        heading="Popular products that we sold"
        subHeading="We provide the best quality & fresh items near your location"
      />
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-4">
        {popularItems.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
