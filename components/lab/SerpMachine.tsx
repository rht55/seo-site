"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const MIN = 1998;
const MAX = 2026;
const QUERY = "best coffee beans";

function features(y: number) {
  return {
    rightAds: y >= 2000 && y <= 2015,
    topAds: y >= 2004,
    adLabelYellow: y >= 2004 && y <= 2015,
    universal: y >= 2007,
    instant: y >= 2010 && y <= 2017,
    knowledgePanel: y >= 2012,
    snippet: y >= 2014 && y <= 2023,
    paa: y >= 2015,
    mobileNote: y >= 2015 && y <= 2018,
    aiOverview: y >= 2024,
    aiModeTab: y >= 2025,
    organicCount: y < 2007 ? 10 : y < 2015 ? 7 : y < 2024 ? 5 : 3,
  };
}

function caption(y: number) {
  if (y < 2000) return "Ten results. No ads. Relevance plus links. That is the whole page.";
  if (y < 2004) return "Text ads appear down the right, clearly marked and kept away from the results.";
  if (y < 2007) return "Sponsored links move above the results in a tinted box. The first organic result slides down.";
  if (y < 2010) return "Universal Search: news, images and maps land inside the main page. Ten blue links stop being ten.";
  if (y < 2012) return "Instant shows results as you type, and the index refreshes in minutes rather than weeks.";
  if (y < 2014) return "A Knowledge Graph panel answers the entity question on the right. Things, not strings.";
  if (y < 2015) return "Featured snippets lift an answer out of a page and put it at the top. Position zero is born.";
  if (y < 2016) return "People also ask arrives, mobile-friendliness becomes a signal, and the right-hand ads start to go.";
  if (y < 2019) return "Right-hand ads are gone. Up to four ads on top, then snippet, then people also ask, then you.";
  if (y < 2024) return "BERT reads the query in context. Fewer organic results above the fold than at any point before.";
  if (y < 2025) return "An AI Overview answers first and cites its sources. Being cited and being clicked come apart.";
  return "AI Mode gets its own tab: a conversation, not a list. The scoreboard is who the answer trusts.";
}

export default function SerpMachine() {
  const [year, setYear] = useState(MIN);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<number | null>(null);
  const f = useMemo(() => features(year), [year]);
  const pct = ((year - MIN) / (MAX - MIN)) * 100;

  useEffect(() => {
    if (!playing) return;
    timer.current = window.setInterval(() => {
      setYear((y) => {
        if (y >= MAX) {
          setPlaying(false);
          return y;
        }
        return y + 1;
      });
    }, 650);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [playing]);

  const organic = Array.from({ length: f.organicCount });

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-start">
      <div className="lg:sticky lg:top-24">
        <p className="eyebrow">Results page time machine</p>
        <p className="year-dial mt-3 font-mono text-[5rem] font-semibold sm:text-[6.5rem]">{year}</p>
        <p key={caption(year)} className="serp-enter mt-3 min-h-[4.5rem] text-muted">
          {caption(year)}
        </p>
        <label className="mt-6 block">
          <span className="sr-only">Year</span>
          <input
            type="range"
            min={MIN}
            max={MAX}
            step={1}
            value={year}
            onChange={(e) => {
              setPlaying(false);
              setYear(Number(e.target.value));
            }}
            className="year-range"
            style={{ "--pct": `${pct}%` } as React.CSSProperties}
            aria-valuetext={`${year}`}
          />
        </label>
        <div className="mt-2 flex justify-between font-mono text-xs text-muted">
          <span>{MIN}</span>
          <span>{MAX}</span>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              if (year >= MAX) setYear(MIN);
              setPlaying((p) => !p);
            }}
            className="inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
          >
            {playing ? "Pause" : year >= MAX ? "Replay 28 years" : "Play the 28 years"}
          </button>
          <button
            type="button"
            onClick={() => {
              setPlaying(false);
              setYear(MIN);
            }}
            className="inline-flex items-center rounded-full border hairline px-4 py-2 text-sm font-medium transition hover:border-accent"
          >
            Reset
          </button>
        </div>
        <p className="mt-6 text-xs text-muted">
          A mock results page for the query “{QUERY}”. Layouts are illustrative and no real brand is shown; the
          features and years are real.
        </p>
      </div>

      {/* the mock results page */}
      <div className="serp shadow-2xl shadow-black/20" aria-label={`Illustrative search results page as it looked in ${year}`}>
        {/* header */}
        <div className="border-b px-5 pt-4" style={{ borderColor: "var(--serp-line)" }}>
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold tracking-tight" style={{ color: "#4285f4" }}>
              Search
            </span>
            <div className="flex flex-1 items-center rounded-full border px-4 py-2 text-sm shadow-sm" style={{ borderColor: "var(--serp-line)" }}>
              {QUERY}
              <span data-show={f.instant} className="ml-2 text-xs" style={{ color: "var(--serp-muted)" }}>
                · results as you type
              </span>
            </div>
          </div>
          <div className="mt-3 flex gap-5 text-xs" style={{ color: "var(--serp-muted)" }}>
            <span className="border-b-2 pb-2 font-medium" style={{ borderColor: "#1a73e8", color: "#1a73e8" }}>All</span>
            <span data-show={f.aiModeTab} className="pb-2 font-medium" style={{ color: "#1a73e8" }}>✦ AI Mode</span>
            <span className="pb-2">Images</span>
            <span data-show={f.universal} className="pb-2">News</span>
            <span data-show={f.universal} className="pb-2">Maps</span>
            <span className="pb-2">Shopping</span>
          </div>
        </div>

        <div className="grid gap-6 p-5 md:grid-cols-[1fr_200px]">
          <div className="space-y-5 text-sm">
            {/* AI overview */}
            <section data-show={f.aiOverview} className="serp-enter rounded-2xl p-4" style={{ background: "linear-gradient(135deg,#eef3ff,#f4ecff)" }}>
              <p className="text-xs font-medium" style={{ color: "#5f6368" }}>✦ AI Overview</p>
              <p className="mt-2 leading-relaxed">
                The best coffee beans depend on brew method and roast level. Freshly roasted single-origin beans from Ethiopia and
                Colombia are widely recommended for pour-over, while darker blends suit espresso…
              </p>
              <div className="mt-3 flex gap-2">
                {["roasters.example", "guide.example", "reviews.example"].map((s) => (
                  <span key={s} className="rounded-full bg-white/80 px-2 py-0.5 text-[11px]" style={{ color: "#5f6368" }}>
                    {s}
                  </span>
                ))}
              </div>
            </section>

            {/* top ads */}
            <section data-show={f.topAds} className="serp-enter space-y-3 rounded-lg p-3" style={{ background: f.adLabelYellow ? "#fff8e1" : "transparent" }}>
              {f.adLabelYellow && <p className="text-xs" style={{ color: "var(--serp-muted)" }}>Sponsored links</p>}
              {[0, 1].map((i) => (
                <div key={i}>
                  <p className="text-xs" style={{ color: "var(--serp-url)" }}>
                    {!f.adLabelYellow && <span className="mr-1 rounded border px-1 text-[10px] font-bold" style={{ color: "#1a1a1a", borderColor: "#1a1a1a" }}>Ad</span>}
                    www.beans-example.com
                  </p>
                  <p className="font-medium" style={{ color: "var(--serp-link)" }}>Fresh Roasted Coffee Beans · Free Delivery</p>
                  <div className="serp-skel mt-1.5 w-11/12" />
                </div>
              ))}
            </section>

            {/* featured snippet */}
            <section data-show={f.snippet} className="serp-enter rounded-lg border p-3" style={{ borderColor: "var(--serp-line)" }}>
              <p className="leading-relaxed">
                <strong>Arabica beans</strong> are generally considered the best for flavour, with Ethiopian Yirgacheffe and Colombian
                Supremo among the most recommended origins for home brewing.
              </p>
              <p className="mt-2 text-xs" style={{ color: "var(--serp-url)" }}>coffeeguide.example › best-beans</p>
            </section>

            {/* universal */}
            <section data-show={f.universal} className="serp-enter">
              <p className="mb-2 text-xs font-medium" style={{ color: "var(--serp-muted)" }}>Top stories</p>
              <div className="grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="rounded-lg border p-2" style={{ borderColor: "var(--serp-line)" }}>
                    <div className="h-12 rounded" style={{ background: "#eceff1" }} />
                    <div className="serp-skel mt-2 w-full" />
                    <div className="serp-skel mt-1 w-2/3" />
                  </div>
                ))}
              </div>
            </section>

            {/* PAA */}
            <section data-show={f.paa} className="serp-enter rounded-lg border" style={{ borderColor: "var(--serp-line)" }}>
              <p className="px-3 pt-3 text-sm font-medium">People also ask</p>
              {["Which coffee beans are best for espresso?", "What is the best coffee bean in the world?", "Are expensive coffee beans worth it?"].map((q) => (
                <div key={q} className="flex items-center justify-between border-t px-3 py-2.5 text-sm" style={{ borderColor: "var(--serp-line)" }}>
                  <span>{q}</span>
                  <span style={{ color: "var(--serp-muted)" }}>⌄</span>
                </div>
              ))}
            </section>

            {/* organic */}
            <section className="space-y-5">
              {organic.map((_, i) => (
                <div key={i} className="serp-enter">
                  <p className="text-xs" style={{ color: "var(--serp-url)" }}>www.example-{i + 1}.co.uk › coffee › beans</p>
                  <p className="text-base" style={{ color: "var(--serp-link)" }}>
                    {["The 10 Best Coffee Beans for Home Brewing", "Best Coffee Beans 2024: Tested and Ranked", "Single Origin vs Blend: Which Beans?", "Coffee Beans Buying Guide", "Top Rated Beans for Espresso", "Where to Buy Fresh Roasted Beans", "Light, Medium or Dark Roast?", "Fairtrade Coffee Beans Explained", "Grind Size and Bean Freshness", "Coffee Bean Storage Tips"][i]}
                  </p>
                  <div className="serp-skel mt-1.5 w-full" />
                  <div className="serp-skel mt-1 w-4/5" />
                </div>
              ))}
            </section>
          </div>

          {/* right column */}
          <aside className="hidden space-y-4 text-sm md:block">
            <section data-show={f.knowledgePanel} className="serp-enter rounded-lg border p-3" style={{ borderColor: "var(--serp-line)" }}>
              <div className="h-20 rounded" style={{ background: "#eceff1" }} />
              <p className="mt-2 text-base font-medium">Coffee bean</p>
              <p className="text-xs" style={{ color: "var(--serp-muted)" }}>Seed</p>
              <p className="mt-2 text-xs leading-relaxed">
                A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pit inside the red or purple fruit…
              </p>
            </section>
            <section data-show={f.rightAds} className="serp-enter space-y-3">
              <p className="text-xs" style={{ color: "var(--serp-muted)" }}>Sponsored links</p>
              {[0, 1, 2].map((i) => (
                <div key={i}>
                  <p className="text-xs font-medium" style={{ color: "var(--serp-link)" }}>Coffee Beans Online</p>
                  <div className="serp-skel mt-1 w-full" />
                  <p className="mt-1 text-[11px]" style={{ color: "var(--serp-url)" }}>www.ad-example.com</p>
                </div>
              ))}
            </section>
            <p data-show={!f.knowledgePanel && !f.rightAds} className="text-xs" style={{ color: "var(--serp-muted)" }}>
              Nothing here yet. Just results.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
