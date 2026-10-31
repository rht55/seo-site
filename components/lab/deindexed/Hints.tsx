"use client";

import { useState } from "react";

export default function Hints({ hints }: { hints: string[] }) {
  const [shown, setShown] = useState(0);
  return (
    <div className="mt-8 border-t hairline pt-5">
      <div className="flex flex-wrap items-center gap-3">
        <p className="eyebrow">Stuck?</p>
        {shown < hints.length && (
          <button
            type="button"
            onClick={() => setShown((s) => s + 1)}
            className="rounded-full border hairline px-3 py-1 font-mono text-xs transition hover:border-accent"
          >
            {shown === 0 ? "Give me a hint" : "Still stuck"}
          </button>
        )}
        {shown > 0 && (
          <button type="button" onClick={() => setShown(0)} className="font-mono text-xs text-muted hover:text-fg">
            hide
          </button>
        )}
      </div>
      {shown > 0 && (
        <ol className="mt-3 space-y-2 text-sm text-muted">
          {hints.slice(0, shown).map((h, i) => (
            <li key={h} className="serp-enter flex gap-3">
              <span className="font-mono text-xs text-accent">{i + 1}</span>
              <span>{h}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
