import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rick Talbot: founder and director of Totally Digital, fourteen years in SEO and ten inside a software development company. Cycling, coffee, finance and an early interest in AI.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <section className="relative pt-16 sm:pt-24">
      <div className="glow" aria-hidden />
      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="max-w-2xl">
          <p className="eyebrow">About</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Gather the data, <span className="serif-italic text-accent">simplify</span> the plan, ship.
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I’m Rick, founder and director of Totally Digital, and have been an SEO in all the different forms that
              takes for over 14 years. I also spent ten-plus years inside a software development company, so engineering
              is a room I’m comfortable in rather than a department I hand things to. I’ve spent those years building search growth for B2C and B2B brands, the kind measured in revenue,
              not PowerPoints. I bridge product, marketing and engineering, translate constraints, and take the guesswork
              out of complex changes.
            </p>
            <p>
              My default setting: gather the data, simplify the plan, ship. I enjoy finding and fixing problems, digital
              and physical, scaling websites out to drive traffic, working across disciplines, site architecture,
              diagnostics, and all the quiet details that keep websites stable at scale.
            </p>
            <p>
              Off-screen: cycling, coffee (I ran{" "}
              <a href="http://www.thespecialtycoffeecompany.com/" target="_blank" rel="noreferrer" className="link-underline">
                The Specialty Coffee Company
              </a>
              , a mildly successful online shop, for a while), running (short distances),
              finance and economics, and an unhealthy interest in how AI is changing the world, from well before it was
              cool. I was emailing Ray Kurzweil at Google in 2011 and reading Superintelligence back in 2018.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex items-center rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
            >
              What I’ve built
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border hairline px-5 py-2.5 text-sm font-medium transition hover:border-accent"
            >
              Say hello
            </Link>
          </div>
        </div>

        <aside className="reveal lg:pt-24">
          <dl className="divide-y hairline rounded-2xl border hairline bg-card p-6 text-sm backdrop-blur [&>div]:py-3 [&>div:first-child]:pt-0 [&>div:last-child]:pb-0">
            <div>
              <dt className="eyebrow">Role</dt>
              <dd className="mt-1">Founder and Director, Totally Digital</dd>
            </div>
            <div>
              <dt className="eyebrow">Based</dt>
              <dd className="mt-1">London, remote friendly</dd>
            </div>
            <div>
              <dt className="eyebrow">Years in SEO</dt>
              <dd className="mt-1">14 and counting</dd>
            </div>
            <div>
              <dt className="eyebrow">Years in software</dt>
              <dd className="mt-1">10+ inside a software development company</dd>
            </div>
            <div>
              <dt className="eyebrow">Works with</dt>
              <dd className="mt-1">C-suite, marketing, product, engineering, PR agencies</dd>
            </div>
            <div>
              <dt className="eyebrow">Elsewhere</dt>
              <dd className="mt-1">
                <a className="link-underline" href="https://www.linkedin.com/in/rick-talbot-47525b53" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                {" · "}
                <a className="link-underline" href="https://totally.digital" target="_blank" rel="noreferrer">
                  totally.digital
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
