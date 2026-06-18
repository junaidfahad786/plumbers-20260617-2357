import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | ProFlow Plumbing",
  description:
    "Get a free plumbing quote. We respond within 15 minutes. 24/7 emergency service available. Call (555) 123-4567 or fill out our contact form.",
};

const contactInfo = [
  { icon: "📞", title: "Phone", value: "(555) 123-4567", href: "tel:+15551234567", sub: "Available 24/7" },
  { icon: "📧", title: "Email", value: "info@proflowplumbing.com", href: "mailto:info@proflowplumbing.com", sub: "We reply within 1 hour" },
  { icon: "📍", title: "Address", value: "123 Main Street, Anytown, USA", href: "https://maps.google.com", sub: "Service area: 30-mile radius" },
  { icon: "🕐", title: "Hours", value: "Open 24/7", href: null, sub: "Including weekends & holidays" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Need a plumber? We're here to help. Fill out the form or call us directly — we respond fast.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Request a Free Quote</h2>
              <p className="text-gray-500 mb-8">We'll get back to you within 15 minutes.</p>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">{item.title}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-gray-800">{item.value}</p>
                      )}
                      <p className="text-sm text-gray-400">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency box */}
              <div className="mt-8 p-6 bg-orange-50 border border-orange-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🚨</span>
                  <h3 className="text-lg font-bold text-orange-700">Plumbing Emergency?</h3>
                </div>
                <p className="text-orange-600 mb-4 text-sm">
                  Don't wait — burst pipes and major leaks cause thousands in damage. Call our 24/7 emergency line now.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors w-full justify-center"
                >
                  📞 Call Now (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
