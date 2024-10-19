import SectionTitle from "../shared/SectionTitle";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../shared/ProductCard";

const PopularProducts = () => {
  const {products}= useProducts();
  const popularItems = products.filter((item) =>
    item.category.includes("popular")
  );

  // console.log(popularItems);

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
