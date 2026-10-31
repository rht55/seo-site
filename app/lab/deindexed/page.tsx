import type { Metadata } from "next";
import Link from "next/link";
import Hub from "../../../components/lab/deindexed/Hub";
import { scoreboard } from "../../../components/lab/deindexed/scoreboard";

export const metadata: Metadata = {
  title: "Deindexed, a technical SEO game",
  description:
    "A client site has vanished from Google. Three levels of real technical defects to find and understand, with an inspector in the window and hints when you need them.",
  alternates: { canonical: "/lab/deindexed" },
};

export default function DeindexedHub() {
  return (
    <>
      <section className="relative pt-16 sm:pt-24">
        <div className="glow" aria-hidden />
        <p className="eyebrow">
          <Link href="/lab" className="link-underline">
            Lab
          </Link>{" "}
          · 02
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
          <span className="flicker">Deindexed.</span> A site has <span className="serif-italic text-accent">vanished</span> from Google.
        </h1>
        <div className="mt-6 max-w-2xl space-y-4 text-lg text-muted">
          <p>
            Blackwater Coffee Roasters ranked for everything. Then it ranked for nothing. The previous SEO left in a
            hurry and left notes in the places only a crawler would read.
          </p>
          <p>
            Three levels. Every clue is a real technical defect, built into real HTTP, so curl and devtools work exactly
            as they would on a client site. If you would rather stay in the window, the Inspector docked along the bottom
            of every level page shows you what the browser hides: status, headers, redirect hops, the source as served,
            and lets you fetch any page as Googlebot. Every step has two hints.
          </p>
        </div>
      </section>

      <section className="pt-14">
        <Hub />
      </section>

      <section className="pt-14">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">Scoreboard</p>
            <p className="mt-3 text-sm text-muted">
              Finishers, in order. The same list lives in{" "}
              <a className="link-underline" href="/robots.txt">
                robots.txt
              </a>
              , which is where scoreboards belong.
            </p>
          </div>
          <ol className="space-y-2 font-mono text-sm">
            {scoreboard.length === 0 && <li className="text-muted">Nobody yet. Be the first.</li>}
            {scoreboard.map((s, i) => (
              <li key={s.name} className="flex gap-4">
                <span className="text-muted">{String(i + 1).padStart(2, "0")}</span>
                {s.link ? (
                  <a className="link-underline" href={s.link} rel="noreferrer" target="_blank">
                    {s.name}
                  </a>
                ) : (
                  <span>{s.name}</span>
                )}
                {s.date && <span className="text-muted">{s.date}</span>}
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-10 max-w-2xl text-xs text-muted">
          Rules of the house: everything you need is on this site. No brute force, no scanning tools; the clues are in
          plain sight to anyone who knows where crawlers look. With a nod to SEO Pirates, 2019.
        </p>
      </section>
    </>
  );
}
