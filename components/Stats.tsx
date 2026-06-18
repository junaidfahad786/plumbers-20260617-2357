const stats = [
  { value: "15,000+", label: "Jobs Completed" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "30min", label: "Avg Response Time" },
  { value: "15+", label: "Years Experience" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-extrabold mb-1">{stat.value}</p>
              <p className="text-blue-200 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
