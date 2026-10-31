"use client";

import { useState } from "react";

type Q = { q: string; options: string[]; answer: number; note: string };

const questions: Q[] = [
  {
    q: "Archie, the first search engine, let you search what?",
    options: ["Web page text", "File names on FTP servers", "Usenet posts", "Email addresses"],
    answer: 1,
    note: "It indexed the file listings of public FTP servers. No page content at all.",
  },
  {
    q: "PageRank treats a link as…",
    options: ["A keyword", "A vote", "A visit", "A penalty"],
    answer: 1,
    note: "A vote, weighted by the authority of the page casting it.",
  },
  {
    q: "Which update hit keyword-stuffed commercial pages weeks before Christmas 2003?",
    options: ["Panda", "Penguin", "Florida", "Medic"],
    answer: 2,
    note: "Florida, November 2003. The first mass lesson that tactics expire.",
  },
  {
    q: "Universal Search, which put news, images and maps inside the main results, launched in…",
    options: ["2004", "2007", "2010", "2012"],
    answer: 1,
    note: "May 2007. Ten blue links stopped being ten.",
  },
  {
    q: "Panda targeted thin content. Penguin targeted…",
    options: ["Slow pages", "Duplicate titles", "Manipulative links", "Mobile usability"],
    answer: 2,
    note: "Links. April 2012, a month before the Knowledge Graph.",
  },
  {
    q: "Mobilegeddon, when mobile-friendliness became a ranking signal, was in…",
    options: ["2013", "2015", "2018", "2021"],
    answer: 1,
    note: "21 April 2015. Mobile-first indexing followed in 2018.",
  },
  {
    q: "Which language model reached Google ranking in October 2019?",
    options: ["BERT", "MUM", "RankBrain", "Gemini"],
    answer: 0,
    note: "BERT. RankBrain came in 2015, MUM was announced in 2021.",
  },
  {
    q: "AI Overviews reached the UK in…",
    options: ["November 2022", "May 2023", "August 2024", "May 2025"],
    answer: 2,
    note: "August 2024, three months after the US launch.",
  },
];

function verdict(score: number) {
  if (score === 8) return "Full marks. You remember Florida, and you probably still have the toolbar.";
  if (score >= 6) return "Strong. You have been in this longer than most of the tools.";
  if (score >= 4) return "Respectable. You know the eras, if not every date.";
  return "Fair enough, it is a lot of history. The timeline above will fix that.";
}

export default function Quiz() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[i];

  const choose = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (i + 1 >= questions.length) {
      setDone(true);
      return;
    }
    setI(i + 1);
    setPicked(null);
  };

  const reset = () => {
    setI(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  if (done) {
    return (
      <div className="rounded-3xl border hairline bg-card p-8 text-center backdrop-blur sm:p-12">
        <p className="eyebrow">Your score</p>
        <p className="year-dial mt-3 font-mono text-[6rem] font-semibold leading-none">
          {score}
          <span className="text-[2.5rem] text-muted">/{questions.length}</span>
        </p>
        <p className="mx-auto mt-4 max-w-md text-lg">{verdict(score)}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
        >
          Take it again
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border hairline bg-card p-6 backdrop-blur sm:p-10">
      <div className="flex items-center justify-between font-mono text-xs text-muted">
        <span>
          Question {i + 1} of {questions.length}
        </span>
        <span>Score {score}</span>
      </div>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-line">
        <div className="h-full rounded-full bg-accent transition-[width] duration-500" style={{ width: `${(i / questions.length) * 100}%` }} />
      </div>

      <h3 key={q.q} className="serp-enter mt-8 text-2xl font-semibold sm:text-3xl">
        {q.q}
      </h3>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {q.options.map((opt, idx) => {
          const state = picked === null ? "idle" : idx === q.answer ? "correct" : idx === picked ? "wrong" : "idle";
          return (
            <button
              key={opt}
              type="button"
              onClick={() => choose(idx)}
              disabled={picked !== null}
              data-state={state}
              className="quiz-option rounded-2xl border hairline px-5 py-4 text-left text-base font-medium hover:border-accent disabled:cursor-default"
            >
              <span className="mr-3 font-mono text-xs text-muted">{String.fromCharCode(65 + idx)}</span>
              {opt}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex min-h-[3.5rem] flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted" aria-live="polite">
          {picked === null ? "Pick one." : picked === q.answer ? `Right. ${q.note}` : `Not quite. ${q.note}`}
        </p>
        {picked !== null && (
          <button
            type="button"
            onClick={next}
            className="inline-flex rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
          >
            {i + 1 >= questions.length ? "See my score" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
}
