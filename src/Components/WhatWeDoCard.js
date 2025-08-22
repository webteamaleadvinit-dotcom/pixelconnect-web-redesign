// import React from "react";

// const WhatWeDoCard = ({ title, description, svg }) => {
//   return (
//     <div>
//       <div
//         className="group bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-md
//   hover:shadow-xl border border-gray-100 hover:border-blue-400/60
//   transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02]"
//       >
//         {/* Icon */}
//         <div
//           className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl
//     bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg
//     group-hover:scale-110 group-hover:shadow-blue-500/30
//     transition-all duration-300 ease-out"
//         >
//           {svg}
//         </div>

//         {/* Title */}
//         <h3
//           className="text-2xl font-semibold text-gray-900 mb-3 font-['Poppins']
//     group-hover:text-blue-600 transition-colors duration-300"
//         >
//           {title}
//         </h3>

//         {/* Description */}
//         <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
//           {description}
//         </p>

//         {/* CTA */}
//         <div
//           className="flex items-center text-blue-600 font-medium group-hover:gap-2
//     transition-all duration-300 ease-out"
//         >
//           <span
//             className="relative after:block after:h-[2px] after:w-0 after:bg-blue-600
//       after:transition-all after:duration-300 group-hover:after:w-full"
//           >
//             Learn More
//           </span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path d="M5 12h14" />
//             <path d="m12 5 7 7-7 7" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatWeDoCard;


import React from "react";

const WhatWeDoCard = ({ title, description, svg }) => {
  return (
    <div className="group [perspective:1000px] w-80 h-64 m-4">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* FRONT SIDE */}
        <div className="absolute inset-0 bg-white rounded-2xl shadow-md p-6 flex flex-col items-start justify-center [backface-visibility:hidden]">
          <div className="text-blue-500 mb-4">{svg}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>

        {/* BACK SIDE with permanent gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 flex flex-col items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] text-white">
          <div className="mb-4">{svg}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <a
            href="#"
            className="font-medium flex items-center gap-1 hover:underline"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoCard;
