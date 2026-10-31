import type { Metadata } from "next";
import Case from "../../../../components/lab/deindexed/Case";

export const metadata: Metadata = { title: "Level 3" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "The previous SEO",
  jobTitle: "Left in a hurry",
  description: "Left one thing behind, in the one place only machines read.",
  knowsAbout: ["crawl budget", "log files", "vault login: user ghost, password 410gone"],
};

export default function L3S1() {
  return (
    <Case
      level={3}
      step={1}
      of={5}
      title="A week of logs"
      hints={[
        "A week of server logs. One visitor in them is not human, and it keeps asking for a page nothing links to.",
        "Download the log, filter for Googlebot, and look for the URL it requests five times and never gets. Status 401.",
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p>
        The deep end. The client found a week of raw server logs on the old hosting account and has no idea what they
        mean. You do.
      </p>
      <p>
        <a href="/lab/deindexed/access.log" className="link-underline text-fg" download>
          Download access.log
        </a>{" "}
        (425 lines, Apache combined format, 19 to 25 October 2026).
      </p>
      <p>Someone has been knocking on a door that is not on the map.</p>
    </Case>
  );
}
