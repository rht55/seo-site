import Case from "../../../../../components/lab/deindexed/Case";

export default function L2S5Human() {
  return (
    <Case
      level={2}
      step={5}
      of={5}
      title="Nothing here for humans"
      hints={[
        "Humans and crawlers are not shown the same thing on this page.",
        "Fetch this page as Googlebot: the Inspector’s ‘as Googlebot’ option, or set your user agent to Googlebot in devtools.",
      ]}
    >
      <p>
        The previous SEO’s last trick, and the oldest one in the book. This page checks who is asking before it decides
        what to say. You are a person, so it says nothing.
      </p>
      <p>Ask as someone else.</p>
    </Case>
  );
}
