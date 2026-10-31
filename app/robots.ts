import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.richardhtalbot.co.uk/sitemap.xml",
    host: "https://www.richardhtalbot.co.uk",
  };
}
