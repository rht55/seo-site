import Case from "../../../../components/lab/deindexed/Case";

export default function L1S1() {
  return (
    <Case
      level={1}
      step={1}
      of={5}
      title="The brief"
      hints={[
        "The browser shows you the page. The source shows you everything the page was told.",
        "View source (Cmd+Option+U, or Ctrl+U) and read the comments near the top.",
      ]}
    >
      {/* Previous SEO, last day: I left the audit where the client would never find it. /lab/deindexed/1/audit */}
      <p>
        Blackwater Coffee Roasters, est. 2009. Four hundred pages, nine years of rankings, a monthly report that said
        green. Then, between one Tuesday and the next, nothing. Not a drop. Gone.
      </p>
      <p>
        The previous SEO handed in a laptop and a shrug. The client has handed you a login and a question. Where did the
        site go?
      </p>
      <p>Start where every audit starts. Look at what the page actually says.</p>
    </Case>
  );
}
