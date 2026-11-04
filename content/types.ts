export type Project = {
  name: string;
  kicker: string;
  body: string;
  stack: string[];
  href?: string;
  cta?: string;
  status?: string;
  wide?: boolean;
};

export type Figure = { to: number; prefix?: string; suffix?: string; decimals?: number; label: string };
export type Receipt = { client: string; what: string; href: string; figures: Figure[] };
export type Skill = { title: string; blurb: string; items: string[] };
export type SmallThing = { name: string; what: string };
export type Piece = { href: string; n: string; title: string; note: string; tags: string[] };
export type Fact = { label: string; value: string };
export type Tile = { big: string; small: string };
export type Featured = { href: string; title: string; note: string };
export type IndexItem = { href: string; name: string; note: string };

/*
 * Whole-file shapes. The content files are edited in Pages CMS, which drops a
 * field when it is cleared, so anything purely decorative is optional and the
 * pages treat every list as possibly missing.
 */
export type SectionCopy = { eyebrow: string; headline: string; intro?: string; caption?: string };

export type SiteContent = {
  name: string;
  title: string;
  description: string;
  footerBlurb: string;
  email: string;
  linkedinUrl: string;
  linkedinLabel: string;
};

export type HomeContent = {
  eyebrow: string;
  headline: string;
  intro: string[];
  primaryCta: string;
  secondaryCta: string;
  photoAlt: string;
  sticker?: string;
  tiles: Tile[];
  recentHeading: string;
  featured: Featured[];
};

export type AboutContent = {
  title: string;
  description: string;
  headline: string;
  paragraphs: string[];
  primaryCta: string;
  secondaryCta: string;
  facts: Fact[];
};

export type ContactContent = {
  title: string;
  description: string;
  headline: string;
  intro: string;
  emailNote: string;
  linkedinNote: string;
};

export type LabContent = {
  title: string;
  description: string;
  headline: string;
  intro: string;
  pieces: Piece[];
};

export type WorkContent = {
  title: string;
  description: string;
  hero: SectionCopy;
  index: IndexItem[];
  built: SectionCopy;
  projects: Project[];
  smallThingsHeading: string;
  smallThings: SmallThing[];
  receiptsSection: SectionCopy;
  receipts: Receipt[];
  seoSection: SectionCopy;
  skills: Skill[];
  toolboxSection: SectionCopy;
  toolsRowA: string[];
  toolsRowB: string[];
  clientsHeading: string;
  clientsNote: string;
  clients: string[];
  cta: { headline: string; body: string; primary: string; secondary: string };
};
