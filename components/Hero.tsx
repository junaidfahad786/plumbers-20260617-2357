import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Background image with overlay */}
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
            <span>✅ Licensed &amp; Insured</span>
            <span>🏆 15+ Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
