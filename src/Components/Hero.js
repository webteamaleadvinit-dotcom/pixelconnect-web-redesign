import React from "react";
import HeroImage from "../Assets/HeroImage.png";
const Hero = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-br from-[#F5FAFF] via-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="flex flex-col items-center md:items-start gap-8 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Where{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text">
                Creativity
              </span>{" "}
              Meets{" "}
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
                Code
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              A modern creative & technical freelancing agency built by emerging
              talent. We turn bold ideas into digital realities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <button
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full 
          bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg shadow-md 
          hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105"
              >
                Hire Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>

              <button
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-xl 
          bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 text-gray-700 font-semibold text-lg 
          hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                See Our Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "24h", label: "Avg. Response Time" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "15+", label: "Team Members" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 bg-white/70 backdrop-blur-md rounded-xl shadow hover:shadow-lg transition-all"
                >
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img
              src={HeroImage}
              alt="Hero"
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
