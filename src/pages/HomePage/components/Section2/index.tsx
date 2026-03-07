import { motion } from "framer-motion";
import img1 from "@assets/Section2/we1.png";
import img2 from "@assets/Section2/we2.png";
import img3 from "@assets/Section2/we3.png";
import img4 from "@assets/Section2/we4.png";

const steps = [
  {
    title: "Analysis",
    desc: "Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    img: img4,
  },
  {
    title: "Design",
    desc: "Ut wisi enim ad minim veniam, quis nostrud exerci tation.",
    img: img3,
  },
  {
    title: "Develop",
    desc: "Euismod tincidunt ut laoreet dolore magna aliquam erat.",
    img: img2,
  },
  {
    title: "Deploy",
    desc: "Ut wisi enim ad minim veniam, quis aliquip ex ea commodo.",
    img: img1,
  },
];

const Section2 = () => {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title animation */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-20"
        >
          How We Do It
        </motion.h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white p-10 rounded-3xl shadow-md hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="flex justify-center mb-8">
                <motion.img
                  src={step.img}
                  alt={step.title}
                  className="w-32 object-contain"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
