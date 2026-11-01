import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Spotlight from "../components/Spotlight";
import { Accent } from "../components/Inline";
import home from "../content/home.json";
import type { Tile, Featured } from "../content/types";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const tiles = home.tiles as Tile[];
  const featured = home.featured as Featured[];
  return (
    <>
      <section className="relative pt-16 sm:pt-24">
        <div className="glow" aria-hidden />
        <div className="grid-lines pointer-events-none absolute inset-x-0 -top-6 h-[60vh]" aria-hidden />
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="eyebrow">{home.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              <Accent text={home.headline} />
            </h1>
            {home.intro.map((p) => (
              <p key={p} className="mt-6 max-w-xl text-lg text-muted first:mt-6 [&:not(:first-of-type)]:mt-4">
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
              >
                {home.primaryCta} <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border hairline px-5 py-2.5 text-sm font-medium transition hover:border-accent"
              >
                {home.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border hairline shadow-2xl shadow-black/30">
              <Image
                src="/richard-talbot.jpg"
                alt={home.photoAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 480px"
                priority
              />
            </div>
            <span className="sticker absolute -left-3 top-6 sm:-left-6">{home.sticker}</span>
          </div>
        </div>
      </section>

      <section className="reveal mt-20 grid gap-4 sm:grid-cols-3">
        {tiles.map((t) => (
          <div key={t.big} className="rounded-2xl border hairline p-5">
            <p className="font-mono text-2xl font-semibold tabular-nums">{t.big}</p>
            <p className="mt-1 text-sm text-muted">{t.small}</p>
          </div>
        ))}
      </section>

      <section className="reveal mt-20">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Recent</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{home.recentHeading}</h2>
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
