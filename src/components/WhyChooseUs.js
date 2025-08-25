import React from "react";
import { FaUsers, FaDollarSign, FaBolt, FaCog } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaUsers />,
      title: "Young Talent",
      description: "Fresh perspectives and innovative approaches from emerging professionals.",
    },
    {
      icon: <FaDollarSign />,
      title: "Cost Effective",
      description: "Premium quality services at competitive rates that fit your budget.",
    },
    {
      icon: <FaBolt />,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality or attention to detail.",
    },
    {
      icon: <FaCog />,
      title: "Professional Process",
      description: "Structured workflow with clear communication and milestone tracking.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20" id="why-us">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-14">
          Why <span className="text-indigo-600">Choose Us</span>
        </h2>

        {/* Features Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 bg-white"
            >
              {/* Floating Blobs */}
              <div className="absolute top-[-4rem] left-[-4rem] w-72 h-72 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-[float_8s_ease-in-out_infinite]"></div>
              <div className="absolute bottom-[-5rem] right-[-5rem] w-72 h-72 bg-gradient-to-r from-pink-400 via-orange-500 to-yellow-400 rounded-full blur-3xl opacity-20 animate-[float_10s_ease-in-out_infinite_reverse]"></div>

              <div className="relative flex flex-col items-center">
                <div className="text-indigo-600 text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
