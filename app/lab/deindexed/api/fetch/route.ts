import { NextResponse, type NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UAS: Record<string, string> = {
  browser:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36",
  googlebot: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  bingbot: "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
};

const ALLOWED = /^\/(lab\/deindexed(\/[A-Za-z0-9._\-\/]*)?|robots\.txt|sitemap\.xml)(\?[A-Za-z0-9=&._\-%]*)?$/;

type Hop = { url: string; status: number; statusText: string; headers: Record<string, string>; location?: string };

/**
 * Same-origin fetch for the Inspector: shows the page as the server sends it,
 * with the chosen user agent, following redirects one hop at a time.
 * Only paths inside the game (plus robots and sitemap) are allowed.
 */
export async function GET(request: NextRequest) {
  const target = request.nextUrl.searchParams.get("url") ?? "/lab/deindexed";
  const uaKey = request.nextUrl.searchParams.get("ua") ?? "browser";
  if (!ALLOWED.test(target)) {
    return NextResponse.json({ error: "Only paths under /lab/deindexed, /robots.txt and /sitemap.xml can be fetched." }, { status: 400 });
  }
  const proto = request.headers.get("x-forwarded-proto") ?? "http";
  const host = request.headers.get("host") ?? "localhost:3000";
  const origin = `${proto}://${host}`;
  const ua = UAS[uaKey] ?? UAS.browser;

  const hops: Hop[] = [];
  let url = origin + target;
  let body = "";
  for (let i = 0; i < 8; i++) {
    const res = await fetch(url, { headers: { "user-agent": ua, accept: "text/html,*/*" }, redirect: "manual", cache: "no-store" });
    const headers: Record<string, string> = {};
    res.headers.forEach((v, k) => {
      if (!["set-cookie"].includes(k)) headers[k] = v;
    });
    const location = res.headers.get("location") ?? undefined;
    hops.push({ url: url.replace(origin, ""), status: res.status, statusText: res.statusText, headers, location });
    if (res.status >= 300 && res.status < 400 && location) {
      url = new URL(location, url).toString();
      continue;
    }
    const text = await res.text();
    body = text.length > 200_000 ? text.slice(0, 200_000) + "\n\n[truncated]" : text;
    break;
  }
  return NextResponse.json({ target, ua: uaKey, hops, body });
}
