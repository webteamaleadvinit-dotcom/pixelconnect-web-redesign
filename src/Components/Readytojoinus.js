import React from "react";
import { ArrowRight } from "lucide-react";

function ReadyToJoinUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-20 px-6 text-center mt-14">
      {/* Floating Gradient Blobs */}
      <div className="absolute top-[-5rem] left-[-5rem] w-80 h-80 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[-6rem] right-[-6rem] w-[28rem] h-[28rem] bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 rounded-full blur-3xl opacity-30 animate-[float_10s_ease-in-out_infinite_reverse]"></div>

      <div className="relative max-w-3xl mx-auto text-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Join Us?
        </h2>
        <p className="text-lg mb-8">
          Take the next step in your career journey. Apply now and become part
          of an innovative, growing team.
        </p>
        <a
          href="/apply"
          className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          Apply Now <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

export default ReadyToJoinUs;