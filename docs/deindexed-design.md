# Deindexed: a technical SEO puzzle game for the Lab

Design note, 31 Oct 2026. Not built yet. Rick's steer: three levels so people get a taste, lean on technical SEO (hidden pages, forbidden pages with a password found elsewhere, log files, XML sitemaps, robots text, JavaScript, hidden divs, white text). No audio files or cipher trivia.

## Pieces menu (P = used by SEO Pirates)

### Crawl-control files
1. robots.txt comments carry a clue, and the Disallow lines themselves leak secret paths (P: comments as scoreboard)
2. XML sitemap orphan: a URL in the sitemap that nothing links to; or a sitemap index pointing at a second, unlinked sitemap
3. Image sitemap captions carrying the clue
4. The other text files: humans.txt, security.txt, ads.txt, .well-known
5. Taunting or misleading sitemap (P)

### HTTP layer
6. Response headers: X-Robots-Tag, Link rel=canonical, a custom X- header
7. Redirect chain 301/302/307 with the clue on a middle hop's Location or in the final query string
8. Status codes that lie: a 200 soft 404, a 410 Gone with a body, a 418
9. Forbidden page: real HTTP Basic Auth (401 + WWW-Authenticate) with the password hidden elsewhere
10. Cloaking: Googlebot user agent gets different content (P hinted with bingbot in robots)
11. Request-header gates: a cookie set on another page, a Referer, or Accept-Language unlocks content
12. ETag or Last-Modified header carrying the clue
13. Custom 404 page as a step (P)

### HTML source
14. HTML comments
15. Hidden divs: display none, visibility hidden (P), off-screen, zero size, aria-hidden
16. White text on white
17. Meta tags: description, keywords, meta refresh redirect
18. Canonical pointing elsewhere
19. hreflang alternates, one of them the way through (P)
20. noscript content that differs from what renders
21. Image alt and title attributes (P), image filename, EXIF, QR (P)
22. rel=alternate RSS feed, web app manifest JSON, favicon text
23. data- attributes, template elements, conditional comments
24. Base64 or decimal strings in attributes (P: decimal, binary)
25. JSON-LD and microdata
26. CSS: a second stylesheet with a different case (P), CSS comments (P), ::before content, print-only or dark-mode-only rules

### JavaScript
27. Content injected after load: view-source shows nothing, the rendered page has it
28. Content removed by script: source has it, the rendered page hides it
29. Console messages
30. A window object or inline variable holding the clue, lightly encoded
31. Content that appears on scroll, after idle time, or only at a mobile viewport
32. localStorage or a cookie set by an earlier level and read by a later one
33. Hash-fragment routing

### Logs and data
34. Access log download: Googlebot hits on a URL nothing links to
35. A Search Console style CSV: impressions but no clicks on an unknown URL
36. A crawl export with a column that hints

### URLs and structure
37. Query parameter that changes the page (?debug=1)
38. Case and trailing slash variants serving different content (P: Style.css)
39. Pagination rel=next beyond the visible pages
40. Hidden directory named in robots with an index page

### Devices
41. Scoreboard in robots.txt (P)
42. Noindex on everything (P)
43. Completion code from combined keys, added to the scoreboard by hand

## Suggested three-level split
Level 1, the taster, about ten minutes, nothing beyond view-source and robots: 14 → 15/16 → 1 → 2.
Level 2, HTTP, about half an hour, needs the Inspector or devtools: 6 → 7 → 18/19 → 27/28 → 10.
Level 3, the deep end, an hour plus: 34 → 9 (password found in 25 or 12) → 11 → 31 → 37 → finish 43.
Each level ends with its own key and scoreboard line. Levels are reachable by URL; the hub tracks progress.

## In-window tools (the Inspector)
Source as served, headers for any URL, redirect tracer, fetch as Googlebot or Bingbot, robots and sitemap viewers, JSON-LD extractor, a cookie/header jar for level 3. Same-origin fetch, no backend.

## Build on Next.js/Vercel
headers() and redirects() in next.config, proxy for user-agent and header gates and Basic Auth, route handlers for status codes and the game sitemap, static files in public for logs and CSV, client components for the JS pieces. Everything under /lab/deindexed/ and noindexed.

## Status
Built 31 Oct 2026 as designed (levels 1 to 3, Inspector, hub, hints). Keys CRAWLED / RENDERED / INDEXED; completion code DE2C7CEB. Finishers go in components/lab/deindexed/scoreboard.ts.
