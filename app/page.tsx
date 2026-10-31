import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Spotlight from "../components/Spotlight";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const featured = [
  { href: "/work#built", title: "Totally Answers", note: "AI answer tracking for PR agencies" },
  { href: "/work#built", title: "ONS business demography", note: "Six charts and a council lookup from the raw tables" },
  { href: "/work#receipts", title: "Receipts", note: "Case-study numbers with their sources" },
];

export default function Home() {
  return (
    <>
      <section className="relative pt-16 sm:pt-24">
        <div className="glow" aria-hidden />
        <div className="grid-lines pointer-events-none absolute inset-x-0 -top-6 h-[60vh]" aria-hidden />
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="eyebrow">Richard Talbot · London</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              I’m Rick. I founded Totally Digital and I work in the gap{" "}
              <span className="serif-italic text-accent">between</span> strategy and shipping.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Fourteen years in search and ten inside a software development company taught me the hard part is rarely
              the idea. It’s the five teams who need to agree, the data nobody trusts and the change nobody owns. That
              middle is where I work.
            </p>
            <p className="mt-4 max-w-xl text-lg text-muted">
              Technical enough to read the code and the logs, commercial enough to defend the priority to a board. I make
              the trade-offs visible, get the thing over the line, and measure whether it worked.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
              >
                See the work <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border hairline px-5 py-2.5 text-sm font-medium transition hover:border-accent"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border hairline shadow-2xl shadow-black/30">
              <Image
                src="/richard-talbot.jpg"
                alt="Richard Talbot in a dinner suit, sitting under a parasol"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 480px"
                priority
              />
            </div>
            <span className="sticker absolute -left-3 top-6 sm:-left-6">Not just an SEO</span>
          </div>
        </div>
      </section>

      <section className="reveal mt-20 grid gap-4 sm:grid-cols-3">
        {[
          ["Founder", "and director of Totally Digital, London"],
          ["14+", "years in SEO, in all its forms"],
          ["10+", "years inside a software development company"],
        ].map(([big, small]) => (
          <div key={big} className="rounded-2xl border hairline p-5">
            <p className="font-mono text-2xl font-semibold tabular-nums">{big}</p>
            <p className="mt-1 text-sm text-muted">{small}</p>
          </div>
        ))}
      </section>

      <section className="reveal mt-20">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Recent</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Three places to start</h2>
          </div>
          <Link href="/work" className="link-underline text-sm">
            All work
          </Link>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {featured.map((f) => (
            <Spotlight key={f.title} as="li" className="rounded-2xl">
              <Link href={f.href} className="block p-6">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted">{f.note}</p>
                <span className="mt-4 inline-block text-sm text-accent">Open →</span>
              </Link>
            </Spotlight>
          ))}
        </ul>
      </section>
    </>
  );
}
