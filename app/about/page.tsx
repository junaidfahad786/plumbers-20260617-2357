import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ProFlow Plumbing",
  description:
    "Family-owned plumbing company with 15+ years of experience. Licensed, insured, and committed to honest pricing and quality workmanship.",
};

const values = [
  {
    icon: "🎯",
    title: "Honest Pricing",
    text: "Upfront, flat-rate quotes before any work begins. No hidden fees, no surprises — just fair pricing you can trust.",
  },
  {
    icon: "⏱️",
    title: "On-Time Every Time",
    text: "We respect your time. Our plumbers arrive when promised, in uniform, with fully stocked trucks ready to work.",
  },
  {
    icon: "🏅",
    title: "Quality Guaranteed",
    text: "Every job is backed by our 100% satisfaction guarantee. If something isn't right, we make it right — no questions asked.",
  },
  {
    icon: "🤝",
    title: "Community First",
    text: "We've served this community for over 15 years. Our reputation is built one happy customer at a time.",
  },
];

const team = [
  { name: "Mike Reynolds", role: "Master Plumber / Owner", avatar: "👨‍🔧", bio: "35 years in the trade. Mike founded ProFlow in 2009 with one truck and a promise: treat every home like it's his own." },
  { name: "David Chen", role: "Lead Service Technician", avatar: "👨‍🔧", bio: "15 years experience. David specializes in complex repiping, water heaters, and solving the tough problems others can't." },
  { name: "Lisa Martinez", role: "Office Manager", avatar: "👩‍💼", bio: "The friendly voice on the phone. Lisa coordinates dispatch, scheduling, and makes sure every customer gets a great experience." },
  { name: "James Wilson", role: "Drain & Sewer Specialist", avatar: "👨‍🔧", bio: "If it flows through a pipe, James knows how to fix it. Expert in hydro-jetting, camera inspection, and main line repairs." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About ProFlow Plumbing</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Family-owned, community-trusted, and driven by a simple mission — do the job right, the first time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                ProFlow Plumbing started in 2009 with one truck, a set of wrenches, and a belief that
                plumbing should be honest, transparent, and reliable. Our founder, Mike Reynolds,
                had spent 20 years working for large plumbing companies and saw how customers were
                often overcharged or rushed through jobs.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                He set out to build something different — a plumbing company where every technician
                treats your home with the same care they'd give their own. Fifteen years later, that
                principle still guides everything we do.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Today, we're a team of 12 licensed professionals serving thousands of homes and
                businesses across the region. We've grown, but our core promise remains: upfront
                pricing, quality workmanship, and a 100% satisfaction guarantee on every job.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/team-plumbers.jpg" alt="Our plumbing team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5">
                <p className="text-3xl font-extrabold text-blue-600">15+</p>
                <p className="text-sm text-gray-500">Years Serving<br />Our Community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center card">
                <span className="text-4xl">{v.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Meet Our Team</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Licensed, background-checked, and passionate about plumbing done right.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center card">
                <span className="text-5xl">{member.avatar}</span>
                <h3 className="text-lg font-bold text-gray-800 mt-4">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to work with us?</h2>
          <p className="text-blue-100 mb-6 text-lg">Get your free quote in 15 minutes or less.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg shadow-lg">
              📋 Get a Free Quote
            </a>
            <a href="tel:+15551234567" className="inline-flex items-center gap-2 bg-blue-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors text-lg">
              📞 Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
