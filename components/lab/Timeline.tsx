"use client";

import { useEffect, useRef, useState } from "react";
import type { Era } from "./eras";

export default function Timeline({ eras }: { eras: Era[] }) {
  const [active, setActive] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const i = Number((e.target as HTMLElement).dataset.index);
          setActive(i);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    stageRef.current?.style.setProperty("--hue", String(eras[active].hue));
  }, [active, eras]);

  const era = eras[active];

  return (
    <div ref={stageRef} className="lab-stage rounded-3xl">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        {/* sticky dial */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow">Scroll to travel</p>
          <p key={era.year} className="year-dial serp-enter mt-3 font-mono text-[6rem] font-semibold sm:text-[8rem] lg:text-[9.5rem]">
            {era.year}
          </p>
          <div key={`t-${era.year}`} className="serp-enter mt-4 max-w-sm">
            <p className="text-lg font-semibold">{era.title}</p>
            <p className="mt-2 text-sm text-muted">
              <span className="font-mono text-[0.68rem] uppercase tracking-widest text-accent">For SEO · </span>
              {era.forSeo}
            </p>
          </div>
          <div className="mt-8 flex items-center gap-3 font-mono text-xs text-muted">
            <span>{eras[0].year}</span>
            <span className="relative h-1 flex-1 overflow-hidden rounded-full bg-line">
              <span
                className="absolute inset-y-0 left-0 rounded-full bg-accent transition-[width] duration-500"
                style={{ width: `${(active / (eras.length - 1)) * 100}%` }}
              />
            </span>
            <span>{eras[eras.length - 1].year}</span>
          </div>
        </div>

        {/* eras */}
        <ol className="lab-scroller relative space-y-10 pl-8 sm:pl-10">
          <span className="era-line" aria-hidden />
          {eras.map((e, i) => (
            <li
              key={e.year}
              data-index={i}
              data-active={i === active}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="era relative"
            >
              <span className="era-dot absolute -left-8 top-2 sm:-left-10" aria-hidden />
              <article
                className={`rounded-2xl border p-5 transition-colors duration-500 sm:p-6 ${
                  i === active ? "border-accent/60 bg-card" : "hairline bg-transparent"
                }`}
              >
                <p className="font-mono text-xs text-muted">{e.year}</p>
                <h3 className="mt-1 text-xl font-semibold">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{e.body}</p>
                <p className="mt-3 text-sm">
                  <span className="font-mono text-[0.68rem] uppercase tracking-widest text-accent">For SEO · </span>
                  {e.forSeo}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
