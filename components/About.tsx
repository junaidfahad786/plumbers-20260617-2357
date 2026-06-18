export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <span className="text-8xl">👨‍🔧</span>
                <p className="mt-4 text-blue-800 font-semibold text-lg">
                  Licensed Master Plumbers
                </p>
              </div>
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4">
              <p className="text-3xl font-extrabold text-blue-600">15+</p>
              <p className="text-sm text-gray-500">Years of Excellence</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose{" "}
              <span className="text-blue-600">ProFlow Plumbing</span>?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              We're a family-owned plumbing company serving our community for over 15 years.
              Every job — big or small — gets our full attention, honest pricing, and a
              satisfaction guarantee. Our licensed plumbers arrive on time, in uniform,
              ready to solve your problem the right way, the first time.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Licensed, bonded, and fully insured",
                "Upfront, flat-rate pricing — no hidden fees",
                "Same-day service for most calls",
                "100% satisfaction guarantee on all work",
                "Clean, uniformed, background-checked technicians",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 flex-shrink-0">✅</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary">
              Schedule Service Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
