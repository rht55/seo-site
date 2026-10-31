import Case from "../../../../../components/lab/deindexed/Case";

export default function L1S2() {
  return (
    <Case
      level={1}
      step={2}
      of={5}
      title="The audit"
      hints={[
        "Something on this page is written so that you cannot see it. Two things, in fact.",
        "Select all (Cmd+A), or search the source for display:none and for white text.",
      ]}
    >
      <p>You found the audit. It is one page long and most of it has been removed.</p>
      <div className="paper p-6 text-base">
        <p className="font-semibold">Blackwater Coffee Roasters · Technical audit · Summary</p>
        <p className="mt-3">Crawlability: fine. Indexability: fine. Everything: fine. Nothing to see here.</p>
        <p className="ghost-text mt-3">
          Everything is not fine. I hid the real findings where the client stopped reading: /lab/deindexed/1/crawl-budget
        </p>
        <div style={{ display: "none" }}>
          Also hidden, for the thorough: the findings page is /lab/deindexed/1/crawl-budget
        </div>
        <p className="mt-3 text-sm" style={{ color: "#777" }}>
          Prepared by the previous SEO. Do not forward.
        </p>
      </div>
    </Case>
  );
}
