import React, { useState } from "react";
import MainLayout from "@/layouts/MainLayout";

import img1 from "@assets/Portfolio/imgduct1.png";
import img2 from "@assets/Portfolio/imgduct2.png";
import img3 from "@assets/Portfolio/imgduct3.png";
import img4 from "@assets/Portfolio/imgduct4.png";
import img5 from "@assets/Portfolio/imgduct5.png";
import img6 from "@assets/Portfolio/imgduct6.png";

const projects = [
  {
    img: img1,
    category: "design",
    type: "iOS App UI",
    title: "Alit Minimalist e-Commerce for iOS",
  },
  {
    img: img2,
    category: "web",
    type: "HTML Template",
    title: "Tumbas HTML Electronic e-Commerce",
  },
  {
    img: img3,
    category: "design",
    type: "iOS App UI",
    title: "Alit Minimalist e-Commerce for iOS",
  },
  {
    img: img4,
    category: "web",
    type: "Wordpress Theme",
    title: "Alit Wordpress Minimalist e-Commerce",
  },
  {
    img: img5,
    category: "web",
    type: "Wordpress Theme",
    title: "Lionic Online Legal Services",
  },
  {
    img: img6,
    category: "web",
    type: "HTML Template",
    title: "Tumbas HTML Electronic e-Commerce",
  },
];

const filters = ["all", "design", "web"];

const Portfolio = () => {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <MainLayout>
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Portfolio
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Explore some of our latest creative work and successful projects.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  active === filter
                    ? "bg-green-500 text-white border-green-500 shadow-md"
                    : "text-gray-600 border-gray-300 hover:bg-green-500 hover:text-white hover:border-green-500"
                }`}
              >
                {filter.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition duration-500"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60  opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-center px-6">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition duration-500">
                    <p className="text-xs tracking-widest uppercase text-green-400 mb-2">
                      {item.type}
                    </p>

                    <h4 className="text-white text-lg md:text-xl font-semibold leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Portfolio;
