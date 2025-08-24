// import React from "react";
// import { Paintbrush, Palette, PenTool, Image } from "lucide-react";
// import { Link, useParams } from "react-router-dom";

// const servicesData = {
//   content: {
//     title: "Content Writing",
//     heroHeading: "Words that Drive Impact",
//     heroSubtext:
//       "Engaging blog posts, web copy, and marketing content that converts.",
//     buttonText: "Explore Content",
//     buttonLink: "/content",
//     whatWeDo: [
//       {
//         icon: "📝",
//         title: "Blog Writing",
//         description: "SEO-friendly blogs tailored to your brand voice.",
//       },
//       {
//         icon: "📄",
//         title: "Web Copy",
//         description:
//           "Persuasive and clear website copy that drives engagement.",
//       },
//       {
//         icon: "📧",
//         title: "Email Marketing",
//         description: "High-converting email sequences and campaigns.",
//       },
//     ],
//   },

//   graphic: {
//     title: "Graphic Design",
//     heroHeading: "Designing Experiences, Not Just Graphics",
//     heroSubtext:
//       "We blend creativity, color, and strategy to craft visuals that are dynamic, memorable, and impactful.",
//     buttonText: "Explore Designs",
//     buttonLink: "/graphic",
//     whatWeDo: [
//       {
//         icon: "🎨",
//         title: "Branding & Identity",
//         description: "Logos, typography, and brand systems that stand out.",
//       },
//       {
//         icon: "🖌️",
//         title: "Digital Illustrations",
//         description: "Custom illustrations crafted for digital presence.",
//       },
//       {
//         icon: "📢",
//         title: "Marketing Materials",
//         description:
//           "Posters, brochures, and creatives that deliver messages clearly.",
//       },
//       {
//         icon: "💻",
//         title: "Web & App Graphics",
//         description: "UI visuals that elevate digital user experiences.",
//       },
//     ],
//   },

//   web: {
//     title: "Web Development",
//     heroHeading: "Building Scalable Digital Experiences",
//     heroSubtext:
//       "From landing pages to full-stack apps, we create responsive and user-friendly web solutions.",
//     buttonText: "Explore Development",
//     buttonLink: "/development",
//     whatWeDo: [
//       {
//         icon: "🌐",
//         title: "Frontend Development",
//         description:
//           "Interactive and modern UI built with React, Vue, or Angular.",
//       },
//       {
//         icon: "⚙️",
//         title: "Backend Development",
//         description: "Secure, scalable APIs and server-side solutions.",
//       },
//       {
//         icon: "📱",
//         title: "Responsive Design",
//         description: "Seamless experiences across devices and screen sizes.",
//       },
//       {
//         icon: "☁️",
//         title: "Cloud Deployment",
//         description: "Hosting and deployment with AWS, Vercel, or Netlify.",
//       },
//     ],
//   },

//   social: {
//     title: "Digital Marketing",
//     heroHeading: "Marketing that Speaks to the Right Audience",
//     heroSubtext:
//       "We combine creativity with data to maximize your online reach and ROI.",
//     buttonText: "Explore Marketing",
//     buttonLink: "/marketing",
//     whatWeDo: [
//       {
//         icon: "📱",
//         title: "Social Media Marketing",
//         description: "Campaigns that boost brand presence on all platforms.",
//       },
//       {
//         icon: "🎯",
//         title: "Paid Ads",
//         description: "Targeted ad strategies for maximum conversions.",
//       },
//       {
//         icon: "📈",
//         title: "Analytics & Insights",
//         description: "Data-driven optimizations for consistent growth.",
//       },
//       {
//         icon: "🤝",
//         title: "Influencer Marketing",
//         description: "Collaborations that amplify your brand message.",
//       },
//     ],
//   },

//   video: {
//     title: "Video Editing",
//     heroHeading: "Turning Raw Footage into Stories",
//     heroSubtext:
//       "We create engaging videos that connect emotionally and visually.",
//     buttonText: "Explore Videos",
//     buttonLink: "/video",
//     whatWeDo: [
//       {
//         icon: "🎬",
//         title: "Promotional Videos",
//         description: "Brand videos that tell your story with impact.",
//       },
//       {
//         icon: "✂️",
//         title: "Editing & Post Production",
//         description: "Seamless cuts, transitions, and color grading.",
//       },
//       {
//         icon: "📹",
//         title: "Explainer Videos",
//         description: "Simplifying complex ideas into engaging visuals.",
//       },
//       {
//         icon: "📺",
//         title: "Social Media Reels",
//         description: "Short-form videos tailored for maximum engagement.",
//       },
//     ],
//   },
//   presentation: {
//     title: "Presentation Design",
//     heroHeading: "Slides That Speak Louder Than Words",
//     heroSubtext:
//       "We create visually engaging and impactful presentations that captivate your audience and deliver your message with clarity.",
//     buttonText: "Explore Presentations",
//     buttonLink: "/presentation",
//     whatWeDo: [
//       {
//         icon: "📊",
//         title: "Business Decks",
//         description: "Professional decks that showcase your business vision.",
//       },
//       {
//         icon: "🎤",
//         title: "Pitch Presentations",
//         description: "Investor-ready pitches designed to impress and persuade.",
//       },
//       {
//         icon: "📈",
//         title: "Data Visualization",
//         description:
//           "Clean, intuitive charts and infographics that simplify complex data.",
//       },
//       {
//         icon: "🌍",
//         title: "Event Presentations",
//         description:
//           "Dynamic slides tailored for conferences, webinars, and keynotes.",
//       },
//     ],
//   },
// };

// const LearnMore = () => {
//   let { id } = useParams();
//   let service = servicesData[id];
//   return (
//     <div className="bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 text-gray-900 ">
//       <div className="absolute top-[-5rem] left-[-5rem] w-80 h-80 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite]"></div>

//       {/* Hero Section */}
//       <section className="relative text-center py-24 px-6 md:px-12 lg:px-20">
//         <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
//           {service?.heroHeading.split(" ").map((word, i) =>
//             i === 2 ? (
//               <span key={i} className="text-pink-600">
//                 {word}{" "}
//               </span>
//             ) : (
//               word + " "
//             )
//           )}
//         </h1>
//         <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 mb-10">
//           {service?.heroSubtext}
//         </p>
//         <Link
//           to="/graphic"
//           className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out animate-bounce"
//         >
//           Explore More
//         </Link>
//       </section>

//       {/* What We Design Section */}
//       <section
//         id="whatwedesign"
//         className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-purple-50 via-white to-pink-50"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-purple-700">
//           What We Do
//         </h2>
//         <div className="justify-center flex  gap-10">
//           <div className="group p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-3 bg-gradient-to-b from-white to-purple-50 text-center cursor-pointer">
//             <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 text-3xl text-pink-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
//               {service.whatWeDo[0]?.icon}
//             </div>
//             <h3 className="text-xl font-semibold mb-3">
//               {service.whatWeDo[0]?.title}
//             </h3>
//             <p className="text-gray-600">{service?.whatWeDo[0]?.description}</p>
//           </div>

//           <div className="group p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-3 bg-gradient-to-b from-white to-blue-50 text-center cursor-pointer">
//             <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 text-3xl text-pink-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
//               {service.whatWeDo[1]?.icon}
//             </div>
//             <h3 className="text-xl font-semibold mb-3">
//               {service.whatWeDo[1]?.title}
//             </h3>
//             <p className="text-gray-600">{service?.whatWeDo[1]?.description}</p>
//           </div>

//           <div className="group p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-3 bg-gradient-to-b from-white to-pink-50 text-center cursor-pointer">
//             <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 text-3xl text-pink-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
//               {service.whatWeDo[2]?.icon}
//             </div>
//             <h3 className="text-xl font-semibold mb-3">
//               {service.whatWeDo[2]?.title}
//             </h3>
//             <p className="text-gray-600">{service?.whatWeDo[2]?.description}</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LearnMore;

import React from "react";
import { Link, useParams } from "react-router-dom";

const servicesData = {
  content: {
    title: "Content Writing",
    heroHeading: "Words that Drive Impact",
    heroSubtext:
      "Engaging blog posts, web copy, and marketing content that converts.",
    buttonText: "Explore Content",
    buttonLink: "/content",
    whatWeDo: [
      {
        icon: "📝",
        title: "Blog Writing",
        description: "SEO-friendly blogs tailored to your brand voice.",
      },
      {
        icon: "📄",
        title: "Web Copy",
        description:
          "Persuasive and clear website copy that drives engagement.",
      },
      {
        icon: "📧",
        title: "Email Marketing",
        description: "High-converting email sequences and campaigns.",
      },
    ],
  },
  graphic: {
    title: "Graphic Design",
    heroHeading: "Designing Experiences, Not Just Graphics",
    heroSubtext:
      "We blend creativity, color, and strategy to craft visuals that are dynamic, memorable, and impactful.",
    buttonText: "Explore Designs",
    buttonLink: "/graphic",
    whatWeDo: [
      {
        icon: "🎨",
        title: "Branding & Identity",
        description: "Logos, typography, and brand systems that stand out.",
      },
      {
        icon: "🖌️",
        title: "Digital Illustrations",
        description: "Custom illustrations crafted for digital presence.",
      },
      {
        icon: "📢",
        title: "Marketing Materials",
        description:
          "Posters, brochures, and creatives that deliver messages clearly.",
      },
      {
        icon: "💻",
        title: "Web & App Graphics",
        description: "UI visuals that elevate digital user experiences.",
      },
    ],
  },
  presentation: {
    title: "Presentation Design",
    heroHeading: "Slides That Speak Louder Than Words",
    heroSubtext:
      "We create visually engaging and impactful presentations that captivate your audience and deliver your message with clarity.",
    buttonText: "Explore Presentations",
    buttonLink: "/presentation",
    whatWeDo: [
      {
        icon: "📊",
        title: "Business Decks",
        description: "Professional decks that showcase your business vision.",
      },
      {
        icon: "🎤",
        title: "Pitch Presentations",
        description: "Investor-ready pitches designed to impress and persuade.",
      },
      {
        icon: "📈",
        title: "Data Visualization",
        description:
          "Clean, intuitive charts and infographics that simplify complex data.",
      },
      {
        icon: "🌍",
        title: "Event Presentations",
        description:
          "Dynamic slides tailored for conferences, webinars, and keynotes.",
      },
    ],
  },
};

const LearnMore = () => {
  let { id } = useParams();
  let service = servicesData[id];

  if (!service) {
    return (
      <div className="text-center py-32">
        <h2 className="text-3xl font-bold text-gray-700">Service Not Found</h2>
        <p className="text-gray-500 mt-2">
          Please check the URL or explore our other services.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 text-gray-900 overflow-hidden">
      {/* floating blob background */}
      <div className="absolute top-[-8rem] right-[-8rem] w-[25rem] h-[25rem] bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-full blur-3xl opacity-25 animate-[float_8s_ease-in-out_infinite]"></div>

      {/* Hero Section */}
      <section className="relative text-center py-28 px-6 md:px-12 lg:px-20">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          {service.heroHeading.split(" ").map((word, i) =>
            i === 2 ? (
              <span key={i} className="text-pink-600">
                {word + " "}
              </span>
            ) : (
              word + " "
            )
          )}
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 mb-10">
          {service.heroSubtext}
        </p>
        <Link
          to={service.buttonLink}
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out"
        >
          {service.buttonText}
        </Link>
      </section>

      {/* What We Do Section */}
      <section
        id="whatwedo"
        className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-purple-50 via-white to-pink-50"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-purple-700">
          What We Do
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {service.whatWeDo.map((work, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-3 bg-gradient-to-b from-white to-gray-50 text-center cursor-pointer border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 text-3xl text-pink-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {work.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-pink-600">
                {work.title}
              </h3>
              <p className="text-gray-600">{work.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 text-center bg-gradient-to-b from-white to-purple-50">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Why Choose Our {service.title}?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          We combine creativity, strategy, and technology to deliver solutions
          that don’t just look good but also drive results. Every service we
          offer is built with the goal of amplifying your brand’s voice.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">
              🚀 Expertise
            </h3>
            <p className="text-gray-600">
              Our team consists of professionals with years of industry
              experience.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">
              🎨 Creativity
            </h3>
            <p className="text-gray-600">
              Innovative designs and strategies that make your brand stand out.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">
              📈 Results
            </h3>
            <p className="text-gray-600">
              Data-driven approaches ensure that we deliver measurable success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
