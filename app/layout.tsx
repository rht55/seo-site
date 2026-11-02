import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Nav from "../components/Nav";
import HomeLink from "../components/HomeLink";
import { site } from "../content";

const geist = localFont({
  src: "./fonts/geist-latin.woff2",
  weight: "100 900",
  variable: "--font-geist",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  weight: "100 900",
  variable: "--font-geist-mono",
  display: "swap",
});
const instrument = localFont({
  src: [
    { path: "./fonts/instrument-serif-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-italic-latin.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

const SITE_URL = "https://www.richardhtalbot.co.uk";
const GTM_ID = "GTM-PXJZQC7N";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.title,
    template: "%s · Richard Talbot",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: "Richard Talbot",
    locale: "en_GB",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Richard Talbot",
  alternateName: "Rick Talbot",
  url: SITE_URL,
  image: `${SITE_URL}/richard-talbot.jpg`,
  jobTitle: "Founder and Director",
  worksFor: { "@type": "Organization", name: "Totally Digital", url: "https://totally.digital" },
  address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
  sameAs: ["https://www.linkedin.com/in/rick-talbot-47525b53", "https://github.com/rht55"],
  knowsAbout: ["Technical SEO", "Web analytics", "AI search visibility", "Digital PR", "Next.js"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth" className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}>
      <body className="font-sans">
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
        >
          Skip to content
        </a>

        <header className="sticky top-0 z-40 border-b hairline bg-bg/70 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
            <HomeLink className="group flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-fg font-mono text-[0.7rem] font-semibold tracking-tight text-bg transition-transform group-hover:-rotate-6">
                RT
              </span>
              <span className="hidden text-sm text-muted transition-colors group-hover:text-fg sm:inline">
                Richard Talbot
              </span>
            </HomeLink>
            <Nav />
          </div>
        </header>

        <main id="main" className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
          {children}
        </main>

        <footer className="mt-24 border-t hairline">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:grid-cols-3 sm:px-8">
            <div>
              <p className="font-mono text-sm">Richard Talbot</p>
              <p className="mt-2 max-w-xs text-sm text-muted">{site.footerBlurb}</p>
            </div>
            <div className="text-sm">
              <p className="eyebrow">Around the site</p>
              <ul className="mt-3 space-y-2">
                <li><Link className="link-underline" href="/work">Work</Link></li>
                <li><Link className="link-underline" href="/lab">Lab</Link></li>
                <li><Link className="link-underline" href="/about">About</Link></li>
                <li><Link className="link-underline" href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="text-sm">
              <p className="eyebrow">Elsewhere</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a className="link-underline" href={site.linkedinUrl} rel="noreferrer" target="_blank">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="link-underline" href="https://totally.digital" rel="noreferrer" target="_blank">
                    Totally Digital
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 border-t hairline px-5 py-5 font-mono text-[0.7rem] text-muted sm:px-8">
            <span>© {new Date().getFullYear()} Richard Talbot</span>
            <span>Next.js 16 · Tailwind 4 · Geist and Instrument Serif · Vercel</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
