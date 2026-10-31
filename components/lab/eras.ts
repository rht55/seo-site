export type Era = {
  year: number;
  title: string;
  body: string;
  forSeo: string;
  hue: number;
};

export const eras: Era[] = [
  {
    year: 1990,
    title: "Archie indexes the internet’s filing cabinets",
    body: "Alan Emtage’s Archie at McGill crawls FTP servers and lets you search file names. No page content, no ranking, just a list.",
    forSeo: "Findability began as a filename problem.",
    hue: 200,
  },
  {
    year: 1994,
    title: "Full-text search and the human directory",
    body: "WebCrawler indexes the full text of pages for the first time. Yahoo! starts as Jerry Yang and David Filo’s hand-built directory. Lycos arrives from Carnegie Mellon.",
    forSeo: "Two models are born: machines reading pages, and humans curating lists. Both are still with us.",
    hue: 215,
  },
  {
    year: 1996,
    title: "BackRub counts links as votes",
    body: "At Stanford, Larry Page and Sergey Brin build BackRub. PageRank treats a link as a vote and weighs votes by who casts them.",
    forSeo: "Authority becomes measurable. Link building becomes an industry about ten minutes later.",
    hue: 230,
  },
  {
    year: 1998,
    title: "Google. Ten blue links.",
    body: "Google incorporates in September 1998. A white page, a box, and results ranked by relevance and PageRank rather than by who paid.",
    forSeo: "Relevance plus authority. The two levers every SEO still pulls.",
    hue: 245,
  },
  {
    year: 2000,
    title: "AdWords, and a toolbar that shows PageRank",
    body: "Google launches AdWords in October. In December the Google Toolbar puts a little green PageRank bar in every browser.",
    forSeo: "Paid and organic split into two disciplines. Everyone starts chasing a green bar.",
    hue: 260,
  },
  {
    year: 2003,
    title: "The Florida update",
    body: "In November, Google’s Florida update knocks thousands of keyword-stuffed commercial pages out of the results weeks before Christmas.",
    forSeo: "The first mass lesson that what works today can be penalised tomorrow.",
    hue: 275,
  },
  {
    year: 2005,
    title: "nofollow, Maps and Analytics",
    body: "rel=\"nofollow\" arrives in January to fight comment spam. Google Maps launches in February, Google Analytics in November.",
    forSeo: "Local search gets a map, links get a switch, and measurement becomes free.",
    hue: 290,
  },
  {
    year: 2007,
    title: "Universal Search",
    body: "News, images, video, maps and books start appearing inside the main results page instead of behind separate tabs.",
    forSeo: "The ten blue links stop being ten and stop being only links.",
    hue: 305,
  },
  {
    year: 2010,
    title: "Caffeine and Instant",
    body: "The Caffeine index makes fresh content findable in minutes. Google Instant shows results as you type.",
    forSeo: "Freshness matters, and the query itself becomes something Google shapes.",
    hue: 320,
  },
  {
    year: 2011,
    title: "Panda, Schema.org and (not provided)",
    body: "Panda targets thin, low-quality content in February. Google, Bing and Yahoo! agree Schema.org in June. In October, keyword data for signed-in users becomes (not provided).",
    forSeo: "Quality becomes a ranking factor, structured data gets a shared vocabulary, and the keyword report starts to die.",
    hue: 335,
  },
  {
    year: 2012,
    title: "Penguin and the Knowledge Graph",
    body: "Penguin goes after manipulative links in April. In May the Knowledge Graph puts facts about entities beside the results: things, not strings.",
    forSeo: "Links can hurt you now, and Google starts answering questions itself.",
    hue: 350,
  },
  {
    year: 2013,
    title: "Hummingbird",
    body: "A rewrite of the core algorithm built for meaning and conversational queries rather than keyword matching.",
    forSeo: "Topics and intent start to beat exact-match keywords.",
    hue: 5,
  },
  {
    year: 2015,
    title: "Mobilegeddon and RankBrain",
    body: "In April, mobile-friendliness becomes a ranking signal for mobile searches. In October, Google confirms RankBrain, machine learning inside ranking.",
    forSeo: "The phone becomes the primary device and the algorithm stops being fully explainable.",
    hue: 20,
  },
  {
    year: 2018,
    title: "Mobile-first indexing and the Medic update",
    body: "Google begins indexing the mobile version of sites by default. August’s core update hits health, finance and other your-money-or-your-life sites hardest.",
    forSeo: "Expertise, authority and trust move from the guidelines into the results.",
    hue: 35,
  },
  {
    year: 2019,
    title: "BERT",
    body: "A language model that reads queries in context reaches ranking and featured snippets, affecting around one in ten English searches at launch.",
    forSeo: "Write for people. There is no longer a way to write for the machine instead.",
    hue: 50,
  },
  {
    year: 2021,
    title: "Page experience and Core Web Vitals",
    body: "Loading, interactivity and visual stability become measured ranking inputs through the page experience update.",
    forSeo: "Performance work gets a scoreboard and a business case.",
    hue: 65,
  },
  {
    year: 2022,
    title: "Helpful content, then ChatGPT",
    body: "August’s helpful content update rewards content written for people. On 30 November, OpenAI releases ChatGPT and a hundred million people learn to ask a machine for an answer.",
    forSeo: "The question stops being where you rank and starts being whether you are in the answer.",
    hue: 80,
  },
  {
    year: 2023,
    title: "Chat comes to search",
    body: "Bing adds a chat answer in February. Google previews its Search Generative Experience in May. Perplexity grows from a research project into a search product.",
    forSeo: "Citations become the new position one, and nobody has a rank tracker for them yet.",
    hue: 95,
  },
  {
    year: 2024,
    title: "AI Overviews",
    body: "Google rolls AI Overviews out in the US in May and in the UK in August: a generated answer above the results, with the sources it leaned on.",
    forSeo: "Being cited and being clicked come apart. Measuring one does not tell you the other.",
    hue: 105,
  },
  {
    year: 2025,
    title: "AI Mode",
    body: "Google launches AI Mode in the US, a full conversational tab inside Search. ChatGPT search is open to everyone.",
    forSeo: "Answers, not lists. The source of the answer is the new battleground.",
    hue: 112,
  },
  {
    year: 2026,
    title: "Now: tracking the answer, not the ranking",
    body: "The work that matters is knowing which questions a brand appears in, which sources the answers trust, and what moves them. That is what I spend my days building.",
    forSeo: "Same two levers as 1998: relevance and authority. Different scoreboard.",
    hue: 118,
  },
];
