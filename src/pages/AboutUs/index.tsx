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

const AboutUs = () => {
  return (
    <MainLayout>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* About */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Roadmap */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-center mb-16">
              Our Roadmap
            </h3>

            <div className="grid md:grid-cols-2 gap-12">
              {roadmap.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <p className="text-green-500 font-semibold mb-2">
                    {item.date}
                  </p>
                  <h4 className="font-bold text-lg mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-center mb-16">
              Meet The Kenzap Team
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-40 h-40 mx-auto rounded-full object-cover mb-4 shadow-md group-hover:scale-105 transition"
                  />
                  <h4 className="font-semibold text-lg">{member.name}</h4>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Careers */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-16">
              Join Us on Kenzap
            </h3>

            <div className="grid md:grid-cols-2 gap-10">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <h4 className="text-xl font-semibold mb-1">{job.title}</h4>
                  <p className="text-green-500 text-sm mb-4">{job.dept}</p>

                  <p className="text-gray-600 mb-6">{job.desc}</p>

                  <button className="text-green-500 font-semibold hover:underline">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutUs;
