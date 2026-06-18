export default function EmergencyCTA() {
  return (
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
          <a
            href="tel:+15551234567"
            className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors text-lg shadow-lg"
          >
            📞 Call 24/7: (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
}
