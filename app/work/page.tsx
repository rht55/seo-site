export const metadata = {
  title: "Work | Richard Talbot — Technical SEO & Digital Growth",
};

export default function WorkPage() {
  const metrics = [
    { value: "+386%", label: "organic revenue uplift" },
    { value: "+700%", label: "traffic growth" },
    { value: "+271%", label: "lead increase" },
    { value: "100%", label: "migration success rate" },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-16 text-neutral-100">
      <h1 className="text-3xl font-semibold mb-10 text-white">Work</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((item, i) => (
          <div
            key={i}
            className="border border-neutral-700 rounded-2xl p-6 text-center hover:border-neutral-400 transition-colors"
          >
            <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
            <div className="text-neutral-400 text-sm uppercase tracking-wide">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
