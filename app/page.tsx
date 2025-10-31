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
          I’m a technical SEO by trade, but understand visibility doesn’t end with meta tags.
          I’m often dropped into the messy middle of marketing teams — analytics, content planning,
          PR, social, and become the operational glue between marketing and engineering to drive change.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block rounded border px-4 py-2 hover:bg-neutral-50"
          >
            Work with me
          </a>
        </div>
      </div>
    </section>
  );
}
