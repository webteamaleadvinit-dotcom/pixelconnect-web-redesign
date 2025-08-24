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

// import React from "react";
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
//     whyChooseDetailed: {
//       heading: "Why Choose Us for Content Writing?",
//       description: `Good content is not just about words—it’s about creating meaningful conversations with your audience. At our agency, we combine creativity with brand strategy, ensuring that every piece of writing reflects your brand's voice, engages with readers, and motivates them to take action.
      
// Our writers research deeply into industry trends, competitors, and keywords to create blogs, articles, and copies that are not only engaging but also search engine optimized. Whether you need storytelling for your brand identity, clear website copy that persuades, or data-backed email sequences that drive engagement—our content writing approach ensures maximum impact.`,
//       highlights: [
//         "Professional writers skilled in multiple industries and niches.",
//         "Research-driven and SEO-optimized content strategies.",
//         "Consistency in tone, style, and brand representation.",
//         "Focused on driving engagement and measurable conversions.",
//       ],
//     },
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
//     whyChooseDetailed: {
//       heading: "Why Choose Us for Graphic Design?",
//       description: `Your brand’s visuals are often the very first interaction people have with you. That’s why we approach design not just as art, but as an experience. We carefully balance color theory, typography, layout, and modern design trends to create graphics that make a lasting impression.
      
// Our creative designers focus on aligning aesthetics with purpose—whether it’s a complete brand identity, eye-catching digital illustrations, or marketing creatives that capture attention in seconds. We ensure every design is tailor-made to communicate your values, elevate your presence, and bring clarity to your brand’s message.`,
//       highlights: [
//         "Custom, brand-tailored visual solutions.",
//         "Designs that balance creativity with functionality.",
//         "Consistency across all digital and print media.",
//         "A user-centric approach that makes graphics memorable.",
//       ],
//     },
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
//     whyChooseDetailed: {
//       heading: "Why Choose Us for Web Development?",
//       description: `In a world where your website or app is your strongest digital footprint, we focus on building platforms that are not just functional—but fast, secure, scalable, and user-friendly. Our team specializes in modern frameworks and follows best coding practices to deliver solutions that stand the test of time.
      
// From smooth frontends to robust backends, we design every layer of your application with performance in mind. Whether you’re a startup looking for a sleek landing page or a business in need of a complete cloud-deployed platform, we ensure scalability, security, and future-ready development.`,
//       highlights: [
//         "Full-stack expertise in modern frameworks and cloud platforms.",
//         "Performance-first and SEO-ready architectures.",
//         "Responsive designs for all device types.",
//         "Secure, scalable coding practices with long-term maintainability.",
//       ],
//     },
//   },
// };

// const LearnMore = () => {
//   let { id } = useParams();
//   let service = servicesData[id];

//   return (
//     <div className="bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 text-gray-900 ">
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
//           to={service?.buttonLink || "/"}
//           className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out animate-bounce"
//         >
//           {service?.buttonText}
//         </Link>
//       </section>

//       {/* What We Do Section */}
//       <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-purple-50 via-white to-pink-50">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-purple-700">
//           What We Do
//         </h2>
//         <div className="justify-center flex gap-10 flex-wrap">
//           {service?.whatWeDo?.map((item, idx) => (
//             <div
//               key={idx}
//               className="group max-w-xs p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-3 bg-gradient-to-b from-white to-purple-50 text-center cursor-pointer"
//             >
//               <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 text-3xl text-pink-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
//                 {item.icon}
//               </div>
//               <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
//               <p className="text-gray-600">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-blue-50 via-white to-purple-50">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-blue-700">
//           {service?.whyChooseDetailed?.heading}
//         </h2>
//         <p className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed text-center mb-10 whitespace-pre-line">
//           {service?.whyChooseDetailed?.description}
//         </p>
       
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
    whyChooseDetailed: {
      heading: "Why Choose Us for Content Writing?",
      description: `Content is the backbone of every successful brand strategy. We don’t just write—we craft meaningful narratives that spark engagement, trust, and measurable growth. Whether it’s blog articles that rank on Google, web copy that converts visitors into customers, or email sequences that build lasting relationships, our content is designed to deliver results.

We research industry trends, competitors, and audience psychology to create content that truly resonates and drives measurable success.`,
      highlights: [
        "SEO-optimized writing that boosts visibility.",
        "Tailored storytelling aligned with your brand’s voice.",
        "Persuasive copy that drives engagement and sales.",
        "Consistency across blogs, web copy, and marketing assets.",
      ],
    },
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
    whyChooseDetailed: {
      heading: "Why Choose Us for Graphic Design?",
      description: `Your visuals are the first impression of your brand—and we ensure they stand out. Instead of cluttered or generic artwork, we deliver unique, well-balanced designs that reflect your brand personality and business goals.

From striking logos to marketing creatives and UI graphics, we craft experiences that delight audiences and communicate messages clearly and effectively.`,
      highlights: [
        "Unique, brand-driven creative solutions.",
        "Balanced mix of modern aesthetics and usability.",
        "Consistency across digital, print, and UI elements.",
        "Memorable designs that make lasting first impressions.",
      ],
    },
  },

  web: {
    title: "Web Development",
    heroHeading: "Building Scalable Digital Experiences",
    heroSubtext:
      "From landing pages to full-stack apps, we create responsive and user-friendly web solutions.",
    buttonText: "Explore Development",
    buttonLink: "/development",
    whatWeDo: [
      {
        icon: "🌐",
        title: "Frontend Development",
        description:
          "Interactive and modern UI built with React, Vue, or Angular.",
      },
      {
        icon: "⚙️",
        title: "Backend Development",
        description: "Secure, scalable APIs and server-side solutions.",
      },
      {
        icon: "📱",
        title: "Responsive Design",
        description: "Seamless experiences across devices and screen sizes.",
      },
      {
        icon: "☁️",
        title: "Cloud Deployment",
        description: "Hosting and deployment with AWS, Vercel, or Netlify.",
      },
    ],
    whyChooseDetailed: {
      heading: "Why Choose Us for Web Development?",
      description: `A great digital product is fast, secure, responsive, and future-ready. With expertise across frontend, backend, and cloud, we create websites and web apps that don’t just look good but also perform at peak efficiency.

Whether you’re launching a simple landing page or a scalable SaaS platform, our development ensures your business stays ahead—technically and strategically.`,
      highlights: [
        "Expertise in latest frameworks and full-stack solutions.",
        "Optimized for speed, security, and scalability.",
        "Responsive design for mobiles, tablets, and desktops.",
        "Future-ready deployment with modern cloud platforms.",
      ],
    },
  },

  social: {
    title: "Digital Marketing",
    heroHeading: "Marketing that Speaks to the Right Audience",
    heroSubtext:
      "We combine creativity with data to maximize your online reach and ROI.",
    buttonText: "Explore Marketing",
    buttonLink: "/marketing",
    whatWeDo: [
      {
        icon: "📱",
        title: "Social Media Marketing",
        description: "Campaigns that boost brand presence on all platforms.",
      },
      {
        icon: "🎯",
        title: "Paid Ads",
        description: "Targeted ad strategies for maximum conversions.",
      },
      {
        icon: "📈",
        title: "Analytics & Insights",
        description: "Data-driven optimizations for consistent growth.",
      },
      {
        icon: "🤝",
        title: "Influencer Marketing",
        description: "Collaborations that amplify your brand message.",
      },
    ],
    whyChooseDetailed: {
      heading: "Why Choose Us for Digital Marketing?",
      description: `Digital marketing is more than posting content—it’s about using data, creativity, and strategy to reach the right audience at the right time.

We craft personalized campaigns using social media, targeted ads, influencer collaborations, and analytic insights to maximize your ROI and grow your brand in a competitive space.`,
      highlights: [
        "Creative + data-driven campaigns for maximum impact.",
        "Targeted ads with measurable ROI.",
        "Analytics-backed strategies for continuous growth.",
        "Strong influencer networks to extend your brand reach.",
      ],
    },
  },

  video: {
    title: "Video Editing",
    heroHeading: "Turning Raw Footage into Stories",
    heroSubtext:
      "We create engaging videos that connect emotionally and visually.",
    buttonText: "Explore Videos",
    buttonLink: "/video",
    whatWeDo: [
      {
        icon: "🎬",
        title: "Promotional Videos",
        description: "Brand videos that tell your story with impact.",
      },
      {
        icon: "✂️",
        title: "Editing & Post Production",
        description: "Seamless cuts, transitions, and color grading.",
      },
      {
        icon: "📹",
        title: "Explainer Videos",
        description: "Simplifying complex ideas into engaging visuals.",
      },
      {
        icon: "📺",
        title: "Social Media Reels",
        description: "Short-form videos tailored for maximum engagement.",
      },
    ],
    whyChooseDetailed: {
      heading: "Why Choose Us for Video Editing?",
      description: `A powerful video tells a story that words alone cannot. We specialize in transforming raw footage into captivating stories with seamless editing, smooth transitions, and high-quality post-production.

Whether it’s professional promotional films, brand stories, or quick social reels—we ensure every video strikes the right balance of creativity, emotion, and clarity.`,
      highlights: [
        "Polished, professional editing with seamless effects.",
        "Engaging visuals crafted for emotional connection.",
        "Perfect balance of storytelling and technical precision.",
        "Industry-standard tools for top-tier production.",
      ],
    },
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
    whyChooseDetailed: {
      heading: "Why Choose Us for Presentation Design?",
      description: `A presentation can make or break your pitch. We craft professional slides that combine powerful visuals with structured storytelling—ensuring that your audience stays engaged and your message is crystal clear.

From corporate decks to investor pitches, every slide we design is polished, impactful, and strategically persuasive.`,
      highlights: [
        "Professional storytelling through visuals.",
        "Polished designs for investor and business decks.",
        "Data-driven visualization simplified for audiences.",
        "Impressive layouts for events, webinars, and keynotes.",
      ],
    },
  },
};

// ------------ LEARN MORE COMPONENT
const LearnMore = () => {
  let { id } = useParams();
  let service = servicesData[id];

  return (
    <div className="bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 text-gray-900 ">
      {/* Hero Section */}
      <section className="relative text-center py-24 px-6 md:px-12 lg:px-20">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          {service?.heroHeading.split(" ").map((word, i) =>
            i === 2 ? (
              <span key={i} className="text-pink-600">
                {word}{" "}
              </span>
            ) : (
              word + " "
            )
          )}
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 mb-10">
          {service?.heroSubtext}
        </p>
        <Link
          to={service?.buttonLink || "/"}
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out animate-bounce"
        >
          {service?.buttonText}
        </Link>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-purple-50 via-white to-pink-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-purple-700">
          What We Do
        </h2>
        <div className="justify-center flex gap-10 flex-wrap">
          {service?.whatWeDo?.map((item, idx) => (
            <div
              key={idx}
              className="group max-w-xs p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-3 bg-gradient-to-b from-white to-purple-50 text-center cursor-pointer"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 text-3xl text-pink-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-blue-50 via-white to-purple-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-blue-700">
          {service?.whyChooseDetailed?.heading}
        </h2>
        <p className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed text-center mb-10 whitespace-pre-line">
          {service?.whyChooseDetailed?.description}
        </p>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {service?.whyChooseDetailed?.highlights?.map((point, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition"
            >
              <span className="text-pink-600 font-bold text-2xl">✔</span>
              <p className="text-gray-700 mt-2">{point}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
