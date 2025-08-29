import React from "react";
import WhatWeDoCard from "./WhatWeDoCard";

const WhatWeDo = () => {
  return (
    <section id="service" className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            What We Do
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-medium">
          From creative design to technical development, we deliver
          comprehensive solutions that transform your ideas into reality.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-10">
        <WhatWeDoCard
          title="Content Writing"
          description="Engaging blog posts, web copy, and marketing content that converts."
          link="/services/content"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
          }
        />

        <WhatWeDoCard
          title="Graphic Design"
          description="Brand identity, logos, and visual assets that make an impact."
          link="/services/graphic"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
            </svg>
          }
        />

        <WhatWeDoCard
          title="Presentation Design"
          description="Professional slides and pitch decks that tell your story."
          link="/services/presentation"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2 3h20" />
              <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
              <path d="m7 21 5-5 5 5" />
            </svg>
          }
        />

        <WhatWeDoCard
          title="Video Editing"
          description="High-quality video production for social media, YouTube, and more."
          link="/services/video"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m22 8-6 4 6 4V8Z" />
              <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
            </svg>
          }
        />

        <WhatWeDoCard
          title="Social Media Management"
          description="Strategic content creation and management for your brand online."
          link="/services/social"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          }
        />
      </div>

      <div className="max-w-3xl mt-10 space-y-6">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Technical Services
          </span>
        </h2>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-10">
        <WhatWeDoCard
          title="Web Development"
          description="Modern, responsive websites and web applications built with latest tech."
          link="/services/web"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-code w-8 h-8"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          }
        />

        <WhatWeDoCard
          title="Automation"
          description="Streamline your workflows with custom automation solutions."
          link="/services/automation"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-zap w-8 h-8"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          }
        />
      </div>
    </section>
  );
};

export default WhatWeDo;
