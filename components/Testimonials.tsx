const testimonials = [
  {
    name: "Sarah M.",
    location: "Homeowner",
    rating: 5,
    text: "Called at 11pm with a burst pipe and they were here in 20 minutes. Saved our basement from flooding. Absolutely incredible service!",
    avatar: "👩",
  },
  {
    name: "Mike R.",
    location: "Business Owner",
    rating: 5,
    text: "ProFlow handles all the plumbing for our restaurant. Reliable, clean, and always professional. Can't recommend them enough.",
    avatar: "👨",
  },
  {
    name: "Jennifer L.",
    location: "Homeowner",
    rating: 5,
    text: "Had my water heater replaced. They gave me a fair price upfront and the install was done in a few hours. Hot water never felt so good!",
    avatar: "👩‍🦰",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">
          Don't take our word for it — hear from the people we've helped.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="card">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                &quot;{t.text}&quot;
              </p>
              <div className="flex items-center gap-3 border-t pt-4">
                <span className="text-3xl">{t.avatar}</span>
                <div>
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://google.com/search?q=ProFlow+Plumbing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            ⭐ Read more reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
