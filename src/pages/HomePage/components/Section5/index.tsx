import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Ralph Jordan",
    role: "Chief Design Officer",
    text: "Euismod tincidunt dolore magna aliquam erat amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt dolore magna aliquam erat volutpat.",
  },
  {
    name: "Harold Griffin",
    role: "Lead Developer",
    text: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt dolore magna aliquam erat Lorem ipsum dolor sit amet volutpat.",
  },
  {
    name: "Emily Carter",
    role: "Marketing Manager",
    text: "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet.",
  },
];

const Section5 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const item = testimonials[index];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          100% Customer Satisfaction!
        </h2>

        {/* Quote */}
        <p className="text-lg text-gray-600 italic leading-relaxed mb-10">
          “{item.text}”
        </p>

        {/* User */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-semibold text-gray-900">{item.name}</p>
          <p className="text-gray-500 text-sm">{item.role}</p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                index === i ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;
