import { motion } from "framer-motion";
import logo1 from "@assets/Section1/logo1.png";
import logo2 from "@assets/Section1/logo2.png";
import logo3 from "@assets/Section1/logo3.png";
import logo4 from "@assets/Section1/logo4.png";
import logo5 from "@assets/Section1/logo5.png";
import logo6 from "@assets/Section1/logo6.png";

const brands = [
  { name: "eCommerce", logo: logo1 },
  { name: "Food Delivery", logo: logo2 },
  { name: "Beauty Salon", logo: logo3 },
  { name: "Beauty Salon", logo: logo4 },
  { name: "Company", logo: logo5 },
  { name: "Healthy Food", logo: logo6 },
];

// animation container
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// animation item
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Section1 = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Trusted by Leading Businesses
          </h2>

          <p className="text-gray-500 mt-3">
            Companies around the world rely on our platform
          </p>
        </motion.div>

        {/* Logos */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center gap-2 opacity-60 hover:opacity-100 transition duration-300 group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 md:h-12 object-contain grayscale group-hover:grayscale-0 transition duration-300"
              />

              <span className="text-xs text-gray-400 group-hover:text-gray-700 transition">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;
