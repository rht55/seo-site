"use client";

import { useEffect, useState } from "react";

/** The real note is written into the page only when the viewport is phone-sized. */
export default function MobileReveal({ real }: { real: string }) {
  const [narrow, setNarrow] = useState<boolean | null>(null);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 480px)");
    const update = () => setNarrow(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  if (narrow === null) return <p className="font-mono text-sm text-muted">Measuring the viewport…</p>;
  if (!narrow) {
    return (
      <p className="font-mono text-sm">
        Desktop version. Nothing to see here. Google has not read the desktop version first since 2018.
      </p>
    );
  }
  return (
    <p className="serp-enter font-mono text-sm" data-source="mobile viewport">
      Mobile version. The last door is at {real}
    </p>
  );
}
