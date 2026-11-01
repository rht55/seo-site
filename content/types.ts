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
