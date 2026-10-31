"use client";

import { useEffect, useState } from "react";

/**
 * The server HTML carries a decoy. After the page renders, the script removes it
 * and writes the real note into the page. View-source and the rendered DOM disagree.
 */
export default function RenderSwap({ decoy, real }: { decoy: string; real: string }) {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setRendered(true), 900);
    return () => window.clearTimeout(t);
  }, []);
  if (!rendered) {
    return (
      <p id="raw-note" className="font-mono text-sm">
        Note from the previous SEO: the next page is {decoy}
      </p>
    );
  }
  return (
    <p id="rendered-note" className="serp-enter font-mono text-sm" data-source="rendered by script">
      Note from the previous SEO: the next page is {real}
    </p>
  );
}
