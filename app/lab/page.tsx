import type { Metadata } from "next";
import Link from "next/link";
import Spotlight from "../../components/Spotlight";
import { Accent } from "../../components/Inline";
import { lab } from "../../content";
import type { Piece } from "../../content/types";

export const metadata: Metadata = {
  title: lab.title,
  description: lab.description,
  alternates: { canonical: "/lab" },
};

export default function LabPage() {
  const pieces: Piece[] = lab.pieces ?? [];
  return (
    <section className="relative pt-16 sm:pt-24">
      <div className="glow" aria-hidden />
      <p className="eyebrow">{lab.title}</p>
      <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-6xl">
        <Accent text={lab.headline} />
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">{lab.intro}</p>
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
