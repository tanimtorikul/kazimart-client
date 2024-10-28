import SectionTitle from "../shared/SectionTitle";
import ProductCard from "../shared/ProductCard"; 
import useProducts from "../../hooks/useProducts";

const NewArrivals = () => {
  const { allProducts } = useProducts();

  const latestProducts = allProducts
    .sort((a, b) => b._id.localeCompare(a._id))
    .slice(0, 5);

  return (
    <div>
      <SectionTitle
        heading="Discover Our Newest Additions"
        subHeading="Quality products freshly stocked for you"
      />
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-4">
        {latestProducts.map((product) => (
          <ProductCard key={product._id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
