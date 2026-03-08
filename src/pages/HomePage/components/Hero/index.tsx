import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const MotionLink = motion(Link);
  return (
    <section className="relative min-h-screen py-[100px] flex items-center overflow-hidden text-white">
      {/* Background */}
      <img
        src={"/hero/banner.png"}
        alt="hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/30 to-transparent"></div>

      {/* Content */}

      <div className="relative z-10 py-28 container  flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT TEXT */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Build Your <span className="text-[#3fc380]">Modern Website</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-gray-200 text-lg max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Create fast, scalable and beautiful websites using modern
            technologies like React, Vite and TailwindCSS.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <MotionLink
              to={"/portfolio"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3fc380] hover:bg-[#36ad72] px-8 py-3 rounded-xl font-semibold transition shadow-lg hover:shadow-2xl"
            >
              Get Started
            </MotionLink>

            <MotionLink
              to="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/70 hover:bg-white hover:text-black px-8 py-3 rounded-xl font-semibold transition backdrop-blur"
            >
              Learn More
            </MotionLink>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 relative flex flex-col items-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image */}
          <motion.img
            src={"/hero/home1-hero-mobile-img.png"}
            alt="ui design"
            className="w-[90%] max-w-md lg:max-w-lg drop-shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="
              w-full max-w-lg
              mt-8 lg:mt-0
              lg:absolute lg:-bottom-12
              bg-white/80 backdrop-blur-lg
              rounded-2xl
              shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              px-6 py-6 md:px-8
              grid grid-cols-1 sm:grid-cols-3
              gap-6
              border border-white/20
            "
          >
            <div className="text-center">
              <div className="text-lg md:text-xl font-bold text-emerald-500">
                <CountUp end={3845304} duration={3} separator="," />
              </div>
              <div className="text-xs md:text-sm text-gray-600">App Users</div>
            </div>

            <div className="text-center sm:border-x border-gray-200 sm:px-4">
              <div className="text-lg md:text-xl font-bold text-emerald-500">
                <CountUp end={212304} duration={3} separator="," />
              </div>
              <div className="text-xs md:text-sm text-gray-600">Clients</div>
            </div>

            <div className="text-center">
              <div className="text-lg md:text-xl font-bold text-emerald-500">
                $<CountUp end={12812304} duration={3} separator="," />
              </div>
              <div className="text-xs md:text-sm text-gray-600">Revenue</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
