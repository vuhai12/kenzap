import { useEffect, useState } from "react";

const Counter = ({ end, prefix = "" }: { end: number; prefix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [end]);

  return (
    <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
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
      {/* Ping animation */}
      <span
        className="absolute inline-flex h-6 w-6 rounded-full bg-green-400 opacity-70 animate-ping"
        style={{ animationDelay: delay }}
      ></span>

      {/* Glow */}
      <span className="absolute h-4 w-4 rounded-full bg-green-400 blur-md opacity-70"></span>

      {/* Center dot */}
      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 shadow-lg"></span>
    </span>
  );
};

const Section4 = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Users Around The World
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Thousands of businesses and millions of users trust our platform
          across the globe.
        </p>

        {/* Map */}
        <div className="relative flex justify-center mb-24">
          <img
            src="/img/world-map.svg"
            alt="world map"
            className="w-full max-w-4xl opacity-10 grayscale"
          />

          {/* Dots */}
          <Dot top="42%" left="34%" delay="0s" />
          <Dot top="50%" left="55%" delay="0.6s" />
          <Dot top="34%" left="72%" delay="1s" />
          <Dot top="60%" left="32%" delay="1.4s" />
          <Dot top="24%" left="62%" delay="1.8s" />
          <Dot top="64%" left="82%" delay="2.2s" />
        </div>

        {/* Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition">
            <Counter end={812304} />
            <p className="text-gray-500 mt-3 text-lg">Business Clients</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition">
            <Counter end={638845} />
            <p className="text-gray-500 mt-3 text-lg">App Users</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition">
            <Counter end={921845} prefix="$" />
            <p className="text-gray-500 mt-3 text-lg">Total Revenue</p>
          </div>
        </div>

        {/* Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition shadow-md hover:shadow-xl">
          Create Now
        </button>
      </div>
    </section>
  );
};

export default Section4;
