"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const path = usePathname();
  return (
    <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
      {links.map(({ href, label }) => {
        const active = path === href || path.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
              active ? "text-fg" : "text-muted hover:text-fg"
            }`}
          >
            {label}
            {active && (
              <span className="absolute inset-x-3 -bottom-px h-px bg-accent" aria-hidden />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
