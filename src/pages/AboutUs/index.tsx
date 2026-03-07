import { motion } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";
import imgAbout1 from "@assets/AboutUs/imgabout1.png";
import imgAbout2 from "@assets/AboutUs/imgabout2.png";
import imgabout3 from "@assets/AboutUs/imgabout3.png";
import imgabout4 from "@assets/AboutUs/imgabout4.png";
import imgabout5 from "@assets/AboutUs/imgabout8.png";

const roadmap = [
  {
    date: "June 2013",
    title: "COMPANY FOUNDED",
    desc: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    date: "Feb 2014",
    title: "SERIES A FUNDING",
    desc: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    date: "Mar 2017",
    title: "OFFICE MOVING",
    desc: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    date: "Nov 2020",
    title: "GO PUBLIC!",
    desc: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    date: "Dec 2013",
    title: "SEED FUNDING",
    desc: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    date: "Dec 2016",
    title: "SERIES B FUNDING",
    desc: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    date: "May 2018",
    title: "SERIES C FUNDING",
    desc: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
];

const team = [
  { img: imgAbout1, name: "Sean Barrett", role: "Co-Founder & CEO" },
  { img: imgAbout2, name: "Jennifer Soto", role: "Co-Founder & CMO" },
  { img: imgabout3, name: "Ben Howard", role: "External Relations" },
  { img: imgabout4, name: "Ralph Jordan", role: "Chief Design Officer" },
  { img: imgabout5, name: "Diana Cerrett", role: "Finance Officer" },
];

const jobs = [
  {
    title: "Ruby on Rails Developer",
    dept: "Backend",
    desc: "Duis autem vel eum iriure dolor in hendrerit in vulput velit esse molestie conseqt, vel illum dolore eu feugiat. nulla",
  },
  {
    title: "Wordpress Developer",
    dept: "Software Dev, CMS",
    desc: "Duis autem vel eum iriure dolor in hendrerit in vulput velit esse molestie conseqt, vel illum dolore eu feugiat. nulla",
  },
  {
    title: "UI/UX Web Design",
    dept: "Design",
    desc: "Duis autem vel eum iriure dolor in hendrerit in vulput velit esse molestie conseqt, vel illum dolore eu feugiat. nulla",
  },
  {
    title: "Senior System Analyst",
    dept: "Software Dev, CMS",
    desc: "Duis autem vel eum iriure dolor in hendrerit in vulput velit esse molestie conseqt, vel illum dolore eu feugiat. nulla",
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

const AboutUs = () => {
  return (
    <MainLayout>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </motion.div>

          {/* Roadmap */}
          <div className="mb-24">
            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-center mb-16"
            >
              Our Roadmap
            </motion.h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              className="grid md:grid-cols-2 gap-12"
            >
              {roadmap.map((itemData, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -6 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md"
                >
                  <p className="text-green-500 font-semibold mb-2">
                    {itemData.date}
                  </p>
                  <h4 className="font-bold text-lg mb-3">{itemData.title}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {itemData.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Team */}
          <div className="mb-24">
            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-center mb-16"
            >
              Meet The Kenzap Team
            </motion.h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center"
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-40 h-40 mx-auto rounded-full object-cover mb-4 shadow-md"
                  />
                  <h4 className="font-semibold text-lg">{member.name}</h4>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Careers */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-center mb-16"
            >
              Join Us on Kenzap
            </motion.h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              className="grid md:grid-cols-2 gap-10"
            >
              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -6 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md"
                >
                  <h4 className="text-xl font-semibold mb-1">{job.title}</h4>
                  <p className="text-green-500 text-sm mb-4">{job.dept}</p>

                  <p className="text-gray-600 mb-6">{job.desc}</p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-green-500 font-semibold hover:underline"
                  >
                    Apply Now
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutUs;
