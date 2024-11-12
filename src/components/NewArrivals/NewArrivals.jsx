import SectionTitle from "../shared/SectionTitle";
import ProductCard from "../shared/ProductCard";
import useProducts from "../../hooks/useProducts";
import { motion } from "framer-motion";
import { fadeIn } from "../../utlis/animationVariants";

const NewArrivals = () => {
  const { allProducts } = useProducts();

  const latestProducts = allProducts
    .sort((a, b) => b._id.localeCompare(a._id))
    .slice(0, 6);

  return (
    <div>
      <SectionTitle
        heading="Discover Our Latest Additions"
        subHeading="Quality products freshly stocked for you"
      />
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }} className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 px-0 md:px-8 xl:px-0">
        {latestProducts.map((product) => (
          <ProductCard key={product._id} item={product} />
        ))}
      </motion.div>
    </div>
  );
};

export default NewArrivals;
