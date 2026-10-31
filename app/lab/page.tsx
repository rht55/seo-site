import type { Metadata } from "next";
import Link from "next/link";
import Spotlight from "../../components/Spotlight";

export const metadata: Metadata = {
  title: "Lab",
  description: "Interactive pieces built to test ideas and show the working. First up: a history of search you can scroll, drag and be quizzed on.",
  alternates: { canonical: "/lab" },
};

const pieces = [
  {
    href: "/lab/search-history",
    n: "01",
    title: "A short history of search",
    note: "Scroll from Archie to AI answers, drag a results page through 28 years, then take the quiz.",
    tags: ["Scroll-driven", "Interactive", "Quiz"],
  },
];

export default function LabPage() {
  return (
    <section className="relative pt-16 sm:pt-24">
      <div className="glow" aria-hidden />
      <p className="eyebrow">Lab</p>
      <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-6xl">
        Things built to <span className="serif-italic text-accent">play</span> with.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
        A playground for ideas, interfaces and the odd bit of showing off. Each piece is small, finished and real.
      </p>
      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {pieces.map((p) => (
          <Spotlight key={p.href} as="li" className="rounded-2xl">
            <Link href={p.href} className="block p-6">
              <p className="font-mono text-xs text-muted">{p.n}</p>
              <h2 className="mt-2 text-2xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted">{p.note}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[0.68rem]">
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-block text-sm text-accent">Open →</span>
            </Link>
          </Spotlight>
        ))}
      </ul>
    </section>
  );
}
