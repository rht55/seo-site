export default function WorkPage() {
  const stats = [
    { value: "+386%", label: "organic revenue uplift" },
    { value: "+700%", label: "traffic growth" },
    { value: "+271%", label: "lead increase" },
    { value: "100%", label: "migration success rate" },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-24">
      <h1 className="text-3xl font-semibold mb-12 text-white">Work</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="group border border-neutral-700 rounded-2xl p-6 text-center hover:border-white transition"
          >
            <div className="text-3xl font-semibold text-white group-hover:text-white">
              {s.value}
            </div>
            <div className="text-sm text-neutral-400 mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
