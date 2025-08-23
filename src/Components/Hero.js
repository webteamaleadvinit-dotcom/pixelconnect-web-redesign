import React from "react";
import HeroImage from "../Assets/HeroImage.png";

const Hero = () => {
  return (
    <div>
      <div className="bg-gradient-to-tr from-pink-100 via-purple-200 via-blue-200 to-indigo-300 text-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="flex flex-col items-center md:items-start gap-8 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              Where{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
                Creativity
              </span>{" "}
              Meets{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
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
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full 
  bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 
  text-white font-semibold text-lg shadow-lg 
  hover:shadow-2xl transform hover:scale-110 
  transition duration-300 ease-in-out animate-bounce"
              >
                Hire Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>

              <button
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full 
                  bg-white/90 backdrop-blur-md shadow-md border border-gray-200 text-gray-700 font-semibold text-lg 
                  hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
                  className="p-4 bg-white rounded-xl shadow hover:shadow-md transition-all"
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
          <div className="relative flex justify-center">
            <img
              src={HeroImage}
              alt="Hero"
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
