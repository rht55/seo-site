"use client";

import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "article" | "li";
};

/**
 * Wraps a card and tracks the pointer so the CSS spotlight
 * (see .spot in globals.css) follows the cursor.
 */
export default function Spotlight({ as = "div", className = "", children, ...rest }: Props) {
  const Tag = as as React.ElementType;
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Tag onPointerMove={onMove} className={`spot ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
