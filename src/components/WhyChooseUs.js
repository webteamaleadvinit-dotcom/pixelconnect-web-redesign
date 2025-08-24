import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20" id="why-us">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-14">
          Why <span className="text-brand-blue">Choose Us</span>
        </h2>

        {/* Features */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
            {/* Floating blobs */}
            <div className="absolute top-[-5rem] left-[-5rem] w-80 h-80 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-[-6rem] right-[-6rem] w-[28rem] h-[28rem] bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 rounded-full blur-3xl opacity-30 animate-[float_10s_ease-in-out_infinite_reverse]"></div>

            <div className="relative">
              <div className="text-brand-blue text-5xl mb-4">👩‍💻</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Young Talent</h3>
              <p className="text-gray-700">
                Fresh perspectives and innovative approaches from emerging professionals.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
            {/* Floating blobs */}
            <div className="absolute top-[-5rem] left-[-5rem] w-80 h-80 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-[-6rem] right-[-6rem] w-[28rem] h-[28rem] bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 rounded-full blur-3xl opacity-30 animate-[float_10s_ease-in-out_infinite_reverse]"></div>

            <div className="relative">
              <div className="text-brand-blue text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cost Effective</h3>
              <p className="text-gray-700">
                Premium quality services at competitive rates that fit your budget.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
            {/* Floating blobs */}
            <div className="absolute top-[-5rem] left-[-5rem] w-80 h-80 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-[-6rem] right-[-6rem] w-[28rem] h-[28rem] bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 rounded-full blur-3xl opacity-30 animate-[float_10s_ease-in-out_infinite_reverse]"></div>

            <div className="relative">
              <div className="text-brand-blue text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Turnaround</h3>
              <p className="text-gray-700">
                Quick delivery without compromising on quality or attention to detail.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
            {/* Floating blobs */}
            <div className="absolute top-[-5rem] left-[-5rem] w-80 h-80 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-[-6rem] right-[-6rem] w-[28rem] h-[28rem] bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 rounded-full blur-3xl opacity-30 animate-[float_10s_ease-in-out_infinite_reverse]"></div>

            <div className="relative">
              <div className="text-brand-blue text-5xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Process</h3>
              <p className="text-gray-700">
                Structured workflow with clear communication and milestone tracking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
