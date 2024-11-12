import {
  FaHeadset,
  FaExchangeAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../utlis/animationVariants";
import { FaCreditCard } from "react-icons/fa6";

const Stats = () => {
  const statsData = [
    {
      icon: <FaCreditCard size={36} />,
      title: "Convenient Checkout",
      description: "Fast and hassle-free checkout.",
    },
    {
      icon: <FaHeadset size={36} />,
      title: "24/7 Support",
      description: "Customer support anytime",
    },
    {
      icon: <FaExchangeAlt size={36} />,
      title: "Easy Returns",
      description: "30-day return policy",
    },
    {
      icon: <FaShieldAlt size={36} />,
      title: "Secure Payment",
      description: "100% secure payment",
    },
  ];

  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
    viewport={{ once: false, amount: 0.2 }} className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 py-6 md:px-8 xl:px-0">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="border w-full rounded-lg p-6 text-center flex flex-col items-center space-y-2"
        >
          {stat.icon}
          <h3 className="font-semibold text-lg">{stat.title}</h3>
          <p>{stat.description}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default Stats;
