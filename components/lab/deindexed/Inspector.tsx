"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

type Hop = { url: string; status: number; statusText: string; headers: Record<string, string>; location?: string };
type Result = { target: string; ua: string; hops: Hop[]; body: string; error?: string };

const quick = [
  ["robots.txt", "/robots.txt"],
  ["site sitemap", "/sitemap.xml"],
  ["game sitemap", "/lab/deindexed/sitemap.xml"],
  ["access.log", "/lab/deindexed/access.log"],
];

export default function Inspector() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState(pathname);
  const [seenPath, setSeenPath] = useState(pathname);
  if (pathname !== seenPath) {
    setSeenPath(pathname);
    setUrl(pathname);
  }
  const [ua, setUa] = useState("browser");
  const [tab, setTab] = useState<"headers" | "source" | "jsonld">("headers");
  const [res, setRes] = useState<Result | null>(null);
  const [busy, setBusy] = useState(false);

  const run = async () => {
    setBusy(true);
    try {
      const r = await fetch(`/lab/deindexed/api/fetch?url=${encodeURIComponent(url)}&ua=${ua}`, { cache: "no-store" });
      setRes((await r.json()) as Result);
    } catch (e) {
      setRes({ target: url, ua, hops: [], body: "", error: String(e) });
    } finally {
      setBusy(false);
    }
  };

  const jsonld = res?.body
    ? [...res.body.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => {
        try {
          return JSON.stringify(JSON.parse(m[1]), null, 2);
        } catch {
          return m[1];
        }
      })
    : [];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2.5 font-mono text-xs font-medium text-bg shadow-xl transition hover:opacity-90"
        aria-expanded={open}
        aria-controls="inspector"
      >
        <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
        {open ? "Close inspector" : "Inspector"}
      </button>

      {open && (
        <section
          id="inspector"
          aria-label="Inspector"
          className="fixed inset-x-3 bottom-20 z-50 mx-auto max-w-3xl rounded-2xl border hairline bg-bg-2 p-4 shadow-2xl sm:inset-x-auto sm:right-5 sm:w-[720px]"
        >
          <div className="flex flex-wrap items-center gap-2">
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && run()}
              spellCheck={false}
              className="min-w-0 flex-1 rounded-lg border hairline bg-bg px-3 py-2 font-mono text-xs"
              aria-label="Path to fetch"
            />
            <select
              value={ua}
              onChange={(e) => setUa(e.target.value)}
              className="rounded-lg border hairline bg-bg px-2 py-2 font-mono text-xs"
              aria-label="Fetch as"
            >
              <option value="browser">as browser</option>
              <option value="googlebot">as Googlebot</option>
              <option value="bingbot">as Bingbot</option>
            </select>
            <button
              type="button"
              onClick={run}
              disabled={busy}
              className="rounded-lg bg-accent px-3 py-2 font-mono text-xs font-semibold text-accent-ink disabled:opacity-60"
            >
              {busy ? "Fetching…" : "Fetch"}
            </button>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {quick.map(([label, p]) => (
              <button
                key={p}
                type="button"
                onClick={() => setUrl(p)}
                className="rounded-full border hairline px-2.5 py-1 font-mono text-[0.68rem] text-muted hover:border-accent hover:text-fg"
              >
                {label}
              </button>
            ))}
            <span className="ml-auto font-mono text-[0.68rem] text-muted">
              Server-side fetch: your cookies and logins are not sent.
            </span>
          </div>

          {res && (
            <div className="mt-3">
              <div className="flex gap-1 border-b hairline">
                {(["headers", "source", "jsonld"] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTab(t)}
                    className={`px-3 py-2 font-mono text-xs ${tab === t ? "border-b-2 border-accent text-fg" : "text-muted"}`}
                  >
                    {t === "headers" ? `Headers · ${res.hops.length} hop${res.hops.length === 1 ? "" : "s"}` : t === "source" ? "Source as served" : `JSON-LD · ${jsonld.length}`}
                  </button>
                ))}
              </div>
              {res.error && <p className="mt-3 font-mono text-xs text-red-400">{res.error}</p>}
              {tab === "headers" && (
                <div className="inspector-pre mt-3 space-y-4">
                  {res.hops.map((h, i) => (
                    <div key={`${h.url}-${i}`}>
                      <p className="text-fg">
                        {i + 1}. {h.status} {h.statusText} · {h.url}
                        {h.location ? ` → ${h.location}` : ""}
                      </p>
                      {Object.entries(h.headers).map(([k, v]) => (
                        <p key={k} className="text-muted">
                          <span className={/x-robots|x-deindexed|location|www-authenticate|link|etag/i.test(k) ? "text-accent" : ""}>{k}</span>: {v}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              {tab === "source" && <pre className="inspector-pre mt-3 text-muted">{res.body || "(no body)"}</pre>}
              {tab === "jsonld" && (
                <pre className="inspector-pre mt-3 text-muted">{jsonld.length ? jsonld.join("\n\n") : "(no JSON-LD on this page)"}</pre>
              )}
            </div>
          )}
        </section>
      )}
    </>
  );
}
