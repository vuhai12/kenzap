import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Ralph Jordan",
    role: "Chief Design Officer",
    text: "Euismod tincidunt dolore magna aliquam erat amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt dolore magna aliquam erat volutpat.",
  },
  {
    name: "Harold Griffin",
    role: "Lead Developer",
    text: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt dolore magna aliquam erat Lorem ipsum dolor sit amet volutpat.",
  },
  {
    name: "Emily Carter",
    role: "Marketing Manager",
    text: "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet.",
  },
];

const Section5 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const item = testimonials[index];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-10"
        >
          100% Customer Satisfaction!
        </motion.h2>

        {/* Quote animation */}
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-600 italic leading-relaxed mb-10"
          >
            “{item.text}”
          </motion.p>
        </AnimatePresence>

        {/* User */}
        <AnimatePresence mode="wait">
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-2"
          >
            <p className="font-semibold text-gray-900">{item.name}</p>
            <p className="text-gray-500 text-sm">{item.role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              whileTap={{ scale: 0.8 }}
              animate={{
                scale: index === i ? 1.3 : 1,
                backgroundColor: index === i ? "#22c55e" : "#d1d5db",
              }}
              transition={{ duration: 0.3 }}
              className="w-3 h-3 rounded-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;
