import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Richard Talbot — Digital Marketing Consultancy & Technical SEO",
  description: "Building organic growth.",
};

const GTM_ID = "GTM-PXJZQC7N";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        {/* Google Tag Manager Script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        {/* GTM NoScript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <header className="border-b border-neutral-800">
          <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
            {/* Home icon */}
            <Link href="/" className="text-xl hover:opacity-80" aria-label="Home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </Link>

            <div className="flex items-center space-x-6 text-sm">
              <Link href="/work" className="hover:text-neutral-400">
                Work
              </Link>
              <Link href="/about" className="hover:text-neutral-400">
                About
              </Link>
              <Link href="/contact" className="hover:text-neutral-400">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto px-6">{children}</main>
      </body>
    </html>
  );
}
