import { scoreboard } from "../../components/lab/deindexed/scoreboard";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /lab/deindexed/1/do-not-crawl",
    "",
    "Host: https://www.richardhtalbot.co.uk",
    "Sitemap: https://www.richardhtalbot.co.uk/sitemap.xml",
    "Sitemap: https://www.richardhtalbot.co.uk/lab/deindexed/sitemap.xml",
    "",
    "# Deindexed, a technical SEO game at /lab/deindexed",
    "# The Disallow line above is part of it. The crawler was told to stay away. You were not.",
    "#",
    "# Scoreboard (send your completion code to hello@richardhtalbot.co.uk)",
    ...(scoreboard.length
      ? scoreboard.map((s, i) => `# ${i + 1}. ${s.name}${s.link ? ` - ${s.link}` : ""}${s.date ? ` (${s.date})` : ""}`)
      : ["# Nobody yet. Be the first."]),
    "#",
    "# With a nod to SEO Pirates, 2019.",
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
