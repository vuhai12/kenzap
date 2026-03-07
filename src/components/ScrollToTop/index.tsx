import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollTop}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 cursor-pointer
                  w-12 h-12 
                  flex items-center justify-center
                  rounded-full 
                  bg-gradient-to-tr from-green-500 to-emerald-400
                  text-white
                  shadow-lg shadow-green-500/30
                  hover:shadow-xl hover:shadow-green-500/40
                  transition-all duration-300"
        >
          <ArrowUp size={20} strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
