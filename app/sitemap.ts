import type { MetadataRoute } from "next";

const base = "https://www.richardhtalbot.co.uk";
const updated = new Date("2026-10-31");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, lastModified: updated, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/work`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: updated, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: updated, changeFrequency: "yearly", priority: 0.5 },
  ];
}
