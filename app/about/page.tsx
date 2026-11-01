import type { Metadata } from "next";
import Link from "next/link";
import { Accent, Prose } from "../../components/Inline";
import about from "../../content/about.json";
import site from "../../content/site.json";
import type { Fact } from "../../content/types";

export const metadata: Metadata = {
  title: about.title,
  description: about.description,
  alternates: { canonical: "/about" },
};

export default function About() {
  const facts = about.facts as Fact[];
  return (
    <section className="relative pt-16 sm:pt-24">
      <div className="glow" aria-hidden />
      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="max-w-2xl">
          <p className="eyebrow">{about.title}</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            <Accent text={about.headline} />
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>
                <Prose text={p} />
              </p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex items-center rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
            >
              {about.primaryCta}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border hairline px-5 py-2.5 text-sm font-medium transition hover:border-accent"
            >
              {about.secondaryCta}
            </Link>
          </div>
        </div>

        <aside className="reveal lg:pt-24">
          <dl className="divide-y hairline rounded-2xl border hairline bg-card p-6 text-sm backdrop-blur [&>div]:py-3 [&>div:first-child]:pt-0 [&>div:last-child]:pb-0">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="eyebrow">{f.label}</dt>
                <dd className="mt-1">{f.value}</dd>
              </div>
            ))}
            <div>
              <dt className="eyebrow">Elsewhere</dt>
              <dd className="mt-1">
                <a className="link-underline" href={site.linkedinUrl} target="_blank" rel="noreferrer">
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
