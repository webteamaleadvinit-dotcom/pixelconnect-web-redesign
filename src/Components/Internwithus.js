import React from "react";
import { Briefcase, Users, Star, Rocket } from "lucide-react";

function WhyInternWithUs() {
  const benefits = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Real-world Projects",
      desc: "Work on meaningful projects that prepare you for future roles.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Mentorship",
      desc: "Learn directly from experienced professionals who guide you.",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Skill Development",
      desc: "Gain hands-on skills that make you industry ready.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      title: "Career Growth",
      desc: "Boost your career with valuable internship experience.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Why Intern With Us?
        </h2>
        <p className="text-gray-600 mb-12">
          Discover the benefits of joining our internship program.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyInternWithUs;