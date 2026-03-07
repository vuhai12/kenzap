import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Counter = ({ end, prefix = "" }: { end: number; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [end, isInView]);

  return (
    <h3 ref={ref} className="text-4xl md:text-5xl font-bold text-gray-900">
      {prefix}
      {count.toLocaleString()}
    </h3>
  );
};

const Dot = ({
  top,
  left,
  delay = "0s",
}: {
  top: string;
  left: string;
  delay?: string;
}) => {
  return (
    <span
      className="absolute flex items-center justify-center"
      style={{ top, left }}
    >
      <span
        className="absolute inline-flex h-6 w-6 rounded-full bg-green-400 opacity-70 animate-ping"
        style={{ animationDelay: delay }}
      ></span>

      <span className="absolute h-4 w-4 rounded-full bg-green-400 blur-md opacity-70"></span>

      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 shadow-lg"></span>
    </span>
  );
};

const Section4 = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Users Around The World
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mb-16">
            Thousands of businesses and millions of users trust our platform
            across the globe.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative flex justify-center mb-24"
        >
          <img
            src="/img/world-map.svg"
            alt="world map"
            className="w-full max-w-4xl opacity-10 grayscale"
          />

          {/* Dots */}
          <Dot top="25%" left="34%" delay="0s" />
          <Dot top="30%" left="55%" delay="0.6s" />
          <Dot top="34%" left="72%" delay="1s" />
          <Dot top="60%" left="32%" delay="1.4s" />
          <Dot top="24%" left="62%" delay="1.8s" />
          <Dot top="68%" left="78%" delay="2.2s" />
        </motion.div>

        {/* Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {[812304, 638845, 921845].map((num, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg"
            >
              <Counter end={num} prefix={index === 2 ? "$" : ""} />

              <p className="text-gray-500 mt-3 text-lg">
                {index === 0
                  ? "Business Clients"
                  : index === 1
                    ? "App Users"
                    : "Total Revenue"}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition shadow-md hover:shadow-xl"
        >
          Create Now
        </motion.button>
      </div>
    </section>
  );
};

export default Section4;
