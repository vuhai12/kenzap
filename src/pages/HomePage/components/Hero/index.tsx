import imageHero from "@assets/Hero/banner.png";
import image1 from "@assets/Hero/home1-hero-mobile-img.png";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden text-white">
      {/* Background */}
      <img
        src={imageHero}
        alt="hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* LEFT TEXT */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Build Your <span className="text-[#3fc380]">Modern Website</span>
          </h1>

          <p className="mt-6 text-gray-200 text-lg max-w-xl mx-auto lg:mx-0">
            Create fast, scalable and beautiful websites using modern
            technologies like React, Vite and TailwindCSS.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#3fc380] hover:bg-[#36ad72] px-8 py-3 rounded-xl font-semibold transition shadow-lg hover:shadow-2xl hover:-translate-y-1">
              Get Started
            </button>

            <button className="border border-white/70 hover:bg-white hover:text-black px-8 py-3 rounded-xl font-semibold transition backdrop-blur">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 relative flex justify-center">
          <img
            src={image1}
            alt="ui design"
            className="w-[90%] max-w-md lg:max-w-lg drop-shadow-2xl hover:scale-105 transition duration-700"
          />

          {/* Floating Stats Card */}
          <div className="absolute -bottom-12 bg-white/90 backdrop-blur-lg text-black rounded-2xl shadow-2xl px-8 py-6 grid grid-cols-3 gap-8 w-[95%] max-w-lg">
            <div className="text-center">
              <div className="text-xl font-bold text-[#3fc380]">
                <CountUp end={3845304} duration={3} separator="," />
              </div>
              <div className="text-sm text-gray-500">App Users</div>
            </div>

            <div className="text-center border-x border-gray-200 px-4">
              <div className="text-xl font-bold text-[#3fc380]">
                <CountUp end={212304} duration={3} separator="," />
              </div>
              <div className="text-sm text-gray-500">Clients</div>
            </div>

            <div className="text-center">
              <div className="text-xl font-bold text-[#3fc380]">
                $<CountUp end={12812304} duration={3} separator="," />
              </div>
              <div className="text-sm text-gray-500">Revenue</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
