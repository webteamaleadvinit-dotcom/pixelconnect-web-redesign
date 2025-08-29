import React from "react";
import { Users, Lightbulb, CheckCircle, Clock } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Experienced Team",
      desc: "Our professionals bring years of expertise and proven strategies that drive measurable results.",
      icon: Users,
    },
    {
      title: "Innovation-Driven",
      desc: "We continuously explore new ideas and technologies to create future-ready solutions.",
      icon: Lightbulb,
    },
    {
      title: "Uncompromising Quality",
      desc: "Every project is executed with precision, undergoing rigorous quality checks for reliability.",
      icon: CheckCircle,
    },
    {
      title: "Timely Delivery",
      desc: "We prioritize deadlines, ensuring your projects are delivered on time without compromise.",
      icon: Clock,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Title & Intro */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-indigo-600">Choose Us</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We’re more than just a service provider — we’re your long-term growth partner. 
            Our approach blends strategy, creativity, and execution to ensure your success.
          </p>
          
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Right Side - Features List */}
        <div className="grid sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl p-6 shadow-md border border-gray-100 
                         hover:shadow-2xl hover:-translate-y-2 transform transition duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-xl 
                              bg-gradient-to-tr from-blue-500 to-blue-700 text-white mb-5 shadow-md">
                <feature.icon className="w-7 h-7" />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}