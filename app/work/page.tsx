export default function WorkPage() {
  const stats = [
    { value: "+386%", label: "organic revenue uplift" },
    { value: "+700%", label: "traffic growth" },
    { value: "+271%", label: "lead increase" },
    { value: "+40%", label: "YoY growth" },
    { value: "100%", label: "migration success rate" },
    { value: "0", label: "traffic loss post-migration" },
    { value: "+18%", label: "conversion improvement" },
    { value: "4.9★", label: "average client rating" },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-24">
      <h1 className="text-3xl font-semibold mb-12">Work</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="group border border-neutral-200 rounded-2xl p-6 text-center hover:bg-neutral-50 transition"
          >
            <div className="text-3xl font-semibold text-neutral-900 group-hover:text-black">
              {s.value}
            </div>
            <div className="text-sm text-neutral-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
