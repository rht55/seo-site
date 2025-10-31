import Image from "next/image";

export default function Home() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Text block */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Richard Talbot - Digital Marketing Consultancy &amp; Technical SEO
          </h1>
          <p className="mt-2 text-lg text-neutral-500">
            Building organic growth.
          </p>

          <p className="mt-6 text-lg text-neutral-600">
            I’m a technical SEO by trade, but understand that brand visibility doesn’t end
            with meta tags. I’m often dropped into the messy middle of marketing
             - technical problems, branding, content planning, PR, social - and become the
            operational glue between csuite, business owners, decision makers, marketing and engineering teams to drive change.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex gap-4">
            <a
              href="/work"
              className="inline-block rounded border px-4 py-2 hover:bg-neutral-50"
            >
              Work
            </a>
            <a
              href="/contact"
              className="inline-block rounded border px-4 py-2 hover:bg-neutral-50"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Image block */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-neutral-800 shadow-lg">
            <Image
              src="/richard-talbot.jpg"
              alt="Richard Talbot"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
