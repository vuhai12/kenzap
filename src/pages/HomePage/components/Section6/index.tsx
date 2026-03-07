import { useState } from "react";
import { motion } from "framer-motion";

const Section6 = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-500">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Let's talk about your project
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              Ut wisi enim ad minim veniam quis nostrud exerci tation
              ullamcorper suscipit.
            </p>

            <div className="space-y-3 text-gray-600">
              <p>📍 Hanoi, Vietnam</p>
              <p>📧 contact@email.com</p>
              <p>📞 +84 123 456 789</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={container}
            initial="hidden"
            whileInView="show"
            className="bg-gray-50 p-8 rounded-xl shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.input
                variants={item}
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                required
              />

              <motion.input
                variants={item}
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
                required
              />
            </div>

            <motion.input
              variants={item}
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:border-green-500"
              required
            />

            <motion.textarea
              variants={item}
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:border-green-500"
              rows={4}
              required
            />

            <motion.button
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Section6;
