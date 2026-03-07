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

const Section1 = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Trusted by Leading Businesses
          </h2>

          <p className="text-gray-500 mt-3">
            Companies around the world rely on our platform
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 opacity-60 hover:opacity-100 transition duration-300 group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 md:h-12 object-contain grayscale group-hover:grayscale-0 transition duration-300 group-hover:scale-110"
              />

              <span className="text-xs text-gray-400 group-hover:text-gray-700 transition">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
