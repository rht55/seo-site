import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.richardhtalbot.co.uk"),
  title: {
    default: "Rick Talbot — Technical SEO",
    template: "%s — Rick Talbot",
  },
  description:
    "Technical SEO, migrations, and growth strategy. Pragmatic, test-driven, and suspicious of shiny nonsense.",
  openGraph: {
    type: "website",
    siteName: "Rick Talbot",
    url: "https://www.richardhtalbot.co.uk",
    title: "Rick Talbot — Technical SEO",
    description:
      "Technical SEO, migrations, and growth strategy. Pragmatic, test-driven, and suspicious of shiny nonsense.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rick Talbot — Technical SEO",
    description:
      "Technical SEO, migrations, and growth strategy. Pragmatic, test-driven, and suspicious of shiny nonsense.",
  },
  alternates: { canonical: "https://www.richardhtalbot.co.uk" },
};

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
      <nav className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">
        <a href="/" className="font-semibold tracking-tight">Rick Talbot</a>
        <div className="flex gap-5 text-sm">
          <a className="hover:underline" href="/work">Work</a>
          <a className="hover:underline" href="/about">About</a>
          <a className="hover:underline" href="/contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-neutral-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Rick Talbot</p>
        <div className="flex gap-4">
          <a className="hover:underline" href="https://www.linkedin.com/in/rick-talbot-47525b53" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:underline" href="mailto:hello@richardhtalbot.co.uk">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">
        <SiteHeader />
        <main className="mx-auto max-w-5xl px-4">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
