import type { Metadata } from "next";
import Link from "next/link";
import Timeline from "../../../components/lab/Timeline";
import SerpMachine from "../../../components/lab/SerpMachine";
import Quiz from "../../../components/lab/Quiz";
import { eras } from "../../../components/lab/eras";

export const metadata: Metadata = {
  title: "A short history of search, 1990 to now",
  description:
    "Scroll from Archie to AI answers, drag a results page through 28 years of change, and test yourself on the updates that shaped SEO.",
  alternates: { canonical: "/lab/search-history" },
};

export default function SearchHistoryPage() {
  return (
    <>
      <section className="relative pt-16 sm:pt-24">
        <div className="glow" aria-hidden />
        <p className="eyebrow">
          <Link href="/lab" className="link-underline">
            Lab
          </Link>{" "}
          · 01
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
          A short history of <span className="serif-italic text-accent">search</span>, from filing cabinets to answers.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Thirty-six years in three parts. Scroll the timeline, then drag a results page through every era, then find out
          how much of it you actually remember.
        </p>
      </section>

      <section id="timeline" className="scroll-mt-24 pt-16 sm:pt-24">
        <Timeline eras={eras} />
      </section>

      <section id="machine" className="reveal scroll-mt-24 pt-24 sm:pt-32">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">02 · Time machine</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Drag a results page through <span className="serif-italic">28 years</span>.
          </h2>
          <p className="mt-4 text-muted">
            Same query, every year since 1998. Watch the ads arrive, the panels appear, and the results sink.
          </p>
        </div>
        <SerpMachine />
      </section>

      <section id="quiz" className="reveal scroll-mt-24 pt-24 sm:pt-32">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">03 · Quiz</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Eight questions. <span className="serif-italic">No</span> Googling.
          </h2>
        </div>
        <Quiz />
      </section>

      <section className="reveal pt-16">
        <p className="max-w-2xl text-xs text-muted">
          Dates are taken from the companies’ own announcements at the time. If you spot one that is wrong, tell me and I
          will fix it. The results pages are illustrations of each era’s layout, not screenshots, and show no real brand.
        </p>
      </section>
    </>
  );
}
