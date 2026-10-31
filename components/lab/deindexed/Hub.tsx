"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";

type LevelDef = { n: 1 | 2 | 3; name: string; time: string; blurb: string; hash: string };

const levels: LevelDef[] = [
  { n: 1, name: "The taster", time: "about ten minutes", blurb: "View-source, robots.txt and a sitemap. Nothing else needed.", hash: "72b0c71331f3ba9f91d1583ee1841f68e4513304add84117ad79971489e24809" },
  { n: 2, name: "HTTP", time: "about half an hour", blurb: "Headers, redirects, canonicals, rendering and cloaking. The Inspector or devtools.", hash: "48189e4cafeb4cf9988b81d45567e35b55fcb30a1593c8b5ba736c7275abcc2c" },
  { n: 3, name: "The deep end", time: "an hour, maybe more", blurb: "A log file, a locked vault, a cookie, a phone and a parameter.", hash: "e4ad83aeb1137bcb2a1f4d7291f4b59d8049d734567108f1dbf579f0b4a59050" },
];

const STORE = "deindexed:keys";

// a tiny external store over localStorage so React can subscribe to it
const listeners = new Set<() => void>();
function readStore() {
  try {
    return localStorage.getItem(STORE) ?? "{}";
  } catch {
    return "{}";
  }
}
function writeStore(value: Record<number, string>) {
  try {
    if (Object.keys(value).length) localStorage.setItem(STORE, JSON.stringify(value));
    else localStorage.removeItem(STORE);
  } catch {}
  listeners.forEach((l) => l());
}
function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

async function sha256(s: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function Hub() {
  const raw = useSyncExternalStore(subscribe, readStore, () => "{}");
  const keys = useMemo<Record<number, string>>(() => {
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }, [raw]);
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [status, setStatus] = useState<Record<number, "ok" | "no" | undefined>>({});
  const [hash, setHash] = useState<string | null>(null);
  const allDone = levels.every((l) => keys[l.n]);

  useEffect(() => {
    if (!allDone) return;
    let live = true;
    sha256(`${keys[1]}|${keys[2]}|${keys[3]}|deindexed`).then((h) => {
      if (live) setHash(h.slice(0, 8).toUpperCase());
    });
    return () => {
      live = false;
    };
  }, [allDone, keys]);
  const code = allDone ? hash : null;

  const submit = async (n: number) => {
    const word = (inputs[n] ?? "").trim().toUpperCase();
    if (!word) return;
    const h = await sha256(word);
    const level = levels.find((l) => l.n === n)!;
    if (h === level.hash) {
      writeStore({ ...keys, [n]: word });
      setStatus((s) => ({ ...s, [n]: "ok" }));
    } else {
      setStatus((s) => ({ ...s, [n]: "no" }));
    }
  };

  const reset = () => {
    writeStore({});
    setStatus({});
    setInputs({});
  };

  return (
    <div>
      <ol className="grid gap-4 md:grid-cols-3">
        {levels.map((l) => {
          const done = Boolean(keys[l.n]);
          return (
            <li key={l.n} className={`case flex flex-col p-6 ${done ? "border-accent/60" : ""}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="eyebrow">Level {l.n}</p>
                  <h2 className="mt-1 text-2xl font-semibold">{l.name}</h2>
                </div>
                {done && (
                  <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-accent-ink">
                    Solved
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted">{l.blurb}</p>
              <p className="mt-1 font-mono text-xs text-muted">{l.time}</p>
              <div className="mt-5 flex-1" />
              <Link
                href={`/lab/deindexed/${l.n}`}
                className="inline-flex w-fit items-center rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
              >
                {done ? "Play again" : "Start"} →
              </Link>
              <form
                className="mt-4 flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  submit(l.n);
                }}
              >
                <input
                  value={inputs[l.n] ?? ""}
                  onChange={(e) => setInputs((s) => ({ ...s, [l.n]: e.target.value }))}
                  placeholder={done ? keys[l.n] : "Level key"}
                  disabled={done}
                  spellCheck={false}
                  className="min-w-0 flex-1 rounded-lg border hairline bg-bg px-3 py-2 font-mono text-sm uppercase tracking-widest disabled:opacity-60"
                  aria-label={`Level ${l.n} key`}
                />
                <button
                  type="submit"
                  disabled={done}
                  className="rounded-lg border hairline px-3 py-2 font-mono text-xs transition hover:border-accent disabled:opacity-60"
                >
                  Enter
                </button>
              </form>
              {status[l.n] === "no" && !done && <p className="mt-2 font-mono text-xs text-red-400">Not it. Keys are single words.</p>}
            </li>
          );
        })}
      </ol>

      <div className="case mt-6 p-6 sm:p-8">
        {code ? (
          <div>
            <p className="eyebrow">All three solved</p>
            <p className="mt-2 text-xl font-semibold">Your completion code</p>
            <p className="keycard mt-3 inline-block px-5 py-3 font-mono text-2xl font-semibold">{code}</p>
            <p className="mt-4 max-w-xl text-sm text-muted">
              Email it to{" "}
              <a className="link-underline text-fg" href={`mailto:hello@richardhtalbot.co.uk?subject=Deindexed%20${code}&body=Completion%20code%3A%20${code}%0AName%20for%20the%20scoreboard%3A%20%0ALink%20(optional)%3A%20`}>
                hello@richardhtalbot.co.uk
              </a>{" "}
              with the name you want on the scoreboard, and it goes into robots.txt, where scoreboards belong.
            </p>
          </div>
        ) : (
          <div>
            <p className="eyebrow">Finish</p>
            <p className="mt-2 text-sm text-muted">
              Enter all three keys and this box turns into your completion code. Progress is saved in this browser only.
            </p>
          </div>
        )}
        {Object.keys(keys).length > 0 && (
          <button type="button" onClick={reset} className="mt-4 font-mono text-xs text-muted hover:text-fg">
            reset progress
          </button>
        )}
      </div>
    </div>
  );
}
