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

  const capabilities = [
    "Web builds — Next.js, WordPress, Shopify",
    "Technical SEO — audits, migrations, CWV, logs, IA",
    "Analytics & tracking — GA4, GTM, server-side tagging, Looker",
    "PPC — Google Ads & Meta, tightly measured",
    "Content systems — keyword mapping, briefs, internal linking at scale",
    "Digital PR & outreach — coverage, relationships, GEO-friendly",
    "Data × engineering — tickets, sprints, QA; I speak both",
    "Team & ops — hiring, playbooks, hands-on leadership",
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-24">
      <h1 className="text-3xl font-semibold mb-12 text-white">Work</h1>

      {/* Results grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="group border border-neutral-700 rounded-2xl p-6 text-center hover:border-white transition"
          >
            <div className="text-3xl font-semibold text-white">{m.value}</div>
            <div className="text-sm text-neutral-400 mt-1">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Capabilities */}
      <h2 className="text-sm uppercase tracking-wide text-neutral-400 mb-4">
        Capabilities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {capabilities.map((c) => (
          <div
            key={c}
            className="rounded-lg border border-neutral-700 p-3 text-sm text-neutral-200"
          >
            {c}
          </div>
        ))}
      </div>
    </main>
  );
}
