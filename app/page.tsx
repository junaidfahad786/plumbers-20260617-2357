import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-plumber.jpg"
            alt="Professional plumber at work"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-700/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              Available 24/7 for Emergencies
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Expert Plumbing<br />
              <span className="text-blue-200">You Can Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
              From burst pipes to water heater installs — our licensed plumbers deliver
              fast, reliable service with upfront pricing. No surprises, just solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+155****4567" className="btn-accent text-lg !px-8 !py-4">
                📞 Call Now (555) 123-4567
              </a>
              <Link href="/contact" className="btn-outline text-lg !px-8 !py-4 !border-white !text-white hover:!bg-white hover:!text-blue-700">
                Get a Free Quote
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-12 text-sm text-blue-200">
              <span>⭐ 4.9/5 on Google</span>
              <span>✅ Licensed &amp; Insured</span>
              <span>🏆 15+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🚨</span>
              <div>
                <h2 className="text-xl font-bold">Plumbing Emergency?</h2>
                <p className="text-orange-100">We arrive in 30 minutes or less</p>
              </div>
            </div>
            <a href="tel:+155****4567" className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors text-lg shadow-lg">
              📞 Call 24/7: (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Services highlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Plumbing Services</h2>
          <p className="section-subtitle">
            From routine maintenance to emergency repairs — we handle it all with expertise and care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🚿", title: "Emergency Repairs", desc: "24/7 burst pipe, leak, and sewer backup response. We arrive in 30 minutes or less." },
              { icon: "🔧", title: "Drain Cleaning", desc: "Hydro-jetting, snaking, and camera inspection to clear stubborn clogs." },
              { icon: "🔥", title: "Water Heaters", desc: "Installation, repair, and maintenance of tankless and traditional heaters." },
              { icon: "🚽", title: "Toilet Repair & Install", desc: "Fix leaks, clogs, or get a new water-efficient toilet installed." },
              { icon: "🔍", title: "Leak Detection", desc: "Advanced technology to find hidden leaks before they cause major damage." },
              { icon: "🏠", title: "Repiping", desc: "Whole-home repiping with copper or PEX — code-compliant, minimal disruption." },
            ].map((s) => (
              <Link key={s.title} href="/services" className="card group hover:border-blue-200 border-2 border-transparent">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15,000+", label: "Jobs Completed" },
              { value: "98%", label: "Customer Satisfaction" },
              { value: "30min", label: "Avg Response Time" },
              { value: "15+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-extrabold mb-1">{stat.value}</p>
                <p className="text-blue-200 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust section with image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/handshake.jpg"
                alt="Happy customer with plumber"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Trusted by Thousands of Homeowners
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                We've earned a 4.9/5 rating across 2,400+ reviews because we treat every home
                like it's our own. Our licensed plumbers arrive on time, in uniform, with fully
                stocked trucks — ready to solve your problem the right way.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Licensed, bonded, and fully insured",
                  "Upfront, flat-rate pricing — no hidden fees",
                  "100% satisfaction guarantee on all work",
                  "Clean, uniformed, background-checked technicians",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">✅</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-primary">
                Learn More About Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials highlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Don't take our word for it — hear from the people we've helped.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", loc: "Homeowner", text: "Called at 11pm with a burst pipe and they were here in 20 minutes. Saved our basement from flooding. Absolutely incredible service!" },
              { name: "Mike R.", loc: "Restaurant Owner", text: "ProFlow handles all the plumbing for our restaurant. Reliable, clean, and always professional. Can't recommend them enough." },
              { name: "Jennifer L.", loc: "Homeowner", text: "Had my water heater replaced. Fair price upfront and the install was done in a few hours. Hot water never felt so good!" },
            ].map((t) => (
              <div key={t.name} className="card">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => <span key={i}>⭐</span>)}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">&quot;{t.text}&quot;</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.loc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/testimonials" className="btn-primary">
              Read All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Get your free quote in 15 minutes. No pressure, no obligation — just honest advice from licensed professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg !px-8 !py-4">
              Get a Free Quote
            </Link>
            <a href="tel:+155****4567" className="btn-outline text-lg !px-8 !py-4">
              📞 (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
