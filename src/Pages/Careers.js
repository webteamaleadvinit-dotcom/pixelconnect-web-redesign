import React from "react";
import { Users, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Import Link
import Openpositions from "../Components/Openposition";
import Certificate from "../Components/Certificate";
import Footer from "../Components/Footer";
import WhyInternWithUs from "../Components/Internwithus";
import ReadyToJoinUs from "../Components/Readytojoinus";

const Careers = () => {
  let navigate = useNavigate();
  return (
    <section className="relative pt-28  overflow-hidden font-inter">
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full
          text-sm font-medium bg-white/80 shadow-md backdrop-blur-md border
          border-gray-300 hover:border-blue-500 hover:text-blue-600
          transition-all duration-300"
        >
          ← Back to Home
        </a>
      </div>

      {/* Floating Gradient Blobs */}
      {/* <div className="absolute top-[-5rem] left-[-5rem] w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-[float_10s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[-6rem] right-[-6rem] w-96 h-96 bg-gradient-to-tr from-indigo-400 to-pink-500 rounded-full blur-3xl opacity-25 animate-[float_12s_ease-in-out_infinite]"></div> */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-2xl">
          {/* Glassmorphism Badge */}
          <div className="inline-flex items-center gap-3 backdrop-blur-md bg-white/30 text-blue-700 px-6 py-3 rounded-full font-semibold shadow-md mb-6">
            <Users className="w-5 h-5" />
            Join Our Team
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 font-inter leading-tight">
            Start Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-md">
              Career Journey
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 mb-10">
            Be part of{" "}
            <span className="font-semibold text-blue-600">
              PixelConnect Agency
            </span>{" "}
            🚀. Work on real client projects, sharpen your skills, and grow
            alongside a creative and ambitious team.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5">
            <a
              href="#positions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#culture"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold border border-gray-300 bg-white/70 backdrop-blur-md hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              Explore Culture
            </a>
          </div>
        </div>

        {/* Right Side Doodle Illustration
        <div className="relative w-full max-w-lg flex items-center justify-center">
          <div className="absolute w-72 h-72 rounded-full border-4 border-blue-400 opacity-60 animate-pulse"></div>
          <div className="absolute w-60 h-60 rounded-full border-4 border-purple-400 opacity-50 animate-bounce"></div>
          <div className="absolute w-48 h-48 rounded-full border-4 border-indigo-500 opacity-40"></div>

          <div className="absolute top-10 left-10 w-16 h-16 border-2 border-dashed border-pink-500 rounded-full rotate-12"></div>
          <div className="absolute bottom-12 right-12 w-20 h-8 border-2 border-blue-600 rounded-full skew-x-12"></div>
        </div> */}

        {/* Right Side Doodle Illustration */}
        <div className="relative w-full max-w-lg hidden lg:flex items-center justify-center">
          <div className="absolute w-72 h-72 rounded-full border-4 border-blue-400 opacity-60 animate-pulse"></div>
          <div className="absolute w-60 h-60 rounded-full border-4 border-purple-400 opacity-50 animate-bounce"></div>
          <div className="absolute w-48 h-48 rounded-full border-4 border-indigo-500 opacity-40"></div>

          <div className="absolute top-10 left-10 w-16 h-16 border-2 border-dashed border-pink-500 rounded-full rotate-12"></div>
          <div className="absolute bottom-12 right-12 w-20 h-8 border-2 border-blue-600 rounded-full skew-x-12"></div>
        </div>
      </div>
      <WhyInternWithUs />
      <Openpositions />
      <Certificate />
      <ReadyToJoinUs />
      <Footer />
    </section>
  );
};

export default Careers;
