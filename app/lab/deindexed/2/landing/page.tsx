import Case from "../../../../../components/lab/deindexed/Case";

export default function L2S2() {
  return (
    <Case
      level={2}
      step={2}
      of={5}
      title="You arrived. Where did you pass through?"
      hints={[
        "You were sent somewhere three times, fast. Each hop had a status code and a Location header.",
        "Trace /lab/deindexed/2/hop one hop at a time. The middle hop carries a note in its query string that the final page drops.",
      ]}
    >
      <p>
        A 302, then a 301, then a 307. Three hops in under a second and your browser showed you none of them. Google
        follows up to ten and remembers each.
      </p>
      <p>Something was written on one of the doors you came through. Go back and read the doors.</p>
    </Case>
  );
}
