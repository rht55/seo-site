import type { Metadata } from "next";
import Link from "next/link";
import Spotlight from "../../components/Spotlight";
import CountUp from "../../components/CountUp";
import Marquee from "../../components/Marquee";
import { Accent } from "../../components/Inline";
import { work } from "../../content";
import type { Project, Receipt, Skill, SmallThing, IndexItem } from "../../content/types";

export const metadata: Metadata = {
  title: work.title,
  description: work.description,
  alternates: { canonical: "/work" },
};

const projects: Project[] = work.projects ?? [];
const smallThings: SmallThing[] = work.smallThings ?? [];
const receipts: Receipt[] = work.receipts ?? [];
const skills: Skill[] = work.skills ?? [];
const index: IndexItem[] = work.index ?? [];

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="reveal scroll-mt-24 py-16 sm:py-24">
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          <Accent text={title} color={false} />
        </h2>
        {intro && <p className="mt-4 text-muted">{intro}</p>}
      </div>
      {children}
    </section>
  );
}

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 sm:pt-24">
        <div className="glow" aria-hidden />
        <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">{work.hero.eyebrow}</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              <Accent text={work.hero.headline} />
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{work.hero.intro}</p>
          </div>
          <nav aria-label="On this page" className="rounded-2xl border hairline bg-card p-5 font-mono text-sm backdrop-blur">
            <p className="text-muted">$ ls ./work</p>
            <ul className="mt-3 space-y-2">
              {index.map((it) => (
                <li key={it.href} className="flex items-baseline justify-between gap-4">
                  <a href={it.href} className="link-underline text-fg">
                    {it.name}
                  </a>
                  <span className="truncate text-xs text-muted">{it.note}</span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Built */}
      <Section id="built" eyebrow={work.built.eyebrow} title={work.built.headline} intro={work.built.intro}>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Spotlight key={p.name} as="li" className={`flex flex-col rounded-2xl p-6 ${p.wide ? "md:col-span-2" : ""}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">{p.kicker}</p>
                  <h3 className="mt-2 text-xl font-semibold">{p.name}</h3>
                </div>
                {p.status && (
                  <span className="shrink-0 rounded-full border hairline px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                    {p.status}
                  </span>
                )}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.body}</p>
              <div className="mt-5 flex flex-wrap items-center gap-1.5">
                {(p.stack ?? []).map((s) => (
                  <span key={s} className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[0.68rem] text-fg">
                    {s}
                  </span>
                ))}
              </div>
              {p.href && (
                <a href={p.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  {p.cta ?? "Visit"}
                  <span aria-hidden>↗</span>
                </a>
              )}
            </Spotlight>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border hairline p-6 sm:p-8">
          <p className="eyebrow">{work.smallThingsHeading}</p>
          <ul className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {smallThings.map((t) => (
              <li key={t.name} className="text-sm">
                <span className="font-medium">{t.name}</span>
                <span className="text-muted"> · {t.what}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Receipts */}
      <Section
        id="receipts"
        eyebrow={work.receiptsSection.eyebrow}
        title={work.receiptsSection.headline}
        intro={work.receiptsSection.intro}
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {receipts.map((r) => (
            <Spotlight key={r.client} as="article" className="rounded-2xl p-6">
              <h3 className="text-lg font-semibold">{r.client}</h3>
              <p className="mt-2 text-sm text-muted">{r.what}</p>
              <dl className="mt-6 space-y-4">
                {(r.figures ?? []).map((f) => (
                  <div key={f.label} className="flex items-baseline justify-between gap-4 border-t hairline pt-3">
                    <dt className="text-sm text-muted">{f.label}</dt>
                    <dd className="font-mono text-2xl font-semibold tabular-nums text-fg">
                      <CountUp to={f.to} suffix={f.suffix} prefix={f.prefix} decimals={f.decimals} />
                    </dd>
                  </div>
                ))}
              </dl>
              <a href={r.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                Read the case study <span aria-hidden>↗</span>
              </a>
            </Spotlight>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-xs text-muted">{work.receiptsSection.caption}</p>
      </Section>

      {/* SEO */}
      <Section id="seo" eyebrow={work.seoSection.eyebrow} title={work.seoSection.headline} intro={work.seoSection.intro}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Spotlight key={s.title} className="rounded-2xl p-6">
              <p className="font-mono text-xs text-muted">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {(s.items ?? []).map((it) => (
                  <li key={it} className="flex gap-2.5">
                    <span aria-hidden className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </Spotlight>
          ))}
        </div>
      </Section>

      {/* Toolbox */}
      <Section id="toolbox" eyebrow={work.toolboxSection.eyebrow} title={work.toolboxSection.headline}>
        <div className="-mx-5 space-y-3 sm:-mx-8">
          <Marquee items={work.toolsRowA} duration="56s" />
          <Marquee items={work.toolsRowB} reverse duration="64s" />
        </div>

        <div className="mt-14 grid gap-8 border-t hairline pt-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">{work.clientsHeading}</p>
            <p className="mt-3 text-sm text-muted">{work.clientsNote}</p>
          </div>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-lg font-medium">
            {(work.clients ?? []).map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <section className="reveal pb-8">
        <Spotlight className="rounded-3xl p-8 sm:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                <Accent text={work.cta.headline} color={false} />
              </h2>
              <p className="mt-3 max-w-xl text-muted">{work.cta.body}</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90">
                {work.cta.primary}
              </Link>
              <Link href="/about" className="inline-flex items-center rounded-full border hairline px-5 py-2.5 text-sm font-medium transition hover:border-accent">
                {work.cta.secondary}
              </Link>
            </div>
          </div>
        </Spotlight>
      </section>
    </>
  );
}
