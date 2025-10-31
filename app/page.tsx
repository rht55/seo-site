export default function Home() {
  return (
    <section className="py-20">
      <div className="max-w-3xl">
        {/* H1 + subline */}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Richard Talbot — Digital Marketing Consultancy &amp; Technical SEO
        </h1>
        <p className="mt-2 text-lg text-neutral-500">Building organic growth.</p>

        {/* Positioning */}
        <p className="mt-6 text-lg text-neutral-600">
          I’m a technical SEO by trade, but understand visibility doesn’t end with meta
          tags. I’m often dropped into the messy middle of marketing teams — analytics, content
          planning, PR, social, and become the operational glue between marketing and
          engineering to drive change.
        </p>

        {/* CTAs */}
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
            See work
          </a>
        </div>

        {/* Capabilities – practical, one-line, full-stack */}
        <div className="mt-12">
          <h2 className="text-sm uppercase tracking-wide text-neutral-500">
            Capabilities
          </h2>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-lg border border-neutral-200 p-3 text-sm">
              Websites — Next.js, WordPress, Shopify. 
              everything.
            </div>
            <div className="rounded-lg border border-neutral-200 p-3 text-sm">
              Technical SEO — audits, migrations, CWV, logs, architecture.
            </div>
            <div className="rounded-lg border border-neutral-200 p-3 text-sm">
              Analytics &amp; tracking — GA4, GTM, server-side tagging, Looker.
            </div>
            <div className="rounded-lg border border-neutral-200 p-3 text-sm">
              PPC — Google Ads &amp; Meta.
            </div>
            <div className="rounded-lg border border-neutral-200 p-3 text-sm">
              Content systems — keyword mapping, briefs, internal linking at
              scale.
            </div>
            <div className="rounded-lg border border-neutral-200 p-3 text-sm">
              Digital PR &amp; outreach — relationships, coverage, GEO-friendly.
            </div>
            <div className="rounded-lg border border-neutral-200 p-3 text-sm">
              Data × engineering — tickets, sprints, QA; I speak both languages.
            </div>
            <div className="rounded-lg border border-neutral-200 p-3 text-sm">
              Team &amp; ops — hiring, strategy, hands-on leadership.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
