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
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition">
            <div className="text-brand-blue text-5xl mb-4">👩‍💻</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">young talent</h3>
            <p className="text-gray-600">
              fresh perspectives and innovative approaches from emerging proffessionals.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition">
            <div className="text-brand-blue text-5xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">cost effective</h3>
            <p className="text-gray-600">
              premium quality services  at competitive rates that fit your budget
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition">
            <div className="text-brand-blue text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Turnaround </h3>
            <p className="text-gray-600">
              Quick delivery without compromising on qaulity or attention to detail.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition">
            <div className="text-brand-blue text-5xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Proffessional Process</h3>
            <p className="text-gray-600">
             Structured workflow with clear communication and milestone tracking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
