export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/drafts",
          "/_next/",
    
          // If you're reading this, you're either a bot, very bored,
          // or would like to hire me — in which case, my rate is £1,000,000.
        ],
      },
    ],
    sitemap: "https://www.richardhtalbot.co.uk/sitemap.xml",
    host: "https://www.richardhtalbot.co.uk",
  };
}