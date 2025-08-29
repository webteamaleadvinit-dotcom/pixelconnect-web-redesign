import React from "react";
import { Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const JoinOurTeam = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
      {/* Animated Gradient Blobs */}
      <div className="absolute top-[-5rem] left-[-5rem] w-80 h-80 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[-6rem] right-[-6rem] w-[28rem] h-[28rem] bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 rounded-full blur-3xl opacity-30 animate-[float_10s_ease-in-out_infinite_reverse]"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-6 py-2 rounded-full font-medium mb-8 shadow-sm hover:scale-105 transition-transform duration-300 animate-[fadeIn_1s_ease-out]">
          <Users size={20} />
          Join Our Team
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-poppins animate-[fadeInUp_1.2s_ease-out]">
          Wanna Join{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-[shine_3s_linear_infinite]">
            Our Team?
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed animate-[fadeInUp_1.5s_ease-out]">
          Start your career journey with{" "}
          <span className="font-semibold text-blue-700">PixelConnect Agency</span>! 
          We offer internship opportunities for creative thinkers and problem solvers who want to make an impact.
        </p>

        {/* CTA Button */}
        <Link
          to="/careers"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-indigo-500/50 hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out animate-[fadeInUp_1.8s_ease-out]"
        >
          Explore Opportunities
          <ArrowRight size={22} />
        </Link>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-30px) translateX(20px); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes shine {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          .animate-[shine_3s_linear_infinite] {
            background-size: 200% auto;
          }
        `}
      </style>
      
    </section>
  );
};

export default JoinOurTeam;
