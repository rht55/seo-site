"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * The logo link. Navigating to "/" from another page scrolls to the top on its
 * own; clicking it while already on the home page is a no-op for the router,
 * so this scrolls the reader back to the top instead.
 */
export default function HomeLink({ className, children }: { className?: string; children: ReactNode }) {
  const path = usePathname();
  return (
    <Link
      href="/"
      className={className}
      aria-label="Richard Talbot, home"
      onClick={(e) => {
        if (path === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0 });
        }
      }}
    >
      {children}
    </Link>
  );
}
