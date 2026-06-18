import Link from "next/link";

const footerLinks = {
  Services: [
    "Emergency Repairs",
    "Drain Cleaning",
    "Water Heaters",
    "Leak Detection",
    "Fixture Installation",
  ],
  Company: ["About Us", "Careers", "Blog", "Service Areas", "Contact"],
  Support: ["FAQ", "Warranty", "Financing", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🔧</span>
              <span className="text-xl font-bold text-white">
                ProFlow<span className="text-blue-400">Plumbing</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-4 max-w-sm">
              Your trusted local plumbing experts. Available 24/7 for all your residential
              and commercial plumbing needs. Licensed, insured, and always reliable.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-white font-semibold text-lg hover:text-blue-400 transition-colors"
              >
                📞 (555) 123-4567
              </a>
              <p className="text-gray-400 text-sm">📍 123 Main Street, Anytown, USA</p>
              <p className="text-gray-400 text-sm">📧 info@proflowplumbing.com</p>
              <p className="text-gray-400 text-sm">🕐 Open 24/7 — Even on Holidays</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ProFlow Plumbing. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>License #PLB-2024-7890</span>
            <span className="hidden sm:inline">•</span>
            <span>Fully Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
