export default function Home() {
  return (
    <section className="py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Technical SEO, migrations & growth —
          <span className="block text-neutral-500">without the theatre.</span>
        </h1>

        <p className="mt-6 text-lg text-neutral-600">
          I lead search strategy for brands that want compounding non-brand growth.
          Fourteen years in the trenches: architectures, redirects, rendering, logs,
          and the awkward bits where marketing meets engineering. I like clear plans,
          clean instrumentation, and testable results. Mildly skeptical of hype;
          ruthlessly pro-outcomes.
        </p>

        <div className="mt-8 flex gap-3">
          <a
            href="/contact"
            className="inline-block rounded border px-4 py-2 hover:bg-neutral-50"
          >
            Work with me
          </a>
          <a
            href="/work"
            className="inline-block rounded px-4 py-2 hover:underline"
          >
            See recent work
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-4">
            <div className="text-sm font-medium">Migrations</div>
            <p className="mt-2 text-sm text-neutral-600">
              Scope, map, and ship without traffic cliffs. Templates, redirects, and
              monitoring baked in.
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <div className="text-sm font-medium">Non-brand growth</div>
            <p className="mt-2 text-sm text-neutral-600">
              Category strategy & content systems that win outside your name terms.
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <div className="text-sm font-medium">Analytics sanity</div>
            <p className="mt-2 text-sm text-neutral-600">
              GA4/consent, event design, and dashboards that don’t lie to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
