import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services | ProFlow Plumbing",
  description:
    "Expert plumbing services: emergency repairs, drain cleaning, water heaters, leak detection, fixture installation, and more. Available 24/7.",
};

const services = [
  {
    icon: "🚿",
    title: "Emergency Repairs",
    description:
      "Burst pipes, major leaks, sewer backups — we're here 24/7. Our team arrives within 30 minutes with fully stocked trucks to handle any plumbing emergency. We isolate the problem fast, prevent further damage, and deliver a lasting repair.",
    features: ["24/7 availability", "30-min response time", "Free phone consultation", "Upfront pricing before work begins"],
  },
  {
    icon: "🔧",
    title: "Drain Cleaning",
    description:
      "Slow drains, foul odors, gurgling sounds — these are signs of a clog building up. We use hydro-jetting, professional snaking, and camera inspection to clear even the toughest blockages and restore full flow.",
    features: ["Hydro-jetting up to 4000 PSI", "Video camera inspection", "Rooter service for main lines", "Preventative maintenance plans"],
  },
  {
    icon: "🔥",
    title: "Water Heater Services",
    description:
      "From tankless to traditional, we install, repair, and maintain all major water heater brands. Whether you need a quick thermostat fix or a full system replacement, we'll get your hot water running again fast.",
    features: ["Tankless & traditional installs", "Same-day repair on most models", "Annual maintenance & flushing", "Energy-efficient upgrades"],
  },
  {
    icon: "🚽",
    title: "Toilet Repair & Installation",
    description:
      "Running toilets waste hundreds of gallons a month. We fix clogs, leaks, flappers, fill valves, and handle full replacements. Modern, water-efficient models installed with warranty.",
    features: ["Leak & running toilet repair", "Clog removal (all types)", "New toilet installation", "Water-saving upgrades"],
  },
  {
    icon: "🛁",
    title: "Fixture Installation",
    description:
      "Upgrading your kitchen or bathroom? We professionally install sinks, faucets, showers, bathtubs, garbage disposals, and water filtration systems. Clean work, guaranteed.",
    features: ["Sink & faucet install", "Shower & bathtub upgrades", "Garbage disposal install", "Water softener & filtration"],
  },
  {
    icon: "🔍",
    title: "Leak Detection & Repair",
    description:
      "Hidden leaks can cause major structural damage. We use thermal imaging, acoustic sensors, and pressure testing to pinpoint leaks behind walls, under slabs, and in yards — then fix them with minimal disruption.",
    features: ["Thermal & acoustic detection", "Slab leak repair", "Gas line leak detection", "Pipe re-routing & replacement"],
  },
  {
    icon: "🏠",
    title: "Repiping",
    description:
      "Old galvanized or polybutylene pipes cause low pressure, rust, and leaks. We repipe entire homes with copper or PEX, bringing your plumbing up to modern code with minimal drywall damage.",
    features: ["Whole-home repiping", "Copper & PEX options", "Minimal drywall disruption", "Permits & inspections handled"],
  },
  {
    icon: "💧",
    title: "Water Treatment",
    description:
      "Hard water ruins appliances, stains fixtures, and dries skin. We install and service water softeners, whole-house filtration, and reverse osmosis systems for clean, great-tasting water throughout your home.",
    features: ["Water softener install & service", "Whole-house filtration", "Reverse osmosis systems", "Free water quality test"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/tools-workshop.jpg" alt="Plumbing workshop" className="w-full h-full object-cover opacity-25" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Plumbing Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            From emergency repairs to full repiping — licensed professionals, upfront pricing, guaranteed work.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-start gap-5">
                  <span className="text-4xl flex-shrink-0">{service.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h2>
                    <p className="text-gray-500 leading-relaxed mb-5">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="text-green-500">✓</span> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Need plumbing help right now?</h2>
          <p className="text-orange-100 mb-6 text-lg">We answer calls 24/7 — even on holidays.</p>
          <a
            href="tel:+15551234567"
            className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors text-lg shadow-lg"
          >
            📞 Call (555) 123-4567
          </a>
        </div>
      </section>
    </>
  );
}
