import type { Metadata } from "next";
import Link from "next/link";
import Spotlight from "../../components/Spotlight";
import CountUp from "../../components/CountUp";
import Marquee from "../../components/Marquee";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Things Richard Talbot has built, measured and shipped: AI answer tracking, client dashboards, data visualisations, side products, and the SEO results behind them.",
  alternates: { canonical: "/work" },
};

type Project = {
  name: string;
  kicker: string;
  body: string;
  stack: string[];
  href?: string;
  cta?: string;
  status?: string;
  span?: string;
};

const projects: Project[] = [
  {
    name: "Totally Answers",
    kicker: "AI answer tracking for PR agencies",
    body:
      "Which questions ChatGPT, Gemini and Perplexity answer with a client in them, which sources those answers lean on, and what to do about it. Built as the product behind a managed service: question baskets, daily checks, source classification, insight cards, and a report an agency can hand to its client.",
    stack: ["Next.js", "TypeScript", "SQLite", "Chrome extension", "Playwright", "Docker"],
    status: "In use with clients since July 2026",
    span: "md:col-span-2",
  },
  {
    name: "Client dashboards",
    kicker: "One template, one config per client",
    body:
      "A monorepo that renders a password-protected dashboard for every client from a small JSON file. Search Console, GA4, rank tracking and AI answers on one page. Improve the template once and every client gets it.",
    stack: ["Python", "Vercel", "GSC API", "GA4"],
    href: "https://dashboards.totally.digital",
    cta: "dashboards.totally.digital",
  },
  {
    name: "ONS business demography, visualised",
    kicker: "Data journalism for a PR campaign",
    body:
      "Six charts and a council-area lookup of business openings and closures across the UK, 2019 to 2024, built straight from the ONS tables for 365 Finance. Self-contained HTML, no libraries, light and dark, embeddable by any outlet that covers the story.",
    stack: ["ONS data", "SVG", "Vanilla JS", "Python"],
    href: "https://www.365finance.co.uk/business-births-and-deaths/",
    cta: "See it live",
  },
  {
    name: "Ginapper",
    kicker: "Gin ratings, serves and bars",
    body:
      "Rate the pour, not just the bottle. 155+ gins, classic cocktails and UK gin bars on the public site, and an app for logging serves and finding the pairing that sings.",
    stack: ["Next.js", "Supabase", "Vercel"],
    href: "https://ginapper.com",
    cta: "ginapper.com",
  },
  {
    name: "Lil’ Shelf",
    kicker: "Free children’s books online",
    body:
      "Stories, rhymes and poems from the public domain, read aloud by age and browsable by kind. Free to read, free to keep. A public site plus an installable reading app.",
    stack: ["Next.js", "PWA", "Supabase"],
    href: "https://lilshelf.com",
    cta: "lilshelf.com",
  },
  {
    name: "Now Then BMX",
    kicker: "A web archive, rebuilt",
    body:
      "The old websites of five rider-run Northern UK BMX brands, 2000 to 2012, pulled out of the Wayback Machine and rebuilt so you can click around them again. Six hundred pages and nine hundred images, a capture timeline, an image wall, every lost image marked as lost, and a sourced history of the people and the scene.",
    stack: ["Python", "Wayback Machine", "Static HTML", "Cloudflare"],
    href: "https://nowthenbmx.com",
    cta: "nowthenbmx.com",
  },
  {
    name: "Does truth matter to AI citation?",
    kicker: "A live experiment",
    body:
      "A statistics site built in three arms on one template, launched the same day: real figures from primary UK sources with the source beside every number, derived estimates with the method shown, and seeded invented figures in the gaps no source fills. Pre-registered hypotheses, a private register of every figure, bot logs and AI answers tracked to see which arm gets fetched and which gets cited. Where it lives stays unnamed until the results are in.",
    stack: ["Python", "Static HTML", "Server logs", "Totally Answers"],
    status: "In progress",
  },
  {
    name: "BTR Capital Radar",
    kicker: "Companies House surveillance",
    body:
      "Watches UK build-to-rent capital markets for charge registrations, repayments, new SPVs and accounts filings, writes each signal up in a debt analyst’s voice and emails the alert. Cron jobs, no dashboard needed.",
    stack: ["Next.js", "Companies House API", "Claude API"],
  },
  {
    name: "Deckhand",
    kicker: "Edtech experiment",
    body:
      "Turns a primary teacher’s English planning into fully scripted lesson decks, with a tick-or-fix ‘purple pen’ self-marking panel and an exit-ticket loop into the next lesson. Piloted with a classroom teacher in summer 2026.",
    stack: ["Next.js", "Supabase", "Claude API"],
    status: "Pilot",
  },
  {
    name: "Labrador",
    kicker: "Chrome extension",
    body:
      "Captures real chatgpt.com answers and the sources they cite to CSV, then pushes them into Totally Answers. The thing the API will never show you: what a signed-in human actually sees.",
    stack: ["Chrome MV3", "TypeScript"],
  },
];

const smallThings = [
  { name: "AIVis", what: "DIY AI brand-visibility tracker: prompts in, mentions, citations and share of voice out as CSV." },
  { name: "PMax Asset Studio", what: "Turns a brand’s real images into every Performance Max ratio with copy, logo and colours." },
  { name: "Raw Search Console pulls", what: "A script that pulls query by page by country by day straight from the API in a minute, before any tool gets a say." },
  { name: "Domain and uptime watch", what: "RDAP drop watcher plus homepage monitors across every client site." },
  { name: "Crawler access checks", what: "Finds the bot blocks a site owner cannot see, using cloud probes and AI fetchers." },
  { name: "Monthly leadership decks", what: "GA4, Search Console and HubSpot into a PowerPoint a marketing director will read." },
];

type Receipt = {
  client: string;
  what: string;
  href: string;
  figures: { to: number; suffix?: string; prefix?: string; decimals?: number; label: string; from?: string }[];
};

const receipts: Receipt[] = [
  {
    client: "University of Greenwich",
    what: "Clearing: titles, URLs, IA, canonicals, redirects, internal links and breadcrumbs across gre.ac.uk.",
    href: "https://totally.digital/case-studies/greenwich-university/",
    figures: [
      { to: 383, prefix: "+", suffix: "%", label: "organic page views, clearing goal" },
      { to: 40, prefix: "+", suffix: "%", label: "form submissions" },
      { to: 569, label: "ranking clearing keywords, from 246" },
    ],
  },
  {
    client: "M&C Saatchi Performance",
    what: "Domain migration, new site sections, landing page templates designed in house, global reporting dashboards.",
    href: "https://totally.digital/case-studies/mc-saatchi-performance/",
    figures: [
      { to: 800, prefix: "+", suffix: "%", label: "organic traffic" },
      { to: 3500, prefix: "+", suffix: "%", label: "non-branded traffic" },
      { to: 2090, prefix: "+", suffix: "%", label: "top 10 rankings" },
    ],
  },
  {
    client: "National Garden Scheme",
    what: "Programmatic SEO on a bespoke WordPress build fed by the garden database, with internal linking at scale.",
    href: "https://totally.digital/case-studies/national-garden-scheme/",
    figures: [
      { to: 11.5, suffix: "M", decimals: 1, label: "search impressions, from 5.3M" },
      { to: 223, prefix: "+", suffix: "%", label: "top 10 rankings" },
      { to: 17.5, prefix: "+", suffix: "%", decimals: 1, label: "bookings" },
    ],
  },
];

const skills: { title: string; blurb: string; items: string[] }[] = [
  {
    title: "Technical SEO",
    blurb: "The bit most people mean when they say SEO. Still hands-on.",
    items: [
      "Site migrations and re-platforms without losing the rankings",
      "Information architecture, internal linking at scale, programmatic pages",
      "Crawl, log file and index coverage diagnostics",
      "Structured data, canonicals, hreflang, Core Web Vitals",
      "JavaScript rendering and crawler access, including AI fetchers",
    ],
  },
  {
    title: "Measurement",
    blurb: "If it is not measured honestly it did not happen.",
    items: [
      "Raw Search Console API pulls: query by page by country by device by day",
      "GA4 and GTM, server-side tagging, consent-aware setups",
      "Looker Studio and bespoke dashboards built from the APIs",
      "Attribution sanity checks: what the CRM says versus what the data says",
    ],
  },
  {
    title: "AI search",
    blurb: "Where search is going, measured rather than guessed.",
    items: [
      "Tracking whether brands are cited or recommended in ChatGPT, Gemini and Perplexity",
      "Classifying the sources AI answers lean on and turning them into PR targets",
      "Capturing real consumer answers, not just API output",
      "Reports an agency can present to its client",
    ],
  },
  {
    title: "Content systems",
    blurb: "Briefs that tell a writer exactly what to write.",
    items: [
      "Keyword to page mapping and content calendars",
      "Full-brief formats with intent, structure, entities and internal links",
      "Competitor and SERP ownership research",
      "Editorial processes that survive the client’s own team",
    ],
  },
  {
    title: "Digital PR and links",
    blurb: "Coverage that moves rankings and AI answers, not just a clippings list.",
    items: [
      "Data pieces outlets can embed, like the ONS work",
      "Placement lists built from where AI answers already look",
      "Coverage audits: who linked, where, follow or not, what it did",
      "Working alongside the client’s PR agency rather than around it",
    ],
  },
  {
    title: "Building the tools",
    blurb: "When the tool does not exist, make it.",
    items: [
      "Next.js and TypeScript products, Python pipelines, SQLite and Supabase",
      "Chrome extensions, cron jobs, launchd automations",
      "Claude API where it earns its place, rules where it does not",
      "Playwright test suites so clients never see the bug",
    ],
  },
];

const toolsRowA = [
  "Next.js", "TypeScript", "Python", "SQLite", "Supabase", "Vercel", "Docker", "Playwright",
  "WordPress", "Shopify", "Tailwind", "Node", "GitHub", "GitLab", "launchd", "Cloudflare",
];
const toolsRowB = [
  "Search Console API", "GA4", "Google Tag Manager", "Looker Studio", "Screaming Frog", "Ahrefs",
  "Semrush", "AccuRanker", "Companies House API", "ONS data", "Claude API", "OpenAI API", "HubSpot", "Active Collab",
];

const clients = [
  "University of Greenwich",
  "M&C Saatchi Performance",
  "National Garden Scheme",
  "CCGroup",
  "Case Luggage",
  "365 Business Finance",
];

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="reveal scroll-mt-24 py-16 sm:py-24">
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
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
            <p className="eyebrow">Work · index</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Things I’ve <span className="serif-italic text-accent">built</span>, measured and shipped.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Not just an SEO. The strategy is the easy part to talk about, so here is the stuff that exists: the
              products, the data pieces, the dashboards, and the numbers behind the client work.
            </p>
          </div>
          <nav
            aria-label="On this page"
            className="rounded-2xl border hairline bg-card p-5 font-mono text-sm backdrop-blur"
          >
            <p className="text-muted">$ ls ./work</p>
            <ul className="mt-3 space-y-2">
              {[
                ["#built", "built/", "things with a URL or a repo"],
                ["#receipts", "receipts/", "results, with sources"],
                ["#seo", "seo/", "what I actually do"],
                ["#toolbox", "toolbox/", "the stack"],
              ].map(([href, name, note]) => (
                <li key={href} className="flex items-baseline justify-between gap-4">
                  <a href={href} className="link-underline text-fg">
                    {name}
                  </a>
                  <span className="truncate text-xs text-muted">{note}</span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Built */}
      <Section
        id="built"
        eyebrow="01 · Built"
        title={
          <>
            Products and pieces that <span className="serif-italic">exist</span>.
          </>
        }
        intro="Some for clients, some for the agency, some because the tool did not exist yet. All of them real, most of them still running."
      >
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Spotlight
              key={p.name}
              as="li"
              className={`flex flex-col rounded-2xl p-6 ${p.span ?? ""}`}
            >
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
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[0.68rem] text-fg">
                    {s}
                  </span>
                ))}
              </div>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
                >
                  {p.cta ?? "Visit"}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">↗</span>
                </a>
              )}
            </Spotlight>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border hairline p-6 sm:p-8">
          <p className="eyebrow">And the small stuff</p>
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
        eyebrow="02 · Receipts"
        title={
          <>
            Numbers, with the <span className="serif-italic">sources</span> attached.
          </>
        }
        intro="Figures as published in Totally Digital case studies, which I led. Each card links to the write-up so you can check the method."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {receipts.map((r) => (
            <Spotlight key={r.client} as="article" className="rounded-2xl p-6">
              <h3 className="text-lg font-semibold">{r.client}</h3>
              <p className="mt-2 text-sm text-muted">{r.what}</p>
              <dl className="mt-6 space-y-4">
                {r.figures.map((f) => (
                  <div key={f.label} className="flex items-baseline justify-between gap-4 border-t hairline pt-3">
                    <dt className="text-sm text-muted">{f.label}</dt>
                    <dd className="font-mono text-2xl font-semibold tabular-nums text-fg">
                      <CountUp to={f.to} suffix={f.suffix} prefix={f.prefix} decimals={f.decimals} />
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
              >
                Read the case study <span aria-hidden>↗</span>
              </a>
            </Spotlight>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-xs text-muted">
          Percentages compare the periods stated in each case study. Growth like this depends on the starting point,
          the sector and the client’s own team, so treat them as what happened there, not a promise of what happens next.
        </p>
      </Section>

      {/* SEO */}
      <Section
        id="seo"
        eyebrow="03 · The SEO bit"
        title={
          <>
            What I <span className="serif-italic">actually</span> do.
          </>
        }
        intro="Since 2012, from agency floors to the founder’s chair, and still in the crawl files."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Spotlight key={s.title} className="rounded-2xl p-6">
              <p className="font-mono text-xs text-muted">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {s.items.map((it) => (
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
      <Section
        id="toolbox"
        eyebrow="04 · Toolbox"
        title={
          <>
            The <span className="serif-italic">stack</span>, more or less.
          </>
        }
      >
        <div className="-mx-5 space-y-3 sm:-mx-8">
          <Marquee items={toolsRowA} duration="56s" />
          <Marquee items={toolsRowB} reverse duration="64s" />
        </div>

        <div className="mt-14 grid gap-8 border-t hairline pt-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">A few of the names</p>
            <p className="mt-3 text-sm text-muted">Clients whose work Totally Digital has published case studies on.</p>
          </div>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-lg font-medium">
            {clients.map((c) => (
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
                Got a <span className="serif-italic">messy middle</span>?
              </h2>
              <p className="mt-3 max-w-xl text-muted">
                Technical problems, tracking that lies, content nobody owns, PR that does not move anything. That is the
                bit I am usually dropped into.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
              >
                Get in touch
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border hairline px-5 py-2.5 text-sm font-medium transition hover:border-accent"
              >
                About me
              </Link>
            </div>
          </div>
        </Spotlight>
      </section>
    </>
  );
}
