"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

type Hop = { url: string; status: number; statusText: string; headers: Record<string, string>; location?: string };
type Result = { target: string; ua: string; hops: Hop[]; body: string; error?: string };

const quick = [
  ["robots.txt", "/robots.txt"],
  ["site sitemap", "/sitemap.xml"],
  ["game sitemap", "/lab/deindexed/sitemap.xml"],
  ["access.log", "/lab/deindexed/access.log"],
];

const PREF = "deindexed:inspector";
const listeners = new Set<() => void>();
function readPref() {
  try {
    return localStorage.getItem(PREF) ?? "";
  } catch {
    return "";
  }
}
function writePref(v: "open" | "closed") {
  try {
    localStorage.setItem(PREF, v);
  } catch {}
  listeners.forEach((l) => l());
}
function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

const HIGHLIGHT = /x-robots|x-deindexed|location|www-authenticate|^link$|etag|set-cookie|content-type/i;

/**
 * A devtools-style drawer docked to the bottom of every game page. It fetches the
 * current page server-side (so you see exactly what a crawler would), shows every
 * redirect hop and header, the HTML as served, and any JSON-LD. Open by default on
 * level pages; the choice is remembered.
 */
export default function Inspector() {
  const pathname = usePathname();
  const isHub = pathname === "/lab/deindexed";
  const pref = useSyncExternalStore(subscribe, readPref, () => "server");
  const open = pref === "server" ? false : pref ? pref === "open" : !isHub;

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

  const run = async (target = url, agent = ua) => {
    setBusy(true);
    try {
      const r = await fetch(`/lab/deindexed/api/fetch?url=${encodeURIComponent(target)}&ua=${agent}`, { cache: "no-store" });
      setRes((await r.json()) as Result);
    } catch (e) {
      setRes({ target, ua: agent, hops: [], body: "", error: String(e) });
    } finally {
      setBusy(false);
    }
  };

  // fetch the page you are standing on as soon as you arrive
  useEffect(() => {
    if (!open) return;
    let live = true;
    (async () => {
      try {
        const r = await fetch(`/lab/deindexed/api/fetch?url=${encodeURIComponent(pathname)}&ua=browser`, { cache: "no-store" });
        const data = (await r.json()) as Result;
        if (live) setRes(data);
      } catch {}
    })();
    return () => {
      live = false;
    };
  }, [pathname, open]);

  const jsonld = res?.body
    ? [...res.body.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => {
        try {
          return JSON.stringify(JSON.parse(m[1]), null, 2);
        } catch {
          return m[1];
        }
      })
    : [];

  const last = res?.hops[res.hops.length - 1];

  return (
    <>
      {/* keeps page content clear of the drawer */}
      <div aria-hidden style={{ height: open ? "46vh" : "3.25rem" }} />

      <section
        id="inspector"
        aria-label="Inspector"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-accent/40 bg-bg-2/95 shadow-[0_-20px_60px_-30px_rgba(0,0,0,.6)] backdrop-blur-xl"
      >
        {/* bar */}
        <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-5 py-2.5 sm:px-8">
          <button
            type="button"
            onClick={() => writePref(open ? "closed" : "open")}
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold"
            aria-expanded={open}
            aria-controls="inspector-body"
          >
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
            Inspector
            <span aria-hidden className="text-muted">{open ? "▾" : "▴"}</span>
          </button>
          <span className="hidden font-mono text-[0.7rem] text-muted sm:inline">
            what the browser hides: status, headers, hops, source as served
          </span>
          <span className="ml-auto font-mono text-[0.7rem] text-muted">
            {busy ? "fetching…" : last ? `${last.status} ${last.statusText} · ${res?.hops.length} hop${res?.hops.length === 1 ? "" : "s"}` : ""}
          </span>
        </div>

        {open && (
          <div id="inspector-body" className="mx-auto w-full max-w-6xl px-5 pb-4 sm:px-8" style={{ height: "calc(46vh - 3.25rem)" }}>
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
                onClick={() => run()}
                disabled={busy}
                className="rounded-lg bg-accent px-3 py-2 font-mono text-xs font-semibold text-accent-ink disabled:opacity-60"
              >
                Fetch
              </button>
              <div className="flex flex-wrap gap-1.5">
                {quick.map(([label, p]) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => {
                      setUrl(p);
                      run(p);
                    }}
                    className="rounded-full border hairline px-2.5 py-1 font-mono text-[0.68rem] text-muted hover:border-accent hover:text-fg"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-2 flex items-center gap-1 border-b hairline">
              {(["headers", "source", "jsonld"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={`px-3 py-2 font-mono text-xs ${tab === t ? "border-b-2 border-accent text-fg" : "text-muted"}`}
                >
                  {t === "headers" ? "Headers and hops" : t === "source" ? "Source as served" : `JSON-LD${jsonld.length ? ` · ${jsonld.length}` : ""}`}
                </button>
              ))}
              <span className="ml-auto hidden font-mono text-[0.65rem] text-muted sm:inline">
                server-side fetch: your cookies and logins are not sent
              </span>
            </div>

            <div className="inspector-pre mt-2" style={{ maxHeight: "calc(46vh - 9.5rem)" }}>
              {!res && <p className="text-muted">Fetching this page…</p>}
              {res?.error && <p className="text-red-400">{res.error}</p>}
              {res && tab === "headers" && (
                <div className="space-y-4">
                  {res.hops.map((h, i) => (
                    <div key={`${h.url}-${i}`}>
                      <p className="text-fg">
                        {i + 1}. {h.status} {h.statusText} · {h.url}
                        {h.location ? ` → ${h.location}` : ""}
                      </p>
                      {Object.entries(h.headers).map(([k, v]) => (
                        <p key={k} className="text-muted">
                          <span className={HIGHLIGHT.test(k) ? "text-accent" : ""}>{k}</span>: {v}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              {res && tab === "source" && <pre className="text-muted">{res.body || "(no body)"}</pre>}
              {res && tab === "jsonld" && <pre className="text-muted">{jsonld.length ? jsonld.join("\n\n") : "(no JSON-LD on this page)"}</pre>}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
