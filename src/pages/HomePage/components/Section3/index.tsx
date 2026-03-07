import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  "Easy drag and drop builder",
  "Google Analytics integration",
  "Commission-free online payments",
  "Secure cloud hosting",
  "Fully mobile optimized",
  "Customizable navigation menus",
  "SEO friendly structure",
  "Facebook menu integration",
  "100+ professional templates",
  "Quick table reservations",
  "Email marketing tools",
  "24/7 customer support",
];

// container animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// item animation
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const MotionLink = motion(Link);

const Section3 = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Everything You Need in One Place
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our platform provides all the tools you need to build, launch and
            manage your website effortlessly.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((itemText, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6, scale: 1.03 }}
              className="flex items-start gap-4 p-6 border border-gray-200 rounded-xl hover:shadow-lg transition"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 font-bold"
              >
                ✓
              </motion.div>

              {/* Text */}
              <p className="text-gray-700 font-medium leading-relaxed">
                {itemText}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <MotionLink
            to={"/portfolio"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition shadow-md"
          >
            Create Your Website
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;
