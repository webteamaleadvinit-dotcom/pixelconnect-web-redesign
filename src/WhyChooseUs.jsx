// src/components/WhyChooseUs.jsx
export default function WhyChooseUs() {
  const features = [
    {
      icon: "⚡️",
      title: "Fast & Reliable",
      text: "Quick turnaround with stable, production-ready results.",
    },
    {
      icon: "🔒",
      title: "Secure by Design",
      text: "Best practices and modern standards baked into every build.",
    },
    {
      icon: "🎯",
      title: "Focused on Quality",
      text: "Pixel-perfect UI and clean, maintainable code.",
    },
    {
      icon: "🤝",
      title: "Great Support",
      text: "Clear communication and ongoing help when you need it.",
    },
  ];

  return (
    <section id="why-us" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Why Choose Us
          </h2>
          <p className="mt-3 text-gray-600">
            We combine speed, security, and support to deliver work you can trust.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center text-2xl">
                  <span aria-hidden>{f.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
