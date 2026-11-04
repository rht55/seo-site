import siteJson from "./site.json";
import homeJson from "./home.json";
import aboutJson from "./about.json";
import contactJson from "./contact.json";
import labJson from "./lab.json";
import workJson from "./work.json";
import type {
  SiteContent,
  HomeContent,
  AboutContent,
  ContactContent,
  LabContent,
  WorkContent,
} from "./types";

/*
 * The JSON files are edited in Pages CMS. Typing them here, rather than
 * letting TypeScript infer a shape from whatever the last save wrote, means a
 * cleared field changes what renders and never whether the site builds.
 */
export const site = siteJson as unknown as SiteContent;
export const home = homeJson as unknown as HomeContent;
export const about = aboutJson as unknown as AboutContent;
export const contact = contactJson as unknown as ContactContent;
export const lab = labJson as unknown as LabContent;

const w = workJson as unknown as WorkContent;
const noCopy = { eyebrow: "", headline: "" };
export const work: WorkContent = {
  ...w,
  hero: w.hero ?? noCopy,
  built: w.built ?? noCopy,
  receiptsSection: w.receiptsSection ?? noCopy,
  seoSection: w.seoSection ?? noCopy,
  toolboxSection: w.toolboxSection ?? noCopy,
  cta: w.cta ?? { headline: "", body: "", primary: "", secondary: "" },
};
