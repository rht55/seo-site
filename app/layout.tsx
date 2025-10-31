import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.richardhtalbot.co.uk"),
  title: {
    default: "Richard Talbot — Digital Marketing Consultancy & Technical SEO",
    template: "%s — Richard Talbot",
  },
  description:
    "Technical SEO, analytics, and digital strategy consultancy for growth-focused brands.",
  openGraph: {
    type: "website",
    siteName: "Richard Talbot",
    title: "Richard Talbot — Technical SEO & Digital Strategy",
    description:
      "Technical SEO, analytics, and digital strategy consultancy for growth-focused brands.",
    url: "https://www.richardhtalbot.co.uk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard Talbot — Technical SEO & Digital Strategy",
    description:
      "Technical SEO, analytics, and digital strategy consultancy for growth-focused brands.",
  },
};

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/70 border-b border-neutral-800">
      <nav className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3 text-sm text-neutral-300">
        {/* Home icon link */}
        <a href="/" className="hover:text-white transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M12 3l8 8-1.4 1.4L18 11.8V20H6v-8.2l-.6.6L4 11l8-8z" />
          </svg>
        </a>

        <div className="flex gap-5">
          <a className="hover:text-white transition" href="/work">
            Work
          </a>
          <a className="hover:text-white transition" href="/contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-neutral-800 mt-16 text-neutral-400">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm flex items-center justify-between">
        <p>© {new Date().getFullYear()} Richard Talbot</p>
        <div className="flex gap-4">
          <a
            className="hover:text-white"
            href="https://www.linkedin.com/in/rick-talbot-47525b53"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-white"
            href="mailto:hello@richardhtalbot.co.uk"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <SiteHeader />
        <main className="mx-auto max-w-5xl px-4">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
