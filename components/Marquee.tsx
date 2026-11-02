type Props = {
  items?: string[];
  reverse?: boolean;
  duration?: string;
};

/** Pure CSS marquee. The list is rendered twice so the loop is seamless. */
export default function Marquee({ items, reverse = false, duration = "48s" }: Props) {
  const list = items ?? [];
  const row = [...list, ...list];
  return (
    <div className="marquee py-1" aria-hidden={reverse ? true : undefined}>
      <div
        className="marquee-track"
        data-reverse={reverse}
        style={{ "--marquee-duration": duration } as React.CSSProperties}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap rounded-full border hairline bg-card px-3.5 py-1.5 font-mono text-[0.72rem] tracking-wide text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
