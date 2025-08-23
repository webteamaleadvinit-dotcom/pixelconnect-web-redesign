import React from "react";
import { Paintbrush, Palette, PenTool, Image } from "lucide-react";
import { Link } from "react-router-dom";
const GraphicDesignPage = () => {
  return (
    <div className="bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative text-center py-24 px-6 md:px-12 lg:px-20">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Designing <span className="text-pink-600">Experiences</span>, Not Just
          Graphics
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 mb-10">
          We blend creativity, color, and strategy to craft visuals that are
          dynamic, memorable, and impactful.
        </p>
        <Link
          to="/graphic"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out animate-bounce"
        >
          Explore Designs
        </Link>
      </section>

      {/* What We Design Section */}
      <section
        id="whatwedesign"
        className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-purple-50 via-white to-pink-50"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-purple-700">
          What We Design
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="group p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-3 bg-gradient-to-b from-white to-purple-50 text-center cursor-pointer">
            <Paintbrush className="w-14 h-14 mx-auto text-pink-600 mb-5 group-hover:scale-125 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-3">Branding & Identity</h3>
            <p className="text-gray-600">
              Memorable logos, typography, and brand systems that stand out in
              the market.
            </p>
          </div>

          <div className="group p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-3 bg-gradient-to-b from-white to-blue-50 text-center cursor-pointer">
            <Palette className="w-14 h-14 mx-auto text-purple-600 mb-5 group-hover:scale-125 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-3">
              Digital Illustrations
            </h3>
            <p className="text-gray-600">
              Vibrant illustrations and visuals crafted to energize your brand’s
              digital presence.
            </p>
          </div>

          <div className="group p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-3 bg-gradient-to-b from-white to-pink-50 text-center cursor-pointer">
            <PenTool className="w-14 h-14 mx-auto text-blue-600 mb-5 group-hover:scale-125 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-3">Marketing Materials</h3>
            <p className="text-gray-600">
              Posters, brochures, and creatives that catch attention and deliver
              the message clearly.
            </p>
          </div>

          <div className="group p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-3 bg-gradient-to-b from-white to-purple-50 text-center cursor-pointer">
            <Image className="w-14 h-14 mx-auto text-pink-600 mb-5 group-hover:scale-125 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-3">Web & App Graphics</h3>
            <p className="text-gray-600">
              Sleek UI visuals and graphics that elevate user experiences across
              all devices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesignPage;
