import type { Metadata } from "next";
import Case from "../../../../components/lab/deindexed/Case";

export const metadata: Metadata = {
  title: "Level 2",
  // the HTML says index. The response headers for this route say otherwise.
  robots: { index: true, follow: true },
};

export default function L2S1() {
  return (
    <Case
      level={2}
      step={1}
      of={5}
      title="The page that says index"
      hints={[
        "The HTML says one thing. The server said another before the HTML even arrived.",
        "Response headers for this URL: an X-Robots-Tag, and one header that is not standard at all. Network tab, curl -I, or the Inspector.",
      ]}
    >
      <p>
        Level 2 is about everything that happens before the HTML. The meta robots tag on this page says{" "}
        <code className="font-mono text-sm">index, follow</code>. Google has it as noindex. Both are telling the
        truth.
      </p>
      <p>The previous SEO used to say headers always win. On this page they also left a forwarding address.</p>
    </Case>
  );
}
