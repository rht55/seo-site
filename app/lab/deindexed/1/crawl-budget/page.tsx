import Case from "../../../../../components/lab/deindexed/Case";

export default function L1S3() {
  return (
    <Case
      level={1}
      step={3}
      of={5}
      title="The findings"
      hints={[
        "Before a crawler visits a single page of a site, it reads one file at the root.",
        "/robots.txt. The Disallow lines tell crawlers exactly where not to go. So go there.",
      ]}
    >
      <p>
        The real findings, finally. One line: <em>“The crawler was told where not to go. I made sure of it.”</em>
      </p>
      <p>
        A crawler asks permission before it asks for pages. Whoever wrote the permissions for this site wrote them to
        keep one place out of Google. That place is where you need to be.
      </p>
    </Case>
  );
}
