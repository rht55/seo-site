import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/drafts", "/_next/"],
      },
    ],
    sitemap: "https://www.richardhtalbot.co.uk/sitemap.xml",
    host: "https://www.richardhtalbot.co.uk",
    comments: [
      "─────────────────────────────────────────────",
      "   ____  _      _      _       _ _       _   ",
      "  |  _ \\(_) ___| | ___| |_ ___| (_) __ _| |  ",
      "  | |_) | |/ _ \\ |/ _ \\ __/ _ \\ | |/ _` | |  ",
      "  |  __/| |  __/ |  __/ ||  __/ | | (_| | |  ",
      "  |_|   |_|\\___|_|\\___|\\__\\___|_|_|\\__,_|_|  ",
      "─────────────────────────────────────────────",
      "Hello, traveller of the digital plains 👋",
      "If you’re reading this, you’re either a bot, very bored,",
      "or would like to hire me — in which case, I will accept",
      "no less than £1 million (GBP, preferably crisp).",
      "",
      "Be nice. Crawl gently. Index responsibly.",
      "─────────────────────────────────────────────",
    ],
  };
}
