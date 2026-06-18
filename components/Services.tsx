const services = [
  {
    icon: "🚿",
    title: "Emergency Repairs",
    description:
      "Burst pipes, major leaks, sewer backups — we're here 24/7. Fast response, lasting fixes.",
  },
  {
    icon: "🔧",
    title: "Drain Cleaning",
    description:
      "Hydro-jetting, snaking, and camera inspection to clear stubborn clogs and keep drains flowing.",
  },
  {
    icon: "🔥",
    title: "Water Heaters",
    description:
      "Installation, repair, and maintenance of tankless and traditional water heaters. Hot water when you need it.",
  },
  {
    icon: "🚽",
    title: "Toilet Repair & Install",
    description:
      "From running toilets to complete replacements — we fix leaks, clogs, and everything in between.",
  },
  {
    icon: "🛁",
    title: "Fixture Installation",
    description:
      "Professional installation of sinks, faucets, showers, bathtubs, and garbage disposals.",
  },
  {
    icon: "🔍",
    title: "Leak Detection",
    description:
      "Advanced leak detection technology to find hidden leaks before they cause major damage.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Our Plumbing Services</h2>
        <p className="section-subtitle">
          From routine maintenance to emergency repairs — we handle it all with expertise and care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="card group hover:border-blue-200 border-2 border-transparent">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
