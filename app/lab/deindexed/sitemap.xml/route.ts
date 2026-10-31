export const dynamic = "force-static";

const base = "https://www.richardhtalbot.co.uk/lab/deindexed";

const urls: { path: string; lastmod: string }[] = [
  { path: "", lastmod: "2026-10-31" },
  { path: "/1", lastmod: "2026-10-31" },
  { path: "/1/audit", lastmod: "2026-10-31" },
  { path: "/1/crawl-budget", lastmod: "2026-10-31" },
  // the orphan: listed here, linked from nowhere
  { path: "/1/orphan-7f3a", lastmod: "2024-03-09" },
  { path: "/2", lastmod: "2026-10-31" },
  { path: "/3", lastmod: "2026-10-31" },
];

export function GET() {
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<!-- Deindexed game sitemap. One of these pages is linked from nowhere. -->\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map((u) => `  <url>\n    <loc>${base}${u.path}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`)
      .join("\n") +
    `\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
