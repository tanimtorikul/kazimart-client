import SectionTitle from "../shared/SectionTitle";
import ProductCard from "../shared/ProductCard";
import useProducts from "../../hooks/useProducts";
import { motion } from "framer-motion";
import { fadeIn } from "../../utlis/animationVariants";

const PopularProducts = () => {
  const { allProducts } = useProducts();
  const popularItems = allProducts
    .filter((item) => item.category.includes("popular"))
    .slice(0, 6);

  return (
    <div className="my-16">
      <SectionTitle
        heading="Popular products that we sold"
        subHeading="We provide the best quality & fresh items"
      />
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 px-0 md:px-8 xl:px-0"
      >
        {popularItems.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default PopularProducts;
