import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Background pattern */}
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
            <a href="tel:+15551234567" className="btn-accent text-lg !px-8 !py-4">
              📞 Call Now (555) 123-4567
            </a>
            <a href="#contact" className="btn-outline text-lg !px-8 !py-4 !border-white !text-white hover:!bg-white hover:!text-blue-700">
              Get a Free Quote
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 mt-12 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <span>⭐</span> 4.9/5 on Google
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span> Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <span>🏆</span> 15+ Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
