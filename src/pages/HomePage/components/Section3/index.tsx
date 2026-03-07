import React from "react";

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

const Section3 = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Everything You Need in One Place
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our platform provides all the tools you need to build, launch and
            manage your website effortlessly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 border border-gray-200 rounded-xl hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600">
                ✓
              </div>

              {/* Text */}
              <p className="text-gray-700 font-medium leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition shadow-md">
            Create Your Website
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
