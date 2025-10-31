export default async function sitemap() {
  const base = "https://www.richardhtalbot.co.uk";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/work`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
