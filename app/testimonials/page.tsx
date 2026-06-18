import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews | ProFlow Plumbing",
  description:
    "Read what our customers say about ProFlow Plumbing. 4.9/5 rating on Google. Trusted by thousands of homeowners and businesses.",
};

const testimonials = [
  {
    name: "Sarah M.",
    location: "Homeowner — Anytown",
    rating: 5,
    text: "Called at 11pm with a burst pipe in the basement and they were here in 20 minutes. The technician was calm, professional, and had it fixed by midnight. Saved our basement from flooding. Absolutely incredible service!",
    avatar: "👩",
    date: "2 weeks ago",
  },
  {
    name: "Mike R.",
    location: "Restaurant Owner — Downtown",
    rating: 5,
    text: "ProFlow handles all the plumbing for our restaurant — three locations now. They're reliable, clean, and always professional. When our grease trap backed up during dinner service, they had someone here in 25 minutes. Can't recommend them enough.",
    avatar: "👨",
    date: "1 month ago",
  },
  {
    name: "Jennifer L.",
    location: "Homeowner — Oak Park",
    rating: 5,
    text: "Had my 15-year-old water heater replaced with a tankless system. They gave me a fair price upfront with no pressure, and the install was done in a few hours. Hot water never felt so good! My gas bill actually went down.",
    avatar: "👩‍🦰",
    date: "3 weeks ago",
  },
  {
    name: "Robert T.",
    location: "Property Manager — Metro Area",
    rating: 5,
    text: "We manage 40 rental units and ProFlow is our go-to for everything plumbing. They handle everything from clogged drains to full repipes. Fair pricing, great communication, and they always show up when they say they will.",
    avatar: "👨‍💼",
    date: "2 months ago",
  },
  {
    name: "Amanda K.",
    location: "Homeowner — Riverside",
    rating: 5,
    text: "Discovered a slab leak and was panicking about the cost. ProFlow sent David out the same day, he explained all my options clearly, and the repair was done with minimal disruption. They even helped with the insurance paperwork!",
    avatar: "👩",
    date: "1 month ago",
  },
  {
    name: "Carlos G.",
    location: "Homeowner — West End",
    rating: 4,
    text: "Good service overall. Had my kitchen sink and garbage disposal replaced. The plumber was friendly and the work looks great. Took a bit longer than estimated but they communicated well throughout.",
    avatar: "👨",
    date: "3 months ago",
  },
  {
    name: "Diane W.",
    location: "Homeowner — Lakeview",
    rating: 5,
    text: "My 90-year-old mother's water heater died in January. ProFlow came out same-day, installed a new one, and the technician was so kind and patient with her. They even cleaned up better than I do! Thank you for caring.",
    avatar: "👩‍🦳",
    date: "4 months ago",
  },
  {
    name: "Tom H.",
    location: "Business Owner — Industrial Park",
    rating: 5,
    text: "We had a major sewer line collapse at our warehouse. ProFlow coordinated the entire repair — excavation, permits, inspections, everything. Kept us operational throughout. These guys are pros.",
    avatar: "👨‍🔧",
    date: "5 months ago",
  },
  {
    name: "Rachel P.",
    location: "Homeowner — Garden District",
    rating: 5,
    text: "Used them twice now — once for a toilet replacement and once for a kitchen faucet install. Both times: on time, clean work, fair price. It's refreshing to find a company that does exactly what they say they'll do.",
    avatar: "👩",
    date: "6 months ago",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">What Our Customers Say</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We're proud of our 4.9/5 rating. Here's what real customers have to say about our work.
          </p>
        </div>
      </section>

      {/* Rating summary */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div>
              <p className="text-5xl font-extrabold text-blue-600">4.9</p>
              <div className="flex justify-center gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((i) => <span key={i}>⭐</span>)}
              </div>
              <p className="text-sm text-gray-400 mt-1">Google Rating</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-200" />
            <div>
              <p className="text-5xl font-extrabold text-blue-600">2,400+</p>
              <p className="text-sm text-gray-400 mt-1">Reviews & Counting</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-200" />
            <div>
              <p className="text-5xl font-extrabold text-blue-600">98%</p>
              <p className="text-sm text-gray-400 mt-1">5-Star Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name + t.date} className="card">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-3 border-t pt-4">
                  <span className="text-3xl">{t.avatar}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.location}</p>
                  </div>
                  <span className="text-xs text-gray-300">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Had a great experience?</h2>
          <p className="text-blue-100 mb-6 text-lg">
            We'd love to hear from you! Your review helps other homeowners find a plumber they can trust.
          </p>
          <a
            href="https://google.com/search?q=ProFlow+Plumbing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg shadow-lg"
          >
            ⭐ Leave a Google Review
          </a>
        </div>
      </section>
    </>
  );
}
