import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }} />
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
              Expert Plumbing
              <br />
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
              <span>✅ Licensed & Insured</span>
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

      {/* Testimonials highlight */}
      <section className="py-20 bg-white">
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
                <div className="flex items-center gap-3 border-t pt-4">
                  <div>
                    <p className="font-semibold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.loc}</p>
                  </div>
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
