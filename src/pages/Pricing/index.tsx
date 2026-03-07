import { motion } from "framer-motion";
import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";

import img1 from "@assets/Pricing/logomua1.png";
import img2 from "@assets/Pricing/logomua2.png";
import img3 from "@assets/Pricing/logomua3.png";
import img4 from "@assets/Pricing/logomua4.png";
import img5 from "@assets/Pricing/logomua5.png";
import img6 from "@assets/Pricing/logomua6.png";

const plans = [
  {
    name: "Startup Package",
    price: "$18.99",
    features: [
      "2GB Bandwidth",
      "3GB Storage",
      "Connect Your Domain",
      "Free Domain",
      "Remove Ads",
      "Customized Icons",
    ],
  },
  {
    name: "Growth Package",
    price: "$66.99",
    popular: true,
    features: [
      "20GB Bandwidth",
      "30GB Storage",
      "Connect Your Domain",
      "Free Domain",
      "Remove Ads",
      "Customized Icons",
    ],
  },
  {
    name: "Agency Package",
    price: "$96.99",
    features: [
      "30GB Bandwidth",
      "30GB Storage",
      "Connect Your Domain",
      "Free Domain",
      "Remove Ads",
      "Customized Icons",
    ],
  },
];

const includes = [
  { icon: img1, text: "Free Hosting" },
  { icon: img2, text: "Free Domain" },
  { icon: img3, text: "500MB Storage" },
  { icon: img4, text: "Google Analytics" },
  { icon: img5, text: "24h Support" },
  { icon: img6, text: "No Set-up Fee" },
];

const faqs = [
  {
    question: "What happens at the end of free trial?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
  },
  {
    question: "Can I expense my premium membership?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
  },
  {
    question: "What is your refund policy",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.",
  },
  {
    question: "How will you bill me?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Pricing = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <MainLayout>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Pricing</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-16">
              We gives 100s of templates, unlimited pages & top grade hosting
              FREE. Upgrade to Premium and get even more.
            </p>
          </motion.div>

          {/* Pricing cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10, scale: 1.03 }}
                className={`bg-white rounded-3xl shadow-md p-10 transition ${
                  plan.popular ? "border-2 border-[#3fc380] scale-105" : ""
                }`}
              >
                <h3 className="text-xl font-semibold mb-6">{plan.name}</h3>

                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <div className="text-gray-500 mb-8">per month</div>

                <ul className="space-y-4 mb-10 text-gray-600">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="text-[#3fc380] font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#3fc380] hover:bg-[#35a76f] text-white py-3 rounded-lg font-semibold transition"
                >
                  Get Started
                </motion.button>

                <p className="text-xs text-gray-400 mt-4">
                  Protected by 256-bit SSL encryption
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium Includes */}
          <div>
            <h3 className="text-2xl font-bold mb-12">
              All Premium Plans Include
            </h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
            >
              {includes.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="flex items-center justify-center gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md"
                >
                  <img
                    src={item.icon}
                    alt={item.text}
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* FAQ */}
          <div className="mt-24 max-w-4xl mx-auto text-left">
            <h3 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h3>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  layout
                  className="border-b pb-6 cursor-pointer"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>

                  {open === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-gray-600 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Pricing;
