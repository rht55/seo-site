import React from "react";

/**
 * Renders a line of copy from the content files.
 * {word} becomes the italic serif accent; [text](url) becomes a link.
 */
export function Accent({ text, color = true }: { text?: string; color?: boolean }) {
  const parts = (text ?? "").split(/(\{[^}]+\})/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("{") && p.endsWith("}") ? (
          <span key={i} className={`serif-italic ${color ? "text-accent" : ""}`}>
            {p.slice(1, -1)}
          </span>
        ) : (
          <React.Fragment key={i}>{p}</React.Fragment>
        )
      )}
    </>
  );
}

export function Prose({ text }: { text?: string }) {
  const parts = (text ?? "").split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((p, i) => {
        const m = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (m) {
          const external = /^https?:/.test(m[2]);
          return (
            <a
              key={i}
              href={m[2]}
              className="link-underline"
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {m[1]}
            </a>
          );
        }
        return <React.Fragment key={i}>{p}</React.Fragment>;
      })}
    </>
  );
}
