import { NextResponse, type NextRequest } from "next/server";

const GAME = "/lab/deindexed";
const VAULT_USER = "ghost";
const VAULT_PASS = "410gone";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ua = request.headers.get("user-agent") ?? "";

  // Level 2, step 2: a redirect chain. 302, then 301 with a note in the query, then 307.
  if (pathname === `${GAME}/2/hop`) {
    return NextResponse.redirect(new URL(`${GAME}/2/hop-b`, request.url), 302);
  }
  if (pathname === `${GAME}/2/hop-b`) {
    return NextResponse.redirect(new URL(`${GAME}/2/hop-c?note=the-real-page-is-canon`, request.url), 301);
  }
  if (pathname === `${GAME}/2/hop-c`) {
    return NextResponse.redirect(new URL(`${GAME}/2/landing`, request.url), 307);
  }

  // Level 2, step 5: cloaking. Googlebot sees a different page.
  if (pathname === `${GAME}/2/cloak` && /Googlebot/i.test(ua)) {
    return NextResponse.rewrite(new URL(`${GAME}/2/cloak-bot`, request.url));
  }

  // Level 3, step 2: the vault is behind HTTP Basic Auth. Getting in sets the crew cookie.
  if (pathname === `${GAME}/3/vault`) {
    const auth = request.headers.get("authorization") ?? "";
    const expected = "Basic " + btoa(`${VAULT_USER}:${VAULT_PASS}`);
    if (auth !== expected) {
      return new NextResponse(
        "401 Unauthorized\n\nThe vault is locked. The previous SEO left the login where only machines read it.\n",
        {
          status: 401,
          headers: {
            "WWW-Authenticate": 'Basic realm="Deindexed vault"',
            "Content-Type": "text/plain; charset=utf-8",
            "X-Robots-Tag": "noindex, nofollow",
          },
        }
      );
    }
    const res = NextResponse.next();
    res.cookies.set("crew", "1", { path: GAME, sameSite: "lax", maxAge: 60 * 60 * 24 * 30 });
    return res;
  }

  // Level 3, step 3: only visitors carrying the crew cookie get through.
  if (pathname === `${GAME}/3/referral` && request.cookies.get("crew")?.value !== "1") {
    return NextResponse.rewrite(new URL(`${GAME}/3/referral-denied`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/lab/deindexed/:path*"],
};
